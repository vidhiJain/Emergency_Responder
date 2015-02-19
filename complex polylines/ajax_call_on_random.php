<!doctype html>
<html>
<head>

    <title>Parsing Location</title>
    
    <style>
        #map-canvas {
        height: 90%;
        margin: 0px;
        padding: 0px
		}
		
		html,body{
            height:100%;
			       margin:0px;
			       text-align: center;
            font-family: arial;
        }

        .button{
            margin:20px;
            font-size:16px;
            font-weight: bold;
            padding:5px 10px;
        }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBwVXnCFIlY4duaLmEf5Z0qh7jVZeR_Fzo"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>
  	<script src="../js/mapmarkers.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 

</head>
<body>
	<div id="map-canvas"></div>
    <input type="button" value="Refresh" class="button" />
    <br />
    <span id="results"></span>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <script>

       //When DOM loaded we attach click event to button
$(document).ready(function() {
    
    //after button is clicked we download the data
    $('.button').click(function()    {

        //start ajax request
        $.ajax  ({
            url: "location.json",
            //force to handle it as text
            dataType: "text",
            success: function(data) {
                
                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                json = $.parseJSON(data);
                //now json variable contains data in json format
                //let's display a few items
                VictimLatLng=new google.maps.LatLng(json.latitude,json.longitude);
                $('#results').html('Latitude: ' + json.latitude + '   Longitude: ' + json.longitude);
              

            }
            
        });
    });
});
</script>

</body>
</html>