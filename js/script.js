// Initialisation de la carte
document.addEventListener("DOMContentLoaded", function () {

    // Création de la carte centrée sur le Maroc
    const map = L.map('map').setView([31.7917, -7.0926], 6);

    // Ajout du fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    console.log("Carte chargée avec succès !");
});
