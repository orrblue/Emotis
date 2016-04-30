<?php

#if (! ($fh = fopen("dump.data", "a")) ||
#    ! fwrite($fh, $_POST['lat'] . "," .
#                  $_POST['lng'] . "," .
#                  $_POST['text'] . "," .
#                  $_POST['color'])) {
#    echo("A OK");
#} else {
#    echo("ERROR");
#}

if (isset($_POST['lat']) &&
    !empty($_POST['lat']) &&
    isset($_POST['lng']) &&
    !empty($_POST['lng']) &&
    isset($_POST['text']) &&
    !empty($_POST['text']) &&
    isset($_POST['color']) &&
    !empty($_POST['color'])
) {
    echo("${_POST['text']}:${_POST['color']}:${_POST['lat']}:${_POST['lng']}");
} else {
    echo("ERROR");
}

?>
