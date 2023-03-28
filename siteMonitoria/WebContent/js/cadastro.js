function carregaNome() {
	$("#page-title").text("Cadastro");
}


function cadastraMonitoria() {

	var monitoria = new Object();

	if (document.frmcadastro.txtconcluida.checked == false) {
		monitoria.concluida = 0;
	} else {
		monitoria.concluida = 1;
	}

	monitoria.aluno = document.frmcadastro.txtaluno.value;
	monitoria.turma = document.frmcadastro.txtturma.value;
	monitoria.monitor = document.frmcadastro.txtmonitor.value;
	monitoria.dataMonitoria = document.frmcadastro.txtdata.value;
	monitoria.obs = document.frmcadastro.txtobs.value;

	let aluno = monitoria.aluno;

	if (aluno.trim() === "") {
		alert("Campo 'Aluno' não preenchido");
		document.frmcadastro.txtaluno.focus();
		return false;
	}
	if (monitoria.turma == "") {
		alert("Campo 'Turma' não preenchido");
		document.frmcadastro.txtturma.focus();
		return false;
	}
	if (monitoria.monitor == "") {
		alert("Campo 'Monitor' não preenchido");
		document.frmcadastro.txtmonitor.focus();
		return false;
	}
	if (!monitoria.dataMonitoria) {
		alert("Campo 'Data Monitoria' não preenchido");
		document.frmcadastro.txtdata.focus();
		return false;
	}
	if (monitoria.obs == "") {
		alert("Campo 'Observações' não preenchido");
		obs.focus();
		return false;
	} else {
		$.ajax({
			type: "POST",
			url: SITE.PATH + "monitoria/cadastrar",
			data: JSON.stringify(monitoria),
			success: function (msg) {
				alert(msg)
				$("#form-cadastro").trigger("reset");
			},
			error: function (info) {
				alert("Erro ao cadastrar monitoria - " + info.status + " - " + info.responseText);
			}
		});
	}
}

document.addEventListener('keyup', function (e) {
	if (e.key === "Enter") {
		cadastraMonitoria();
	}
});
