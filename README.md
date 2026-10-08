# VIT Vellore Campus Map

A lightweight, static interactive campus map built with HTML, CSS, JavaScript, and Leaflet. It opens centered near VIT Vellore at **12.9697, 79.1607**, uses OpenStreetMap tiles, and includes a starter data shape for future graph-based route finding.

## Run it

1. Download and extract this project folder.
2. Open `index.html` in a modern browser.
3. For a local web server, run `python3 -m http.server 8000` from this folder and visit <http://localhost:8000>.

Leaflet and map tiles load from the internet, so an internet connection is required. No backend, build step, package manager, or API key is needed.

## Map and data

- `index.html` contains the page structure and loads Leaflet from a CDN.
- `styles.css` contains the responsive layout.
- `app.js` sets the campus center, OSM tile layer, marker, and campus-view button.
- `data/graph.example.json` demonstrates graph nodes and weighted walking edges. Its sample coordinates, route, and distance are illustrative; verify and replace them before using them for navigation.

## Preparing data for Dijkstra

OpenStreetMap road and footway geometry can be inspected or extracted as candidate paths. Convert each junction or chosen landmark into a graph node, and each traversable segment into an edge. Use geometry coordinates to draw the route on the map. Edge weights should be walking distances in meters, ideally calculated from the mapped geometry and checked against the actual accessible campus route. Manually verified distances are useful where OSM geometry is missing, outdated, or does not represent the path you intend to recommend.

The example stores coordinates as `[latitude, longitude]` for easy use with Leaflet. GeoJSON itself uses `[longitude, latitude]`; convert the order when exporting/importing GeoJSON. Dijkstra can then select the lowest total distance (or another nonnegative cost) between start and destination. Add one edge per direction for one-way restrictions, or mark a verified two-way edge as bidirectional.

No routing algorithm or complete VIT path dataset is included yet; this project is the map and data-structure foundation.

## Attribution and usage

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright). The public OSM tile service is suitable for light interactive use; follow the [tile usage policy](https://operations.osmfoundation.org/policies/tiles/), keep attribution visible, and use an appropriate tile provider if the project grows beyond light use. OSM data is community maintained, so verify paths and access restrictions before relying on them for navigation.
