<?php 
  
    $host = "localhost";
    $dbUserName = "root";
    $dbPassword = "";
    $dbName = "taibahmap";
    $conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);   
    if($conn->connect_error){
        die("Connection failed".$conn->connect_error);
    }



    ?>