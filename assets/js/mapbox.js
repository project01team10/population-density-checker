
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3hybGx5IiwiYSI6ImNsMWkwNXUwdDA3ZzczaW0xMnRueWJlbWcifQ.9k9D-NC6Vli8SFBZ-vO2tQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 13 // starting zoom
});
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);