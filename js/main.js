// import imageCycle from 'imageCycle';

const coordinates = [-73.985861,40.7370135]; //starting position

const naviagtionList = document.querySelectorAll('.navigation__item');

naviagtionList.forEach(element => {
  element.addEventListener('click', () => {
    imageCycle();
    fly();
  }
    );
});

function fly(){
  var city = event.srcElement.textContent;
  console.log(event.srcElement.textContent)
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
  console.log(location[city]);

  map.flyTo({
  center: location[city],
  zoom: 7
  });

  }

  mapboxgl.accessToken = 'pk.eyJ1Ijoib2xlZ21vc2hrb3ZpY2giLCJhIjoiY2pmeTFidnQzMGUwaDMycTd6aGlseXF6ayJ9._4zzVy5_Q5lPjIiN56SMyQ';

  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/olegmoshkovich/cjpac1bs09b7w2ro70qt24lna',
  center: [coordinates[0],coordinates[1]],
  zoom: 7.4
  });


  map.on('click', function(e) {

  var features = map.queryRenderedFeatures(e.point, {
    layers: ['eqs-dataset'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  // Create a popup, but don't add it to the map yet.


  var popup = new mapboxgl.Popup({ offset: [0, -15] })

    .setLngLat(feature.geometry.coordinates)
    .setHTML('<div>' + feature.properties.title + '</div><p>' + feature.properties.description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);

  });
