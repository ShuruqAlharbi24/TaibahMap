<?php
//database connection
$conn = new mysqli('localhost','root','','taibahmap');
if ($conn->connect_error) {
    die('Connect Error: ' . $conn->connect_error);
}else{
    //feedback page store in database users input
$FeedbackType = $_POST['feedbackType'];
$FeedbackMessage = $_POST['message'];
$Email = $_POST['userEmail'];
    $stmt = $conn->prepare("insert into Feedback(FeedbackType,FeedbackMessage,Email)
    values(?,?,?)");
    $stmt->bind_param("sss",$FeedbackType,$FeedbackMessage,$Email);
    $stmt->execute();
    function_alert("...شكرا لمشاركتكم نتمنى لكم يوما سعيدا");
    $stmt->close();
    $conn->close();
}

function function_alert($msg) {
    echo "<script type='text/javascript'>
    window.location.href='../index.php';
    alert('$msg');</script>";
}

?>