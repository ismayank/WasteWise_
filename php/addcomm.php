<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "commercial";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $biodegradable = $_POST['biodegradable'];
    $chemical = $_POST['chemical'];
    $electrical= $_POST['electrical'];
    $demolition = $_POST['demolition'];
    
    $sql = "INSERT INTO agricultural VALUES ('$biodegradable', '$chemical','$demolition','$electrical');";
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
