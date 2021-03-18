<?php


$username=$_POST['username'];
$password=$_POST['password'];

$link=mysqli_connect('localhost','root','123456','users');
$str="INSERT INTO `users` VALUES (null,$username,$password)";
$res=mysqli_query($link,$str);
// $data=mysqli_fetch_all($res,MYSQLI_ASSOC);
echo json_encode($res);

?>