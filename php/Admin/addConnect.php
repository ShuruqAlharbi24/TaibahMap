<?php
//Add Staff 
if (isset($_POST['submit'])) {
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$staffID = $_POST['staffID'];
$role = $_POST['role'];
$Password = $_POST['Password'];
$Email = $_POST['Email'];

include "../connection.php";

$searchUser = "SELECT * FROM staff WHERE staffID = '$staffID'";
$result =  mysqli_query($conn, $searchUser);
$resultRows =  mysqli_num_rows($result);

if($resultRows!=0){
    function_alert("الموظف تمت إضافته مسبقا");

}else{
    $sql = "INSERT INTO staff (FirstName, LastName, staffID , role , Password , Email) 
                    VALUES ('$FirstName', '$LastName', '$staffID' , '$role' , '$Password' , '$Email')";
    if(mysqli_query($conn, $sql)){
    function_alert("تمت إضافة الموظف بنجاح");
    } else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    }
}
}
 function function_alert($msg) {
    echo "<script type='text/javascript'>
    window.location.href='ManageStaff.php';
    alert('$msg');</script>";
 }


?>







