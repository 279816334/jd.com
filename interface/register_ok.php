<?php


$username=$_REQUEST['username'];
$password=$_REQUEST['password'];

$link=mysqli_connect('localhost','root','123456','jd.com');
$str="INSERT INTO `users` VALUES (null,'$username','$password')";
$res=mysqli_query($link,$str);
// $data=mysqli_fetch_all($res,MYSQLI_ASSOC);
echo json_encode($res);


?>