<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods
header('Access-Control-Allow-Methods: PUT');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Fetch the request body data
$data = json_decode(file_get_contents('php://input'), true);

// Update the data in the database
try {
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $dbPassword = '';
  
  $pdo = new PDO($dsn, $username, $dbPassword);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  $stmt = $pdo->prepare('UPDATE all_doctors SET doctor_name = :doctor_name, department_name = :department_name WHERE doctor_id = :doctor_id');
  $stmt->bindParam(':doctor_name', $data['doctorName']);
  $stmt->bindParam(':department_name', $data['departmentName']);
  $stmt->bindParam(':doctor_id', $data['doctorID']);
  
  // Execute the prepared statement
  $stmt->execute();
  
  // Return a success response
  $response = [
    'success' => true,
    'message' => 'Doctor updated successfully'
  ];
  echo json_encode($response);
} catch (PDOException $e) {
  // Return an error response
  $response = [
    'success' => false,
    'message' => 'Error: ' . $e->getMessage()
  ];
  echo json_encode($response);
}
