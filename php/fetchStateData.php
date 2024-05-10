<?php
ini_set('display_error',1);
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);

$kk = $_POST['y'];
$k = $_POST['x'];
$dd = $_POST['d'];
$tt = $_POST['t'];
$ttt = $_POST['tt'];

$statues = "SELECT * FROM reservationschedule WHERE ClassroomID = '$k' AND 
ClassroomBuilding = '$kk' AND theDate ='$dd' AND FromTime <= '$ttt' AND ToTime >= '$tt'"; 
$result = mysqli_query($conn,$statues);


$statues2 = "SELECT * FROM reservationreport WHERE ClassroomID = '$k' AND 
ClassroomBuilding = '$kk' AND theDate ='$dd' AND FromTime <= '$ttt' AND ToTime >= '$tt'"; 
$result2 = mysqli_query($conn,$statues2);



$rnumStatues = $result->num_rows;
$rnumStatues2 = $result2->num_rows;


if($rnumStatues == 0 && $rnumStatues2 == 0) {
    $data['state'] = 'متاحة';
}
else {
    $data['state'] = 'غير متاحة';
}




echo json_encode($data);

?>