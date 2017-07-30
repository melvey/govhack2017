<?php 
	session_start();
	require_once 'config.php';
    $userID=_POST('userID');
	$getQuery="SELECT * FROM renter WHERE userID='$userID'";
	
	$nPhoto=$_POST['photo'];
	$nCampus=$_POST['']
	
	$result = mysqli_query($conn, $getQuery);
		if(!$row = mysqli_fetch_assoc($result)){
			
			
			
			
			$insQL="INSERT INTO renter(userID,photo,campus,about) VALUES ('$userID','$photo','$LName','$Age')";
		}
		else{
			$photo=$row['photo'];
			$campus=$row['campus'];
			$about=$row['about'];
		}
?>
