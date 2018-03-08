<?php
$name = $_POST['name'];
$comment = $POST['comment'];

$to = "zombieishungry@yahoo.com";
$subject = "New comment to review for Everthing Rocks!";
$body = "Text content to review: \n\n $name \n $comment";

mail($to,$subject,$body)

// echo "message sent";


 ?>
