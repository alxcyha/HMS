<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (GET and POST in this case)
header('Access-Control-Allow-Methods: GET, POST');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

// Check if the request method is OPTIONS (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // Return early for preflight requests
  exit;
}

// Check the request method
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  // Handle GET request

  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Fetching data from a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $dbPassword = '';

  try {
    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('CALL GetOccupiedAndVacantRooms();');

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
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Handle POST request

  // Perform any necessary validation or processing

  // Insert the data into the database or perform other actions as needed
  // Example: Saving data to a MySQL database using PDO
  $dsn = 'mysql:host=localhost;dbname=hmstry';
  $username = 'root';
  $dbPassword = '';

  try {
    $pdo = new PDO($dsn, $username, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Extract the data from the POST request
    $data = $_POST['data'];

    // Example: Inserting data into a table
    $stmt = $pdo->prepare('INSERT INTO your_table_name (column_name) VALUES (:data)');
    $stmt->bindParam(':data', $data);
    $stmt->execute();

    // Return a success response
    $response = [
      'success' => true,
      'message' => 'Data inserted successfully'
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
  // Return an error response if the request method is not GET or POST
  $response = [
    'success' => false,
    'message' => 'Invalid request method'
  ];
  echo json_encode($response);
}
