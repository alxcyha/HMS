<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (POST in this case)
header('Access-Control-Allow-Methods: POST');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the data from the request body
  $requestData = json_decode(file_get_contents('php://input'), true);

  // Extract the values from the request data
  $doctorID = $requestData['doctorID'];
  $doctorName = $requestData['doctorName'];
  $qualification = $requestData['qualification'];
  $address = $requestData['address'];
  $phoneNumber = $requestData['phoneNumber'];
  $salary = $requestData['salary'];

  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Inserting into a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $password = '';

  try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare the SQL statement
    $stmt = $pdo->prepare('INSERT INTO doc_reg (doctor_id, doctor_name, qualification, address, phone_number, salary) VALUES (?, ?, ?, ?, ?, ?)');

    // Bind the values to the statement parameters
    $stmt->bindValue(1, $doctorID);
    $stmt->bindValue(2, $doctorName);
    $stmt->bindValue(3, $qualification);
    $stmt->bindValue(4, $address);
    $stmt->bindValue(5, $phoneNumber);
    $stmt->bindValue(6, $salary);

    // Execute the statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Doctor registration successful'
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
} else {
  // Return an error response if the request method is not POST
  $response = [
    'success' => false,
    'message' => 'Invalid request method'
  ];
  echo json_encode($response);
}
