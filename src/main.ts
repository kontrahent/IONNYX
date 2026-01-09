// Basic scroll reveal animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Select elements to animate
window.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .contact-card, h2, .reveal-text, .reveal-text-delay, .reveal-text-delay-2');
    animateElements.forEach(el => observer.observe(el));

    // Form Handling
    const form = document.querySelector('.contact-form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button') as HTMLButtonElement;
            const originalText = button.textContent;

            button.textContent = 'Envoi en cours...';
            button.disabled = true;

            // Simulate sending
            setTimeout(() => {
                button.textContent = 'Message envoyé !';
                button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                form.reset();

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
