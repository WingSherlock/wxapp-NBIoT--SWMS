<?php
  $conn=mysqli_connect
("","","");//服务器地址，用户名，密码
if(!$conn)
{
   die('Could not connect:'.mysql_error());
}
mysqli_select_db($conn,"ljl");
mysqli_set_charset($conn,'utf8');

$sql="update warehouse set num=$_POST[num] where id=$_POST[id]";
$result=mysqli_query($conn,$sql);

echo json_encode("ok");
mysqli_close($conn);
?>