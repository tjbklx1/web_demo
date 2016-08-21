//需要首先通过Javascript来解决内容部分奇偶行的背景色不同
//$(document).ready(function(){
//	
//});
//简化的ready写法
$(function(){
	$("tbody tr:even").css("background-color","#ECE9D8");
	
	var numTd =$("tbody td:even");
	numTd.click(function(){
//		alert("even");
		var tdObj =$(this);
		
		
		
	});
	
});