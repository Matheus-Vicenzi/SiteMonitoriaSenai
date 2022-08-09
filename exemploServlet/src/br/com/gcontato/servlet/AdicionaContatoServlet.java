package br.com.gcontato.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AdicionaContatoServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	public AdicionaContatoServlet() {
		super();
	}
	
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
		
		PrintWriter out = response.getWriter();
		String nome = request.getParameter("nome");
		String endereco = request.getParameter("endereco");
		String telefone = request.getParameter("telefone");
		out.println(
				"<h1>O nome é "+nome+"<br>"+
					"O endereço é "+endereco+"<br>"+
					"O telefone é "+telefone+"<br>"+
				"</h1>"
				);
			
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
		
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException{
			
	}
	
	
}
