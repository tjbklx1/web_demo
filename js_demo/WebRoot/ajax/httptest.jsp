<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>Ajax test</title>	
  </head>
  
  <body>
    <button onclick="create();">获取服务器时间</button>
  </body>
<script language="javascript">
	function create(){
		var http=null;
		if(document.all){
			alert(" IE ");			
			http= new ActiveXObject("Microsoft.XMLHTTP");
						
		}else{
			alert(" FF ");	
			http= new XMLHttpRequest();
		}
		var url="data/time.jsp?name=wj";
		http.open("GET",url,true);
		alert("http: "+http);	
		
		http.onreadystatechange=function(){
			//判断服务是否执行成功
			if(http.readyState==4){
				var txt = http.responseText;
				alert(txt);
			}
		};
		
		//通过send方法向服务回发消息。
		http.send(null);   //send中应该包含向服务器传递的参数。
	}
</script>
</html>
