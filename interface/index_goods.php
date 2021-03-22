<?php


$link=mysqli_connect('localhost','root','123456','jd.com');
$str="SELECT * FROM `goods`";
$res=mysqli_query($link,$str);
$data=mysqli_fetch_all($res,MYSQLI_ASSOC);
echo json_encode($data);


?>