package br.com.coldigogeladeiras.jdbcinterface;

import java.util.List;

import br.com.coldigogeladeiras.modelo.Marca;
import br.com.coldigogeladeiras.modelo.Produto;

public interface MarcaDAO {

	public List<Marca> buscar();
	public boolean inserir(Marca marca);
	
}
