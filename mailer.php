<?php

// Subject array start here
// storing subject values in an array

$subject_array = array("NO SUBJECT","LEAD GENERATION","COPYWRITING","WEB DESIGN","EMAIL MARKETING & LIST MANAGEMENT","TRAFFIC GENERATION","WEBSITE CONVERSION TWEAK & SPLIT TEST","CONSULTING","VIDEO PRODUCTION","DONE-FOR-YOU MARKETING");




/* Set e-mail recipient */
$myemail = "ceo@tomermedia.com";

/* Check all form inputs using check_input function */
$name = check_input($_POST['name'], "Your Name");
$company = check_input($_POST['company'], "Your Company");
$skype = check_input($_POST['skype'], "Your Skype Address");
$phone = check_input($_POST['phone'], "Your Phone Number");
$email = check_input($_POST['email'], "Your E-mail Address");

/*$subject = check_input($_POST['subject'], "Message Subject");*/
$message = check_input($_POST['message1'], "Your Message");

$nsubject = check_input($_POST['nsubject'], "Your subject");

$selected_subject = $subject_array[$nsubject];

/* If e-mail is not valid show error message */
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("Invalid e-mail address");
}
/* Let's prepare the message for the e-mail */

$subject = "You recived a new message from contact us";

$message = "

You recived a new message from contact us:

Name: $name

Email: $email

Subject: $subject

New Subject: $selected_subject

Comapny: $company

Skype: $skype

Phone: $phone 

Message: $message

";

/* Send the message using mail() function */
/*mail($name, $myemail, $subject, $message);*/


mail($myemail,$subject,$message,'Header','parameters');

/* Redirect visitor to the thank you page */
header('Location: http://cztsgl.ceffectz.asia/tomermedia/contact.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<p>Please correct the following error:</p>
<strong><?php echo $myError; ?></strong>
<p>Hit the back button and try again</p>

</body>
</html>
<?php
exit();
}
?>