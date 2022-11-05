function carregaNome(){
	$("#page-title").text("Consulta");
}

function validaConsulta(){
	var id = document.frmconsulta.txtid.value;
	var turma = document.frmconsulta.txtturma.value;
	var monitor = document.frmconsulta.txtmonitor.value;
	var aluno = document.frmconsulta.txtaluno.value;
	var trilha = document.frmconsulta.txttrilha.value;
	var ot = document.frmconsulta.txtot.value;
	var datamonitoria = document.frmconsulta.txtdata.value;
	var status = document.frmconsulta.txtstatus.value;
	
	if(status.checked == true){
		return true;
	}
	
	if((id == "") && (turma == "") && (monitor == "") && (aluno == "") && (trilha == "") && (ot == "") && (datamonitoria == "")){
		alert("Nenhum dado fornecido para consulta!");
		return false;
		
	}else{
		return true;
	}
}

function buscarMonitorias(){
	
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
		utl: SITE.PATH + "monitoria/buscar",
		data: JSON.stringify(monitoria),
		success: function(monitorias){
			
			if (monitorias!=""){
				
				
			}else{
				$(itens).html("");
				
				var td = document.createElement("td");
				td.setAttribute("colspan", "7")
				td.innerHTML = "Nenhuma monitoria cadastrada";
				itens.append(td);
			}
			
		}
	})
	
}