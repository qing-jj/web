$(function(){
	$(".go_top").click(function(){
		// $(window).scrollTop(0)
		var sTop = parseInt($(window).scrollTop());
		var timer = setInterval(function(){
			sTop -=50;
			$(window).scrollTop(sTop);
			if(sTop <= 10){
				clearInterval(timer)
			}
		},10);
	})
	
})