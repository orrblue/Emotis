//This is a parser of JSON files.

var textArray = [];
var textBubbleArray = [];
textBubbleCounter = 0;
textBubbleRate = 0;

/*

[{text: ykfffh, color: hjfhfh.....}]

var text = '{ "text": "Hi", "color": "gold", "lat": "34.070297", "lng": "-118.4469386"}';
*/

function printTextBubbles(){
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
}


function separateText(textString){
    //separate strings by [] and remove []
    //return array of text pieces separated by []
    textArray = [];
    while(textString.lastIndexOf("]") != -1){
        bracketPos1 = textString.lastIndexOf("[");
        bracketPos2 = textString.lastIndexOf("]");
        //to put in array
        subStr = textString.substring(bracketPos1, bracketPos2);
        textArray.push(subStr);
        //cut off the end
        textString = textString.substring(0, bracketPos1);
    }
    
    printTextBubbles();
};

$.ajax("get_posts.php")
.done(separateText)






