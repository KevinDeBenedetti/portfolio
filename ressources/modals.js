export default function modals() {
    // // Fenêtres modales
    // let btnExp = document.querySelector("#btn-exp");
    // let btnRea = document.querySelector("#btn-rea");
    // let btnClose = document.querySelector(".close-modal");

    // const modalContainer = document.querySelector(".modal-container");

    // // Afficher les technologies au click
    // btnExp.addEventListener("click", function() {
    //     modalContainer.style.display = "block";
    // });
    // // Afficher les réalisations au click
    // btnRea.addEventListener("click", function() {
    //     modalContainer.style.display = "block";
    // });
    // // Bouton fermer la fenêtre
    // btnClose.addEventListener("click", function() {
    //     modalContainer.style.display = "none";
    // });

    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const modals = document.querySelectorAll('.modal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add('modal-active');
        gsap.to(modal, { duration: 0.3, opacity: 1, ease: "power2.inOut" });
        });
    });

    modalCloseButtons.forEach((button) => {
        button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('modal-active');
        gsap.to(modal, { duration: 0.3, opacity: 0, ease: "power2.inOut" });
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('modal-active');
            gsap.to(modal, { duration: 0.3, opacity: 0, ease: "power2.inOut" });
        }
        });
    });
}





