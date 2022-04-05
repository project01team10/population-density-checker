
// const coin = document.querySelector("#invest");
// mapboxgl.accessToken = 'pk.eyJ1IjoiZ3hybGx5IiwiYSI6ImNsMWkwNXUwdDA3ZzczaW0xMnRueWJlbWcifQ.9k9D-NC6Vli8SFBZ-vO2tQ';
// const map = new mapboxgl.Map({
// container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 13 // starting zoom
// });
// map.addControl(
//     new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         mapboxgl: mapboxgl
//     })
// );
// map.addControl(new mapboxgl.NavigationControl());



mapboxgl.accessToken = 'pk.eyJ1IjoiZ3hybGx5IiwiYSI6ImNsMWkwNXUwdDA3ZzczaW0xMnRueWJlbWcifQ.9k9D-NC6Vli8SFBZ-vO2tQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 12,
    center: [-122.4473, 37.7535]
});
map.addControl(
     new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
     })
);
map.addControl(new mapboxgl.NavigationControl());

map.on('load', () => {
    // Add the vector tileset as a source.
    map.addSource('ethnicity', {
        type: 'vector',
        url: 'mapbox://examples.8fgz4egr'
    });
    map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': 'ethnicity',
        'source-layer': 'sf2010',
        'paint': {
            // Make circles larger as the user zooms from z12 to z22.
            'circle-radius': {
                'base': 1.75,
                'stops': [
                    [12, 2],
                    [22, 180]
                ]
            },
            // Color circles by ethnicity, using a `match` expression.
            'circle-color': [
                'match',
                ['get', 'ethnicity'],
                'White',
                '#fbb03b',
                'Black',
                '#223b53',
                'Hispanic',
                '#e55e5e',
                'Asian',
                '#3bb2d0',
                /* other */ '#ccc'
            ]
        }
    });
});

map.on('load', () => {
  map.addSource('route', {
      'type': 'geojson',
      'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
              'type': 'LineString',
              'coordinates': [
                  [-122.483696, 37.833818],
                  [-122.483482, 37.833174],
                  [-122.483396, 37.8327],
                  [-122.483568, 37.832056],
                  [-122.48404, 37.831141],
                  [-122.48404, 37.830497],
                  [-122.483482, 37.82992],
                  [-122.483568, 37.829548],
                  [-122.48507, 37.829446],
                  [-122.4861, 37.828802],
                  [-122.486958, 37.82931],
                  [-122.487001, 37.830802],
                  [-122.487516, 37.831683],
                  [-122.488031, 37.832158],
                  [-122.488889, 37.832971],
                  [-122.489876, 37.832632],
                  [-122.490434, 37.832937],
                  [-122.49125, 37.832429],
                  [-122.491636, 37.832564],
                  [-122.492237, 37.833378],
                  [-122.493782, 37.833683]
              ]
          }
      }
  });
  map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round'
      },
      'paint': {
          'line-color': '#888',
          'line-width': 8
      }
  });
});








// this.mapInstance = new mapboxgl.Map({
//     container: 'map',
//     minZoom: 0,
//     maxZoom: 18,
//     center: this.getCenterOfMap(),
//     zoom: this.getZoomValueOfMap(),
//     style: this.style.streets
// });

// getCenterOfMap = function() {
//   try {
//     this.savedCenter = JSON.parse(localStorage.getItem('center'));
//   } catch (exception) {
//     console.log('Exception: ', exception);
//   }
//   if (this.savedCenter) {
//     return this.savedCenter;
//   } else {
//     return this.defaultCenter;
//   }
// };
// $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function(currentPriceInfo){
//   console.log(currentPriceInfo.bpi.USD.rate);
//   coin.textContent = currentPriceInfo; 
//   coin.addclass(".map-des");
//   coin.appendChild("#invest")
// });