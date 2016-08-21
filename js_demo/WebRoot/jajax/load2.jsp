<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%	
	System.out.println("method: "+request.getMethod());
	System.out.println("load2---------");
	out.print("load XXXXXXX 中文");
	
	String addr =request.getParameter("addr");
	out.print("addr: "+addr);
	System.out.print("addr: "+addr);

%>
<a>aadsfadfa</a>
<br/>
<font color="red">Hello</font>
