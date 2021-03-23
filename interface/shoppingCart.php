<?php

$id=$_POST["id"];

$link=mysqli_connect('localhost','root','123456','jd.com');
$str="SELECT * FROM `goods` WHERE `id` in ($id)";
$res=mysqli_query($link,$str);
$data=mysqli_fetch_all($res,MYSQLI_ASSOC);

echo json_encode($data);


?>