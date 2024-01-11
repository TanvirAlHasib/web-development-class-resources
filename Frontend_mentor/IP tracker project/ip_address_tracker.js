const map = L.map('map').setView([25.184, 89.1889], 18);

const satelliteView = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

satelliteView.addTo(map);

const marker = L.marker([25.184, 89.1889]);

marker.addTo(map);