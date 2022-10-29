package br.com.sitemonitoria.rest;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

public class UtilRest {

	public Response buildResponse(Object result) {
		
		try {
			String valorResposta = new Gson().toJson(result);
			return Response.ok(valorResposta).build();
			
		}catch(Exception ex) {
			ex.printStackTrace();
			return this.buildErrorResponse(ex.getMessage());
		}
	}	
		
	public Response buildErrorResponse(String str) {
		
		ResponseBuilder rb = Response.status(Response.Status.INTERNAL_SERVER_ERROR);
		rb = rb.type("text/plain");
		rb = rb.entity(str);
		return rb.build();
	}
	
}
	

