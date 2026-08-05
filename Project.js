const projectsData = [
  // --- CATEGORY 1: WEBSITES ---
  {
    id: "interactive-portfolio",
    category: "web", // Matches data-filter="web"
    title: "Interactive Portfolio System",
    description: "A high-performance, dark-themed personal portfolio built with Vanilla JS and CSS grid featuring interactive canvas backgrounds and automated lead dispatching.",
    mediaType: "image", // Options: "image" or "video"
    mediaSrc: "portfolio.png",
    mediaTag: "Web App",
    technologies: ["HTML5", "CSS3", "JavaScript", "EmailJS"],
    blogUrl: "https://docs.google.com/document/d/1o6z7h_8gxRQ_wihKeMrIVTtwDrvdFk98fkH977vXfX0/edit?usp=sharing",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/player4687"
  },
    {
    id: "Javascript Documentation",
    category: "web", // Matches data-filter="web"
    title: "Documentation for JavaScript ",
    description: "Documentation presented for javascript, you can learn the basics and useful concepts. .",
    mediaType: "image", // Options: "image" or "video"
    mediaSrc: "jsdoc.png",
    mediaTag: "Web App",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    blogUrl: "https://docs.google.com/document/d/10dBnZHi2EMXC7iH0s_ChjPJ_xL5H4E4-RlGcZ3RpfbE/edit?usp=sharing",
    demoUrl: "https://player4687.github.io/JavaScriptDOC/ ",
    githubUrl: "https://github.com/player4687/JavaScriptDOC "
  },
      {
    id: "FlashMind | StudyWeb",
    category: "web", // Matches data-filter="web"
    title: "A simple, easy and free to use flashcard web app for students.",
    description: "An interactive flashcard application designed for students to enhance their learning experience with customizable decks and spaced repetition algorithms.",
    mediaType: "image", // Options: "image" or "video"
    mediaSrc: "flashmind.png",
    mediaTag: "Web App",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
    blogUrl: "https://docs.google.com/document/d/1Zn4OKV0b-OhgNlqScBlIXgBoJ7Lca2EYkt26h5j_D3Q/edit?usp=sharing",
    demoUrl: "https://flashmind-d4489.web.app/",
    githubUrl: "https://github.com/player4687/"
  },

  // --- CATEGORY 2: BOTS & SOFTWARE ---
  {
    id: "discord-bot",
    category: "bot", // Matches data-filter="bot"
    title: "ChatBot",
    description: "A chatbot which was created for a private server, it is one of the most sucessful bot that I have created, It can send Msgs, Gifs, React and voice msgs also.",
    mediaType: "video", // Render video instead of image
    mediaSrc: "velo.mp4",
    poster: "bot-preview.jpg",
    mediaTag: "Discord Bot",
    technologies: ["Node.js", "Discord.js", "MongoDB", "REST API"],
    blogUrl: "https://docs.google.com/document/d/1DwwQNL7jclL1yvgZojTvVOOWkziZkmbUWzXm-lipPpQ/edit?usp=sharing",
    demoUrl: "https://discord.com/oauth2/authorize?client_id=1493490451091558431",
    githubUrl: "https://github.com/player4687"
  },

  // --- CATEGORY 3: IOT / HARDWARE ---
  {
    id: "iot-plant-monitor",
    category: "IoT / Hardware", // Matches data-filter="iot"
    title: "Smart Home Monitoring Module",
    description: "An ESP32-based hardware system streaming environmental telemetry in real-time to a web dashboard with automated emergency alerts.",
    mediaType: "image",
    mediaSrc: "iot-preview.jpg",
    mediaTag: "IoT / Hardware",
    technologies: ["ESP32 / Arduino", "C++", "MQTT", "WebSockets"],
    blogUrl: "blog-iot-system.html",
    demoUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/player4687"
  }
];

// Escapes any characters that would break innerHTML string interpolation
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// Wraps matched substrings in <mark> for search highlighting
function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const safeText = escapeHtml(text);
    const safeQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return safeText.replace(new RegExp(`(${safeQuery})`, "ig"), "<mark>$1</mark>");
}

function initProjectsEngine() {
    const projectsGrid = document.querySelector(".projects-grid");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.querySelector(".search-input");
    const searchClear = document.querySelector(".search-clear");
    const emptyState = document.querySelector(".empty-state");
    const emptyReset = document.querySelector(".empty-reset");
    const modalOverlay = document.querySelector(".blog-modal-overlay");

    if (!projectsGrid) return;

    // Current state driving what's visible
    let activeFilter = "all";
    let searchQuery = "";

    // ---------- RENDER ----------
    // Builds a single card's markup. `query` is used only for highlighting matches.
    function renderCard(project, query) {
        const mediaHtml = project.mediaType === "video"
            ? `<video src="${project.mediaSrc}" ${project.poster ? `poster="${project.poster}"` : ''} autoplay loop muted playsinline></video>
               <button class="media-toggle" type="button" aria-label="Pause video" data-playing="true">
                   <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"></rect><rect x="14" y="5" width="4" height="14"></rect></svg>
               </button>`
            : `<img src="${project.mediaSrc}" alt="${escapeHtml(project.title)}" loading="lazy" />`;

        return `
            <article class="project-card" data-category="${project.category}" data-id="${project.id}">
                <!-- Project Media Slot -->
                <div class="project-media">
                    ${mediaHtml}
                    ${project.mediaTag ? `<div class="media-tag">${escapeHtml(project.mediaTag)}</div>` : ''}
                </div>

                <div class="project-content">
                    <h2 class="project-title">${highlightMatch(project.title, query)}</h2>
                    <p class="project-description">${escapeHtml(project.description)}</p>

                    <!-- Tech Stack Tags -->
                    <div class="tech-stack">
                        ${project.technologies.map(tech => `<span>${highlightMatch(tech, query)}</span>`).join('')}
                    </div>

                    <!-- Action Buttons -->
                    <div class="project-actions">
                        ${project.blogUrl ? `<button type="button" class="action-btn blog-btn" data-blog-id="${project.id}">View Blog 📖</button>` : ''}
                        ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="action-btn live-btn">Live Demo ↗</a>` : ''}
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="action-btn code-btn">Code 💻</a>` : ''}
                    </div>
                </div>
            </article>
        `;
    }

    function renderAll() {
        projectsGrid.innerHTML = projectsData.map(p => renderCard(p, "")).join("");
        attachMediaToggles();
        attachBlogButtons();
    }

    // ---------- FILTER + SEARCH (combined) ----------
    // A project is visible only if it matches BOTH the active category
    // filter AND the current search query (title or tech stack).
    function matchesQuery(project, query) {
        if (!query) return true;
        const haystack = [project.title, ...project.technologies].join(" ").toLowerCase();
        return haystack.includes(query.toLowerCase());
    }

    function applyFilters() {
        const cards = document.querySelectorAll(".project-card");
        let visibleCount = 0;

        cards.forEach(card => {
            const project = projectsData.find(p => p.id === card.getAttribute("data-id"));
            const categoryMatch = activeFilter === "all" || card.getAttribute("data-category") === activeFilter;
            const searchMatch = matchesQuery(project, searchQuery);
            const shouldShow = categoryMatch && searchMatch;

            if (shouldShow) {
                card.classList.remove("hide");
                visibleCount++;

                // Refresh highlighted text/tags whenever the search term changes
                const titleEl = card.querySelector(".project-title");
                if (titleEl) titleEl.innerHTML = highlightMatch(project.title, searchQuery);

                const tagEls = card.querySelectorAll(".tech-stack span");
                tagEls.forEach((el, i) => {
                    el.innerHTML = highlightMatch(project.technologies[i], searchQuery);
                });
            } else {
                card.classList.add("hide");
            }
        });

        toggleEmptyState(visibleCount === 0);
    }

    function toggleEmptyState(isEmpty) {
        if (!emptyState) return;
        emptyState.hidden = !isEmpty;
    }

    // ---------- FILTER TABS ----------
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            applyFilters();
        });
    });

    // ---------- SEARCH INPUT ----------
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener("input", (e) => {
            clearTimeout(debounceTimer);
            const value = e.target.value;
            if (searchClear) searchClear.classList.toggle("visible", value.length > 0);

            // Small debounce keeps typing smooth on larger project lists
            debounceTimer = setTimeout(() => {
                searchQuery = value.trim();
                applyFilters();
            }, 150);
        });
    }

    if (searchClear) {
        searchClear.addEventListener("click", () => {
            searchInput.value = "";
            searchQuery = "";
            searchClear.classList.remove("visible");
            applyFilters();
            searchInput.focus();
        });
    }

    if (emptyReset) {
        emptyReset.addEventListener("click", () => {
            activeFilter = "all";
            searchQuery = "";
            if (searchInput) searchInput.value = "";
            if (searchClear) searchClear.classList.remove("visible");
            filterBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === "all"));
            applyFilters();
        });
    }

    // ---------- VIDEO PLAY/PAUSE TOGGLE ----------
    function attachMediaToggles() {
        document.querySelectorAll(".media-toggle").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const video = btn.parentElement.querySelector("video");
                if (!video) return;

                if (video.paused) {
                    video.play();
                    btn.setAttribute("data-playing", "true");
                    btn.setAttribute("aria-label", "Pause video");
                    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"></rect><rect x="14" y="5" width="4" height="14"></rect></svg>`;
                } else {
                    video.pause();
                    btn.setAttribute("data-playing", "false");
                    btn.setAttribute("aria-label", "Play video");
                    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"></polygon></svg>`;
                }
            });
        });
    }

    // ---------- BLOG PREVIEW MODAL ----------
    function attachBlogButtons() {
        document.querySelectorAll("[data-blog-id]").forEach(btn => {
            btn.addEventListener("click", () => openBlogModal(btn.getAttribute("data-blog-id")));
        });
    }

    function openBlogModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project || !modalOverlay) return;

        modalOverlay.innerHTML = `
            <div class="blog-modal" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
                <button type="button" class="blog-modal-close" aria-label="Close preview">✕</button>
                ${project.mediaTag ? `<div class="media-tag">${escapeHtml(project.mediaTag)}</div>` : ''}
                <h3 id="blog-modal-title">${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.description)}</p>
                <a href="${project.blogUrl}" class="action-btn blog-btn">Read Full Case Study 📖</a>
            </div>
        `;
        modalOverlay.classList.add("open");
        modalOverlay.querySelector(".blog-modal-close").addEventListener("click", closeBlogModal);
        document.body.style.overflow = "hidden";
    }

    function closeBlogModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeBlogModal();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeBlogModal();
        });
    }

    // Initial paint
    renderAll();
}

document.addEventListener("DOMContentLoaded", initProjectsEngine);