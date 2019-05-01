<?php
  $conn=mysqli_connect
("","","");//服务器地址，用户名，密码
if(!$conn)
{
   die('Could not connect:'.mysql_error());
}
mysqli_select_db($conn,"ljl");
mysqli_set_charset($conn,'utf8');

$sql="select * from warehouse where id=$_POST[id]";
$result=mysqli_query($conn,$sql);
$data=array();
while($row=mysqli_fetch_assoc($result)){
$data[]=$row;
}
echo json_encode($data);
mysqli_close($conn);
?>