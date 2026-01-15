// Basic scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Select elements to animate
window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to major layout blocks
    const elementsToAnimate = [
        '.hero-content',
        '.hero-image',
        '.feature-card',
        '.cta-section',
        '.title-lg'
    ];

    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in-section');
            observer.observe(el);
        });
    });

    // Form Handling
    const form = document.querySelector('form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button') as HTMLButtonElement;
            const originalText = button.textContent;

            button.textContent = 'Envoi...';
            button.disabled = true;

            // Simulate sending
            setTimeout(() => {
                button.textContent = 'Message envoyé !';
                // Success color from brand palette (Mineral Green or slightly darker)
                button.style.backgroundColor = '#626e65';
                form.reset();

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = '';
                    button.disabled = false;
                }, 3000);
            }, 1000);
        });
    }
});
