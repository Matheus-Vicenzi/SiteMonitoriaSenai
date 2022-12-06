package br.com.sitemonitoria.jdbc;

import br.com.sitemonitoria.jdbcinterface.MonitoriaDAO;
import br.com.sitemonitoria.modelo.Monitoria;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonObject;


public class JDBCMonitoriaDAO implements MonitoriaDAO {

	private Connection conexao;
	
	public JDBCMonitoriaDAO(Connection conexao) {
		this.conexao = conexao;
	}
	
	
	public void cadastrar(Monitoria monitoria) throws Exception {
		
		
		String comando = "INSERT INTO monitorias "
				+ "(id, turma, monitor, aluno, datamonitoria, concluida, obs) "
				+ "VALUES (?,?,?,?,?,?,?)";
		
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			
			p.setInt(1, monitoria.getId());
			p.setInt(2, monitoria.getTurma());
			p.setString(3, monitoria.getMonitor());
			p.setString(4, monitoria.getAluno());
			p.setString(5, monitoria.getDataMonitoria());
			p.setInt(6, monitoria.getConcluida());
			p.setString(7, monitoria.getObs());
			
			p.execute();
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao cadastrar no banco de dados");
		}
		
	}

	
	public List<JsonObject> consultar(String tipoFiltro, String valorBusca) throws Exception {
		
		String comando = "SELECT * FROM monitorias ";
		
		//FILTRA POR DATA
		if(tipoFiltro.equals("datamonitoria")) {
			
			String[] datas = valorBusca.split("@", 2);
			
			comando += "WHERE " + tipoFiltro + " BETWEEN '" + datas[0] + "' AND '" + datas[1] + "'"; 
			
		//FILTRA POR ALUNO
		}else if(tipoFiltro.equals("aluno") || tipoFiltro.equals("obs") ) {
			comando += "WHERE " + tipoFiltro + " LIKE '%" + valorBusca + "%' ";
		
		}else if(!tipoFiltro.equals("")) {
			
			comando += "WHERE " + tipoFiltro + " = " + valorBusca;
		}
		
		comando += " ORDER BY datamonitoria ASC ;";
		
		List<JsonObject> listaMonitorias = new ArrayList<JsonObject>();
		JsonObject monitoriaJson = null;
		
		try {
			
			Statement stmt = conexao.createStatement();
			ResultSet rs = stmt.executeQuery(comando);
			
			while(rs.next()) {
				
				int id = rs.getInt("id");
				String aluno = rs.getString("aluno");
				int turma = rs.getInt("turma");
				String monitor = rs.getString("monitor");
				String dataMonitoria = rs.getString("datamonitoria");
				int concluida = rs.getInt("concluida");
				String obs = rs.getString("obs");
				
				monitoriaJson = new JsonObject();
				monitoriaJson.addProperty("id", id);
				monitoriaJson.addProperty("aluno", aluno);
				monitoriaJson.addProperty("turma", turma);
				monitoriaJson.addProperty("monitor", monitor);
				monitoriaJson.addProperty("datamonitoria", dataMonitoria);
				monitoriaJson.addProperty("concluida", concluida);
				monitoriaJson.addProperty("obs", obs);
				
				
				listaMonitorias.add(monitoriaJson);
				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao retornar Monitorias");
		}
		
		return listaMonitorias;
		
		
	}


	public void excluir(int id) throws Exception{
		String comando = "DELETE FROM monitorias WHERE id = ?";
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			p.setInt(1, id);
			p.execute();
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao executar a query SQL");
		}
		
	}


	public JsonObject buscarPorId(int idParam) throws Exception{
		String comando = "SELECT * FROM monitorias WHERE id = "+ idParam;
		Statement stmt;
		ResultSet rs;
		JsonObject monitoriaJson = new JsonObject();
		try {
			stmt = conexao.createStatement();
			rs = stmt.executeQuery(comando);
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao executar a Query");
		}
		
		try {
			
			while(rs.next()) {
				int id = rs.getInt("id");
				String aluno = rs.getString("aluno");
				int turma = rs.getInt("turma");
				String monitor = rs.getString("monitor");
				String dataMonitoria = rs.getString("datamonitoria");
				int concluida = rs.getInt("concluida");
				String obs = rs.getString("obs");
				
				monitoriaJson.addProperty("id", id);
				monitoriaJson.addProperty("aluno", aluno);
				monitoriaJson.addProperty("turma", turma);
				monitoriaJson.addProperty("monitor", monitor);
				monitoriaJson.addProperty("datamonitoria", dataMonitoria);
				monitoriaJson.addProperty("concluida", concluida);
				monitoriaJson.addProperty("obs", obs);
				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao criar o objeto monitoria");
		}
		
		return monitoriaJson;
		
	}


	public void alterar(Monitoria monitoria){
		
	
		String comando = "UPDATE monitorias"
				+ " SET aluno=?"
				+ ", turma=?"
				+ ", monitor=?"
				+ ", datamonitoria=?"
				+ ", concluida=?"
				+ ", obs=?"
				+ " WHERE id=?";
		
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			p.setString(1, monitoria.getAluno());
			p.setInt(2, monitoria.getTurma());
			p.setString(3, monitoria.getMonitor());
			p.setString(4, monitoria.getDataMonitoria());
			p.setInt(5, monitoria.getConcluida());
			p.setString(6, monitoria.getObs());
			p.setInt(7, monitoria.getId());
			
			p.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}
				
		
	}
	
}
