<?php

$servername = "localhost";
$username  = "root";
$password = "";
$dbname = "biotech";

$conn=mysqli_connect($servername, $username,$password,$dbname);
// for connecting to the database
if (!$conn){
    die("Connection Failed");
    
}


// if connection fails then stop executing the script and 







?>