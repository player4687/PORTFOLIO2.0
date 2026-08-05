// ============================================================================
// ABOUT PAGE: NEURAL MATRIX & CONSTELLATION ENGINE
// ============================================================================
(() => {
    const canvas = document.getElementById('about-bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];

    const mouse = {
        x: -1000,
        y: -1000,
        radius: 160
    };

    function resize() {
        const parent = canvas.parentElement;
        width = canvas.width = parent.clientWidth;
        height = canvas.height = parent.clientHeight;
    }

    window.addEventListener('resize', resize);
    
    // Listen to mouse position relative to the About section
    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1.5;
            this.baseAlpha = Math.random() * 0.4 + 0.2;
            this.alpha = this.baseAlpha;
            this.color = Math.random() > 0.4 ? '#00ff88' : '#00f2fe';
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Screen Bounce
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse Proximity Hover
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius) {
                this.alpha = Math.min(1, this.baseAlpha + (1 - dist / mouse.radius));
            } else {
                this.alpha += (this.baseAlpha - this.alpha) * 0.05;
            }
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function init() {
        resize();
        nodes = [];
        // Density based on view dimensions
        const nodeCount = Math.floor((width * height) / 14000);
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new Node());
        }
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        // Draw dynamic connection links
        const maxDist = 130;
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1 = nodes[i];
                const n2 = nodes[j];
                const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.18;
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = n1.color;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }

        // Draw Nodes
        nodes.forEach(n => {
            n.update();
            n.draw();
        });

        requestAnimationFrame(render);
    }

    init();
    render();
})();