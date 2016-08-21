$(function(){
	//$===jQuery
	//	$("button").click(function(){		//对应所有button
		$("button:eq(0)").click(function(){	//进对应button的下表为0 的
		//	alert("dddd");
		//	var text_tag =this.innerHTML;
			var text_tag =$(this).text();	//text=innertext //ie firefox
		
			alert(text_tag);
			});
		
		
		
		$("input").click(function(){
	//		alert("input----");
	//		var input_tag=$(this).text();	//text为空 指的是 innerhtml对应的文本
			var input_tag=$(this).val();	//val==value
			alert(input_tag);
			
			var alt_tag=$(this).attr("alt");	//val==value
			alert(alt_tag);
			
			//判断this 是不是jQuery对象 typeof instanceof
			var boo =(this instanceof jQuery);
			alert(boo);
			var xx=$(this);
			boo=(this instanceof jQuery);
			alert(boo);
			var v=xx.val();
			alert(v);
		});
		
		$(document).ready(function(){
			alert("document-ready");
			
		});
		
});
//function abc(obj){		//对应onclick事件
//	var tag=event.srcElement;
//	alert(tag.tagName);
//	var txt=tag.innerHTML;
//	alert(txt);
//}

