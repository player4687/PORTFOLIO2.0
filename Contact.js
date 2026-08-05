// ============================================================================
// RATNADEEP.DEV - CONTACT CONTROLLER & INTERACTIVE DOCK ENGINE
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    init3DTiltCards();
    initCopyButtons();
    initFormSubmit();
    initFloatingDock();
    autoSelectServiceFromQuery();
});

// 1. 3D Tilt Effect on Channel Cards
function init3DTiltCards() {
    const cards = document.querySelectorAll(".channel-card");

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
}

// 2. Clipboard Copy with Feedback Animation
function initCopyButtons() {
    const copyCards = document.querySelectorAll(".channel-card.copyable");

    copyCards.forEach(card => {
        const btn = card.querySelector(".copy-btn");
        const btnText = btn.querySelector(".btn-text");
        const copyText = card.getAttribute("data-copy");

        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(copyText).then(() => {
                btnText.textContent = "Copied! ✓";
                btn.style.background = "#00ff88";
                btn.style.color = "#090a0f";

                setTimeout(() => {
                    btnText.textContent = "Copy";
                    btn.style.background = "";
                    btn.style.color = "";
                }, 2000);
            });
        });
    });
}

// 3. Real EmailJS Form Handler
function initFormSubmit() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.querySelector(".btn-label").textContent = "Sending Transmission...";

        // Real EmailJS Credentials
        const SERVICE_ID = "service_xguwscn";
        const TEMPLATE_ID = "template_a8kypja";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
            .then(() => {
                status.className = "form-status success";
                status.textContent = "Message received! Ratnadeep will respond within 24 hours.";
                submitBtn.querySelector(".btn-label").textContent = "Send Message 🚀";
                submitBtn.disabled = false;
                form.reset();

                setTimeout(() => {
                    status.textContent = "";
                }, 6000);
            }, (error) => {
                console.error("EmailJS Error:", error);
                status.className = "form-status error";
                status.textContent = "Failed to send message. Please email directly to duodevelopers333@gmail.com";
                submitBtn.querySelector(".btn-label").textContent = "Send Message 🚀";
                submitBtn.disabled = false;
            });
    });
}

// 4. Floating Contact Dock Toggle Mechanics
function initFloatingDock() {
    const dock = document.getElementById("quick-dock");
    const trigger = document.getElementById("dock-trigger");

    trigger.addEventListener("click", () => {
        dock.classList.toggle("active");
        trigger.style.transform = dock.classList.contains("active") ? "rotate(45deg) scale(1.1)" : "rotate(0deg) scale(1)";
    });

    document.addEventListener("click", (e) => {
        if (!dock.contains(e.target)) {
            dock.classList.remove("active");
            trigger.style.transform = "rotate(0deg) scale(1)";
        }
    });
}

// 5. Pre-select project option if navigated from Services page URL parameter
function autoSelectServiceFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    const projectSelect = document.getElementById('project-type');

    if (serviceParam && projectSelect) {
        for (let option of projectSelect.options) {
            if (option.value === serviceParam || serviceParam.includes(option.value)) {
                option.selected = true;
                break;
            }
        }
    }
}