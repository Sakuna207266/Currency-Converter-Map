/* const RATES = {
    USD: {USD: 1, CAD: 1.3643, GBP: 0.7882, EUR: 0.9201},
    CAD: {USD: 0.7330, CAD: 1, GBP: 0.5778, EUR: 0.6745},
    GBP: {USD: 1.2688, CAD: 1.7307, GBP: 1, EUR: 1.1673},
    EUR: {USD: 1.0868, CAD: 1.4824, GBP: 0.8567, EUR: 1}
}; */

/*const API_KEY = "982e3eac04dd5434da6769b5";
const amountInput = document.getElementById("fromAmount");
const fromSelect = document.getElementById("fromC")
const toSelect = document.getElementById("toC")
const rateDisplay = document.getElementById("rateDisplay")
const amountDisplay = document.getElementById("amountDisplay")
const convertBtn = document.getElementById("calcBtn")

mapboxgl.accessToken = "pk.eyJ1IjoibW9vc2F5eXoiLCJhIjoiY21wb2ZqM2l3MDMyaDJycHRkZ2l3MXMwbyJ9.TZC7cmVZ5_rR-AnCwUWvog";

const COORDS = {
    USD: [-98, 39],
    CAD: [-96, 56],
    GBP: [-3, 55],
    EUR: [10, 51],
    AED: [54, 23],
    PKR: [69, 30]
};
const map = new mapboxgl.Map ({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11",
    projection: "globe",
    zoom: 1.5,
    center: [0, 20]
});
map.on("load", () => {
    map.setFog({
        "space-color": "rgba(11, 11, 25)",
        "star-intensity": 0.6
    });
map.addSource("arc", {
    type: "geojson",
    data: {type: "Feature", geometry:{ type: "LineString", coordinates: []}}
    })

map.addLayer({
    id: "arc",
    type: "line",
    source: "arc",
    paint: {
        "line-color": "#facc15",
        "line-width": 2.5
    }
    });
    updateMap(fromSelect.value, toSelect.value);
});





function updateMap(from, to) {
    const start = COORDS[from];
    const end = COORDS[to];

    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds, { padding: 100, duration: 1500 });

    const steps = 100;
    let frame = 0;

    map.getSource("arc").setData({
        type: "Feature",
        geometry: {type: "LineString", coordinates: [] }
    });

function animate() {
    frame++;

    const coords = [];
    for (let i = 0; i <= frame; i++) {
        const p = i / steps;
        coords.push([
            start[0] + (end[0] - start[0]) * p,
            start[1] + (end[1] - start[1]) * p,
        ])
    }


map.getSource("arc").setData({
    type: "Feature",
    geometry: { type: "LineString", coordinates: coords }
});

if (frame < steps) {
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

}
}

fromSelect.addEventListener("change", () => updateMap(fromSelect.value, toSelect.value));
toSelect.addEventListener("change", () => updateMap(fromSelect.value, toSelect.value));



async function getRate(from, to) {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.conversion_rates[to];
}
async function convert() {
    const amount = parseFloat(amountInput.value) || 0;
    const from = fromSelect.value;
    const to = toSelect.value;
    const rate = await getRate(from, to);
    const converted = amount * rate;

rateDisplay.textContent = "Rate = " + rate.toFixed(4);
amountDisplay.textContent = converted.toLocaleString("en-us");
}

convertBtn.addEventListener("click", convert);
*/

mapboxgl.accessToken = "pk.eyJ1IjoibW9vc2F5eXoiLCJhIjoiY21wb2ZqM2l3MDMyaDJycHRkZ2l3MXMwbyJ9.TZC7cmVZ5_rR-AnCwUWvog";

const API_KEY = "982e3eac04dd5434da6769b5";
const amountInput   = document.getElementById("fromAmount");
const fromSelect    = document.getElementById("fromC");
const toSelect      = document.getElementById("toC");
const rateDisplay   = document.getElementById("rateDisplay");
const amountDisplay = document.getElementById("amountDisplay");
const convertBtn    = document.getElementById("calcBtn");

const COORDS = {
    USD: [-98, 39],
    CAD: [-96, 56],
    GBP: [-3,  55],
    EUR: [10,  51],
    AED: [54,  23],
    PKR: [69,  30],
};

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11",
    projection: "globe",
    zoom: 2.0,
    center: [-80, 40]
});

map.on("load", () => {



    map.addSource("arc", {
        type: "geojson",
        data: { type: "Feature", geometry: { type: "LineString", coordinates: [] } }
    });

    map.addLayer({
        id: "arc",
        type: "line",
        source: "arc",
        paint: {
            "line-color": "white",
            "line-width": 2.5
        }
    });

    updateMap(fromSelect.value, toSelect.value);
});

function updateMap(from, to) {
    const start = COORDS[from];
    const end   = COORDS[to];

    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(start);
    bounds.extend(end);
    map.fitBounds(bounds, { padding: 100, duration: 1500 });

    const steps = 100;
    let frame = 0;

    map.getSource("arc").setData({
        type: "Feature",
        geometry: { type: "LineString", coordinates: [] }
    });

    function animate() {
        frame++;

        const coords = [];
        for (let i = 0; i <= frame; i++) {
            const p = i / steps;
            coords.push([
                start[0] + (end[0] - start[0]) * p,
                start[1] + (end[1] - start[1]) * p
            ]);
        }

        map.getSource("arc").setData({
            type: "Feature",
            geometry: { type: "LineString", coordinates: coords }
        });

        if (frame < steps) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

fromSelect.addEventListener("change", () => updateMap(fromSelect.value, toSelect.value));
toSelect.addEventListener("change",   () => updateMap(fromSelect.value, toSelect.value));

async function getRate(from, to) {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.conversion_rates[to];
}

async function convert() {
    const amount = parseFloat(amountInput.value) || 0;
    const from   = fromSelect.value;
    const to     = toSelect.value;
    const rate   = await getRate(from, to);

    rateDisplay.textContent   = "Rate = " + rate;
    amountDisplay.textContent = (amount * rate).toLocaleString("en-us");

    updateMap(from, to);
}

convertBtn.addEventListener("click", convert);