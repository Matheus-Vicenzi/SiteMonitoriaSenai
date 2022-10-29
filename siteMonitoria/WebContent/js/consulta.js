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