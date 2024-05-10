<?php
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);


    $sql = "SELECT * FROM classroom
    WHERE Building_name LIKE '%".$_GET['id']."%'"; 
    $result = $conn->query($sql);
    $json = [];
       while($row = $result->fetch_assoc()){
            $json[$row['ClassroomID']] = $row['ClassroomID'];
       }
     echo json_encode($json);   
     
     

?>
