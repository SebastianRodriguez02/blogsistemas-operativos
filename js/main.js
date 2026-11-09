// Animación suave de aparición al hacer scroll (Fade In + Slide Up)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // El artículo aparece cuando el 15% es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: dejar de observar una vez que ya apareció
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar el observador a todos los artículos
document.querySelectorAll('article').forEach(article => {
    observer.observe(article);
});