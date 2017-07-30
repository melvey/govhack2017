<?php


function distanceCheck($campusID, $hostID){
include 'config.php';
include_once 'hDistance.php';
$getQuery="SELECT * FROM campus WHERE campusID ='$campusID'";
$result = mysqli_query($conn, $getQuery);
$row = mysqli_fetch_assoc($result);
			$campName=$row['name'];
			$campX=$row['X'];
			$campY=$row['Y'];
			
			
$getQuery="SELECT * FROM host WHERE userID='$hostID'";
$result = mysqli_query($conn, $getQuery);
$row = mysqli_fetch_assoc($result);
			$hostX=$row['X'];
			$hostY=$row['Y'];
			
$distance=hDistance($campX, $campY, $hostX, $hostY);
return $distance;
}
?>