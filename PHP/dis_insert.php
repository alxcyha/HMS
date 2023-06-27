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
  $patient_id = $requestData['patient_id'];
  $treatment_given = $requestData['treatment_given'];
  $treatment_advice = $requestData['treatment_advice'];
  $payment_made = $requestData['payment_made'];
  $mode_of_payment = $requestData['mode_of_payment'];
  $date_of_discharge = $requestData['date_of_discharge'];

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
    $stmt = $pdo->prepare("INSERT INTO pat_dis (patient_id, treatment_given, treatment_advice, payment_made, mode_of_payment, date_of_discharge) VALUES (?, ?, ?, ?, ?, ?)");

    // Bind the values to the statement parameters
    $stmt->bindParam(1, $patient_id);
    $stmt->bindParam(2, $treatment_given);
    $stmt->bindParam(3, $treatment_advice);
    $stmt->bindParam(4, $payment_made);
    $stmt->bindParam(5, $mode_of_payment);
    $stmt->bindParam(6, $date_of_discharge);

    // Execute the prepared statement
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Discharge form submitted'
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
