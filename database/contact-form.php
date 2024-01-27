<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email information
    $to = 'jericho.paningbatan@echoodev.tech'; 
    $subject = 'Client Message';
    $message_body = "Name: $firstname $lastname\nEmail: $email\n\n$message";

    // SMTP Configuration
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.zoho.eu';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'jericho.paningbatan@echoodev.tech';
        $mail->Password   = 'H9kXWsRyELDv';
        $mail->SMTPSecure = "tls"; 
        $mail->Port       = 587; 

        // Set the "From" address to the authenticated user
        $mail->setFrom('jericho.paningbatan@echoodev.tech');

        //Recipients
        $mail->addAddress($to);

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $message_body;

        $mail->send();
        echo '<p>Your message has been sent successfully. Thank you!</p>';
    } catch (Exception $e) {
        echo '<p>Sorry, there was an error sending your message. Error: ' . $mail->ErrorInfo . '</p>';
    }
}

?>
