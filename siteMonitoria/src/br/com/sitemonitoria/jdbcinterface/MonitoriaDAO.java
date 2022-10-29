package br.com.sitemonitoria.jdbcinterface;

import br.com.sitemonitoria.modelo.Monitoria;

public interface MonitoriaDAO {

	public void cadastrar(Monitoria monitoria) throws Exception;
	
}
