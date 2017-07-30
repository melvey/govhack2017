<?php

function distanceCheck($campusID, $hostID){
require_once 'config.php';
require_once 'hDistance.php';

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
			
return hDistance($campX, $campY, $hostX, $hostY);
}
?>