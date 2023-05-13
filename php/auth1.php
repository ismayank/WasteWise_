<?php
// Assuming the database connection is already established
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "youtube_table";

// Retrieve the email and password from the login form
$email = $_POST['email'];
$pass = $_POST['pass'];

// Prepare and execute the SQL query
$stmt = $conn->prepare("SELECT * FROM ytTable WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// Check if a matching record is found
if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();

    // Verify the password
    if (password_verify($pass, $row['pass'])) {
        // Authentication successful
        echo "Login successful!";
    } else {
        // Invalid password
        echo "Invalid password!";
    }
} else {
    // No matching record found
    echo "Email not found!";
}
$stmt->close();
$conn->close();
?>
