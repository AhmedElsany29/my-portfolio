document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "dark-mode") {
            themeToggle.textContent = "Light";
        } else {
            themeToggle.textContent = "Dark";
        }
    } else {
        // Default to light mode if no theme is saved
        body.classList.add("light-mode");
        themeToggle.textContent = "Dark";
    }

    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeToggle.textContent = "Light";
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeToggle.textContent = "Dark";
            localStorage.setItem("theme", "light-mode");
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("nav-menu");

    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});