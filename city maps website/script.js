// Dhaka City Map Initialization
const map = L.map('map').setView([23.8103, 90.4125], 12);

// OpenStreetMap Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker Example
const marker = L.marker([23.8103, 90.4125]).addTo(map);
marker.bindPopup('<b>Dhaka City Center</b><br>Welcome to Dhaka!').openPopup();

// Circle Example
const circle = L.circle([23.814, 90.414], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
circle.bindPopup('A beautiful spot in Dhaka!');

// Polygon Example
const polygon = L.polygon([
    [23.815, 90.412],
    [23.812, 90.418],
    [23.809, 90.414]
]).addTo(map);
polygon.bindPopup('A specific area in Dhaka!');
