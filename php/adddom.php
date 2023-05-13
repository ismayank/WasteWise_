<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "domestic";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $food = $_POST['food'];
    $plastic = $_POST['plastic'];
    $textile= $_POST['textile'];
    $glass = $_POST['glass'];
    $metal= $_POST['metal'];
    $paper = $_POST['paper'];

    $sql = "INSERT INTO agricultural VALUES ('$food', '$plastic','$glass','$textile','$metal','$paper');";
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
