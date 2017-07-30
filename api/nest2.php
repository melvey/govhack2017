<?php

include_once 'campusOut.php';
include_once  'hostOut.php';
include_once 'distanceCheck.php';
include_once 'nest.php';
include_once 'nearby.php';
 
function listSpecHost($hostID){ 
	
	$userID=5;
   $hostList=getHost($hostID);
   foreach ($hostList as $host){
	   $spHost['hostId']=$host['id'];
	   $spHost['hostName']=getName($host['id']);
	   $spHost['address']=$host['addr'];
	   
	    $camID=getCam($userID);
	   $spHost['campusDist']=distanceCheck($camID, $host['id']);
	   $spHost['price']=$host['price'];
	   $spHost['minStay']=$host['minStay'];
	   $spHost['photo']=$host['photo'];
	   $spHost['amenities']=$host['amenities'];
	   $facilities=getNearBy($host['id']);
	    $spHost['facilities']=array();
	   foreach($facilities as $facl){
		   $facility['type']=$facl['Type'];
		   $facility['distance']=$facl['Distance'];
		   array_push($spHost['facilities'],$facility); 
	   }
	  
   } 
  if($spHost !==NULL){
	  return json_encode($spHost);
  }
}

  print (listSpecHost(1));
   ?>