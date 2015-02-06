/*$(function() {
$.getJSON('datafromserver.json',function(data){
	$.each(data.victim,function(to be completed*/
function initialize() {
  var VictimLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var ResponderLatlng = new google.maps.LatLng(-28.363882,131.044922);
  var mapOptions = {
    zoom: 7,
    center: VictimLatlng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image='img/victim.png';
  var ResponderMarker = new google.maps.Marker({
      position: VictimLatlng,
      map: map,
	  icon: image,
      title: 'Victim'
  });
  var image='img/responder.png';
  var ResponderMarker = new google.maps.Marker({
      position: ResponderLatlng,
      map: map,
	  icon: image,
      title: 'Responder'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);