package com;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class XMLServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			
		doPost(request, response);
	}	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		System.err.println("dopost 方法启动");
		String str = "<?xml version='1.0' encoding='UTF-8'?>"+
		             "<users>"+
		             "<user id='aaa' name='aaaaa'/>"+
		             "<user id='bbbb' name='name'/>"+
		             "</users>";
		response.setContentType("text/xml;charset=UTF-8"); //text/plain,text/html,text/xml
		response.getWriter().print(str);
		
	}

}
