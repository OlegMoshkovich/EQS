const coordinates = [-73.985861,40.7370135]; //starting position
const naviagtionList = document.querySelectorAll('.navigation__item');
naviagtionList.forEach(element => {
  element.addEventListener('click', () => {
    fly();
  });
});

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/olegmoshkovich/cjpcalvrmb55l2ro7xypgw0s3',
  // style: 'mapbox://styles/olegmoshkovich/cjpac1bs09b7w2ro70qt24lna',
  center: [coordinates[0],coordinates[1]],
  zoom: 7.4
});



const fly = () => {
    let city = event.srcElement.textContent;
    //new york is the edge case bacause of the space between two words
    if(event.srcElement.textContent === 'New York'){
      city = 'NewYork';
    }
    var location = {
      NewYork:[-73.985861,40.7370135],
      Tokyo:[139.78041,35.54843],
      Zurich:[8.54,47.37861],
      Paris:[2.320582,48.859489],
      Berlin:[13.393236,52.504043],
      London:[-0.1275,51.50722]
    }
    map.flyTo({
    center: location[city],
    zoom: 7})
  }




  map.on('click', function(e) {

    var features = map.queryRenderedFeatures(e.point, {
      layers: ['eqs-data']
    });

    if (!features.length) {
      return;
    }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })

    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      '<div class = "popup_title">' + feature.properties.title + '</div>' +
      '<div class = "popup_desc">' + feature.properties.description + '</div>'+
      '<div>'  + `<img src=${feature.properties.image} class = "popup_img">` + '</div>'
    )
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);

  });
// "../img/fog.png"
