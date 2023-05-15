<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "youtube_table";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the email and password from the request
$email = $_POST['email'];
$pass = $_POST['pass'];

// Query the database to check if the email and pass exist in ytTable
$sql = "SELECT * FROM ytTable WHERE email = '$email' AND pass = '$pass'";
$result = $conn->query($sql);

// Check if a row was returned
if ($result->num_rows > 0) {
    // Authentication successful
    echo "Authenticated";
} else {
    // Authentication failed
    echo "Authentication Failed";
}

// Close the database connection
$conn->close();
?>
