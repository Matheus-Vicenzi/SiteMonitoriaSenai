function validaFormulario(){
	var nome = document.frmformulario.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	
	if (!expRegNome.test(nome)){
		alert("Preencha o campo Nome corretamente.");
		document.frmformulario.txtnome.focus();
		return false;
	}
	if ((document.frmformulario.txtsexo[0].checked==false)&&(document.frmformulario.txtsexo[1].checked==false)){
			alert("Preencha o campo Sexo.");
			document.frmformulario.txtsexo[0].focus();
			return false;
	}
	if (document.frmformulario.txtdata.value==""){
		alert("Preencha o campo Data. ");
		document.frmformulario.txtdata.focus();
		return false;
	}
	var email = document.frmformulario.txtemail.value;
	var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if (!expRegEmail.test(email)){
		alert("Preencha o campo E-mail corretamente. ");
		document.frmformulario.txtemail.focus();
		return false;
	}
	var fone = document.frmformulario.txttelefone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if (!expRegFone.test(fone)){
		alert("Preencha o campo Telefone corretamente. ");
		document.frmformulario.txttelefone.focus();
		return false;
	}
	if (document.frmformulario.txtparticipar.checked==false){
		alert("Necessário clickar no botão 'Deseja participar?' para continuar. ");
		document.frmformulario.txtparticipar.focus();
		return false;
	}else{
		return true;
	}
}

$(document).ready(function(){
	$("header").load("/ProjetoFaClube/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoFaClube/pages/site/general/menu.html");
	$("footer").load("/ProjetoFaClube/pages/site/general/rodape.html");
})