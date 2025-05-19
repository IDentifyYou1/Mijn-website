let map = L.map('map-Distelhoek').setView([51.251920, 4.430660], 10);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



let apMarker = L.marker([51.251920, 4.430660]).addTo(map)
.bindPopup('<b>Distelhoek</b><br>Merksem')
.openPopup();