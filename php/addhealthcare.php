<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "healthcare";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $biomedical = $_POST['biomedical'];
    $plastic = $_POST['plastic'];
    $chemical= $_POST['chemical'];
    $glass = $_POST['glass'];
    $metal= $_POST['metal'];

    $sql = "INSERT INTO agricultural VALUES ('$biomedical', '$plastic','$glass','$chemical','$metal');";
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
