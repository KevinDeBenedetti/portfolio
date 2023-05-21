// Animation des logos
export function initializeAnimateLogos() {
    document.addEventListener("DOMContentLoaded", () => {
        const linkElements = document.querySelectorAll(".article-item__links a");
        
        linkElements.forEach((link) => {
            
            link.addEventListener("mouseover", () => {
                // Ajoute la classe pour une icone animée de fontawesome
                const iconElement = link.querySelector("i");
                iconElement.classList.add("fa-beat-fade");
                iconElement.style.color = "var(--text-white)";
          });

            link.addEventListener("mouseout", () => {
                // Enlève la classe pour un retour sans animation après le survole
                const iconElement = link.querySelector("i");
                iconElement.classList.remove("fa-beat-fade");
                iconElement.style.color = "var(--text-grey_light)";

            });
        });
    });
}