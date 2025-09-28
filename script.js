// Add interactivity if needed. Example: smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

    // Fluid nav indicator logic
        const nav = document.querySelector('nav');
        const indicator = nav.querySelector('.nav-indicator');
        const navLinks = nav.querySelectorAll('a');

        function moveIndicatorTo(link) {
            const navRect = nav.getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();
            indicator.style.left = (linkRect.left - navRect.left) + 'px';
            indicator.style.width = linkRect.width + 'px';
        }

        function setActiveNav(e) {
            navLinks.forEach(link => link.classList.remove('active', 'selected'));
            this.classList.add('active', 'selected');
            moveIndicatorTo(this);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', setActiveNav);
        });

        // On load, set indicator to first active or first link
        window.addEventListener('DOMContentLoaded', () => {
            const active = nav.querySelector('a.active') || navLinks[0];
            active.classList.add('active', 'selected');
            moveIndicatorTo(active);
        });

        // Responsive: move indicator on resize
        window.addEventListener('resize', () => {
            const active = nav.querySelector('a.active') || navLinks[0];
            moveIndicatorTo(active);
        });