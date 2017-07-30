<?php

$hostname='127.0.0.1';
$username='root';
$password='';
$dbname='localhome';

$conn=mysqli_connect($hostname, $username, $password, $dbname) OR DIE('Unable to connect to database! Please try again later.');

?>