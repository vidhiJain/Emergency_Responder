<?php

for($i=1;$i<=10;$i++){
	
$num=mt_rand(1000,10000)/100;		//Random Number for Latitude
$num2=mt_rand(1000,10000)/100;		//Random Number for Longitude

  $position_coordinates = array(
    'User id' => 'A random String',	//User id 
    'latitude' => $num,

    'longitude' => $num2
  );
  $encoded_json=json_encode($position_coordinates);
  echo $encoded_json;
  file_put_contents('location.json', $encoded_json);		//json file namespecified as location.json 
  sleep(3);							//Upgrading the json in intervals of 3 sec each
   
}
?>