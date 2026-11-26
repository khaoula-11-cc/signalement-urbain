document.addEventListener("DOMContentLoaded", function () {

    // Initialiser la carte sur le Maroc
    const map = L.map('map').setView([31.7917, -7.0926], 6);

    // Ajouter OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Ajouter un premier marqueur
    L.marker([33.5731, -7.5898])
        .addTo(map)
        .bindPopup("Casablanca - Exemple de localisation");

    console.log("Carte chargée avec succès !");
});
