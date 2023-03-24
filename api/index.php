<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


require "vendor/autoload.php";

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;


$mail->Username = "admin@eclipsis.dev";
$mail->Password = "npjrjqjaycwpeyvm";

$mail->setFrom($email, $name);
$mail->AddReplyTo($email);
$mail->addAddress("admin@eclipsis.dev");

$mail->Subject = $subject;
$mail->Body = $message . " " . $email . " " . $name;

$mail->send();

echo "email sent";