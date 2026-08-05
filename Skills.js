// ============================================================================
// RATNADEEP.DEV - SKILLS DATA ENGINE & 3D INTERACTIVE DASHBOARD
// ============================================================================

// 1. MASTER SKILLS DATA ARRAY (Add new skills easily right here!)
const skillsData = [
    // --- FRONTEND ---
    {
        id: "html5",
        category: "frontend",
        name: "HTML5",
        icon: "🌐",
        description: "Semantic, accessible, and responsive modern web structures.",
        experience: "3+ Years",
        projects: ["Ratnadeep.dev", "Fitness Club Platform"],
        related: ["CSS3", "JavaScript", "Accessibility"]
    },
    {
        id: "css3",
        category: "frontend",
        name: "CSS3",
        icon: "🎨",
        description: "Custom keyframe animations, Flexbox, CSS Grid, and responsive layout engine architecture.",
        experience: "3+ Years",
        projects: ["Ratnadeep.dev", "Glassmorphism UI Framework"],
        related: ["HTML5", "Sass", "Tailwind CSS"]
    },
    {
        id: "javascript",
        category: "frontend",
        name: "JavaScript",
        icon: "⚡",
        description: "ES6+ asynchronous programming, interactive dynamic rendering, and Canvas 2D graphics.",
        experience: "3+ Years",
        projects: ["Interactive Canvas Geometry", "Skills Engine"],
        related: ["TypeScript", "Node.js", "DOM API"]
    },
    {
        id: "responsive-design",
        category: "frontend",
        name: "Responsive Design",
        icon: "📱",
        description: "Mobile-first adaptive layouts for seamless rendering across all screen sizes.",
        experience: "3+ Years",
        projects: ["Portfolio Website", "All Web Apps"],
        related: ["CSS Media Queries", "Flexbox", "Fluid Typography"]
    },
    {
        id: "animations",
        category: "frontend",
        name: "Animations",
        icon: "✨",
        description: "60 FPS hardware-accelerated transitions, interactive hover dynamics, and micro-interactions.",
        experience: "2+ Years",
        projects: ["Background Particle Engine", "Portfolio UI"],
        related: ["GSAP", "CSS Keyframes", "HTML5 Canvas"]
    },

    // --- BACKEND ---
    {
        id: "python",
        category: "backend",
        name: "Python",
        icon: "🐍",
        description: "Object-oriented scripting, automated backend services, and algorithmic data parsing.",
        experience: "2+ Years",
        projects: ["Sentinel Discord Bot", "Automation Tools"],
        related: ["Discord.py", "REST APIs", "AsyncIO"]
    },
    {
        id: "rest-apis",
        category: "backend",
        name: "REST APIs",
        icon: "🔌",
        description: "Designing and integrating scalable HTTP endpoint architectures for data communication.",
        experience: "2+ Years",
        projects: ["IoT Dashboard Data Stream", "Bot Alerts"],
        related: ["JSON", "HTTP Protocols", "Fetch API"]
    },
    {
        id: "firebase",
        category: "backend",
        name: "Firebase (Database)",
        icon: "🔥",
        description: "Realtime database sync, user authentication, and cloud messaging services.",
        experience: "1+ Year",
        projects: ["Smart Alarm System"],
        related: ["NoSQL", "Cloud Functions"]
    },
    {
        id: "nodejs",
        category: "backend",
        name: "Node.js (Learning)",
        icon: "🟢",
        description: "Server-side JavaScript runtime environment for building high-concurrency network apps.",
        experience: "Learning Phase",
        projects: ["Upcoming Full-Stack API"],
        related: ["Express.js", "JavaScript", "npm"]
    },

    // --- AUTOMATION & BOTS ---
    {
        id: "discordpy",
        category: "bots",
        name: "Discord.py",
        icon: "🤖",
        description: "Building event-driven automated Discord bots with command handling and moderation engines.",
        experience: "2+ Years",
        projects: ["Sentinel Discord Bot"],
        related: ["Python", "AsyncIO", "WebSockets"]
    },
    {
        id: "python-automation",
        category: "bots",
        name: "Python Automation",
        icon: "⚙️",
        description: "Writing scripts to eliminate repetitive tasks, process batch files, and track systems.",
        experience: "2+ Years",
        projects: ["Scheduled Notification Bot"],
        related: ["Python", "OS Module", "Task Scheduler"]
    },
    {
        id: "web-scraping",
        category: "bots",
        name: "Web Scraping",
        icon: "🕷️",
        description: "Extracting structured data from web pages using custom scrapers and automation tools.",
        experience: "1+ Year",
        projects: ["Price Tracker Bot"],
        related: ["BeautifulSoup", "Requests", "Python"]
    },
    {
        id: "api-integration",
        category: "bots",
        name: "API Integration",
        icon: "🔄",
        description: "Bridging third-party web services, webhook endpoints, and custom applications.",
        experience: "2+ Years",
        projects: ["Discord Webhook Alerts"],
        related: ["JSON", "REST APIs", "Python"]
    },

    // --- HARDWARE & EMBEDDED SYSTEMS ---
    {
        id: "esp32",
        category: "hardware",
        name: "ESP32",
        icon: "📟",
        description: "Dual-core Wi-Fi/Bluetooth microcontroller programming for connected IoT applications.",
        experience: "2+ Years",
        projects: ["IoT Plant Monitor", "Smart Home Security"],
        related: ["C++", "MQTT", "Arduino IDE"]
    },
    {
        id: "arduino",
        category: "hardware",
        name: "Arduino",
        icon: "♾️",
        description: "Prototyping physical computing projects with microcontrollers and custom breadboard circuits.",
        experience: "2+ Years",
        projects: ["Sensor Telemetry Node"],
        related: ["Embedded C++", "Microcontrollers"]
    },
    {
        id: "sensors",
        category: "hardware",
        name: "Sensors",
        icon: "📡",
        description: "Interfacing analog and digital environmental sensors (DHT22, Moisture, PIR, Ultrasonics).",
        experience: "2+ Years",
        projects: ["Environmental Monitor"],
        related: ["I2C", "SPI", "ADC Converters"]
    },
    {
        id: "iot",
        category: "hardware",
        name: "IoT Platforms",
        icon: "☁️",
        description: "Connecting edge microcontrollers to real-time dashboards via lightweight telemetry protocols.",
        experience: "2+ Years",
        projects: ["MQTT Environmental Gateway"],
        related: ["MQTT", "Node-RED", "Grafana"]
    },
    {
        id: "electronics",
        category: "hardware",
        name: "Electronics",
        icon: "⚡",
        description: "Circuit schematic reading, component wiring, power management, and hardware troubleshooting.",
        experience: "2+ Years",
        projects: ["Custom Sensor Modules"],
        related: ["Breadboarding", "Multimeter Diagnostics"]
    },
    {
        id: "embedded-systems",
        category: "hardware",
        name: "Embedded Systems",
        icon: "🔬",
        description: "Low-level firmware optimization, interrupt handling, and hardware timing loops.",
        experience: "2+ Years",
        projects: ["Robotic Arm Controller"],
        related: ["C++", "ESP32", "Arduino"]
    },

    // --- TOOLS ---
    {
        id: "git",
        category: "tools",
        name: "Git",
        icon: "🌿",
        description: "Distributed version control system for tracking source code changes and managing branches.",
        experience: "3+ Years",
        projects: ["All Projects"],
        related: ["GitHub", "Version Control"]
    },
    {
        id: "github",
        category: "tools",
        name: "GitHub",
        icon: "🐙",
        description: "Hosting code repositories, tracking issues, and managing project deployment workflows.",
        experience: "3+ Years",
        projects: ["Ratnadeep Portfolio Repositories"],
        related: ["Git", "GitHub Pages"]
    },
    {
        id: "vscode",
        category: "tools",
        name: "VS Code",
        icon: "💻",
        description: "Primary development workspace customized with linters, syntax debuggers, and extensions.",
        experience: "3+ Years",
        projects: ["Daily Development"],
        related: ["Extensions", "Terminal"]
    },
    {
        id: "figma",
        category: "tools",
        name: "Figma",
        icon: "📐",
        description: "Designing wireframes, high-fidelity UI mockups, and layout prototypes before coding.",
        experience: "2+ Years",
        projects: ["Portfolio Design Architecture"],
        related: ["UI/UX Design", "Wireframing"]
    },
    {
        id: "netlify",
        category: "tools",
        name: "Netlify",
        icon: "🌐",
        description: "Continuous integration and deployment platform for hosting modern static websites.",
        experience: "2+ Years",
        projects: ["Web App Deployments"],
        related: ["DNS Setup", "CI/CD"]
    },
    {
        id: "vercel",
        category: "tools",
        name: "Vercel",
        icon: "▲",
        description: "Optimized cloud platform for static web assets and serverless function deployments.",
        experience: "2+ Years",
        projects: ["Ratnadeep.dev Live Host"],
        related: ["Frontend Deployment", "Domains"]
    }
];

// 2. DASHBOARD RENDERING & INTERACTIVE ENGINE
document.addEventListener("DOMContentLoaded", () => {
    const skillsGrid = document.getElementById("skills-grid");
    const searchInput = document.getElementById("skill-search");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const noResults = document.getElementById("no-results");

    // Modal elements
    const modal = document.getElementById("skill-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalIcon = document.getElementById("modal-icon");
    const modalTitle = document.getElementById("modal-title");
    const modalCategory = document.getElementById("modal-category");
    const modalDescription = document.getElementById("modal-description");
    const modalExperience = document.getElementById("modal-experience");
    const modalProjects = document.getElementById("modal-projects");
    const modalRelated = document.getElementById("modal-related");

    let currentFilter = "all";
    let currentSearch = "";

    // Build Cards HTML from JavaScript array
    function renderSkills() {
        skillsGrid.innerHTML = skillsData.map(skill => {
            return `
                <div class="skill-card" data-id="${skill.id}" data-category="${skill.category}">
                    <span class="card-icon">${skill.icon}</span>
                    <h3 class="skill-name">${skill.name}</h3>
                    <p class="skill-description">${skill.description}</p>
                </div>
            `;
        }).join('');

        initTiltEffect();
        initCardClickEvents();
    }

    // Interactive 3D Card Tilt Effect on Mouse Movements
    function initTiltEffect() {
        const cards = document.querySelectorAll(".skill-card");

        cards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -12; // Max 12 deg tilt
                const rotateY = ((x - centerX) / centerX) * 12;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            });
        });
    }

    // Modal Details View Opener
    function initCardClickEvents() {
        const cards = document.querySelectorAll(".skill-card");

        cards.forEach(card => {
            card.addEventListener("click", () => {
                const skillId = card.getAttribute("data-id");
                const skill = skillsData.find(s => s.id === skillId);

                if (skill) {
                    modalIcon.textContent = skill.icon;
                    modalTitle.textContent = skill.name;
                    modalCategory.textContent = skill.category;
                    modalDescription.textContent = skill.description;
                    modalExperience.textContent = skill.experience;

                    modalProjects.innerHTML = skill.projects.map(p => `<span class="modal-tag">${p}</span>`).join('');
                    modalRelated.innerHTML = skill.related.map(r => `<span class="modal-tag">${r}</span>`).join('');

                    modal.classList.remove("hide");
                }
            });
        });
    }

    // Modal Close logic
    modalCloseBtn.addEventListener("click", () => modal.classList.add("hide"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hide");
    });

    // Real-Time Filter & Search Evaluator
    function filterSkills() {
        const cards = document.querySelectorAll(".skill-card");
        let visibleCount = 0;

        cards.forEach(card => {
            const skillId = card.getAttribute("data-id");
            const skill = skillsData.find(s => s.id === skillId);

            const matchesCategory = currentFilter === "all" || skill.category === currentFilter;
            const matchesSearch = skill.name.toLowerCase().includes(currentSearch) || 
                                  skill.description.toLowerCase().includes(currentSearch);

            if (matchesCategory && matchesSearch) {
                card.classList.remove("hide");
                visibleCount++;
            } else {
                card.classList.add("hide");
            }
        });

        if (visibleCount === 0) {
            noResults.classList.remove("hide");
        } else {
            noResults.classList.add("hide");
        }
    }

    // Category Tabs Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            currentFilter = btn.getAttribute("data-filter");
            filterSkills();
        });
    });

    // Real-Time Typing Search Input Listener
    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        filterSkills();
    });

    // Initial Launch Execution
    renderSkills();
});