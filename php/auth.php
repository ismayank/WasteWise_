<?php
$servername = "localhost"; // Replace with your server name
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "youtube_table"; // Replace with your MySQL database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
else{
// Get user input
$email = $_POST['email'];
$pass = $_POST['pass'];

// Sanitize user input
$email = mysqli_real_escape_string($conn, $email);
$pass = mysqli_real_escape_string($conn, $pass);

// Query database
$sql = "SELECT * FROM ytTable WHERE email='$email' AND pass ='$pass'";
$result = mysqli_query($conn, $sql);

// Check if user exists
if (mysqli_num_rows($result) > 0) {
    // User exists, return success message to JavaScript
    echo "success";
} else {
    // User does not exist, return error message to JavaScript
    echo "error";
}

// Close connection
mysqli_close($conn);
}
?>
