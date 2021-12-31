let map;
let options = {
  center: { lat: 43.238949, lng: 76.889709 },
  zoom: 10,
};
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), options);

  //Listen for click on map

  google.maps.event.addListener(map, 'click',   function clickOnMap(event) {
    //add marker
    addMarker({coords: event.latLng})
  });



  //Add marker function

  var markers = [
    {
      coords: { lat: 43.239361, lng: 76.882039 },
      icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      description: '<h4>You are here!</h4>',
    },
    {
      coords: { lat: 43.230711, lng: 76.835974 },
      description: '<h4>You are over there!!</h4>',
    },
  ];

  for (i in markers) {
    addMarker(markers[i]);
  }

  function addMarker(props) {
    marker = new google.maps.Marker({
      position: props.coords,
      map: map,
    });

    //check for custom icon
    if (props.icon) {
      marker.setIcon(props.icon);
    }

    if (props.description) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.description,
      });
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }
}
