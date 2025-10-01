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
document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMsg = document.getElementById('formMsg');
        formMsg.style.color = '#eb0028';
        // Simple validation
        if (!name || !email || !message) {
            formMsg.textContent = 'Please fill in all required fields.';
            return;
        }
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMsg.textContent = 'Please enter a valid email address.';
            return;
        }
        // Simulate sending (replace with real backend integration as needed)
        formMsg.style.color = '#2ecc40';
        formMsg.textContent = 'Thank you for your message! We will get back to you soon.';
        this.reset();
    });

// Flip effect for grid cards: click or keyboard (Enter/Space) to flip

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Only flip if not clicking inside a link or button
        if (e.target.closest('a,button')) return;
        card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });
});
