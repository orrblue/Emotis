<?php
    include "panic.php";

    session_start();

    if (! isset($_SESSION['id'])) {
        $_SESSION['id'] = md5(microtime());
    }
    if (! file_exists("data/users/${_SESSION['id']}") && ! mkdir("data/users/${_SESSION['id']}")) {
        panic("Unable to create user dir");
    }
?>
