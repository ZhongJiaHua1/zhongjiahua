<?php

    //登录功能：接收前端的数据库做查询

    include 'conn.php';

    //接收数据
    $name = isset($_POST['phoneNun']) ? $_POST['phoneNun'] : '';
    $passwords = isset($_POST['passwords']) ? $_POST['passwords'] : '';
    // //查询该用户的账号和密码是否和数据库一致
    $sql = "SELECT * FROM checked WHERE number='$name' and password ='$passwords'";

    //执行语句
    $res = $conn->query($sql);
    if($res->num_rows > 0){
        echo 'yes';
    }else{
        echo 'no';
    }
?>