function carregaNome(){
	$("#page-title").text("Consulta");
}

function validaConsulta(){
	let tipoDeFiltro = document.getElementById("tipoDeFiltro").value;
	let consultaValida = true;
	let filtroId = document.getElementById("filtroId");
	
	if (tipoDeFiltro !== ""){
		
		if(tipoDeFiltro === "datamonitoria"){
			let valorDataInicio = document.getElementById("dataInicio").value;
			let valorDataFim = document.getElementById("dataFim").value;
			
			if(valorDataInicio === "" || valorDataFim === ""){
				consultaValida = false;
			}
			
		}else{
			if(filtroId.value === ""){
				consultaValida = false
			}
		}
		
		if(!consultaValida){
			alert("Preencha todos os campos para realizar a consulta")
			return false;
		}
		alert("Passou");
		return true;
		
	}
	
	//Inválido
	return false
	
}

function habilitaCampoFiltro(valorFiltro){
	let textoLabel
	let labelFiltro
	boxFiltro = document.getElementById("boxFiltro");
	boxFiltro.innerHTML = "";
	
	const tipoFiltroId = "filtroId"
	
	let textoCampo;
	let nameCampo;
	
	if(valorFiltro === "aluno" || valorFiltro==="obs"){ //Aluno Ou Observação
		if(valorFiltro === "aluno"){
			
			
			textoCampo="Aluno"
			nameCampo="aluno"
			
		}else if(valorFiltro === "obs"){
			
			nameCampo="obs";
			textoCampo="Observação"
			
			
		}
		console.log(valorFiltro)
		
		textoLabel = document.createTextNode(textoCampo);
		
		labelFiltro = document.createElement("label");
		labelFiltro.setAttribute("for", tipoFiltroId);
		$(labelFiltro).addClass("form-label");
		
		labelFiltro.appendChild(textoLabel);
		
		var campoAluno = document.createElement("input");
		$(campoAluno).addClass("form-control");
		campoAluno.setAttribute("id", tipoFiltroId);
		campoAluno.setAttribute("name", nameCampo);
		campoAluno.setAttribute("type", "text");
		
		boxFiltro.appendChild(labelFiltro);
		boxFiltro.appendChild(campoAluno);
		
	}else if(valorFiltro === "turma"){ // Turma
		
		nameCampo = "turma";
		
		labelFiltro = document.createElement("label");
		labelFiltro.setAttribute("for", tipoFiltroId);
		$(labelFiltro).addClass("form-label");
		labelFiltro.appendChild(document.createTextNode("Turma"))
		
		let campoTurma = document.createElement("select");
		$(campoTurma).addClass("form-control");
		$(campoTurma).addClass("form-select");
		campoTurma.setAttribute("id", tipoFiltroId)
		campoTurma.setAttribute("name", nameCampo)
		
		let valorPadrao = document.createElement("option")
		valorPadrao.setAttribute("value", "")
		valorPadrao.appendChild(document.createTextNode("Selecione"))
		
		let valorTurma1 = document.createElement("option");
		valorTurma1.setAttribute("value", "1")
		valorTurma1.appendChild(document.createTextNode("1º Ano"))
		
		let valorTurma2 = document.createElement("option");
		valorTurma2.setAttribute("value", "2")
		valorTurma2.appendChild(document.createTextNode("2º Ano"))
		
		let valorTurma3 = document.createElement("option");
		valorTurma3.setAttribute("value", "3");
		valorTurma3.appendChild(document.createTextNode("3º Ano"));
		
		campoTurma.appendChild(valorPadrao);
		campoTurma.appendChild(valorTurma1);
		campoTurma.appendChild(valorTurma2);
		campoTurma.appendChild(valorTurma3);
		
		boxFiltro.appendChild(labelFiltro);
		boxFiltro.appendChild(campoTurma);
		
	}else if(valorFiltro === "datamonitoria"){ //Data
		
		let dataInicioBox = document.createElement("div");
		$(dataInicioBox).addClass("form-input")
		
		let dataFimBox = document.createElement("div");
		$(dataFimBox).addClass("form-input")
		
		//Label data Inicio
		labelFiltroDataInicio = document.createElement("label");
		labelFiltroDataInicio.setAttribute("for", "dataInicio");
		$(labelFiltroDataInicio).addClass("form-label");
		labelFiltroDataInicio.appendChild(document.createTextNode("Data Inicio"))
		
		//Label data Fim
		labelFiltroDataFim = document.createElement("label");
		labelFiltroDataFim.setAttribute("for", "dataInicio");
		$(labelFiltroDataFim).addClass("form-label");
		labelFiltroDataFim.appendChild(document.createTextNode("Data Fim"));
		
		//Campo data inicio
		let campoDataInicio = document.createElement("input");
		$(campoDataInicio).addClass("form-control");
		campoDataInicio.setAttribute("type", "date");
		campoDataInicio.setAttribute("id", "dataInicio");
		campoDataInicio.setAttribute("name", "txtdatainicio");
		
		//Campo data fim
		let campoDataFim = document.createElement("input");
		$(campoDataFim).addClass("form-control");
		campoDataFim.setAttribute("type", "date");
		campoDataFim.setAttribute("id", "dataFim");
		campoDataFim.setAttribute("name", "txtdatafim");
		
		dataInicioBox.appendChild(labelFiltroDataInicio);
		dataInicioBox.appendChild(campoDataInicio);
		
		dataFimBox.appendChild(labelFiltroDataFim);
		dataFimBox.appendChild(campoDataFim);
		
		boxFiltro.appendChild(dataInicioBox);
		boxFiltro.appendChild(dataFimBox);
		
	}else if(valorFiltro === "status"){ //Status
	
		nameCampo = "status"
	
		labelFiltro = document.createElement("status");
		labelFiltro.setAttribute("for", tipoFiltroId);
		$(labelFiltro).addClass("form-label");
		labelFiltro.appendChild(document.createTextNode("Status"))
		
		let campoStatus = document.createElement("select");
		$(campoStatus).addClass("form-control");
		$(campoStatus).addClass("form-select");
		campoStatus.setAttribute("id", tipoFiltroId);
		campoStatus.setAttribute("name", nameCampo);
		
		let valorPadrao = document.createElement("option")
		valorPadrao.setAttribute("value", "")
		valorPadrao.appendChild(document.createTextNode("Selecione"))
		
		let valorConcluida = document.createElement("option")
		valorConcluida.setAttribute("value", "1")
		valorConcluida.appendChild(document.createTextNode("Concluída"))
		
		let valorNaoConcluida = document.createElement("option")
		valorNaoConcluida.setAttribute("value", "0")
		valorNaoConcluida.appendChild(document.createTextNode("Não Concluida"))
		
		campoStatus.appendChild(valorPadrao)
		campoStatus.appendChild(valorConcluida)
		campoStatus.appendChild(valorNaoConcluida)
		
		boxFiltro.appendChild(labelFiltro)
		boxFiltro.appendChild(campoStatus)
		
	}
	
}

function buscarMonitorias(){
	
	if(!validaConsulta()){
		return false;
	}
	
	let tipoFiltro = document.getElementById("tipoDeFiltro").value;
	let valorBusca;
	
	if(tipoFiltro == "datamonitoria"){
		valorBusca = String(document.getElementById("dataInicio").value) + "," + String(document.getElementById("dataFim"));
	}else{
		valorBusca = document.getElementById("filtroId").value;
	}
		
		$.ajax({
			type: "GET",
			url: SITE.PATH + "monitoria/buscar",
			data: "tipoFiltro="+ tipoFiltro + "&valorBusca=" + valorBusca,
			success: function(dados){
				
				dados = JSON.parse(dados);
				console.log(dados)
				// chamar funcao para exibir os dados
				
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao consultar as monitorias: "+ info.status + " - " + info.statusText);
			}
		});
	
	/*$.ajax({
		type: "GET",
		url: SITE.PATH + "monitoria/buscar",
		data: JSON.stringify(monitoria),
		success: function(listaMonitorias){
			
		listaMonitorias = JSON.parse(listaMonitorias);
			
			if (listaMonitorias!=""){
				for(let i=0; i<=listaMonitorias.length; i++){
					$(itens).html("");
					
					var aluno = document.createElement("td");
					var turma = document.createElement("td");
					var monitor = document.createElement("td");
					var datamonitoria = document.createElement("td");
					var status = document.createElement("td");
					var obs = document.createElement("td");
					
					//adicionar na tabela
				}
				
			}else{
				$(itens).html("");
				
				var td = document.createElement("td");
				td.setAttribute("colspan", "7")
				td.innerHTML = "Nenhuma monitoria cadastrada";
				itens.append(td);
				$(itens).addClass("aviso");
			}
			
		}
	})
	
	*/
	
}

function limparFiltro(){
	document.getElementById("boxFiltro").innerHTML = "";
	document.getElementById("tipoDeFiltro").options.selectedIndex = 0;
}

document.addEventListener('keyup', function(e){
	console.log(e.key)
  	if (e.key === "Enter") { 
   		buscarMonitorias()
	}
});