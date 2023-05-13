<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "";
$database = "agricultural";

$conn = new mysqli($host, $user, $password, $database);

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
}
else {
    $crop = $_POST['crop'];
    $livestock = $_POST['livestock'];
    $plant= $_POST['plant'];
    $wood = $_POST['wood'];
    
    $sql = "INSERT INTO agricultural VALUES ('$crop', '$livestock','$wood','$plant');";
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
