<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String name =request.getParameter("name");
	String pwd =request.getParameter("pwd");
	String code =request.getParameter("code");
	String result="";
	//System.out.println(name);
	//System.out.println(pwd);
	//System.out.println(code);
	if(name!=null && name.equals("itcast") && pwd!=null &&pwd.equals("1234")){
		if(code !=null && code.equals("8888")){
			System.out.println("登陆成功");
			result= "0";
		}else{
			System.out.println("验证码错误");
			result= "1";
		}
	}else{
		System.out.println("用户名或密码错误");
		result= "2";
	}
	out.println(result);
%>