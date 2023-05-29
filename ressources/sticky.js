export function initializeStickyTitle() {
    // Sélectionner le sticky header
    const stickyHeader = document.querySelector('#sticky-header');

    // Sélectionner toutes les sections
    const sections = document.querySelectorAll('section');

    // Options pour l'Intersection Observer
    const options = {
    root: null, // viewport
    threshold: 0.5, // pour déclencher l'événement immédiatement
    rootMargin: "-100px 0px" // pour déclencher l'événement 200px avant
    };
    
    let currentSection = null;

    const callback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const title = entry.target.querySelector('h3').innerText;
                stickyHeader.innerText = title;
                stickyHeader.classList.add('visible');
                currentSection = entry.target;
            } else if (entry.target === currentSection) {
                stickyHeader.classList.remove('visible');
                currentSection = null;
            }
        });
    };

    // Créer l'Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observer toutes les sections
    sections.forEach(section => {
        observer.observe(section);
    });
}