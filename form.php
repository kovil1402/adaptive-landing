<?php 
$con = mysqli_connect('localhost','root','','faststart_form_orders');
if (!$con) {    
    die("Не удалось подключиться к БД: " . mysqli_connect_error());
    }
mysqli_set_charset($link , "utf8");
$name = htmlspecialchars($_POST['form1-name']);
$email = htmlspecialchars($_POST['form1-email']);
echo $_POST['form1-email'];















?>