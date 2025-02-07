// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? "☀️ Switch Theme" : "🌙 Switch Theme";
});

// Scroll Animation
const sections = document.querySelectorAll('.section');

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);
