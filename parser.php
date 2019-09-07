<?php
if ( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg']) ){
    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $message = nl2br(addslashes($_POST['msg'])); 
    
    $file = file_get_contents("contact_form_submit.txt"); // Specifying the name of the file
    $new = $file . "\n name : ".$name. "\n email : " .$email. "\n message : " .$message ;
    $setContent = file_put_contents("contact_form_submit.txt", $new);
    if ($setContent) {
        echo "success";
    } else {
        echo "Failed";
    }
}

?>