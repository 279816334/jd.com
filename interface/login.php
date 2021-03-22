<?php


$username=$_POST["username"];
$password=$_POST["password"];
$link=mysqli_connect('localhost','root','123456','jd.com');
$str="SELECT * FROM `users` WHERE `username`='$username' AND `password`='$password'";
$res=mysqli_query($link,$str);
$data=mysqli_fetch_all($res,MYSQLI_ASSOC);
if(count($data)){
    $arr=[
        'massage' => '正确',
        'code' => '1'
    ];
    
}else{
    $arr=[
        'massage' => '错误',
        'code' => '2'
    ];
  
}

echo json_encode($arr);

?>