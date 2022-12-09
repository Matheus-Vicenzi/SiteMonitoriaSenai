function carregaNome(){
	$("#page-title").text("Consulta");
}

function validaConsulta(){
	let tipoDeFiltro = $("#tipoDeFiltro").val();
	let consultaValida = true;
	let valorCampoFiltro = $("#campoFiltro").val();
	
	
	if (tipoDeFiltro == "dataMonitoria"){
		
		let valorDataInicio = $("#dataInicio").val();
		let valorDataFim = $("#dataFim").val();
			
		if(valorDataInicio === "" || valorDataFim === ""){
			consultaValida = false;
		}
			
	}else if(tipoDeFiltro != "" && valorCampoFiltro === ""){
		consultaValida = false;
		
	}
		
	if(!consultaValida){
		alert("Preencha todos os campos para realizar a consulta")
		return false;
	}
		
	return true;
		
}
	


function habilitaCampoFiltro(tipoFiltro){
	
	let labelFiltro = document.createElement("label");
	
	let boxFiltro = document.getElementById("boxFiltro");
	
	$(boxFiltro).html("");
	
	let campoFiltro;
	
	const idCampoFiltro = "campoFiltro";
	
	let textoCampo;
	
	//Aluno ou Observação
	if(tipoFiltro === "aluno" || tipoFiltro==="obs"){ //Aluno Ou Observação
		if(tipoFiltro === "aluno"){
			textoCampo="Aluno"
			
		}else if(tipoFiltro === "obs"){
			textoCampo="Observação"
			
		}
		
		$(labelFiltro).text(textoCampo);
		
		campoFiltro = document.createElement("input");
		
		$(campoFiltro).attr("type", "text");
							
	//Turma
	}else if(tipoFiltro === "turma"){
		
		//$(labelFiltro).attr("for", idCampoFiltro);
		//$(labelFiltro).addClass("form-label");
		$(labelFiltro).text("Turma")
		
		campoFiltro = document.createElement("select");
		$(campoFiltro).addClass("form-select");
		
		let valorPadrao = document.createElement("option");
		$(valorPadrao).attr("value", "");
		$(valorPadrao).text("selecione");
		
		let valorTurma1 = document.createElement("option");
		$(valorTurma1).attr("value", "1");
		$(valorTurma1).text("1º Ano");
		
		let valorTurma2 = document.createElement("option");
		$(valorTurma2).attr("value", "2");
		$(valorTurma2).text("2º Ano");
		
		let valorTurma3 = document.createElement("option");
		$(valorTurma3).attr("value", "3");
		$(valorTurma3).text("3º Ano");
		
		$(campoFiltro).append(valorPadrao);
		$(campoFiltro).append(valorTurma1);
		$(campoFiltro).append(valorTurma2);
		$(campoFiltro).append(valorTurma3);
	
	//Data
	}else if(tipoFiltro === "dataMonitoria"){ 
		
		let dataInicioBox = document.createElement("div");
		$(dataInicioBox).addClass("form-input")
		
		let dataFimBox = document.createElement("div");
		$(dataFimBox).addClass("form-input")
		
		//Label data Inicio
		$(labelFiltro).attr("for", "dataInicio");
		$(labelFiltro).text("Data Inicio");
		
		//Label data Fim
		labelFiltroDataFim = document.createElement("label");
		$(labelFiltroDataFim).attr("for", "dataInicio");
		$(labelFiltroDataFim).addClass("form-label");
		$(labelFiltroDataFim).text("Data Fim");
		
		//Campo data inicio
		campoFiltro = document.createElement("input");
		$(campoFiltro).attr("type", "date");

		//Campo data fim
		let campoDataFim = document.createElement("input");
		$(campoDataFim).addClass("form-control");
		
		$(campoDataFim).attr({type: "date",
						   id: "dataFim"});
		
		$(dataInicioBox).append(labelFiltro);
		$(dataInicioBox).append(campoFiltro);
		
		$(dataFimBox).append(labelFiltroDataFim);
		$(dataFimBox).append(campoDataFim);
		
		$(boxFiltro).append(dataInicioBox);
		$(boxFiltro).append(dataFimBox);
		
	//Status
	}else if(tipoFiltro === "concluida"){
		
		$(labelFiltro).text("Status");
		
		campoFiltro = document.createElement("select");
		$(campoFiltro).addClass("form-select");
		
		let valorPadrao = document.createElement("option");
		$(valorPadrao).attr("value", "");
		$(valorPadrao).text("Selecione");
		
		let valorConcluida = document.createElement("option")
		$(valorConcluida).attr("value", "1");
		$(valorConcluida).text("Concluída");
		
		let valorNaoConcluida = document.createElement("option");
		$(valorNaoConcluida).attr("value", "0");
		$(valorNaoConcluida).text("Não Concluida");
		
		$(campoStatus).append(valorPadrao);
		$(campoStatus).append(valorConcluida);
		$(campoStatus).append(valorNaoConcluida);
		
	}
	
	$(campoFiltro).addClass("form-control");
	$(campoFiltro).attr("id", idCampoFiltro);
	
	$(labelFiltro).addClass("form-label");
	$(labelFiltro).attr("for", idCampoFiltro);
	$(labelFiltro).addClass("form-label");
	
	if(tipoFiltro != "dataMonitoria"){
		$(boxFiltro).append(labelFiltro);
		$(boxFiltro).append(campoFiltro);
	}
	
}

function buscarMonitorias(){
	
	if(!validaConsulta()){
		return false;
	}
	
	let tipoFiltro = document.getElementById("tipoDeFiltro").value;
	
	let valorBusca;
	
	if(tipoFiltro == "dataMonitoria"){
		valorBusca = String($("#campoFiltro").val()) + "@" + String($("#dataFim").val());
	}else if(tipoFiltro != ""){
		valorBusca = $("#campoFiltro").val();
	}else{
			valorFiltro = "";
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
					$(row).attr("class", "consult-head");
					
					let th = document.createElement("th");
					$(th).attr("scope", "row");
					$(th).text(i+1);
					
					$(row).append(th);
					
					//Aluno
					let tdAluno = document.createElement("td");
					$(tdAluno).text(monitoria.aluno);
					
					$(row).append(tdAluno);
					
					//Turma
					let tdTurma = document.createElement("td");
					$(tdTurma).text(monitoria.turma);
					
					$(row).append(tdTurma);
					
					//Monitor
					let tdMonitor = document.createElement("td");
					$(tdMonitor).text(monitoria.monitor);
					
					$(row).append(tdMonitor);
					
					//Data
					let tdData = document.createElement("td");
					let listData = monitoria.dataMonitoria.split("-");
					$(tdData).text(`${listData[2]}-${listData[1]}-${listData[0]}`);
					
					$(row).append(tdData);
					
					//Status
					let tdStatus = document.createElement("td");
					let bg;
					if(monitoria.concluida === 1){
						$(tdStatus).text("Concluída");
						bg = "bgConcluida";
					}else{
						$(tdStatus).text("Não Concluída");
						bg = "bgNaoConcluida";
					}
					
					$(row).append(tdStatus);
					$(row).addClass(bg);
					
					//Observação
					let tdObs = document.createElement("td");
					$(tdObs).text(monitoria.obs);
					
					$(row).append(tdObs);
					
					//Icones
					let tdIcons = document.createElement("td");
					
					let aDelete = document.createElement("a");
					$(aDelete).attr("onclick", "excluirRegistro("+monitoria.id+")");
					$(aDelete).addClass("formIcons");
					
					let imgDelete = document.createElement("img");
					$(imgDelete).attr("src", "css/imgs/delete.svg");
					$(imgDelete).attr("alt", "Excluir Registro");
					
					$(aDelete).append(imgDelete);
					$(tdIcons).append(aDelete);
					
					let aEdit = document.createElement("a");
					$(aEdit).attr("onclick", "buscarMonitoriaPorId("+monitoria.id+")");
					$(aEdit).attr("data-bs-toggle", "modal");
					$(aEdit).attr("data-bs-target", "#modal-edicao");
					$(aEdit).addClass("formIcons");
					
					let imgEdit = document.createElement("img");
					$(imgEdit).attr({src: "css/imgs/pencil.svg",
									 alt: "Editar Registro"});
					
					$(aEdit).append(imgEdit);
					$(tdIcons).append(aEdit);
					
					$(row).append(tdIcons);
					
					//Inserir na tabela
					$(tbodyConsult).append(row);
					
				});
				
			}else{
				let row = document.createElement("td");
				$(row).attr("colspan", "8");
				$(row).addClass("aviso");
				row.text("Não foi encontrada nenhuma monitoria");
				
				$(tbodyConsult).append(row);
			}
				
		},
		error: function(info){
			alert("Erro ao buscar monitorias: " + info.status + " - " + info.statusText);
		}
	});
	
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
			buscarMonitorias();
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
			
			//Div Principal
			const divEditContent = $("#modal-div-editcontent");
			$(divEditContent).html("");
			
			//Aluno
			const divEditContentAluno = document.createElement("div");
			$(divEditContentAluno).addClass("form-input modal-div-input");

			const labelAluno = document.createElement("label");
			$(labelAluno).attr("for", "aluno-modal-label")
			$(labelAluno).addClass("form-label");
			$(labelAluno).text("Aluno");
			
			const inputAluno = document.createElement("input");
			$(inputAluno).attr({id: "aluno-modal-field",
								type: "text",
								value: monitoria.aluno});
			
			$(inputAluno).addClass("form-control");
			
			$(divEditContentAluno).append(labelAluno);
			$(divEditContentAluno).append(inputAluno);
			
			$(divEditContent).append(divEditContentAluno);
			
			//Turma
			const divEditContentTurma = document.createElement("div");
			$(divEditContentTurma).addClass("form-input modal-div-input");
			
			const labelTurma = document.createElement("label");
			$(labelTurma).attr("for", "turma-modal-label")
			$(labelTurma).addClass("form-label");
			$(labelTurma).text("Turma");
			
			const inputTurma = document.createElement("select");
			$(inputTurma).addClass("form-select form-control");
			$(inputTurma).attr({id: "turma-modal-field",
								value: monitoria.turma});
								
			
			
			const turmaOptionsText = ["Selecione", "1° Ano", "2° Ano", "3° Ano"];
			
			const turmaOption0 = document.createElement("option")
			$(turmaOption0).setAttribute("value", "");
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
			
			
			//Status
			const divEditContentStatus = document.createElement("div");
			divEditContentStatus.setAttribute("class", "form-input");
			divEditContentStatus.setAttribute("class", "modal-div-input");
			
			const labelStatus = document.createElement("label");
			labelStatus.setAttribute("for", "status-modal-label")
			labelStatus.setAttribute("class", "form-label");
			labelStatus.appendChild(document.createTextNode("Status"));
			
			const inputStatus = document.createElement("select");
			inputStatus.setAttribute("id", "status-modal-field");
			inputStatus.setAttribute("class", "form-select");
			inputStatus.setAttribute("class", "form-control");
			
			const statusOptionsText = ["Selecione", "Concluída", "Não Concluída"];
			
			const statusOption0 = document.createElement("option")
			statusOption0.setAttribute("value", "-1");
			statusOption0.appendChild(document.createTextNode(statusOptionsText[0]));
			
			const statusOption1 = document.createElement("option")
			statusOption1.setAttribute("value", "1");
			statusOption1.appendChild(document.createTextNode(statusOptionsText[1]));
			
			const statusOption2 = document.createElement("option")
			statusOption2.setAttribute("value", "0");
			statusOption2.appendChild(document.createTextNode(statusOptionsText[2]));
			
			
			inputStatus.appendChild(statusOption0);
			inputStatus.appendChild(statusOption1);
			inputStatus.appendChild(statusOption2);
			
			for(let i, j = 0; i = inputStatus.options[j]; j++) {
    			if(Number(i.value) == Number(monitoria.concluida)) {
		       		inputStatus.selectedIndex = j;
		        	break;
    			}
			}
			
			divEditContentStatus.appendChild(labelStatus);
			divEditContentStatus.appendChild(inputStatus);
			
			//Observacao
			const divEditContentObs = document.createElement("div");
			divEditContentObs.setAttribute("class", "form-input");
			divEditContentObs.setAttribute("class", "modal-div-input");
			
			let labelObs = document.createElement("label");
			labelObs.setAttribute("for", "obs-modal-field")
			labelObs.setAttribute("class", "form-label");
			labelObs.appendChild(document.createTextNode("Observações: "));
			
			let inputObs = document.createElement("textarea");
			inputObs.setAttribute("id", "obs-modal-field");
			inputObs.setAttribute("class", "form-control");
			inputObs.value = monitoria.obs;
			
			divEditContentObs.appendChild(labelObs);
			divEditContentObs.appendChild(inputObs);
			
			//Hidden ID
			let inputId = document.createElement("input");
			inputId.setAttribute("value", monitoria.id);
			inputId.setAttribute("id", "id-modal-field");
			inputId.setAttribute("type", "hidden");
			
			
			//Montar div principal
			
			divEditContent.appendChild(divEditContentTurma);
			divEditContent.appendChild(divEditContentMonitor);
			divEditContent.appendChild(divEditContentData);
			divEditContent.appendChild(divEditContentStatus);
			divEditContent.appendChild(divEditContentObs);
			divEditContent.appendChild(inputId);

			
		},
		error: function(info){
			alert("Erro ao buscar monitoria - "+ info.status + " - "+ info.statusText);
		}
			
	})
}

function alteraRegistro(){
	
	const Dadosmonitoria = new Object();
	
	Dadosmonitoria.id = document.getElementById("id-modal-field").value;
	Dadosmonitoria.aluno = document.getElementById("aluno-modal-field").value;
	Dadosmonitoria.turma = document.getElementById("turma-modal-field").value;
	Dadosmonitoria.monitor = document.getElementById("monitor-modal-field").value;
	Dadosmonitoria.datamonitoria = document.getElementById("data-modal-field").value;
	Dadosmonitoria.concluida = document.getElementById("status-modal-field").value;
	Dadosmonitoria.obs = document.getElementById("obs-modal-field").value;
	
	campos = [Dadosmonitoria.id, Dadosmonitoria.aluno, Dadosmonitoria.turma, Dadosmonitoria.monitor,
		Dadosmonitoria.datamonitoria, Dadosmonitoria.concluida, Dadosmonitoria.obs]
	
	const camposValidos = validaCampos(campos);
	
	if(!camposValidos){
	alert("Preencha todos os campos!");
		return false;
	}
	
	$.ajax({
		type: "PUT",
		url: SITE.PATH + "monitoria/alterar",
		data: JSON.stringify(Dadosmonitoria),
		success: function(msg){
			
			alert(msg);
			
			buscarMonitorias();
			
			$("#modal-edicao").modal("toggle");
			
			
		},
		error: function(info){
			
			console.log(info);
			alert("Erro ao alterar registro - "+ info.status + " - "+ info.statusText);
			
		}
	})
};

function validaCampos(valoresDosCampos){
	let camposValidos = true;
	
	valoresDosCampos.forEach( campo =>{
		console.log(campo);
		if(campo === ""){
			camposValidos = false
		}
	})
	return camposValidos;
}

document.addEventListener('keyup', (e) => {
  	if (e.key === "Enter") { 
   		buscarMonitorias()
	}
});

$(document).ready(function(){
	buscarMonitorias();
});