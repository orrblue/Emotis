<?php

include "sessions.php";

if (isset($_POST['lat']) &&
    !empty($_POST['lat']) &&
    isset($_POST['lng']) &&
    !empty($_POST['lng']) &&
    isset($_POST['text']) &&
    !empty($_POST['text']) &&
    isset($_POST['color']) &&
    !empty($_POST['color'])
) {
    $data = json_encode(array(
        "text" => $_POST['text'],
        "color" => $_POST['color'],
        "lat" => $_POST['lat'],
        "lng" => $_POST['lng'],
    ));

    $msghash = hash("sha1", $data);
    $logfile = "data/log/${msghash}";

    if (! ($fh = fopen($logfile, "cw")) ||
        ! fwrite($fh, $data)
    ) {
        panic("Error writing to $logfile");
    }

    if (! ($userdir = dir("data/users"))) {
        panic("Error opening user dir");
    }

    while (false !== ($entry = $userdir->read())) {
        if (strlen($entry) != 32) { // length of MD5 hash
            continue;
        }

        $udir = "data/users/${entry}";
        $qlink = "${udir}/${msghash}";

        if (! ($udir_age = filectime($udir))) {
            panic("Error while stat()ing $udir");
        }

        if (time() - $udir_age < 180) { // 3 minutes
            if (! link($logfile, $qlink)) {
                panic("Unable to create hard link $qlink -> $logfile");
            }
        } else {
            // this section is best-effort because we do not want to return
            // an error code to the client for failing to do something that
            // they didn't really 'ask' us to do
            if (($udir_h = dir($udir))) {
                while (($link = $udir_h->read()) !== false) {
                    unlink("${udir}/${link}");
                }
                rmdir($udir);
                $udir_h->close();
            }
        }
    }

    $userdir->close();
} else {
    panic("Invalid Parameters");
}

?>
