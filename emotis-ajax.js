$(document).ready(function () {
    $("#chatbox_input").focus();
});

// Fade out banner on first interaction
$("*").one("click", function () {
    $("#banner").fadeOut("slow");
});

function submit_chatbox() {
    var text = $("#chatbox_input").val();
    var color = $("#chatbox_color").val();

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
                alert("[" + msg + "]");
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