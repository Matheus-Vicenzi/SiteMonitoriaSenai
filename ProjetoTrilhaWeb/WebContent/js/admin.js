//Cria o Objeto COLDIGO que será usado como identificador do projeto
COLDIGO = new Object();

$(document).ready(function() {
	
	//Cria uma constante com valor da URI raiz do REST
	COLDIGO.PATH = "/ProjetoTrilhaWeb/rest/";
	
	$("header").load("/ProjetoTrilhaWeb/pages/admin/general/header.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/admin/general/footer.html");
	
	
	//Função de carregamento de página de conteúdo que recebe como 
	//parâmetro o nome da pasta com a página a ser carregada
	COLDIGO.carregaPagina = function(pagename){
		//Remove o conteúdo criado na abertura de uma janela modal pelo jQuery
		if($(".ui-dialog"))
			$(".ui-dialog").remove();
		//Limpa a tag section
		$("section").empty();
		//Carrega a página solicitada dentro da tag section
		$("section").load(pagename+"/",function(response, status, info){
			if (status == "error"){
				var msg = "houve um erro ao tentar encontrar a página: "+ info.status + " - " + info.statusText;
				$("section").html(msg);
			}
		
		});
	}
	COLDIGO.carregaPagina("marcas");
	//Exibe os valores financeiros no formato da moeda Real
	COLDIGO.formatarDinheiro = function(valor){
		return valor.toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
	}
	
	//Define as configurações base de uma modal de aviso
	COLDIGO.exibirAviso = function(aviso){
		var modal = {
			title: "Mensagem",
			height: 250,
			width: 400,
			modal: true,
			buttons: {
				"OK": function(){
					$(this).dialog("close");
				}
			}
		};
		$("#modalAviso").html(aviso);
		$("#modalAviso").dialog(modal);
	}
	
});