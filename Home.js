// Active Nav Link Scroll Handling
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ============================================================================
// ABSTRACT 3D FLOATING GEOMETRY & PARTICLE ENGINE (200+ LINES)
// ============================================================================

(() => {
    // 1. CANVAS INITIALIZATION & RESIZE HANDLING
    // ------------------------------------------------------------------------
    let canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'bg-canvas';
        document.body.prepend(canvas);
    }
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
        x: width / 2,
        y: height / 2,
        targetX: width / 2,
        targetY: height / 2,
        radius: 180
    };

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
        mouse.targetX = e.clientX;
        mouse.targetY = e.clientY;
    });

    // 2. HELPER UTILITIES
    // ------------------------------------------------------------------------
    const randomRange = (min, max) => Math.random() * (max - min) + min;
    const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const COLOR_PALETTE = ['#00ff88', '#00f2fe', '#7928ca', '#3b82f6'];

    // 3. BASE GEOMETRIC OBJECT CLASS
    // ------------------------------------------------------------------------
    class GeoShape {
        constructor(type) {
            this.type = type || randomChoice(['cube', 'diamond', 'triangle', 'sphere', 'ring']);
            this.reset(true);
        }

        reset(initial = false) {
            this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? -100 : width + 100);
            this.y = initial ? Math.random() * height : Math.random() * height;
            this.z = randomRange(0.5, 2.5); // Depth factor
            
            this.size = randomRange(20, 50) * this.z;
            this.vx = randomRange(-0.4, 0.4) * this.z;
            this.vy = randomRange(-0.4, 0.4) * this.z;
            
            this.rotX = randomRange(0, Math.PI * 2);
            this.rotY = randomRange(0, Math.PI * 2);
            this.rotZ = randomRange(0, Math.PI * 2);
            
            this.vRotX = randomRange(-0.015, 0.015);
            this.vRotY = randomRange(-0.015, 0.015);
            this.vRotZ = randomRange(-0.015, 0.015);
            
            this.color = randomChoice(COLOR_PALETTE);
            this.baseAlpha = randomRange(0.15, 0.4) * (this.z / 2.5);
            this.alpha = this.baseAlpha;
        }

        update() {
            // Position Drift
            this.x += this.vx;
            this.y += this.vy;

            // Rotation Step
            this.rotX += this.vRotX;
            this.rotY += this.vRotY;
            this.rotZ += this.vRotZ;

            // Mouse Repulsion & Dynamic Lighting
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x += Math.cos(angle) * force * 2;
                this.y += Math.sin(angle) * force * 2;
                this.alpha = Math.min(0.8, this.baseAlpha + force * 0.4);
            } else {
                this.alpha += (this.baseAlpha - this.alpha) * 0.05;
            }

            // Screen Boundary Wrap
            if (this.x < -150 || this.x > width + 150 || this.y < -150 || this.y > height + 150) {
                this.reset(false);
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.lineWidth = 1.2 * this.z;

            // Draw Object Specific Wireframes
            switch (this.type) {
                case 'cube':
                    this.draw3DCube();
                    break;
                case 'diamond':
                    this.drawDiamond();
                    break;
                case 'triangle':
                    this.drawPyramid();
                    break;
                case 'sphere':
                    this.drawWireframeSphere();
                    break;
                case 'ring':
                    this.drawConcentricRings();
                    break;
            }

            ctx.restore();
        }

        // --- OBJECT GEOMETRY DRAWING METHODS ---

        draw3DCube() {
            const s = this.size / 2;
            ctx.rotate(this.rotZ);
            
            // Outer Box
            ctx.strokeRect(-s, -s, this.size, this.size);

            // Inner Projected 3D Perspective Lines
            ctx.beginPath();
            ctx.moveTo(-s, -s);
            ctx.lineTo(-s * 0.4, -s * 0.4);
            ctx.moveTo(s, -s);
            ctx.lineTo(s * 0.4, -s * 0.4);
            ctx.moveTo(s, s);
            ctx.lineTo(s * 0.4, s * 0.4);
            ctx.moveTo(-s, s);
            ctx.lineTo(-s * 0.4, s * 0.4);
            
            ctx.strokeRect(-s * 0.4, -s * 0.4, this.size * 0.4, this.size * 0.4);
            ctx.stroke();
        }

        drawDiamond() {
            const h = this.size;
            const w = this.size * 0.6;
            ctx.rotate(this.rotY);

            ctx.beginPath();
            ctx.moveTo(0, -h);
            ctx.lineTo(w, 0);
            ctx.lineTo(0, h);
            ctx.lineTo(-w, 0);
            ctx.closePath();

            // Internal Facet Lines
            ctx.moveTo(0, -h);
            ctx.lineTo(0, h);
            ctx.moveTo(-w, 0);
            ctx.lineTo(w, 0);

            ctx.stroke();
        }

        drawPyramid() {
            const s = this.size;
            ctx.rotate(this.rotX);

            ctx.beginPath();
            ctx.moveTo(0, -s * 0.8);
            ctx.lineTo(s * 0.7, s * 0.6);
            ctx.lineTo(-s * 0.7, s * 0.6);
            ctx.closePath();

            // Apex to Base Center
            ctx.moveTo(0, -s * 0.8);
            ctx.lineTo(0, s * 0.2);
            ctx.lineTo(-s * 0.7, s * 0.6);
            ctx.moveTo(0, s * 0.2);
            ctx.lineTo(s * 0.7, s * 0.6);

            ctx.stroke();
        }

        drawWireframeSphere() {
            const r = this.size * 0.6;
            ctx.rotate(this.rotZ);

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();

            // Horizontal & Vertical Elliptical Rings
            ctx.beginPath();
            ctx.ellipse(0, 0, r, r * 0.35, this.rotX, 0, Math.PI * 2);
            ctx.ellipse(0, 0, r * 0.35, r, this.rotY, 0, Math.PI * 2);
            ctx.stroke();
        }

        drawConcentricRings() {
            const r = this.size * 0.5;
            ctx.rotate(this.rotX);

            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
            ctx.stroke();

            // Core Dot
            ctx.beginPath();
            ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 4. AMBIENT BACKGROUND DUST PARTICLES
    // ------------------------------------------------------------------------
    class DustParticle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = randomRange(0.8, 2.2);
            this.vx = randomRange(-0.2, 0.2);
            this.vy = randomRange(-0.2, 0.2);
            this.alpha = randomRange(0.1, 0.5);
            this.color = randomChoice(COLOR_PALETTE);
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 5. ENGINE INSTANTIATION
    // ------------------------------------------------------------------------
    const SHAPE_COUNT = 32;
    const DUST_COUNT = 60;

    const shapes = [];
    const dust = [];

    const types = ['cube', 'diamond', 'triangle', 'sphere', 'ring'];
    for (let i = 0; i < SHAPE_COUNT; i++) {
        shapes.push(new GeoShape(types[i % types.length]));
    }

    for (let i = 0; i < DUST_COUNT; i++) {
        dust.push(new DustParticle());
    }

    // 6. CONNECTING LASER LINES BETWEEN NEARBY OBJECTS
    // ------------------------------------------------------------------------
    function drawConnections() {
        const maxDist = 160;
        for (let i = 0; i < shapes.length; i++) {
            for (let j = i + 1; j < shapes.length; j++) {
                const s1 = shapes[i];
                const s2 = shapes[j];
                const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15;
                    ctx.strokeStyle = s1.color;
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = 0.8;

                    ctx.beginPath();
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(s2.x, s2.y);
                    ctx.stroke();
                }
            }
        }
    }

    // 7. MAIN RENDER LOOP
    // ------------------------------------------------------------------------
    function render() {
        // Smooth Mouse Inertia
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;

        // Clear Viewport with dark canvas background
        ctx.fillStyle = '#090a0f';
        ctx.fillRect(0, 0, width, height);

        // Render Dust
        dust.forEach(d => {
            d.update();
            d.draw();
        });

        // Render Laser Constellations
        drawConnections();

        // Render 3D Shapes
        shapes.forEach(s => {
            s.update();
            s.draw();
        });

        // Loop next frame
        requestAnimationFrame(render);
    }

    // Start Engine
    render();
})();