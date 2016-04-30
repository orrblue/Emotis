<?php

if (! ($fh = fopen("dump.data", "a")) ||
    ! fwrite($fh, $_POST['lat'] . "," .
                  $_POST['lng'] . "," .
                  $_POST['text'] . "," .
                  $_POST['color'])) {
    
} else {
    echo("ERROR");
}

?>
