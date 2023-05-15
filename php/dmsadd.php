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
    $food = $_POST['food'];
    $plastic = $_POST['plastic'];
    $textile = $_POST['textile'];
    $glass = $_POST['glass'];
    $metal = $_POST['metal'];
    $paper = $_POST['paper'];

    // Retrieve the latest pid from the pickup table
    $sql = "SELECT pid FROM pickup ORDER BY pid DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $latestPid = $row['pid'];

        // Calculate the total cost
        $totalCost = ($food + $plastic + $textile + $glass + $metal + $paper) * 10;

        // Update the cost in the domestic table
//        $sql = "UPDATE domestic SET cost = '$totalCost' WHERE pid = '$latestPid'";
        $sql = "INSERT INTO domestic VALUES ('$latestPid', '$food', '$plastic', '$textile', '$glass', '$metal', '$paper','$totalCost')";
        $updateRes = mysqli_query($conn, $sql);

        if ($updateRes) {
            echo "Please Pay $totalCost to Confirm your pickup ";
        }
        else {
            echo "Error updating the cost!";
        }
    }
    else {
        echo "Error retrieving the latest pid";
    }

    $conn->close();
}
?>
