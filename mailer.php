<?php
	if (eregi('tempsite.ws$|locaweb.com.br$|hospedagemdesites.ws$|websiteseguro.com$|publiccloud.com.br$', $_SERVER[HTTP_HOST])) {
	        $emailsender='wesandradealves@gmail.com';
	} else {
	        $emailsender = "webmaster@" . $_SERVER[HTTP_HOST];
	}
	 
	if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n"; //Se for Windows
	else $quebra_linha = "\n"; //Se "nÃ£o for Windows"
	 
	$nomeremetente     = $_POST['nomeremetente'];
	$emailremetente    = $_POST['emailremetente'];
	$emaildestinatario = "wesandradealves@gmail.com";
	$assunto           = $_POST['assunto'];
	$mensagem          = $_POST['mensagem'];
	$telefone          = $_POST['telefone'];
	 
	 
	$mensagemHTML = '<p><b><i>Email: '.$emailremetente."<br/><br/>Telefone: ".$telefone."<br/><br/>Nome: ".$nomeremetente."<br/><br/>Assunto: ".$assunto."<br/><br/>".$mensagem.'</i></b></p><br/><img src="http://howeletronicos.com.br/nav1000/hml/img/logo_how.png"/> ';
	  
	$headers = "MIME-Version: 1.1" .$quebra_linha;
	$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;
	$headers .= "From: " . $emailsender.$quebra_linha;
	$headers .= "Reply-To: " . $emailremetente . $quebra_linha;
	 
	if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){ // Se for Postfix
	    $headers .= "Return-Path: " . $emailsender . $quebra_linha; // Se "não for Postfix"
	    mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
	}

	header("Location: contato.php");
 	exit;
?>