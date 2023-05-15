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
    $pass = $_POST['pass'];
    $email = $_POST['email'];
    
    $sql = "UPDATE ytTable SET pass='$pass' WHERE email='$email';";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "procedure created successfully";
    }
    else {
        echo "Error!";
    }
    $conn->close();
}
?>
