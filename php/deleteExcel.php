<?php 
include 'connection.php';
if(isset($_POST['deleteExcel']))
{
    mysqli_query($conn, 'TRUNCATE TABLE `reservationschedule`');
    function_alert("تم حذف الجداول القديمة");
}




function function_alert($msg) {
    echo "<script type='text/javascript'>
    window.location.href='../MCO.php';
    alert('$msg');</script>";
}
?>