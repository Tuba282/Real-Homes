import L from 'leaflet'

// Ensure the default icon points to the app's public marker image instead of
// the image inside node_modules. Vite serves files from the `public/` folder
// at the root, so `/marker-icon.png` will resolve correctly at runtime.
// This mirrors what Leaflet expects for its default icons.
const iconRetinaUrl = '/marker-icon.png'
const iconUrl = '/marker-icon.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

export default L
