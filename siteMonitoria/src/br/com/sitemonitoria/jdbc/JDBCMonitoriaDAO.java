package br.com.sitemonitoria.jdbc;

import br.com.sitemonitoria.jdbcinterface.MonitoriaDAO;
import br.com.sitemonitoria.modelo.Monitoria;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.SQLException;
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
				+ "(id, turma, monitor, aluno, trilha, ot, datamonitoria, status) "
				+ "VALUES (?,?,?,?,?,?,?,?)";
		
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			
			p.setInt(1, monitoria.getId());
			p.setInt(2, monitoria.getTurma());
			p.setString(3, monitoria.getMonitor());
			p.setString(4, monitoria.getAluno());
			p.setString(5, monitoria.getTrilha());
			p.setInt(6, monitoria.getOt());
			p.setString(7, monitoria.getDataMonitoria());
			p.setInt(8, monitoria.getStatus());
			
			p.execute();
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao cadastrar no banco de dados");
		}
		
	}
	
}
