// Campus center supplied as the project starting point (WGS84 latitude, longitude).
const CAMPUS_CENTER = [12.9697, 79.1607];
const CAMPUS_ZOOM = 16;

const map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView(CAMPUS_CENTER, CAMPUS_ZOOM);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

const campusMarker = L.circleMarker(CAMPUS_CENTER, {
  radius: 8, color: '#fff', weight: 3, fillColor: '#14745f', fillOpacity: 1
}).addTo(map).bindPopup('<strong>VIT Vellore</strong><br>Campus map center');

// Optional future route overlay: add verified graph paths as GeoJSON LineStrings here.
// Example: L.geoJSON(routeGeoJson, { style: { color: '#e16f42', weight: 5 } }).addTo(map);

document.getElementById('campusButton').addEventListener('click', () => {
  map.flyTo(CAMPUS_CENTER, CAMPUS_ZOOM, { duration: 0.8 });
  campusMarker.openPopup();
});
