COLDIGO.marca = new Object();

$(document).ready(function() {
	
	COLDIGO.marca.carregarMarcas = function(id){
		if(id != undefined){
			select = "#selMarcaEdicao";
		}else{
			select = "#selMarca";
		}
		
		$.ajax({
			type: "GET",
			url: COLDIGO.PATH + "marca/buscar",
			success: function(marcas) {
				
				if (marcas!=""){
					
					$(select).html("");
					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Escolha");
					$(select).append(option);
					
					for (var i = 0; i < marcas.length; i++){
						
						var option = document.createElement("option");
						option.setAttribute("value", marcas[i].id);
						
						if ((id!=undefined)&&(id==marcas[i].id))
							option.setAttribute("selected", "selected");
						
						
						option.innerHTML = (marcas[i].nome);
						$(select).append(option);
						
					}
					
				}else{
					
					$(select).html("");
					
					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Cadastre uma marca primeiro!");
					$(select).append(option);
					$(select).addClass("aviso");
					
				}
				

			},
			error: function(info){
				
				COLDIGO.exibirAviso("Erro ao buscar as marcas: "+ info.status + " - " + info.statusText);
				
				$(select).html("");
				var option = document.createElement("option");
				option.setAttribute("value", "");
				option.innerHTML = ("Erro ao carregar as marcas!");
				$(select).append(option);
				$(select).addClass("aviso");

			}
		})
		
		
	}
	
	COLDIGO.marca.carregarMarcas();
	
	//Cadastra no BD o produto informado
	COLDIGO.marca.cadastrar = function(){
		
		var marca = new Object();
		
		marca.nome = document.frmAddMarca.nome.value;
		
		if(marca.nome == ""){
			COLDIGO.exibirAviso("Preencha o nome da marca!");
			
		} else {
			$.ajax({
				type: "POST",
				url: COLDIGO.PATH + "marca/inserir",
				data: JSON.stringify(marca),
				success: function (msg) {
					COLDIGO.exibirAviso(msg);
					$("#addMarca").trigger("reset");
					COLDIGO.marca.buscar();
				},
				error: function (info){
					COLDIGO.exibirAviso("Erro ao cadastrar uma nova marca: " + info.status + " - " + info.statusText);
				}
			});
			
		}
		
	}
	
	COLDIGO.marca.buscar = function(){
		
		var valorBusca = $("#campoBuscaMarca").val();		
		
		$.ajax({
				type: "GET",
				url: COLDIGO.PATH + "marca/buscarPorNome",
				data: "valorBusca=" + valorBusca,
				success: function(dados){
					console.log(dados)
					$("#listaMarcas").html(COLDIGO.marca.exibir(dados));
					
				},
				error: function(info){
					COLDIGO.exibirAviso("Erro ao consultar as marcas: "+ info.status + " - " + info.statusText);
				}
			});
		
	}
		
		//Transforma os dados dos produtos recebidos do servidor em uma tabela HTML
	COLDIGO.marca.exibir = function(listaDeMarcas){
		
		var tabela = "<table>" +
		"<tr>" +
		"<th>Marca</th>" +
		"<th class='acoes'>Ações</th>" +
		"</tr>";
		
		if(listaDeMarcas != undefined && listaDeMarcas.length > 0){
			
			for (var i=0; i<listaDeMarcas.length; i++){
				tabela += "<tr>" +
				"<td>"+listaDeMarcas[i].nome+"</td>" +
				"<td>" +
					"<a onclick=\"COLDIGO.marca.exibirEdicao('"+listaDeMarcas[i].id+"')\"><img src='../../imgs/edit.png' alt='Editar Registro'></a> " +
					"<a onclick=\"COLDIGO.marca.excluir('"+listaDeMarcas[i].id+"')\"><img src='../../imgs/delete.png' alt='Excluir Registro'>"+
				"</td>" +
				"</tr>"
			}
			
		}else if(listaDeMarcas == ""){
			tabela += "<tr><td colspan='6'>Nenhum registro encontrado</td></tr>";
		}
		
		tabela += "</table>";
		
		return tabela;
		
	}
	

	
	//Executa a função de buscar ao carregar a página
	COLDIGO.marca.buscar();
	
	//Exclui o marca selecionado
	COLDIGO.marca.excluir = function(id){
		$.ajax({
			type:"DELETE",
			url: COLDIGO.PATH + "marca/excluir/"+id,
			success: function(msg){
				COLDIGO.exibirAviso(msg);
				COLDIGO.marca.buscar();
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao excluir marca: "+ info.status + " - "+ info.statusText);
			}
		});
		
	};
	
	
	COLDIGO.marca.exibirEdicao = function(id){
		$.ajax({
			type:"GET",
			url: COLDIGO.PATH + "marca/buscarPorId",
			data: "id="+id,
			success: function(marca){
				
				document.frmEditaMarca.idMarca.value = marca.id;
				document.frmEditaMarca.marcaNome.value = marca.nome;
				
				console.log(marca.id)
				
				//COLDIGO.produto.carregarMarcas(marca.id);
				
				var modalEditaMarca = {
					title: "Editar Marca",
					height: 400,
					width: 550,
					modal: true,
					buttons: {
						"Salvar": function(){
							
							
							COLDIGO.marca.editar();
							
						},
						"Cancelar": function(){
							$(this).dialog("close");
						}
					},
					close: function(){
						//caso o usuário simplismente feche a caixa de edição
						//não deve acontecer nada
					}
				};
				
				$("#modalEditaMarca").dialog(modalEditaMarca);
				
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao buscar marca para edição "+ info.status + " - " + info.statusText);
			}
 		});
	
	}
	
	//Realiza a edição dos dados no BD
	COLDIGO.marca.editar = function(){
		
		var marca = new Object();
		marca.id = document.frmEditaMarca.idMarca.value;
		marca.nome = document.frmEditaMarca.marcaNome.value;
		
		$.ajax({
			type: "PUT",
			url: COLDIGO.PATH + "marca/alterar",
			data: JSON.stringify(marca),
			success: function(msg){
				
				COLDIGO.exibirAviso(msg);
				COLDIGO.marca.buscar();
				$("#modalEditaMarca").dialog("close");
				
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao editar marca: "+ info.status + " - " + info.statusText);
			}
		})
		
	}
	
});