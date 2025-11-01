// script.js

// Scroll reveal observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // animate any skill bars inside
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach(bar => {
                const w = bar.getAttribute('data-width') || '70';
                bar.style.width = w + '%';
            });
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

// Dark mode toggle (basic)
const darkToggle = document.getElementById('dark-mode-toggle');
if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        // simple body toggle for colors
        document.body.classList.toggle('bg-gray-50');
    });
}

// Mobile nav anchor smooth scroll (optional)
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});