<?php
// Path to your XML file
$xmlFile = '../XML/out.xml';

// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow specific HTTP methods (GET in this case)
header('Access-Control-Allow-Methods: GET');

// Allow specific headers
header('Access-Control-Allow-Headers: Content-Type');

try {
  // Read the XML file content
  $xmlContent = file_get_contents($xmlFile);

  // Create a SimpleXMLElement object from the XML content
  $xml = new SimpleXMLElement($xmlContent);

  // Convert SimpleXMLElement object to associative array
  $xmlArray = json_decode(json_encode($xml), true);

  // Set the response content type to JSON
  header('Content-Type: application/json');

  // Output the XML content as JSON
  echo json_encode($xmlArray);
} catch (Exception $e) {
  // Error message
  echo 'Error: ' . $e->getMessage();
}
