COLDIGO.marca = new Object();

$(document).ready(function() {
	
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
					
					$("#listaMarcas").html(COLDIGO.marca.exibir(dados));
					
				},
				error: function(info){
					COLDIGO.exibirAviso("Erro ao consultar as marcas: "+ info.status + " - " + info.statusText);
				}
			});
		
	}
		
		//Transforma os dados dos produtos recebidos do servidor em uma tabela HTML
	COLDIGO.marca.exibir = function(listaDeMarcas){
		
		var checked = "";
		
		var tabela = "<table>" +
		"<tr>" +
		"<th>Marca</th>" +
		"<th class='acoes'>Ações</th>" +
		"<th>Habilitada"+
		"</tr>";
		
		if(listaDeMarcas != undefined && listaDeMarcas.length > 0){
			
			for (var i=0; i<listaDeMarcas.length; i++){
				console.log(listaDeMarcas[i].status)
				if (listaDeMarcas[i].status == 1){
					checked = "checked";
				}
				
				tabela += "<tr>" +
				"<td>"+listaDeMarcas[i].nome+"</td>" +
				"<td>" +
					"<a onclick=\"COLDIGO.marca.exibirEdicao('"+listaDeMarcas[i].id+"')\"><img src='../../imgs/edit.png' alt='Editar Registro'></a> " +
					"<a onclick=\"COLDIGO.marca.excluir('"+listaDeMarcas[i].id+"')\"><img src='../../imgs/delete.png' alt='Excluir Registro'>" +
				"</td>" +
				"<td>"+
					"<a onclick=\"COLDIGO.marca.alteraStatus('"+listaDeMarcas[i].id+"')\"><label class='switch'><input type='checkbox' "+ checked +"><span class='slider'></span></label>" +
				"</td>"+
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
				
				COLDIGO.exibirAviso("Erro ao excluir marca: "+ info.status + " - "+ info.responseText);
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
		});
		
	}
	
	COLDIGO.marca.alteraStatus = function(id){
		id = parseInt(id);
		$.ajax({
			type: "PUT",
			url: COLDIGO.PATH + "marca/alteraStatus/"+id,
			data: "id="+id,
			success: function(msg){
				COLDIGO.exibirAviso(msg);
				COLDIGO.marca.buscar();
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao alterar status: "+ info.status + " - " + info.statusText);
			}
		})
	}
	
});