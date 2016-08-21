onload = function(){
	var form = document.getElementById("form");
	
	var usernameObj = document.getElementById("username");
	var passwordObj = document.getElementById("password");
	var confirmObj = document.getElementById("confirm");
	var emailObj = document.getElementById("email");
	var birthdayObj = document.getElementById("birthday");
	var cityObj = document.getElementById("city");
	var genderArr = document.getElementsByName("gender");	// 获取页面中所有name属性为gender的标签, 返回一个数组
	var interestArr = document.getElementsByName("interest");		// 获取页面中所有name属性为interest的标签, 返回一个数组
	
	var usernameRegex = /^[a-zA-Z]\w*$/;
	var passwordRegex = /^\w{6,16}$/;
	var emailRegex = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,3}$/;
	var birthdayRegex = /^[12]\d{3}-(([1-9])|(0[1-9])|(1[012]))-(([1-9])|([12]\d)|(3[01])|(0[1-9]))$/;		
	
	usernameObj.onkeypress = function(){	// 给usernameObj添加键盘按下事件处理
		if(usernameObj.value.length == 0 && event.keyCode == 32)
			return false;
	}
	
	function checkUsername(){
		var username = trim(usernameObj.value);		// 去掉前后空白
		var span = document.getElementById("usernameSpan");
		if(username == ""){
			span.innerHTML = "<font color=red>用户名必须填写</font>";
			return false;
		}else if (!usernameRegex.test(username)) { // 如果用户名的值不匹配正则表达式
			span.innerHTML = "<font color=red>用户名格式不正确</font>";
			return false;
		}else{
			span.innerHTML = "<img src='../img/true.gif' width='12'>"
			return true;
		}
	}
	
	function checkPassword(){
		var password = trim(passwordObj.value);		// 去掉前后空白
		var span = document.getElementById("passwordSpan");
		if (password == "") {
			span.innerHTML = "<font color=red>密码必须填写</font>";
			return false;
		}else if (!passwordRegex.test(password)) { // 如果用户名的值不匹配正则表达式
				span.innerHTML = "<font color=red>密码格式不正确</font>";
				return false;
		}else{ 
			span.innerHTML = "<img src='../img/true.gif' width='12'>"
			return true;
		}
	}
	
	function checkConfirm(){
		var confirm = trim(confirmObj.value);		// 去掉前后空白
		var password = trim(passwordObj.value);
		var span = document.getElementById("confirmSpan");
		if (confirm != password) {
			span.innerHTML = "<font color=red>密码必须保持一致</font>";
			return false;
		}else{ 
			span.innerHTML = "<img src='../img/true.gif' width='12'>"
			return true;
		}
	}
	
	function checkEmail(){
		var email = trim(emailObj.value);		// 去掉前后空白
		var span = document.getElementById("emailSpan");
		if (email == "") {
			span.innerHTML = "<font color=red>邮箱必须填写</font>";
			return false;
		}else if (!emailRegex.test(email)) { // 如果用户名的值不匹配正则表达式
				span.innerHTML = "<font color=red>邮箱格式不正确</font>";
				return false;
		}else{ 
			span.innerHTML = "<img src='../img/true.gif' width='12'>"
			return true;
		}
	}
	
	function checkBirthday(){
		var birthday = trim(birthdayObj.value);		// 去掉前后空白
		var span = document.getElementById("birthdaySpan");
		if (birthday == "") {
			span.innerHTML = "<font color=red>生日必须填写</font>";
			return false;
		}else if (!birthdayRegex.test(birthday)) { // 如果用户名的值不匹配正则表达式
				span.innerHTML = "<font color=red>生日格式不正确</font>";
				return false;
		}else{ 
			span.innerHTML = "<img src='../img/true.gif' width='12'>"
			return true;
		}
	}
	
	function checkGender(){
		var span = document.getElementById("genderSpan");
		if (genderArr[0].checked == genderArr[1].checked) {
			span.innerHTML = "<font color=red>性别必须选择</font>"
			return false;
		}else
			true;
	}
	
	function checkInterest(){
		var span = document.getElementById("interestSpan");
		if (!interestArr[0].checked && !interestArr[1].checked && !interestArr[2].checked) {
			span.innerHTML = "<font color=red>兴趣必须选择</font>"
			return false;
		}else
			true;
	}
	
	
	usernameObj.onchange = function(){
		checkUsername();
	}
	passwordObj.onchange = function(){
		 checkPassword();
	}
	confirmObj.onchange = function(){
		 checkConfirm();
	}
	emailObj.onchange = function(){
		 checkEmail();
	}
	birthdayObj.onchange = function(){
		 checkBirthday();
	}
	
	form.onsubmit = function(){
		var bUsername = checkUsername();
		var bPassword = checkPassword();
		var bConfirm = checkConfirm();
		var bEmail = checkEmail();
		var bBirthday = checkBirthday();
		var bGender = checkGender();
		var bInterest = checkInterest();
		return bUsername && bPassword && bConfirm && bEmail && bBirthday && bGender && bInterest;
	}
	
	/*
	form.onsubmit = function(){		// 表单提交时触发
		var username = trim(usernameObj.value);		// 去掉前后空白
		var email = trim(emailObj.value);		// 去掉前后空白
		var birthday = trim(birthdayObj.value);		// 去掉前后空白
		
		if(username == "")
			alert("用户名必须填写");
		else if(!usernameRegex.test(username))		// 如果用户名的值不匹配正则表达式
			alert("用户名格式不正确");
		else if(passwordObj.value == "")
			alert("密码必须填写");
		else if(!passwordRegex.test(passwordObj.value))
			alert("密码格式不正确");
		else if(confirmObj.value == "")
			alert("确认密码必须填写");
		else if(confirmObj.value != passwordObj.value)
			alert("密码必须保持一致");
		else if(email == "")
			alert("邮箱必须填写");
		else if(!emailRegex.test(email))
			alert("邮箱格式不正确");
		else if(birthday == "")
			alert("生日必须填写");
		else if(!birthdayRegex.test(birthday))
			alert("生日格式不正确");
		else if(genderArr[0].checked == genderArr[1].checked)	// 性别单选按钮, 只有在都没选的情况下才会相等
			alert("性别必须选择");
		else if(!(interestArr[0].checked || interestArr[1].checked || interestArr[2].checked))	// 或者(||)运算符是只要有一个为true结果就为true, 取反就是一个都没选
			alert("兴趣必须选择");
		else if(cityObj.value == "")
			alert("城市必须选择");
		else
			return true;
			
		return false;
	}
	*/
}

function trim(s){
	return s.replace(/^\s+|\s+$/g, "");	// global, 全局, 会匹配到所有的, 如果不加, 只匹配到一个
}