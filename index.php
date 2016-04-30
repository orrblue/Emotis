<?php
	session_start();

	// TODO: use of microtime here probably insecure
	$_SESSION['hashId'] = hash("sha1", $_SERVER['REMOTE_ADDR'] . microtime());
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Emotis</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <!--<script type="text/javascript" src="map.js"></script>-->
        <script type="text/javascript" src="jquery-latest.min.js"></script> 
        <script type="text/javascript" src="emotis-ajax.js"></script>
    </head>
    
<body>
 
<div id="map">
    <script src="map.js">   
        function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 0, lng: 0},
          zoom: 19,
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });
    </script>
    
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?libraries=visualization&callback=initMap">
        // Remove key for now
        // key=AIzaSyDIikgXtQuY_gaBweqTqx-QuHCDYJ2Fsj4origin/gh-pages
    </script>
</div>

<div id="banner">
     <h1>Emotis</h1>
</div>

<div id="chatbox">
    <input type="text" name="fname" id="chatbox_input" placeholder="Say something...">
    <select style="background-color: gold; color: white;" id="chatbox_color" onChange="style.backgroundColor=this.options[this.selectedIndex].value;">
    <option style="background-color: lime; color: white;" value="lime" />Happy
    <option style="background-color: gold; color: white;" value="gold" SELECTED />Meh
    <option style="background-color: blue; color: white;" value="blue" />Sad
    <option style="background-color: red; color: white;" value="red" />Angry
    </select>
    <input type="submit" value="Send" onclick="submit_chatbox()">
</div>

</body>
</html>
