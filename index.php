<?php
if(isset($_POST["convert"])){
    $xmlinput = $_POST["xml"];
    $xmldata = simplexml_load_string($xmlinput);
    $jsonoutput = json_encode($xmldata, JSON_PRETTY_PRINT);
}
?>
<form action="" method="POST">
<textarea name="xml" id="xml" cols="30" rows="10"><?= $xmlinput ?></textarea>
<textarea name="json" id="json" cols="30" rows="10"><?= $jsonoutput ?></textarea>
<button type="submit" name="convert">convert</button>
</form>