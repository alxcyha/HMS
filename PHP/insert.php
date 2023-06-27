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
  $userName = $requestData['userName'];
  $password = $requestData['password'];
  $userType = $requestData['userType'];

  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Inserting into a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $dbPassword = '';

  try {
    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if ($userType === 'patient') {
      // Prepare the SQL statement for patient
      $stmt = $pdo->prepare('INSERT INTO patient_admin (patient_id, password) VALUES (?, ?)');
    } elseif ($userType === 'doctor') {
      // Prepare the SQL statement for doctor
      $stmt = $pdo->prepare('INSERT INTO doctor_admin (doctor_id, password) VALUES (?, ?)');
    } else {
      // Return an error response for unsupported userType
      $response = [
        'success' => false,
        'message' => 'Unsupported userType'
      ];
      echo json_encode($response);
      exit;
    }

    // Bind the values to the statement parameters
    $stmt->bindValue(1, $userName);
    $stmt->bindValue(2, $password);

    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Insert registration successful'
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
