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
} else {
    $biomedical = $_POST['biomedical'];
    $plastic = $_POST['plastic'];
    $chemical = $_POST['chemical'];
    $metal = $_POST['metal'];
    $glass = $_POST['glass'];

    // Retrieve the latest pid from the pickup table
    $sql = "SELECT pid FROM pickup ORDER BY pid DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $latestPid = $row['pid'];

        // Calculate the total cost
        $totalCost = ($biomedical + $plastic + $chemical + $metal + $glass) * 20;

        // Update the cost in the healthcare table
        $sql = "INSERT INTO healthcare VALUES ('$latestPid', '$biomedical', '$plastic', '$chemical', '$metal', '$glass', '$totalCost')";
        $updateRes = mysqli_query($conn, $sql);

        if ($updateRes) {
            echo "Please Pay $totalCost to Confirm your pickup";
        } else {
            echo "Error updating the cost!";
        }
    } else {
        echo "Error retrieving the latest pid";
    }

    $conn->close();
}
?>
