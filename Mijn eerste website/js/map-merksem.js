let map = L.map('map-Distelhoek').setView([51.251920, 4.430660], 18);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// bepaal de rechthoek rondom het gebouw van AP (coördinaten zijn 51.23041, 4.4155 en 51.22991, 4.41675)
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// kleur de rechthoek in met de rode AP-kleur (#e60005)
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker (coördinaten 51.23009 en 4.41616) met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.251920, 4.430660]).addTo(map)
.bindPopup('<b>Distelhoek</b><br>Merksem')
.openPopup();