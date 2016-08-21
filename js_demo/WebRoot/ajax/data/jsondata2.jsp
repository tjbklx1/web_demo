<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<%
	String[] ids = request.getParameterValues("id");
	if(ids!=null){
		 for(String ss:ids){
		 	System.out.println("++"+ss);
		 }
	}

	String strs="[{\"id\":\"001\",\"name\":\"jack\"},"+
				 "{\"id\":\"002\",\"name\":\"rose\"},"+
				 "{\"id\":\"003\",\"name\":\"阿萨斯\"}]";

	System.out.println(strs);
	out.println(strs);
%>