<?php
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);

$ExcelShow = "select * from reservationschedule";
$ExcelShowResult = mysqli_query($conn,$ExcelShow);
$Excelnum = mysqli_num_rows($ExcelShowResult);


if(isset($_POST['checking_view'])){

if($Excelnum>0){  
    echo "<table style='border: 1px solid white;'>
        <thead>
        <tr'>
            <td class='col-2'>المبنى</td>
			<td class='col-2'>القاعة</td>
			<td class='col-2'>التاريخ</td>
			<td class='col-2'>من</td>
            <td class='col-2'>الى</td>
			<td class='col-2'>عضو هيئة التدريس</td>
		</tr>
        </thead>


"; 
    while($data = mysqli_fetch_array($ExcelShowResult)){ 
        echo "
        <tr>
        <td class='col-2'>$data[ClassroomBuilding]</td>
        <td class='col-2'>$data[ClassroomID]</td>
        <td class='col-2'>$data[theDate]</td>
        <td class='col-2'>$data[FromTime]</td>
        <td class='col-2'>$data[ToTime]</td>
        <td class='col-2'>$data[LecturerName]</td>
        </tr>   
        ";   

    }
}
    else{
        echo "لم يتم اضافة جدول";
    }

echo "</table>";
}
?>