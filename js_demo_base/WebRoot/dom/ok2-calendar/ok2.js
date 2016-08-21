function check(){
 	var start =document.getElementById("start");
 	var end =document.getElementById("end");
 	var message =document.getElementById("message");
 	
 	alert(start.value +" : "+end.value);
 	alert(start.value.length +" : "+end.value.length);
 	if(start.value.length==0 || end.value.length==0){
 		message.innerHTML="<font color='red'>请选择开始时间和结束时间</font>"
 		return ;
 	}
 	document.forms[0].submit();
 }