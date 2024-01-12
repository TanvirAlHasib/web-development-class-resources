//getting location by IP Geolocation API section start

//intro with dom
const ip = document.getElementById("ip");
const locationn = document.getElementById("location");
const time_zone = document.getElementById("time_zone");
const isp = document.getElementById("isp");
const input_ip = document.getElementById("input_ip");
const search = document.getElementById("search");

//fetch api method start
async function fetchApi(ipAddress) {
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_GDCKqOQbMpllKve6NLZSZ3ZldbuF0&ipAddress=${ipAddress}`
  )
    .then((res) => res.json())
    .then((data) => domManipulation(data));
}

//fetch api method end

//dom manipulation method
function domManipulation(data) {
  console.log(data);
  ip.innerHTML = data.ip;
  locationn.innerHTML = data.location.city + ", " + data.location.country;
  time_zone.innerHTML = data.location.timezone;
  isp.innerHTML = data.isp;

  //map section start

  //bug fixed for map already initialized
  const container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }

  const satelliteView = new L.tileLayer(
    "http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}",
    {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }
  );

  //custom marker section start

  const myIcon = new L.icon({
    iconUrl: "marker.png",
    iconSize: [40, 60],
  });

  const marker = new L.marker([data.location.lat, data.location.lng], {
    icon: myIcon,
  });

  const map = new L.map("map").setView(
    [data.location.lat, data.location.lng],
    18
  );

  satelliteView.addTo(map);

  marker.addTo(map);

  // custom marker section end

  // map section end
}

//getting location by IP Geolocation API section end

//search button section start

search.addEventListener("click", () => {
  if (input_ip.value) {
    fetchApi(input_ip.value);
    input_ip.value = "";
  } else {
    alert("please input ip first");
  }
});

// search button section end

//default fetch api call section start

$.getJSON("https://api.ipify.org?format=json", function (data) {
  fetchApi(data.ip);
  input_ip.value = data.ip;
});

//default fetch api call section end
