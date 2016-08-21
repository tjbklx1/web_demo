<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
    //Select count(*) from users where name='name',0,1
    System.out.println(">>>> : chage.jsp");
    String name = request.getParameter("name");
    if(name.indexOf("it")!=-1){
    	out.println("1");
    }else{
    	out.println("0");
    }  
%>