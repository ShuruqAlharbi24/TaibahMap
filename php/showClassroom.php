<?php
$k = $_POST['id'];
$k = trim($k);
$host = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "taibahmap";
$conn = new mysqli($host,$dbUserName,$dbPassword,$dbName);
$sql = "select * from classroom where Building_name='{$k}'";
$result = mysqli_query($conn,$sql);

while($rows = mysqli_fetch_array($result)){
    ?>
    <tr>
        <td><?php  echo $rows['ClassroomID'];          ?></td>
        <td><?php  echo $rows['ClassroomCapicity'];    ?></td>
        <td><?php  echo $rows['ClassroomFacilites'];    ?></td>
        
        
    </tr>
<?php
echo $sql;
}
?>