<?php
$name = $_POST['name'];
$comment = $_POST['comment'];

$to = "zombieishungry@yahoo.com";
 $subject = "New comment to review for Everthing Rocks!";
 $body = "Text content to review: \n\n $name \n $comment";

mail($to,$subject,$body)

// echo $name;
// echo $comment;


// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


//Load composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp1.sendgrid.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'EverythingRocks';                 // SMTP username
    $mail->Password = 'W0rdPass1408';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('ejch225@gmail.com', 'Everything Rocks');
    $mail->addAddress('zombieishungry@yahoo.com', 'Eric Charles');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New comment for Everything Rocks from ' . $name;
    $mail->Body    = $name . $comment;
    $mail->AltBody = $name . $comment;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

 ?>
