<?php

$username=$_POST["username"];

$link=mysqli_connect('localhost','root','123456','jd.com');
$str="SELECT * FROM `users` WHERE `username` ='$username'";
$res=mysqli_query($link,$str);
$data=mysqli_fetch_all($res,MYSQLI_ASSOC);

if(count($data)){
    $arr=[
        'code'=>1
    ];
}else{
    $arr=[
        'code'=>2
    ];
}

echo json_encode($arr);

?>