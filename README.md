# 🧭 Dijkstra Based Campus Navigator

A Python-based University Campus Navigation system that utilizes OpenStreetMap (OSM) data and Plotly.js to visually display the shortest walking path between selected nodes on a campus map. The backend uses Dijkstra's Algorithm for shortest path calculation.

---

## 🛠 Features

- 📍 Node-based campus map extracted from OSM files.
- 🧠 Dijkstra's algorithm for efficient shortest path computation.
- 🗺️ Interactive HTML maps using Folium for node reference.
- 📈 Beautiful and dynamic path visualization using Plotly.js.
- 🕒 Estimated walking time display (editable walking speed).
- 🌍 Easily adaptable to any university campus by switching the map file.

---

## 🚀 How to Run

1. **Install the required dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Add your map file**:
   - Place your `.osm` map file inside the `Maps/` folder.
   - A sample map file (`VIT_Chennai.osm`) is provided by default.

3. **Run the script**:
   ```bash
   python your_script_name.py
   ```

4. **Follow the program steps**:
   - 📌 **IMPORTANT**: The program will first display a static map image (`MapImage.jpg`) showing the full graph. 
     You must **close the image window** to allow the program to proceed to the next steps.

   - The program will open an interactive map (`interactive_nodes.html`) showing all nodes with their corresponding numbers.
   - Keep this map open to reference node numbers.
   - Enter the **source** and **destination** node numbers when prompted.
   - It will then generate a visual path (`OutputMap.html`) using Plotly.js, which includes:
     - The selected route
     - Source & destination markers
     - Estimated time to walk

> 💡 You can customize the walking speed in the `plot_path()` function (default is 7.5 km/h).

---

## 🗺️ Customize for Your Campus

- Use any `.osm` file exported from [OpenStreetMap](https://www.openstreetmap.org/).
- Replace the file in the `Maps/` folder and update the filename in the code (inside `parse_osm_bounds()`).

---

## 🧮 Algorithm

- The shortest path is computed using a custom implementation of **Dijkstra’s Algorithm**.
- The map uses **adjacency lists** and **distance tracking**.
- Path is visualized using **real geographic coordinates** from OSM.

---

## 📂 Outputs

- `interactive_nodes.html`: Visual node reference map.
- `OutputMap.html`: Final route map with estimated walking time.
- `MapImage.jpg`: Static image of the full node graph (generated using OSMnx).

---

## 📦 Requirements

List of required packages (in `requirements.txt`):

```txt
plotly
folium
osmnx
xmltodict
numpy
```

Install with:

```bash
pip install -r requirements.txt
```

---

## 🙌 Credits

- [Plotly](https://plotly.com/)
- [Folium](https://python-visualization.github.io/folium/)
- [OSMnx](https://github.com/gboeing/osmnx)
- [OpenStreetMap](https://www.openstreetmap.org/)
