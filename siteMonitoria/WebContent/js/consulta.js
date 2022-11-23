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