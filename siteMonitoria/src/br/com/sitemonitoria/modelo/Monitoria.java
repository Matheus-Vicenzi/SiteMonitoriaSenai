package br.com.sitemonitoria.modelo;

public class Monitoria {

	private int id;
	private int turma;
	private String monitor;
	private String aluno;
	private String trilha;
	private int ot;
	private String dataMonitoria;
	private int status;
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getTurma() {
		return turma;
	}
	public void setTurma(int turma) {
		this.turma = turma;
	}
	public String getMonitor() {
		return monitor;
	}
	public void setMonitor(String monitor) {
		this.monitor = monitor;
	}
	public String getAluno() {
		return aluno;
	}
	public void setAluno(String aluno) {
		this.aluno = aluno;
	}
	public String getTrilha() {
		return trilha;
	}
	public void setTrilha(String trilha) {
		this.trilha = trilha;
	}
	public int getOt() {
		return ot;
	}
	public void setOt(int ot) {
		this.ot = ot;
	}
	public String getDataMonitoria() {
		return dataMonitoria;
	}
	public void setDataMonitoria(String dataMonitoria) {
		this.dataMonitoria = dataMonitoria;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	
}
