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
	
	if(document.frmconsulta.txtid.value != ""){
		monitoria.id = document.frmconsulta.txtid.value;
	}
	if(document.frmconsulta.txtaluno.value != ""){
		monitoria.aluno = document.frmconsulta.txtaluno.value;
	}
	if(document.frmconsulta.txtmonitor.value != ""){
		monitoria.monitor = document.frmconsulta.txtmonitor.value;
	}
	if(document.frmconsulta.txttrilha.value != ""){
		monitoria.trilha = document.frmconsulta.txttrilha.value;
	}
	if(document.frmconsulta.txtot.value != ""){
		monitoria.ot = document.frmconsulta.txtot.value;
	}
	if(document.frmconsulta.txtdata.value != ""){
		monitoria.dataMonitoria = document.frmconsulta.txtdata.value;
	}
	
	
	$.ajax({
		type: "GET",
		utl: SITE.PATH + "monitoria/buscar",
		data: JSON.stringify(monitoria),
		success: function(monitorias){
			
			if (monitorias!=""){
				
				$("#consult-head").html("");
				
			}
			
		}
	})
	
}