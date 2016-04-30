function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.070297, lng: -118.4469386},
    zoom: 18,
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
}