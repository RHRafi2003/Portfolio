document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle with Local Storage
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    function updateTheme() {
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            body.classList.remove("dark-mode");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    }
    updateTheme();
    
    themeToggle.addEventListener("click", function () {
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
        updateTheme();
    });
    
    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.getElementById(this.getAttribute("href").substring(1));
            const offset = 40; // Adjust this value based on your navbar height
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in Effect on Scroll
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => observer.observe(element));
    
    // Typing Effect in Subtitle
    const typingText = document.getElementById("typing-text");
    const textArray = ["CSE Student", "Aspiring Cybersecurity Expert", "Tech Enthusiast"];
    let textIndex = 0, charIndex = 0, isErasing = false;
    
    function typeEffect() {
        if (!typingText) return;
        if (!isErasing && charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex][charIndex];
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (!isErasing) {
            setTimeout(() => { isErasing = true; typeEffect(); }, 2000);
        } else if (isErasing && charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isErasing = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }
    typeEffect();
});
