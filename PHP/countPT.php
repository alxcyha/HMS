<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (GET in this case)
header('Access-Control-Allow-Methods: GET');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Fetching data from a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $dbPassword = '';

  try {
    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('SELECT COUNT (patient_id) FROM pat_entry');

    // Execute the prepared statement
    $stmt->execute();

    // Fetch all rows from the result set as an associative array
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the fetched data as JSON response
    header('Content-Type: application/json');
    echo json_encode($result);
  } catch (PDOException $e) {
    // Return an error response
    $response = [
      'success' => false,
      'message' => 'Error: ' . $e->getMessage()
    ];
    echo json_encode($response);
  }
} else {
  // Return an error response if the request method is not GET
  $response = [
    'success' => false,
    'message' => 'Invalid request method'
  ];
  echo json_encode($response);
}
