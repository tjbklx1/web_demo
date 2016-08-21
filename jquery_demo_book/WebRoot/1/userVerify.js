$(document).ready(function() {
	var userNameNode = $("#userName");
	$("#verifyButton").click(function(){
		var userName = userNameNode.val();
		if(userName == ""){
			alert("用户名不能为空");
		}else{
			$.get("http://127.0.0.1:8080/JQueryDemo2/UserVerify?userName=" + encodeURI(encodeURI(userName)),
				null,function(response){
				$("#result").html(response);
			});
		}
	});
		//需要找到文本框，注册事件
	userNameNode.keyup(function(){
		//获取当前文本框中的内容
		var value = userNameNode.val();
		if (value == "") {
			//让边框变成红色，并且带背景图
			userNameNode.addClass("userText");
		} else {
			//去掉边框和背景图
			userNameNode.removeClass("userText");
			
		}
	});
});