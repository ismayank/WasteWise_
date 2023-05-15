<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "youtube_table";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $email = $_POST['email'];
    $pass = $_POST['pass'];
    date_default_timezone_set('Asia/Kolkata');
    $datet = date('Y-m-d H:i:s');

    $sql = "INSERT INTO login VALUES ('$email', '$pass', '$datet')";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success";
    }
    else {
        echo "Error!";
    }
    $conn->close();
}
?>
