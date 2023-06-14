<?php
session_start();

header('Access-Control-Allow-Origin: http://localhost:3000');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Database connection parameters
  $servername = "localhost";
  $username_db = "root";
  $password_db = "";
  $dbname = "hmstry";

  // Create a database connection
  $conn = new mysqli($servername, $username_db, $password_db, $dbname);

  // Check for connection errors
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Fetch the password from the database based on the provided username
  $stmt = $conn->prepare("SELECT password FROM admin WHERE username = ?");
  $stmt->bind_param("s", $username);
  $stmt->execute();
  $stmt->bind_result($hashedPassword);
  $stmt->fetch();

  if ($hashedPassword !== null && $password === $hashedPassword) {
    // Username and password are correct
    $_SESSION['username'] = $username;
    header("Location: C:/xampp/htdocs/HMS/src/componentspages/Login.jsx"); // Redirect to the dashboard page
    exit();
  } else {
    // Username or password is incorrect or user not found
    $error = "Invalid username or password!";
  }

  $stmt->close();
  $conn->close();
}
