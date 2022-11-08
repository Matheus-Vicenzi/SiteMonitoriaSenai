package br.com.sitemonitoria.rest;


import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import br.com.sitemonitoria.bd.Conexao;
import br.com.sitemonitoria.jdbc.JDBCMonitoriaDAO;
import br.com.sitemonitoria.modelo.FiltroMonitoria;
import br.com.sitemonitoria.modelo.Monitoria;


@Path("monitoria")
public class MonitoriaRest extends UtilRest {

	@POST
	@Path("/cadastrar")
	@Consumes("application/*")
	public Response inserir(String dadosMonitoria) {
		
		try {
			Monitoria monitoria = new Gson().fromJson(dadosMonitoria, Monitoria.class);
			
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMonitoriaDAO jdbcMonitoria = new JDBCMonitoriaDAO(conexao);
			
			jdbcMonitoria.cadastrar(monitoria);
			
			conec.fecharConexao();
			
			return this.buildResponse("Monitoria cadastrada com sucesso!");
			
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
		
	}
	
	@GET
	@Path("/buscar")
	@Consumes("application/*")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar(String dadosMonitoria) {
	
		try {
			
			List<JsonObject> listaMonitorias = new ArrayList<JsonObject>();
			
			FiltroMonitoria monitoria = new Gson().fromJson(dadosMonitoria, FiltroMonitoria.class);
			
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMonitoriaDAO jdbcMonitoria = new JDBCMonitoriaDAO(conexao);
			
			listaMonitorias = jdbcMonitoria.consultar(monitoria);
			
			String json = new Gson().toJson(listaMonitorias);
			System.out.println(json);
			return this.buildResponse(json);
			
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
		
	}
	
}
