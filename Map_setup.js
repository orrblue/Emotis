//display map of surroudning area
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(
                    position.coords.latitude,
                    position.coords.longitude
                )
            //create map
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 19,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
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
            });


        //centers map
            map.setCenter(pos);
            
            //places marker on map center
            var marker;
            marker = new google.maps.Marker({
            map: map,
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: (pos)
            });
        }, function() {
            //handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {
        // Browser doesn't support Geolocation
        //handleLocationError(false, infoWindow, map.getCenter());
    }
}

/*
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
*/
