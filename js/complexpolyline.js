//When DOM loaded we attach click event to button
$(document).ready(function() {
    
    //after button is clicked we download the data
    $('.button').click(function(){

        //start ajax request
        $.ajax({
            url: "location.json",
            //force to handle it as text
            dataType: "text",
            success: function(data) {
                
                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                var json = $.parseJSON(data);
                //now json variable contains data in json format
                //let's display a few items
                $('#results').html('latitude: ' + json.latitude + '   Longitude: ' + json.longitude);
                function initialize(){
                  var mapOptions={
                    zoom=10;
                    center:new google.maps.LatLng(json.latitude,json.longitude)
                  };
                  map= new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

                  var polyOptions={
                    strokeColor: '#ff0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 4               
                  } ;
                  poly=new google.maps.Polyline(polyOptions);
                  poly.setMap(map);

                   var path = poly.getPath();

                    // Because path is an MVCArray, we can simply append a new coordinate
                    // and it will automatically appear.
                    path.push(json.latitude,json.longitude);
                    var image='img/victim.png';
                      var VictimMarker = new google.maps.Marker({
                          position: VictimLatlng,
                          map: map,
                        icon: image,
                          title: 'Victim'
                        }
                  }
                }
            }
        });
    });
});
