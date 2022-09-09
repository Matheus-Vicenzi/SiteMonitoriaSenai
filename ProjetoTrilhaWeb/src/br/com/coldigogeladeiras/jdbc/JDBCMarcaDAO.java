package br.com.coldigogeladeiras.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.ArrayList;
import java.util.List;

import br.com.coldigogeladeiras.jdbcinterface.MarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;

public class JDBCMarcaDAO implements MarcaDAO{
	
	private Connection conexao;
	
	public JDBCMarcaDAO(Connection conexao) {
		this.conexao = conexao;
	}
	
	public List<Marca> buscar(){
		
		//Criação de instrução SQL para buscar de todas as marcas
		String comando = "SELECT * FROM marcas";
		
		//Criação de uma lista para armazenar cada marca encontrada
		List<Marca> listMarcas = new ArrayList<Marca>();
		
		//Criação do objeto marca com valor null (ou seja, sem instanciá-lo)
		Marca marca = null;
		
		try {
			
			//Uso da conexão do banco de dados para prepará-lo para uma instrução SQL
			Statement stmt = conexao.createStatement();
			
			//Executa a instrução criada previamente e armazenamento do resultado no objeto rs
			ResultSet rs = stmt.executeQuery(comando);
			
			//Enquanto houver uma proxima linha no resultado
			while(rs.next()) {
				
				marca = new Marca();
				
				//Recebimento dos 2 dados retornados do BD para cada linha encontrada
				int id = rs.getInt("id");
				String nome = rs.getString("nome");
				
				//Setando os objeto marca os valores encontrados
				marca.setId(id);
				marca.setNome(nome);
				
				//Adição da instância contida no objeto Marca na lista de marcas
				listMarcas.add(marca);
			}			
			
		} catch (Exception ex) {
			//Exibe a excessão no console
			ex.printStackTrace();
		}
		
		//Retorna para quem chamou o método a lista criada
		return listMarcas;
		
	}
	
	public boolean inserir(Marca marca) {
		
		String comando = "INSERT INTO marcas "
				+ "(id, nome) "
				+ "VALUES (?,?)";
		PreparedStatement p;
		
		try {
			//Prepara o comando para execução no bd em que nos conectamos
			p = this.conexao.prepareStatement(comando);
			
			//Substitui no comando os "?" pelos valores da marca
			p.setInt(1, marca.getId());
			p.setString(2, marca.getNome());
			
			//executa o comando no bd
			p.execute();
						
		}catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
		
	}
	
	public boolean deletar(int id) {
		String comando = "DELETE FROM marcas WHERE id = ?";
		PreparedStatement p;
		try {
			p = this.conexao.prepareStatement(comando);
			p.setInt(1, id);
			p.execute();
		}catch(SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
}
