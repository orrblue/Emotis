//This is a parser of JSON files.

var textArray = [];
var textBubbleArray = [];
textBubbleCounter = 0;
textBubbleRate = 0;

/*

[{text: ykfffh, color: hjfhfh.....}]
*/

var defaultPin = '[{ "text": "Hi", "color": "gold", "lat": "34.070297", "lng": "-118.4469386"}]';

/*function printTextBubbles(){
    var length = textArray.length;
    textBubbleRate = length;
    for (i = 0; i < length; i++) {
        var obj = JSON.parse(textArray[i]);    
        var infoWindow = new google.maps.InfoWindow({map: map});
        infoWindow.setPosition({lat: chatObj.lat, lng: chatObj.lng});
        infoWindow.setContent(chatObj.text);
        textBubbleArray[textBubbleCounter] = infoWindow;
        textBubbleCounter++;
        //map.setCenter({lat: chatObj.lat, lng: chatObj.lng});
    }
}*/

function printTextBubble(pin) {
    var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setPosition({lat: pin.lat, lng: pin.lng});
    infoWindow.setContent(pin.text);
    textBubbleArray[textBubbleCounter++] = infoWindow;
}

function dropPins(jsonString) {
    var arr = JSON.decode(jsonString);

    textBubbleRate = arr.length();
    for (i = 0; i < arr.length(); i++) {
        printTextBubble(arr[i]);
    }
}

//$.ajax("get_posts.php")
//.done(dropPins);

dropPins(defaultPin);
