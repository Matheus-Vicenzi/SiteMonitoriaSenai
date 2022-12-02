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
					row.setAttribute("class", "consult-head");
					
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
					let listData = monitoria.datamonitoria.split("-");
					let txtData = document.createTextNode(`${listData[2]}-${listData[1]}-${listData[0]}`);
					tdData.appendChild(txtData);
					
					//Status
					let tdStatus = document.createElement("td");
					let txtStatus
					let bg;
					if(monitoria.concluida === 1){
						txtStatus = document.createTextNode("Concluída");
						bg = "bgConcluida";
					}else{
						txtStatus = document.createTextNode("Não Concluída");
						bg = "bgNaoConcluida";
					}
					tdStatus.appendChild(txtStatus);
					
					//Observação
					let tdObs = document.createElement("td");
					let txtObs = document.createTextNode(monitoria.obs);
					tdObs.appendChild(txtObs);
					
					//Icones
					let tdIcons = document.createElement("td");
					
					let aDelete = document.createElement("a");
					aDelete.setAttribute("onclick", "excluirRegistro("+monitoria.id+")");
					$(aDelete).addClass("formIcons");
					let imgDelete = document.createElement("img");
					imgDelete.setAttribute("src", "css/imgs/delete.svg");
					imgDelete.setAttribute("alt", "Excluir Registro");
					
					aDelete.appendChild(imgDelete);
					tdIcons.appendChild(aDelete);
					
					let aEdit = document.createElement("a");
					aEdit.setAttribute("onclick", "buscarMonitoriaPorId("+monitoria.id+")");
					aEdit.setAttribute("data-bs-toggle", "modal")
					aEdit.setAttribute("data-bs-target", "#exampleModal")
					$(aEdit).addClass("formIcons");
					let imgEdit = document.createElement("img");
					imgEdit.setAttribute("src", "css/imgs/pencil.svg");
					imgEdit.setAttribute("alt", "Editar Registro");
					
					aEdit.appendChild(imgEdit);
					tdIcons.appendChild(aEdit);
					
					
					//Inserir na tabela
					row.setAttribute("class", bg);
					
					row.appendChild(th);
					row.appendChild(tdAluno);
					row.appendChild(tdTurma);
					row.appendChild(tdMonitor);
					row.appendChild(tdData);
					row.appendChild(tdStatus);
					row.appendChild(tdObs);
					row.appendChild(tdIcons);
					
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

function excluirRegistro(id){
	confirmacao = confirm("Deseja realmente excluir esse registro?");
	if(!confirmacao){
		return false;
	}
	
	$.ajax({
		type: "DELETE",
		url: SITE.PATH + `monitoria/excluir/${id}`,
		success: function(msg){
			alert(msg);
			location.reload();
		},
		error: function(info){
			alert("Erro ao excluir monitoria - "+ info.status + " - "+ info.statusText);
		}
			
	})
	
}

function buscarMonitoriaPorId(id){
	$.ajax({
		type: "GET",
		url: SITE.PATH + `monitoria/buscarPorId/${id}`,
		success: function(monitoria){
			
			monitoria = JSON.parse(monitoria);
			console.log(monitoria.aluno);
			
			//Div Principal
			const divEditContent = document.getElementById("modal-div-editcontent");
			
			
			//Aluno
			const divEditContentAluno = document.createElement("div");
			divEditContentAluno.setAttribute("class", "form-input");
			divEditContentAluno.setAttribute("class", "modal-div-input");
			
			const labelAluno = document.createElement("label");
			labelAluno.setAttribute("for", "aluno-modal-label")
			labelAluno.setAttribute("class", "form-label");
			labelAluno.appendChild(document.createTextNode("Aluno "));
			
			const inputAluno = document.createElement("input");
			inputAluno.setAttribute("id", "aluno-modal-field");
			inputAluno.setAttribute("type", "text");
			inputAluno.setAttribute("class", "form-control");
			inputAluno.setAttribute("value", monitoria.aluno);
			
			divEditContentAluno.appendChild(labelAluno);
			divEditContentAluno.appendChild(inputAluno);
			
			//Turma
			const divEditContentTurma = document.createElement("div");
			divEditContentTurma.setAttribute("class", "form-input");
			divEditContentTurma.setAttribute("class", "modal-div-input");
			
			const labelTurma = document.createElement("label");
			labelTurma.setAttribute("for", "turma-modal-label")
			labelTurma.setAttribute("class", "form-label");
			labelTurma.appendChild(document.createTextNode("Turma "));
			
			const inputTurma = document.createElement("select");
			inputTurma.setAttribute("id", "turma-modal-field");
			inputTurma.setAttribute("class", "form-select");
			inputTurma.setAttribute("class", "form-control");
			inputTurma.setAttribute("value", monitoria.turma);
			
			const turmaOptionsText = ["Selecione", "1° Ano", "2° Ano", "3° Ano"];
			
			const turmaOption0 = document.createElement("option")
			turmaOption0.setAttribute("value", "");
			turmaOption0.appendChild(document.createTextNode(turmaOptionsText[0]));
			
			const turmaOption1 = document.createElement("option")
			turmaOption1.setAttribute("value", "1");
			turmaOption1.appendChild(document.createTextNode(turmaOptionsText[1]));
			
			const turmaOption2 = document.createElement("option")
			turmaOption2.setAttribute("value", "2");
			turmaOption2.appendChild(document.createTextNode(turmaOptionsText[2]));
			
			const turmaOption3 = document.createElement("option")
			turmaOption3.setAttribute("value", "3");
			turmaOption3.appendChild(document.createTextNode(turmaOptionsText[3]));
			
			inputTurma.appendChild(turmaOption0);
			inputTurma.appendChild(turmaOption1);
			inputTurma.appendChild(turmaOption2);
			inputTurma.appendChild(turmaOption3);
			
			for(let i, j = 0; i = inputTurma.options[j]; j++) {
    			if(i.value == monitoria.turma) {
		       		inputTurma.selectedIndex = j;
		        	break;
    			}
			}
			
			divEditContentTurma.appendChild(labelTurma);
			divEditContentTurma.appendChild(inputTurma);
			
			//Monitor
			const divEditContentMonitor = document.createElement("div");
			divEditContentMonitor.setAttribute("class", "form-input");
			divEditContentMonitor.setAttribute("class", "modal-div-input");
			
			let labelMonitor = document.createElement("label");
			labelMonitor.setAttribute("for", "monitor-modal-label")
			labelMonitor.setAttribute("class", "form-label");
			labelMonitor.appendChild(document.createTextNode("Monitor "));
			
			let inputMonitor = document.createElement("input");
			inputMonitor.setAttribute("id", "monitor-modal-field");
			inputMonitor.setAttribute("type", "text");
			inputMonitor.setAttribute("class", "form-control");
			inputMonitor.setAttribute("value", monitoria.monitor);
			
			divEditContentMonitor.appendChild(labelMonitor);
			divEditContentMonitor.appendChild(inputMonitor);
			
			//Data
			const divEditContentData = document.createElement("div");
			divEditContentData.setAttribute("class", "form-input");
			divEditContentData.setAttribute("class", "modal-div-input");
			
			let labelData = document.createElement("label");
			labelData.setAttribute("for", "data-modal-label")
			labelData.setAttribute("class", "form-label");
			labelData.appendChild(document.createTextNode("Data "));
			
			let inputData = document.createElement("input");
			inputData.setAttribute("id", "data-modal-field");
			inputData.setAttribute("type", "date");
			inputData.setAttribute("class", "form-control");
			
			
			
			inputData.setAttribute("value", monitoria.datamonitoria);
			
			divEditContentData.appendChild(labelData);
			divEditContentData.appendChild(inputData);
			
			
			/*//Status
			let labelAluno = document.createElement("label");
			labelAluno.setAttribute("for", "aluno-modal-field")
			labelAluno.setAttribute("class", "form-label");
			labelAluno.appendChild(document.createTextNode("Aluno: "));
			
			let inputAluno = document.createElement("input");
			inputAluno.setAttribute("id", "aluno-modal-field");
			inputAluno.setAttribute("type", "text");
			inputAluno.setAttribute("class", "form-control");
			inputAluno.setAttribute("value", dadosMonitoria.aluno);
			
			//Observacao
			let labelAluno = document.createElement("label");
			labelAluno.setAttribute("for", "aluno-modal-field")
			labelAluno.setAttribute("class", "form-label");
			labelAluno.appendChild(document.createTextNode("Aluno: "));
			
			let inputAluno = document.createElement("input");
			inputAluno.setAttribute("id", "aluno-modal-field");
			inputAluno.setAttribute("type", "text");
			inputAluno.setAttribute("class", "form-control");
			inputAluno.setAttribute("value", dadosMonitoria.aluno);*/
			
			
			divEditContent.appendChild(divEditContentAluno);
			divEditContent.appendChild(divEditContentTurma);
			divEditContent.appendChild(divEditContentMonitor);
			divEditContent.appendChild(divEditContentData);
			
		},
		error: function(info){
			console.log(info)
			alert("Erro ao buscar monitoria - "+ info.status + " - "+ info.statusText);
		}
			
	})
}

function limparModal(){
	const modalDiv = document.getElementById("modal-div-editcontent");
	modalDiv.innerHTML = "";
}

document.addEventListener('keyup', function(e){
  	if (e.key === "Enter") { 
   		buscarMonitorias()
	}
});

$(document).ready(function(){
	buscarMonitorias();
});