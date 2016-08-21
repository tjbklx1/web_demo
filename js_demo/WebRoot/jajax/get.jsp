<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
Thread.sleep(3000);
System.out.println("method: "+request.getMethod());
String name = request.getParameter("name");
System.out.println(name);



%>
{
	"name":"王健同学",
	"age":99,
	"marry":true,
	"children":[
	   "A","B","C"
	]
}