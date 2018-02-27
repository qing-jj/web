$(function(){
	var arr = [[],[],[],[],[],[]];
	var data = hot_spot_data.hot_spot_list
	var imgs = $(".all-spot li>img");
	for(var i = 0;i < data.length;i++ ){
		if(data[i].grade>4){
			arr[0].push(data[i])  //热门景点
		}
		if(data[i].area == "west"){  
			arr[1].push(data[i])
		}
		if(data[i].area == "south"){ 
			arr[2].push(data[i])
		}
		if(data[i].area == "east"){
			arr[3].push(data[i])
		}
		if(data[i].area == "north"){
			arr[4].push(data[i])
		}
		if(data[i].area == "abroad"){
			arr[5].push(data[i])
		}

	}
	for(var i = 0;i<arr[0].length;i++){
		var lis = $("<li>");
		var imgs = $("<img>");
		imgs.attr("src",arr[0][i].source)
		imgs.appendTo(lis);
		$("<p>"+arr[0][i].title+"</p>").appendTo(lis);
		var p = $("<p><em>旅游评价</em></p>");
		for(var j =0;j<5;j++){
			var spns = $("<span>")
			spns.appendTo(p);
		}
		for(var k =0;k<arr[0][i].grade;k++){
		    p.find("span").eq(k).css("backgroundPositionY","top");
		}
		p.appendTo(lis);
		lis.appendTo($(".all-spot>ul"))
		
		
		
	}
	$(".spot-choose>a").click(function(){
		var n = $(this).index();
        $(".all-spot>ul>li").remove();
        $(this).addClass("on").siblings().removeClass("on");
		for(var i = 0;i<arr[n].length;i++){
			var lis = $("<li>");
			var imgs = $("<img>");
			imgs.attr("src",arr[n][i].source)
			imgs.appendTo(lis);
			$("<p>"+arr[n][i].title+"</p>").appendTo(lis);
			var p = $("<p><em>旅游评价</em></p>");
			for(var j =0;j<5;j++){
				var spns = $("<span>")
				spns.appendTo(p);
			}
			for(var k =0;k<arr[n][i].grade;k++){
			    p.find("span").eq(k).css("backgroundPositionY","top");
			}
			p.appendTo(lis);
			lis.appendTo($(".all-spot>ul"))
			
			
			
		}

	})
})