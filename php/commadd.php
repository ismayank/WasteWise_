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
    $biodegradable = $_POST['biodegradable'];
    $chemical = $_POST['chemical'];
    $electrical = $_POST['electrical'];
    $demolition = $_POST['demolition'];

    $sql = "INSERT INTO commercial (biodegradable, chemical, electrical, demolition) VALUES ('$biodegradable', '$chemical', '$electrical', '$demolition')";
    
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
