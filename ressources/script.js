// Initialisation du compteur de frame
let frameCounter = 0;
// Nombre de frame à attendre avant d'appeler la fonction updatePositions
// Réglage de la vitesse de l'animation 
let maxFrameCount = 60;

// Création des étoiles
for(let i = 0; i < 250 ; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + "px"
    star.style.height = star.style.width;
    document.querySelector("#starField").appendChild(star);
}
// Fonction pour mettre à jour la position des étoiles de manière aléatoire
function updatePositions() {
    let stars = document.querySelectorAll(".star");
    for (let i = 0 ; i < stars.length ; i++) {
        let star = stars[i];
        // star.style.top = Math.random() * 100 + "%";
        // star.style.left = Math.random() * 100 + "%";
        star.style.width = Math.random() * 3 + "px";
        star.style.height = star.style.width;
    }
}
function animate() {
    frameCounter++;
    if (frameCounter >= maxFrameCount) {
        updatePositions();
        frameCounter = 0;
    }
    // Fonction de JS demande au navigateur de mettre à jour l'affichage de manière synchrone
    requestAnimationFrame(animate);
}

animate();

// Menu burger
let burger = document.querySelector('.menu-burger');
let nav = document.querySelector('.menu-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fenêtres modales
let btnExp = document.querySelector("#btn-exp");
let btnRea = document.querySelector("#btn-rea");
let btnClose = document.querySelector(".close-modal");

const modalContainer = document.querySelector(".modal-container");

// Afficher les technologies au click
btnExp.addEventListener("click", function() {
    modalContainer.style.display = "block";
});
// Afficher les réalisations au click
btnRea.addEventListener("click", function() {
    modalContainer.style.display = "block";
});
// Bouton fermer la fenêtre
btnClose.addEventListener("click", function() {
    modalContainer.style.display = "none";
});

