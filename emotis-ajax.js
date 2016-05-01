// Fade out banner on first interaction
$("*").one("click", function () {
    $("#banner").fadeOut("slow");
});

setInterval(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            map.panTo(google.maps.LatLng(
                position.coords.latitude, position.coords.longitude));
        });
    }
    
    for (var bubble in textBubbleArray) {
        $.ajax({
            $(bubble).fadeTo($(bubble).css("opacity") - 0.01 - 0.01 * textBubbleRate)
        })
    }
}, 200);

function submit_chatbox() {
    var text = $("#chatbox_input").val();
    var color = $("#chatbox_color").val();

    if (text != "") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $.ajax({
                    type: "POST",
                    url: "submit_chat.php",
                    data: {
                        text: text,
                        color: color,
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                }).done(function ( msg ) {
                    textBubble(msg);
                    $("#chatbox_input").val() = "";
                }).fail(function () {
                    alert("Unable to send data to server");
                });
            }, function ( error ) {
                alert("Failed to get geographic location: " + error.code + ": " + error.message);
            });
        } else {
            alert("Browser does not support geolocation API");
        }
    }
}