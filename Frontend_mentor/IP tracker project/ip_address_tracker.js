//getting location by IP Geolocation API section start

//intro with dom
const ip = document.getElementById("ip");
const locationn = document.getElementById("location");
const time_zone = document.getElementById("time_zone");
const isp = document.getElementById("isp");

//fetch api method start
fetch(
  `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_GDCKqOQbMpllKve6NLZSZ3ZldbuF0&ipAddress=8.8.8.8`
)
  .then((res) => res.json())
  .then((data) => domManipulation(data));

//fetch api method end

//dom manipulation method
function domManipulation(data) {
  ip.innerHTML = data.ip;
  locationn.innerHTML = data.location.city + ", " + data.location.country;
  time_zone.innerHTML = data.location.timezone;
  isp.innerHTML = data.isp;

  //map section start

  const map = L.map("map").setView([data.location.lat, data.location.lng], 18);

  const satelliteView = L.tileLayer(
    "http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  satelliteView.addTo(map);

  // map section end

  //custom marker section start

  const myIcon = L.icon({
    iconUrl: "marker.png",
    iconSize: [40, 60],
  });

  const marker = L.marker([data.location.lat, data.location.lng], {
    icon: myIcon,
  });

  marker.addTo(map);

  // custom marker section end
}

//getting location by IP Geolocation API section end
