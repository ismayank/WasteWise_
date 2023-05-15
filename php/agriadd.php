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
    $crop = $_POST['crop'];
    $livestock = $_POST['livestock'];
    $plant = $_POST['plant'];
    $wood = $_POST['wood'];

    // Retrieve the latest pid from the pickup table
    $sql = "SELECT pid FROM pickup ORDER BY pid DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $latestPid = $row['pid'];

        // Calculate the total cost
        $totalCost = ($crop + $livestock + $plant + $wood) * 5;

        // Update the cost in the agricultural table
        $sql = "INSERT INTO agricultural VALUES ('$latestPid', '$crop', '$livestock', '$plant', '$wood', '$totalCost')";
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
