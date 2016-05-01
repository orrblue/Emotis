<?php
	function panic($msg) {
		header("HTTP/1.1 500 Internal Server Error");
		exit($msg);
	}
?>
