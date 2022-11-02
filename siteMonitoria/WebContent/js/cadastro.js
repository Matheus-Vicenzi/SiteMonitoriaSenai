function carregaNome(){
	$("#page-title").text("Cadastro");
}


function cadastraMonitoria(){
	
	var monitoria = new Object();
	
	if(document.frmcadastro.txtstatus.checked == false){
		monitoria.status = 0;
	}else{
		monitoria.status = 1;
	}
	
	monitoria.aluno = document.frmcadastro.txtaluno.value;
	monitoria.turma = document.frmcadastro.txtturma.value;
	monitoria.monitor = document.frmcadastro.txtmonitor.value;
	monitoria.dataMonitoria = document.frmcadastro.txtdata.value;
	monitoria.obs = document.frmcadastro.txtobs.value;
	
	if(monitoria.turma == ""){
		alert("Campo 'Turma' não preenchido");
		document.frmcadastro.txtturma.focus();
		return false;
	}
	if(monitoria.aluno == ""){
		alert("Campo 'Aluno' não preenchido");
		document.frmcadastro.txtaluno.focus();
		return false;
	}
	if(monitoria.monitor == ""){
		alert("Campo 'Monitor' não preenchido");
		document.frmcadastro.txtmonitor.focus();
		return false;
	}
	if(monitoria.obs == ""){
		alert("Campo 'Observações' não preenchido");
		obs.focus();
		return false;
	}else{
		$.ajax({
			type:"POST",
			url: SITE.PATH + "monitoria/cadastrar",
			data: JSON.stringify(monitoria),
			success: function(msg){
				
				alert(msg)
				$("#form-cadastro").trigger("reset");
				
				//TODO buscar monitorias
				
			},
			error: function(info){
				console.log(monitoria.datamonitoria);
				alert("Erro ao cadastrar monitoria - " + info.status + " - " + info.responseText);
			}
		})	
	}
	
}

function carregaMonitorias(){
	
}
