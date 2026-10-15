


// ---- SCROLL REVEAL ----
const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
