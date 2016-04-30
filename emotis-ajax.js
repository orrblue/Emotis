function submit_chatbox() {
    var text = $("#chatbox_input").val();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            $.ajax({
                type: "POST",
                url: "submit_chat.php",
                data: {
                    text: text,
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
            }).done(function () {
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
