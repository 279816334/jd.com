<?php

$id=$_GET["id"];

$link=mysqli_connect('localhost','root','123456','jd.com');
$str="SELECT * FROM `goods` WHERE `id`='$id'";
$res=mysqli_query($link,$str);
$data=mysqli_fetch_all($res,MYSQLI_ASSOC);

echo json_encode($data);

?>