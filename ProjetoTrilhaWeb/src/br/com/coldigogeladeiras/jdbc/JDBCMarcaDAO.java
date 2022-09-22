package br.com.coldigogeladeiras.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonObject;

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
				int status = rs.getInt("status");
				
				//Setando os objeto marca os valores encontrados
				marca.setId(id);
				marca.setNome(nome);
				marca.setStatus(status);
				
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

	public List<JsonObject> buscarPorNome(String pesquisa){
		
		//Inicia criação do comando SQL de busca
		String comando = "SELECT * FROM marcas ";
				
		//Se o nome não estiver vazio...
		if (!pesquisa.equals("")) {
			//Concatena no comando o WHERE buscando o nome do produto
			//o texto da variável nome
			comando += "WHERE marcas.nome like '%" + pesquisa + "%' ";
		}
		//Finaliza o comando ordenado alfabeticamente por
		//categoria, marca e depois modelo.
		comando += "ORDER BY marcas.nome ASC";
		
		List<JsonObject> listaMarcas = new ArrayList<JsonObject>();
		JsonObject marca = null;
		
		try {
			
			Statement stmt = conexao.createStatement();
			ResultSet rs = stmt.executeQuery(comando);
			
			while(rs.next()) {
				
				int id = rs.getInt("id");
				String nome = rs.getString("nome");
				int status = rs.getInt("status");
				
				marca = new JsonObject();
				marca.addProperty("id", id);
				marca.addProperty("nome", nome);
				marca.addProperty("status", status);
				
				listaMarcas.add(marca);
				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return listaMarcas;
		
	}
	
	public Marca buscarPorId(int id) {
		String comando = "SELECT * FROM marcas WHERE marcas.id = ?";
		Marca marca = new Marca();
		
		try {
			PreparedStatement p = this.conexao.prepareStatement(comando);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			while(rs.next()) {
				
				String nome = rs.getString("nome");
				int marcaId = rs.getInt("id");
				
				marca.setId(marcaId);
				marca.setNome(nome);
				
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return marca;
		
	}
	
	

public boolean alterar(Marca marca) {
		
		String comando = "UPDATE marcas "
				+ "SET marcas.nome=?"
				+ " WHERE id=?";
		
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			p.setString(1, marca.getNome());
			p.setInt(2, marca.getId());
			p.executeUpdate();
			
		}catch(SQLException e){
			e.printStackTrace();
			return false;
		}
		return true;
		
	}
	

	public boolean verificaProdutosCadastrados(int marcaId) throws Exception {
		String comando = "SELECT produtos.id FROM produtos "
				+ "INNER JOIN marcas ON produtos.marcas_id = marcas.id "
				+ "WHERE marcas.id=?";
		PreparedStatement p;
		try {
			p = this.conexao.prepareStatement(comando);
			p.setInt(1, marcaId);
			ResultSet rs = p.executeQuery();
			
			if (rs.next()) {
				return false;
			}
			return true;
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception ("Erro ao buscar o produto");
		}
	}

	public int verificaStatus(int id) throws Exception {
		String comando = "SELECT status FROM marcas "
				+ "WHERE id=?";
		
		PreparedStatement p;
		
		int status = 0;
		
		try {
			p = this.conexao.prepareStatement(comando);
			p.setInt(1, id);
			ResultSet rs = p.executeQuery();
			
			rs.next(); 
			status = rs.getInt("status");
			
		
		}catch(Exception e) {
			e.printStackTrace();
			throw new Exception("Erro ao buscar marca");
		}
		return status;
	}

	public void alterarStatus(int id, int status) throws Exception{
		if (status==0) {
			status=1;
		}else if(status==1){
			status=0;
		}
		
		String comando = "UPDATE marcas SET status = ? WHERE (id = ?)";
		
		PreparedStatement p;
		
		try {
			p = this.conexao.prepareStatement(comando);
			p.setInt(1, status);
			p.setInt(2, id);
			p.executeUpdate();
			System.out.println("executou");
		}catch(Exception e){
			e.printStackTrace();
			throw new Exception("Erro alterar status");
			
		}
	}
	
}
