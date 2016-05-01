function textBubble(msg) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latLng = {google.maps.LatLng(
                position.coords.latitude, position.coords.longitude)};

    var infoWindow = new google.maps.InfoWindow({map: map});

    infoWindow.setPosition(latLng);
    infoWindow.setContent(msg);
    map.panTo(latLng);
    }, function() {
        alert('Failed to get geolocation.');
    });
}