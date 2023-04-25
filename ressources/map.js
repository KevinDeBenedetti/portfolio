export default function map() {

    var map = L.map('map').setView([43.5082,4.9837], 9);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([43.5082,4.9837]).addTo(map)
        .bindPopup("Je suis la 👇")
        .openPopup();

}