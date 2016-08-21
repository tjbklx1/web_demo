<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@page import="java.text.SimpleDateFormat"%>
<%	
	
	System.out.println(">>> : time.jsp");
	String name =request.getParameter("name");
	System.out.println("name = "+name);	
	
//	int i= 9/0;
	Date d =new Date();
	SimpleDateFormat sd =new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	String ss =sd.format(d);
	out.println(ss);	
	//out.print("hello");
%>