function carregaNome(){
	$("#page-title").text("Consulta");
}

function validaConsulta(){
	let tipoDeFiltro = document.getElementById("tipoDeFiltro").value;
	let consultaValida = true;
	let filtroId = document.getElementById("filtroId");
	
	
	if (tipoDeFiltro == "datamonitoria"){
		
		let valorDataInicio = document.getElementById("dataInicio").value;
		let valorDataFim = document.getElementById("dataFim").value;
			
		if(valorDataInicio === "" || valorDataFim === ""){
			consultaValida = false;
		}
			
	}else if(tipoDeFiltro != "" && filtroId.value === ""){
		consultaValida = false;
		
	}
		
	if(!consultaValida){
		alert("Preencha todos os campos para realizar a consulta")
		return false;
	}
		
	return true;
		
}
	


function habilitaCampoFiltro(tipoFiltro){
	let textoLabel
	let labelFiltro
	boxFiltro = document.getElementById("boxFiltro");
	boxFiltro.innerHTML = "";
	
	const tipoFiltroId = "filtroId";
	
	let textoCampo;
	let nameCampo;
	
	if(tipoFiltro === "aluno" || tipoFiltro==="obs"){ //Aluno Ou Observação
		if(tipoFiltro === "aluno"){
			
			textoCampo="Aluno"
			nameCampo="aluno"
			
		}else if(tipoFiltro === "obs"){
			
			nameCampo="obs";
			textoCampo="Observação"
			
		}
		
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
		
	}else if(tipoFiltro === "turma"){ // Turma
		
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
		
	}else if(tipoFiltro === "datamonitoria"){ //Data
		
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
		
	}else if(tipoFiltro === "concluida"){ //Status
	
		nameCampo = "concluida"
	
		labelFiltro = document.createElement("concluida");
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
		valorBusca = String(document.getElementById("dataInicio").value) + "@" + String(document.getElementById("dataFim").value);
	}else{
		if(tipoFiltro != ""){
			valorBusca = document.getElementById("filtroId").value;
		}else{
			valorFiltro = "";
		}
	}
		
	$.ajax({
		type: "GET",
		url: SITE.PATH + "monitoria/buscar",
		data: "tipoFiltro="+ tipoFiltro + "&valorBusca=" + valorBusca,
		success: function(dados){
			
			dados = JSON.parse(dados);
			
			let tbodyConsult = document.getElementById("tbodyConsult");
			tbodyConsult.innerHTML = "";
			
			if(dados.length != 0){
			
				dados.forEach(function(monitoria, i){
					let row = document.createElement("tr");
					row.setAttribute("id", "consult-head");
					
					let th = document.createElement("th");
					th.setAttribute("scope", "row");
					let txtTh = document.createTextNode(i+1);
					th.appendChild(txtTh);
					
					//Aluno
					let tdAluno = document.createElement("td");
					let txtAluno = document.createTextNode(monitoria.aluno);
					tdAluno.appendChild(txtAluno)
					
					//Turma
					let tdTurma = document.createElement("td");
					let txtTurma = document.createTextNode(monitoria.turma);
					tdTurma.appendChild(txtTurma)
					
					//Monitor
					let tdMonitor = document.createElement("td");
					let txtMonitor = document.createTextNode(monitoria.monitor);
					tdMonitor.appendChild(txtMonitor);
					
					//Data
					let tdData = document.createElement("td");
					let txtData = document.createTextNode(monitoria.datamonitoria);
					tdData.appendChild(txtData);
					
					//Status
					let tdStatus = document.createElement("td");
					let txtStatus
					
					if(monitoria.concluida == 1){
						txtStatus = document.createTextNode("Concluída");
						//let bg = "monitoriaConcluida";
					}else{
						txtStatus = document.createTextNode("Não Concluída");
						//let bg = "monitoriaNaoConcluida";
					}
					tdStatus.appendChild(txtStatus);
					
					//Observação
					let tdObs = document.createElement("td");
					let txtObs = document.createTextNode(monitoria.obs);
					tdObs.appendChild(txtObs);
					
					//Icones
					
					
					
					//Inserir na tabela
					//$(row).addClass(bg);
					
					row.appendChild(th);
					row.appendChild(tdAluno);
					row.appendChild(tdTurma);
					row.appendChild(tdMonitor);
					row.appendChild(tdData);
					row.appendChild(tdStatus);
					row.appendChild(tdObs);
					
					tbodyConsult.appendChild(row);
					
				});
				
			}else{
				let row = document.createElement("td");
				$(row).addClass("aviso");
				let rowTxt = document.createTextNode("Não foi encontrada nenhuma monitoria");
				row.appendChild(rowTxt);
				
				tbodyConsult.appendChild(row);
			}
				
		},
		error: function(info){
			alert("Erro ao buscar monitorias: " + info.status + " - " + info.statusText);
		}
	});
	
}

function limparFiltro(){
	document.getElementById("boxFiltro").innerHTML = "";
	document.getElementById("tipoDeFiltro").options.selectedIndex = 0;
}

document.addEventListener('keyup', function(e){
  	if (e.key === "Enter") { 
   		buscarMonitorias()
	}
});

$(document).ready(function(){
	buscarMonitorias();
});