// Theme switcher logic
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }
// Theme switcher logic
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (savedTheme) {
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
    }

    // Handle theme change
    themeSelect.addEventListener('change', (e) => {
        const newTheme = e.target.value;
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submit prevent default (since no backend)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can add alert or console.log here if needed, e.g., alert('Form submitted!');
    });
});

// Note: To add/remove themes, update the <select> options in HTML and add corresponding class in CSS.
// To change default theme, update body class in HTML and initial localStorage check.

    // Handle theme change
    themeSelect.addEventListener('change', (e) => {
        const newTheme = e.target.value;
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Form submit prevent default (since no backend)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // You can add alert or console.log here if needed, e.g., alert('Form submitted!');
    });
});

// Note: To add/remove themes, update the <select> options in HTML and add corresponding class in CSS.
// To change default theme, update body class in HTML and initial localStorage check.
