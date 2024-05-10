<?php
include 'connection.php';
if(mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_errno().')'. mysqli_connect_error());
}

$select_options = "select DISTINCT Building_name from classroom";
$result = mysqli_query($conn,$select_options);

$reportSQL = "select * from reservationreport order BY ReservationID";
$reportResult = mysqli_query($conn,$reportSQL);
$num = mysqli_num_rows($reportResult);

?>