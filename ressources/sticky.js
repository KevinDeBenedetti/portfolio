export function initializeStickyTitle() {
    // Sélectionner le sticky header
    const stickyHeader = document.querySelector('#sticky-header');

    // Sélectionner toutes les sections
    const sections = document.querySelectorAll('section');

    // Options pour l'Intersection Observer
    const options = {
    root: null, // viewport
    threshold: 0.8, // pour déclencher l'événement immédiatement
    rootMargin: "40% 0%" // pour déclencher l'événement 200px avant
    };

    // Callback pour l'Intersection Observer
    const callback = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Mettre à jour le sticky header avec le titre de la section actuellement visible
        const title = entry.target.querySelector('h3').innerText;
        stickyHeader.innerText = title;
        stickyHeader.classList.add('visible');
        } else {
        stickyHeader.classList.remove("visible");
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