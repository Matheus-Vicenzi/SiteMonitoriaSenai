function validaFaleConosco(){
	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
	
	if (!expRegNome.test(nome)){
		alert("Preencha o campo Nome corretamente.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	
	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if (!expRegFone.test(fone)){
		alert("Preencha o campo Telefone corretamente. ");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}
	
	if (document.frmfaleconosco.txtemail.value==""){
		alert("Preencha o campo email");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
	
	if (document.frmfaleconosco.selmotivo.value==""){
		alert("Preencha o campo Motivo. ");
		document.frmfaleconosco.selmotivo.focus();
		return false;
	}
	
	if (document.frmfaleconosco.selmotivo.value=="PR"){
		if (document.frmfaleconosco.selproduto.value==""){
			alert("Preencha o campo Produto. ");
			document.frmfaleconosco.selproduto.focus();
			return false;
		}
	}
	
	if (document.frmfaleconosco.txtcomentario.value==""){
		alert("Preencha o campo Comentário. ");
		document.frmfaleconosco.txtcomentario.focus();
		return false;
	}
	return true;
}

function verificaMotivo(motivo){
	var elemento = document.getElementById("opcaoProduto");
	
	if (motivo=="PR"){
		//criar um elemento (tag) <select> e guardar na variável homônima
		var select = document.createElement("select");
		//setar no novo select o atributo "nome" com valor de 'selproduto'
		select.setAttribute("name", "selproduto");
		//Conteúdo atual da variável select:
		//<select name="selproduto"></select>
		
		//Criar elemento <option> e guardar na variável homônima
		var option = document.createElement("option");
		//setar no novo option o atributo 'value' com valor vazio
		option.setAttribute("value", "");
		//Criar um nó de texto 'escolha' e gravar na variável ''
		var texto = document.createTextNode("Escolha");
		//Colocar o nó como filho da tag option
		option.appendChild(texto);
		//conteúdo atual da variável option:
		//<option value="">Escolha</option>
		
		//colocar o option como filho da tag select
		select.appendChild(option);
		//conteúdo atual da variável select
		//<select name="selproduto"><option value="">Escolha</option></select>
		
		//criar elemento <option> e guardar na variável homônima
		var option = document.createElement("option");
		//setar no option o atributo 'value' com o valor "FR"
		option.setAttribute("value", "FR");
		//Criar um nó de texto "Freezer" e gravar na variável 'texto'
		var texto = document.createTextNode("Freezer");
		//Colocar o nó de texto criado como filho da tag option
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="FR">Freezer</option>
		
		//colocar option como filho da tag select criada
		select.appendChild(option);
		//conteúdo atual da variável select
		/*
		<select name="selproduto">
		<option value="">Escolha</option><option value="FR">Freezer</option>
		</select>
		*/
		
		var option = document.createElement("option");
		option.setAttribute("value", "GE");
		var texto = document.createTextNode("Geladeira");
		option.appendChild(texto);
		select.appendChild(option);
		
		elemento.appendChild(select);
	}else{
		//Se a div possuir algum primeiro filho
		if (elemento.firstChild){
			//remover elemento
			elemento.removeChild(elemento.firstChild);
		}
	}
}

//Assim que o documento HTML for carregado por completo...
$(document).ready(function(){
	//Carrega cabeçalho, menu e rodapé aos respectivos locais
	$("header").load("/ProjetoTrilhaWeb/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/site/general/rodape.html");
});
