package br.com.coldigogeladeiras.jdbc;

import br.com.coldigogeladeiras.bd.Conexao;
import br.com.coldigogeladeiras.jdbcinterface.ProdutoDAO;
import br.com.coldigogeladeiras.modelo.Produto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class JDBCProdutoDAO implements ProdutoDAO{

	private Connection conexao;
	
	public JDBCProdutoDAO(Connection conexao) {
		this.conexao = conexao;
	}
	
	public boolean inserir(Produto produto) {
		
		String comando = "INSERT INTO produtos "
				+ "(id, categoria, modelo, capacidade, valor, marcas_id) "
				+ "VALUES (?,?,?,?,?,?)";
		PreparedStatement p;
		
		try {
			
			//Prepara o comando para execução no bd em que nos conectamos
			p = this.conexao.prepareStatement(comando);
			
			//Substitui no comando os "?" pelos valores do produto
			p.setInt(1, produto.getId());
			p.setString(2, produto.getCategoria());
			p.setString(3, produto.getModelo());
			p.setInt(4, produto.getCapacidade());
			p.setFloat(5, produto.getValor());
			p.setInt(6, produto.getMarcaId());
			
			//executa o comando no bd
			p.execute();
						
		}catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
		
	}
	
}