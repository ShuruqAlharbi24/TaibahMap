<?php
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);

require '../../../../php/vendor/autoload.php';



if(isset($_POST['btnExcel'])){
    $fileName = $_FILES['excelImport']['name'];
    $fileExt = pathinfo($fileName, PATHINFO_EXTENSION);
    $allowedExtension = ['xls','csv','xlsx'];
    
    if(in_array($fileExt,$allowedExtension)){
        $inputFileNamePath = $_FILES['excelImport']['tmp_name'];
        /** Load $inputFileName to a Spreadsheet object **/
        $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($inputFileNamePath);
        $data = $spreadsheet->getActiveSheet()->toArray();

        $count = "0";

        
     foreach($data as $row){
               if($count>0){
                $building = $row[0];
                $class = $row[1];
                $date = date('Y-m-d' ,strtotime($row[2]));
                $from = $row[3];
                $to = $row[4];
                $lecturer = $row[5];
    
                $studentQuery = "INSERT INTO reservationschedule(theDate,ClassroomBuilding,ClassroomID,FromTime,ToTime,LecturerName) 
                    VALUES('$date','$building','$class','$from','$to','$lecturer')";
                $result = mysqli_query($conn, $studentQuery);
    
                function_alert("تمت إضافة الجدول بنجاح");
                }else{
                $count = "1";
                } 
            }
        }
    else{
        function_alert("صيغة الملف غير صالحة");
    }

}





function function_alert($msg) {
    echo "<script type='text/javascript'>
    window.location.href='../MCO.php';
    alert('$msg');</script>";
}


?>