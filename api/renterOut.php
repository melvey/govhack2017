<?php 
	session_start();
	require_once 'config.php';
    $userID=_POST('userID');
	$getQuery="SELECT * FROM renter WHERE userID='$userID'";
	
	$result = mysqli_query($conn, $getQuery);
		if(!$row = mysqli_fetch_assoc($result)){
			echo "User not found";
		}
		else{
			$photo=$row['photo'];
			$campus=$row['campus'];
			$about=$row['about'];
		}
?>
