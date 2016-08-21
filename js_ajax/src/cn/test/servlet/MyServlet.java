package cn.test.servlet;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
public class MyServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		System.out.println("get 方法");
		doPost(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("post 方法");
		
		resp.setHeader("pragma", "no-cache");
		resp.setHeader("cache-control", "no-cache");
	
		int param1 = Integer.parseInt(req.getParameter("param1"));
		int param2 = Integer.parseInt(req.getParameter("param2"));

		PrintWriter out = resp.getWriter();
		out.println(String.valueOf(param1 + param2));
		out.flush();
	
	}
}
