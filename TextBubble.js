function TextBubble() {
    //new map
    /*var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 15,
        styles: [{
          featureType: 'all',
          stylers: [{ visibility: 'off' }]  // Turn off all features
        }, {
          featureType: 'poi.sports_complex',
          stylers: [{ visibility: 'on' }]  // Turn on sport complex points of interest.
        }, {
          featureType: 'poi.park',
          stylers: [{ visibility: 'on' }]  // Turn on parks points of interest.
        },{
            featureType: 'road.local',
            stylers: [{visibility: 'on'}]
        }],
        disableDoubleClickZoom: true
    });*/

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

        var infoWindow = new google.maps.InfoWindow({map: map});

        infoWindow.setPosition(pos);
        infoWindow.setContent('INSERT CHAT HERE');
        map.setCenter(pos);
        }, function() {
            alert('Error: The Geolocation service failed.');
        });
    } else {
        // Browser doesn't support Geolocation
        alert('Error: Your browser doesn\'t support geolocation.');
    }
}

TextBubble();