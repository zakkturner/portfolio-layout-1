<?php
header('Content-Type: application/json');

$to_email = "zakkturner1993@gmail.com";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$email_subject = "New Message from Portfolio Form";
$emai

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(array('success' => false, 'message' => 'Please fill in all the required fields.'));
    exit;
  }
  
  // Build the email message
  $email_subject = 'New message from contact form';
  $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
  
  // Set the email headers
  $headers = "From: $email\n";
  $headers .= "Reply-To: $email\n";
  
  // Send the email
  if (mail($to_email, $email_subject, $email_body, $headers)) {
    echo json_encode(array('success' => true));
  } else {
    http_response_code(500);
    echo json_encode(array('success' => false, 'message' => 'An error occurred while sending the email.'));
  }