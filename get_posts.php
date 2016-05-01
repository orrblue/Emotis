<?php
	include "sessions.php";

	$udir = "data/users/${_SESSION['id']}";

	if (! ($udir_h = dir($udir))) {
		panic("Unable to open user dir");
	}

	function read_pins($dname, $dh) {
		$jarr = array();

		$dh->rewind();
		for ($i = 0; ($entry = $dh->read()) !== false;) {
			if (strlen($entry) != 40) { // 40 bytes is the length of a hex-encoded sha1 sum
				continue;
			}

			$msgfile = "${dname}/${entry}";
			if (! ($jpin = file_get_contents($msgfile))) {
				panic("Could not read message queue file: $msgfile");
			}

			$jarr[$i] = json_decode($jpin);

			if (! unlink($msgfile)) {
				panic("Error deleting $msgfile");
			}

			$i++;
		}

		return array(
			"numPins" => $i,
			"pinArray" => $jarr,
		);
	}

#	if (! ($in = inotify_init())) {
#		panic("Error opening inotify instance");
#	} 
#	$watch = inotify_add_watch($in, $udir, IN_CREATE);
#
#	while (($pins = read_pins($udir, $udir_h)) && $pins['numPins'] == 0) {
#		inotify_read($in);
#	}
	while (($pins = read_pins($udir, $udir_h)) && $pins['numPins'] == 0) {
		sleep(1);
	}

	echo(json_encode($pins['pinArray']));
?>
