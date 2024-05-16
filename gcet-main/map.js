let mapOptions = {
    center:[28.63406, 77.44565],
    zoom:15
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([28.63406, 77.44565]);
marker.addTo(map);