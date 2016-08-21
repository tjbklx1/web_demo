
function getHttp(){
	var http=null;
	if(window.XMLHttpRequest){
		http=new XMLHttpRequest();
	}else{
		var https =["MSXML2.XMLHttp.5.0",
					"MSXML2.XMLHttp.4.0",
					"MSXML2.XMLHttp.3.0",
			        "MSXML2.XMLHttp",
			        "Microsoft.XMLHTTP"];
		for(var i =0;i<https.length;i++){
			try{
				http = new ActiveXObject(https[i]);
				if(http){//Object,!=null
			//		alert(i+ ","+http+"   new ActiveXObject");
					break;
				}
			}catch(ee){
				continue;
			}
		}
	}
	return http;
}

function back(){
	  if(http.readyState==4 ){  
			if(http.status==200){
		  		var txt =http.responseText;
		  		alert(txt);
		  	}else{
		  		alert("error  "+http.status);
		  	}
		}
};