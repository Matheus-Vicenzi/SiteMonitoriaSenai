function carregaNome(){
	$("#page-title").text("Consulta");
}

function validaConsulta(){
	var aluno = document.frmconsulta.txtaluno.value;
	var turma = document.frmconsulta.txtturma.value;
	var monitor = document.frmconsulta.txtmonitor.value;
	var dataMonitoria = document.frmconsulta.txtdatainicio.value;
	var dataFim = document.frmconsulta.txtdatafim.value;
	var status = document.frmconsulta.txtstatus.value;
	var obs = document.frmconsulta.txtobs.value;
	
	if((aluno == "") && (turma == "") && (monitor == "") && (dataMonitoria == "") && (dataFim == "")
	 && (status == "") && (obs == "")){
		alert("Nenhum dado fornecido para consulta!");
		return false;
		
	}else{
		return true;
	}
}

function habilitaCampoFiltro(valorFiltro){
	var textoLabel
	boxFiltro = document.getElementById("boxFiltro");
	boxFiltro.innerHTML = "";
	if(valorFiltro==="aluno" || valorFiltro==="obs"){
		if(valorFiltro==="aluno"){
			var id="aluno";
			var textoCampo="Aluno"
			var nameCampo="txtaluno"
		}else if(valorFiltro === "obs"){
			var id="obs";
			var textoCampo="Observação"
			var nameCampo="txtobs"
		}
		console.log(valorFiltro)
		
		textoLabel = document.createTextNode(textoCampo);
		
		labelFiltro = document.createElement("label");
		labelFiltro.setAttribute("for", id);
		$(labelFiltro).addClass("form-label");
		
		labelFiltro.appendChild(textoLabel);
		
		var campoAluno = document.createElement("input");
		$(campoAluno).addClass("form-control");
		campoAluno.setAttribute("id", id);
		campoAluno.setAttribute("name", nameCampo);
		campoAluno.setAttribute("type", "text");
		
		boxFiltro.appendChild(labelFiltro);
		boxFiltro.appendChild(campoAluno);
		
	}else if(valorFiltro === "turma"){
		
		labelFiltro = document.createElement("label");
		labelFiltro.setAttribute("for", "turma");
		$(labelFiltro).addClass("form-label");
		
		labelFiltro.appendChild(document.createTextNode("Turma"))
		
		var campoTurma = document.createElement("select");
		$(campoTurma).addClass("form-control");
		$(campoTurma).addClass("form-select");
		
		var valorPadrao = document.createElement("option")
		valorPadrao.setAttribute("value", "")
		valorPadrao.appendChild(document.createTextNode("Selecione"))
		
		var valorTurma1 = document.createElement("option");
		valorTurma1.setAttribute("value", "1")
		valorTurma1.appendChild(document.createTextNode("1º Ano"))
		
		var valorTurma2 = document.createElement("option");
		valorTurma2.setAttribute("value", "2")
		valorTurma2.appendChild(document.createTextNode("2º Ano"))
		
		var valorTurma3 = document.createElement("option");
		valorTurma3.setAttribute("value", "3");
		valorTurma3.appendChild(document.createTextNode("3º Ano"));
		
		campoTurma.appendChild(valorPadrao);
		campoTurma.appendChild(valorTurma1);
		campoTurma.appendChild(valorTurma2);
		campoTurma.appendChild(valorTurma3);
		
		boxFiltro.appendChild(labelFiltro);
		boxFiltro.appendChild(campoTurma);
		
	}else if(valorFiltro === "data"){
		
		var dataInicioBox = document.createElement("div");
		$(dataInicioBox).addClass("form-input")
		
		var dataFimBox = document.createElement("div");
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
		
		var campoDataInicio = document.createElement("input");
		$(campoDataInicio).addClass("form-control");
		campoDataInicio.setAttribute("type", "date");
		campoDataInicio.setAttribute("id", "dataInicio");
		campoDataInicio.setAttribute("name", "txtdatainicio");
		
		var campoDataFim = document.createElement("input");
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
		
	}//inserir validação para Status
	
	
}

function buscarMonitorias(){
	
	if(!validaConsulta()){
		return false;
	}
	
	var monitoria = new Object(); 
	
	var itens = document.getElementById("consult-head");
	
	monitoria.aluno = document.frmconsulta.txtaluno.value;
	monitoria.turma = document.frmconsulta.txtturma.value
	monitoria.monitor = document.frmconsulta.txtmonitor.value;
	monitoria.dataMonitoria = document.frmconsulta.txtdatainicio.value;
	monitoria.dataFim = document.frmconsulta.txtdatafim.value;
	monitoria.obs = document.frmconsulta.txtobs.value;
	monitoria.status = document.frmconsulta.txtstatus.value;
	
	$.ajax({
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
	
}

document.addEventListener('keyup', function(e){
  	if (e.key === "Enter") { 
   		buscarMonitorias()
	}
});