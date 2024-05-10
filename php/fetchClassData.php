<?php
ini_set('display_error',1);
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);

$kk = $_POST['y'];
$k = $_POST['x'];
$sql = "SELECT * FROM classroom WHERE ClassroomID = '$k' AND Building_name = '$kk'  LIMIT 1"; 
$result = mysqli_query($conn,$sql);
$rnum = $result->num_rows;

if($rnum!=0){
    while($row = mysqli_fetch_array($result)){
        $data['Classcapicity'] = $row["ClassroomCapicity"];
        $data['Classfacilites'] = $row["ClassroomFacilites"];
    }
}  else{
    $data['Classcapicity'] = 'لا توجد بيانات';
    $data['Classfacilites'] = 'لا توجد بيانات';
}  

echo json_encode($data);

?>