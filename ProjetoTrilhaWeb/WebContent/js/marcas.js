COLDIGO.marca = new Object();

$(document).ready(function() {
	console.log("Entrou no document")
	COLDIGO.marca.carregarMarcas = function(){
		
		select = "#selMarca";
		
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

});