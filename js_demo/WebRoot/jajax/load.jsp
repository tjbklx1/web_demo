<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>   
    <title>My JSP 'index.jsp' starting page</title>	
    <script type="text/javascript" src="<c:url value='/js/jquery-1.6.2.js'/>"></script>
    <style type="text/css">
    	div{    		
  			border: 1px solid red;
  			width: 200;
  			height: 200;  		
    	}
    </style>
    <script type="text/javascript">
    	$(function(){
    		$("#a").click(function(){
	//有参数是post 没有参数get
/**  
    			$(this).load("load2.jsp");	
*/
/**
 			$(this).load("load2.jsp",{name:"wj",addr:"北京"},function(){		
 				alert("加载成功");
 			});
*/
/**
  				$(this).load("load2.jsp",null,function(){
  					alert("加载成功");
    		});
 */  
 /**
 		//get方法
 		$(this).load("load2.jsp","addr=北京&name=wj",function(){		
 				alert("加载成功");
 			});
*/
		var param = "addr=北京ddd";
  		param =encodeURI(encodeURI(param));
  		alert(param);
/**  		
		$(this).load("load2.jsp",{addr:'北京xxx'},function(){		
 				alert("加载成功");
 			});
*/
		$(this).load("load2.jsp"+param,null,function(){		
 				alert("加载成功");
 			});
    	});
/**    		
    	$("#btn1").click(function(){
    		$.get("get.jsp",null,function(data){
    			alert(data.name+","+data.children.length);
    		},'json');	//html =text     		
    	});	
*/	
		$("#btn1").click(function(){
    		$.get("get.jsp","name=北京",function(data){
    			alert(data.name+","+data.children.length);
    		},'json');	//html =text     		
    	});	
	
		$("#btn2").click(function(){
    		$.post("users.xml",null,function(data){
    	//js方式
/**
    			alert(data);
    			var len = data.getElementsByTagName("user").length;
    			alert(len);
    			var users = data.getElementsByTagName("user");
    			for(var i=0;i<users.length;i++){
  					alert(users[i].getAttribute("id"));
  					}
*/    		
		//jQuery方式
  				$(data).find("user").each(function(idx){
  				//	alert(idx);
  					var id = $(this).attr("id");
  					var name = $(this).attr("name");
  					alert(id+","+name);
  				});
    		},'xml');		
    	});	
		
		$("#btn8").click(function(){
    		$.post("users.xml",null,function(data,status,obj){
    			alert(status);
  				alert(obj);
  				for(var a in obj){
  					alert(a+"="+obj[a]);
  					}
  				
    			});
    		});
		$("#btn3").click(function(){
  				$.getScript("a.js",function(){
  					abc();
  				});
  				
  			});
		$("#btn4").click(function(){
			$.ajax({
				
				beforeSend:function(){
				 	var w = $("body").width();
       	  			var h = $("body").height();
       	 
       				var div = $("<div id='_abc'></div>");
       				div.css({
       					position:'absolute',
       					left:0,
       					top:0,
       					width:w,
       					height:h,
       					zIndex:1000,
       					background:'#342abf',
       					margin:'0px'
       				});
       		
       	  			div.appendTo("body").fadeTo("slow",0.6);
				
				},
				
				url:'get.jsp',
				data:{name:'wjwj'},
				type:'post',
				dataType:'json',
				error:function(){
					alert("error")
				},
				success:function(data){
					alert(data.name);
				},
				complete:function(obj){
				//	alert("complete "+obj.status);
					$("#_abc").fadeOut();
  					$("#_abc").remove();
  					//$("div").last().hide();		//隐藏无效 删除最好
  					//alert($("div").length);
  					}
			});
			});
		
		$.ajaxSetup({
		//		 url:'get.jsp',			//这两行注释为btn6准备的
		//		 dataType:'json',
  				beforeSend:function(){						
  					    var w = $("body").width();
	       	  			var h = $("body").height();
	       	 
	       				var div = $("<div id='_abc'></div>");
	       				div.css({
	       					position:'absolute',
	       					left:0,
	       					top:0,
	       					width:w,
	       					height:h,
	       					zIndex:1000,
	       					background:'#342abf',
	       					margin:'0px'
	       				});
	       		
	       	  			div.appendTo("body").fadeTo("slow",0.6);
  					},
  					complete:function(obj){
  						$("#_abc").fadeOut();
  						$("#_abc").remove();
  					}
  				
  			});
		
		//对于第五个按钮 没有设置多余的东西 ,但是有需要像按钮四一样 就需要在按钮五前面全局设置$.ajaxSetup
		$("#btn5").click(function(){

			$.post("get.jsp",
				{name:'kkk'},function(data){
						alert(data.name);
				},"json");
		});
//若在全局设置中$.ajaxSetup,设置了请求页面,则可用这种方式来访问请求页面,在$.ajaxSetup中添加 url:'get.jsp',dataType:'json',
//但是不建议这种方式 还是像前面btn5 中的方式比较好	
		$("#btn6").click(function(){
			$.ajax({
  					data:{name:'ddd'},
  					success:function(d){
  						alert(d.name);
  					}
  				});
		});
		
    });
    </script>
  </head>  
  <body>
   <div id="a"></div>
   
   <br/>
  div的 两次编码没有做完<br>
  	<button id="btn1">Get</button>
  	<button id="btn2">返回XML</button>
  	<button id="btn3">Script</button>
    <button id="btn4">Ajax</button>
    <button id="btn5">POST</button>
    <button id="btn6">POST-默认中配置url</button>
    <button id="btn8">xml---</button>
    
  </body>
</html>
