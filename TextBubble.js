function TextBubble(msg) {
    // Try HTML5 geolocation.
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
    )};

    var infoWindow = new google.maps.InfoWindow({map: map});

    infoWindow.setPosition(pos);
    infoWindow.setContent(msg);
    map.setCenter(pos);
    }, function() {
        alert('Error: The Geolocation service failed.');
    });
}