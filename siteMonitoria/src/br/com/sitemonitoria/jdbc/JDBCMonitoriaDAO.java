package br.com.sitemonitoria.jdbc;

import br.com.sitemonitoria.jdbcinterface.MonitoriaDAO;
import br.com.sitemonitoria.modelo.Monitoria;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.ResultSet;

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
		System.out.println(tipoFiltro + " " + valorBusca);
		//FILTRA POR DATA
		if(tipoFiltro.equals("datamonitoria")) {
			System.out.println("ENTROU NA DATA");
			String[] datas = valorBusca.split("@", 2);
			
			
			System.out.println(datas + "<----");
			
			
			comando += "WHERE (" + tipoFiltro + " BETWEEN '" + datas[0] + "' AND '" + datas[1] + "')"; 
			
			
		//FILTRA POR ALUNO
		}else if(tipoFiltro == "aluno") {
			comando += "WHERE " + tipoFiltro + " LIKE '%" + valorBusca + "%' ";
		
		}else if(tipoFiltro != "") {
			
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


	
	
}
