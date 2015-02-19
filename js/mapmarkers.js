var map;var poly;var json;
var VictimLatLng;var ResponderLatLng;
function initialize() {
  var ResponderLatLng = new google.maps.LatLng(-28.363882,131.044922);
  var mapOptions = {
    zoom: 7,
    center: VictimLatLng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image='img/victim.png';
  var VictimMarker = new google.maps.Marker({
      position: VictimLatLng,
      map: map,
	  icon: image,
      title: 'Victim'
  });
  var image='img/responder.png';
  var ResponderMarker = new google.maps.Marker({
      position: ResponderLatLng,
      map: map,
	  icon: image,
      title: 'Responder'
  });

  var polyOptions = {
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  };
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);

  // Add a listener for the click event
  google.maps.event.addListener(map, 'click', addLatLng);
  }

/*
 * Handles click events on a map, and adds a new point to the Polyline.
 * @param {google.maps.MouseEvent} event
 */
function addLatLng(event) {

  var path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker({
    position: event.latLng,
    title: '#' + path.getLength(),
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);