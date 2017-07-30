<?php

function getNearBY($hostID){
require_once 'config.php';	
require_once 'hDistance.php';		
$getQuery="SELECT * FROM host WHERE userID='$hostID'";
$result = mysqli_query($conn, $getQuery);
if($row = mysqli_fetch_assoc($result)){
			$hostX=$row['X'];
			$hostY=$row['Y'];
}
else{
	$hostX=0;
	$hostY=0;
}
			
$getQuery="SELECT * FROM park_facility WHERE (X < " .(string)($hostX+0.1) ." or X > ". (string)($hostX-0.1 ).") and (Y <". (string)($hostY+0.1) ."or Y>". (string)($hostY-0.1) .")";
print $getQuery;

$result = mysqli_query($conn, $getQuery);

$facilityL=array();
while($row = mysqli_fetch_assoc($result)){
			$Name=$row['Name'];
			$X=$row['X'];
			$Y=$row['Y'];
			$Type=$row['Type'];
			$distance=hDistance($hostX, $hostY, $X, $Y);
			$facility=array('Name'=>$Name, 'X'=>$X, 'Y'=>$Y, 'Type'=>$Type, 'Distance'=>$distance);
			array_push($facilityL, $facility);
		}
		
return $facilityL;
}
var_dump(getNearBY(2));
?>