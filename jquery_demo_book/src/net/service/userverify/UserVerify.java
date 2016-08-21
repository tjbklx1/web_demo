package net.service.userverify;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class UserVerify extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		processRequest(request, response);
	}

	public String getServletInfo() {
		return "Short description";
	}

	private void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		try {
			String param = request.getParameter("userName");
			if (param == null || param.length() == 0) {
				out.println("用户名不能为空");
			} else {
				String userName = URLDecoder.decode(param, "UTF-8");
				if (userName.equals("admin")) {
					out.println("用户名[" + userName + "]已经存在，请使用别的用户名注册");
				} else {
					out.println("可以使用用户名[" + userName + "]注册");
				}
			}
		} finally {
			out.close();
		}
	}

}
