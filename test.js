// Initialisation du compteur de frame
let frameCounter = 0;
// Nombre de frame à attendre avant d'appeler la fonction updatePositions
// Réglage de la vitesse de l'animation 
let maxFrameCount = 10;

// Création des étoiles
for(let i = 0; i < 250 ; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + "px"
    star.style.height = star.style.width;
    document.querySelector("#starfield").appendChild(star);
}
// Fonction pour mettre à jour la position des étoiles de manière aléatoire
function updatePositions() {
    let stars = document.querySelectorAll(".star");
    for (let i = 0 ; i < stars.length ; i++) {
        let star = stars[i];
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
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

// Fenêtre modale
let btnExp = document.querySelector("#btn-left");
let btnRea = document.querySelector("#btn-right");
let modalContainer = document.querySelector(".modal-container");

btnExp.addEventListener("click", function() {
    modalContainer.style.display = "block";
}, false);