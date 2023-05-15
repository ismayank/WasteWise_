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
    $biodegradable = $_POST['biodegradable'];
    $chemical = $_POST['chemical'];
    $textile = $_POST['textile'];
    $plastic = $_POST['plastic'];
    $metal = $_POST['metal'];
    $ewaste = $_POST['ewaste'];
    $glass = $_POST['glass'];
    $hazardous = $_POST['hazardous'];

    // Retrieve the latest pid from the pickup table
    $sql = "SELECT pid FROM pickup ORDER BY pid DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $latestPid = $row['pid'];

        // Calculate the total cost
        $totalCost = ($biodegradable + $chemical + $textile + $plastic + $metal + $ewaste + $glass + $hazardous) * 9;

        // Update the cost in the industrial table
        $sql = "INSERT INTO industrial VALUES ('$latestPid', '$biodegradable', '$chemical', '$textile', '$plastic', '$metal', '$ewaste', '$glass', '$hazardous', '$totalCost')";
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
