package br.com.sitemonitoria.modelo;

public class Monitoria {

	private int id;
	private int turma;
	private String monitor;
	private String aluno;
	private String dataMonitoria;
	private int status;
	private String obs;
	
	
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
	public String getObs() {
		return obs;
	}
	public void setObs(String obs) {
		this.obs = obs;
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
