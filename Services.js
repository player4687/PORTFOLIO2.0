// ============================================================================
// RATNADEEP.DEV - SERVICES DATA ENGINE & INTERACTIVE CONTROLLER
// ============================================================================

// 1. MASTER SERVICES DATA ARRAY
const servicesData = [
  {
    id: "website-development",
    icon: "🌐",
    title: "Website Development",
    description: "Modern, responsive websites designed to help businesses establish a strong online presence.",
    features: ["Responsive Design", "Fast Performance", "SEO Friendly", "Modern UI", "Cross Browser Support"]
  },
  {
    id: "website-redesign",
    icon: "🎨",
    title: "Website Redesign",
    description: "Transform outdated websites into beautiful, modern digital experiences.",
    features: ["Fresh UI", "Better UX", "Performance Improvements", "Mobile Optimization"]
  },
  {
    id: "discord-bots",
    icon: "🤖",
    title: "Discord Bots & Automation",
    description: "Custom Discord bots and automation systems tailored to your community or business.",
    features: ["Moderation", "Ticket Systems", "Custom Commands", "Automation", "API Integration"]
  },
  {
    id: "iot-embedded",
    icon: "⚙️",
    title: "IoT & Embedded Systems",
    description: "Building smart devices and automation projects using ESP32, Arduino, and embedded technologies.",
    features: ["ESP32", "Arduino", "Sensors", "Automation", "Embedded Solutions"]
  },
  {
    id: "landing-pages",
    icon: "🚀",
    title: "Landing Pages",
    description: "High-converting landing pages for products, startups, events, and businesses.",
    features: ["Modern Design", "Fast Loading", "Responsive", "Lead Generation"]
  },
  {
    id: "custom-solutions",
    icon: "🛠",
    title: "Custom Solutions",
    description: "Need something unique? I can help design and build custom software or hardware solutions tailored to your requirements.",
    features: ["Consultation", "Planning", "Development", "Deployment"]
  }
];

// 2. RENDERING ENGINE & INTERACTIVE HANDLERS
document.addEventListener("DOMContentLoaded", () => {
    const servicesGrid = document.getElementById("services-grid");

    if (!servicesGrid) return;

    // Render Cards from Data Array
    servicesGrid.innerHTML = servicesData.map(service => {
        return `
            <article class="service-card" data-id="${service.id}">
                <span class="service-icon">${service.icon}</span>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <a href="Contact.html?service=${service.id}" class="btn secondary-btn">Learn More ↗</a>
            </article>
        `;
    }).join('');

    // Initialize 3D Card Tilt Effects
    init3DTilt();

    // Initialize Magnetic CTA Buttons Effect
    initMagneticButtons();
});

// 3D Card Tilt on Mouse Movements
function init3DTilt() {
    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

// Magnetic Button Hover Physics
function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll(".magnetic-btn");

    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}