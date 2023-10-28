window.addEventListener('DOMContentLoaded', (event) => {
    // GSAP animations
    gsap.from('.container', { opacity: 0, y: -50, duration: 1 });
    gsap.from('input, textarea', { opacity: 0, y: 50, stagger: 0.2, delay: 0.5, duration: 1 });
});
