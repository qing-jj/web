$(function(){
	var num=0;
	var index=0;
	var timer=null;
	var flag=false;
	var telFlag=false;
	var urls=['<img src="img/head/0.jpg">','<img src="img/head/1.jpg">','<img src="img/head/2.jpg">','<img src="img/head/3.jpg">','<img src="img/head/4.jpg">','<img src="img/head/5.jpg">','<img src="img/head/6.jpg">','<img src="img/head/7.jpg">','<img src="img/head/8.jpg">','<img src="img/head/9.jpg">','<img src="img/head/10.jpg">','<img src="img/head/11.jpg">','<img src="img/head/12.jpg">','<img src="img/head/13.jpg">','<img src="img/head/14.jpg">','<img src="img/head/15.jpg">','<img src="img/head/16.jpg">','<img src="img/head/17.jpg">','<img src="img/head/18.jpg">','<img src="img/head/19.jpg">','<img src="img/head/20.jpg">'];
	var messdata=[{
			name:"张先生",
			text:"很不错的一次体验"
		},
		{
			name:"李先生",
			text:"风景很美"
		},
		{
			name:"王女士",
			text:"好开心,这次旅行"
		},
		{
			name:"刘先生",
			text:"想去旅行,问一下,参加这个旅行社感觉怎么样?"
		},
		{
			name:"陈女士",
			text:"和老公一起旅游,很棒,很棒,很棒!"
		},
		{
			name:"孙先生",
			text:"下次有机会旅行,还找你们"
		},
		{
			name:"何先生",
			text:"导游人很好,也不会带我们乱买东西,赞!"
		},
		{
			name:"肖女士",
			text:"一个人的旅途,很愉快"
		},
		{
			name:"刘女士",
			text:"套餐超级赞~!"
		},
		{
			name:"王先生",
			text:"很划算的一次旅行"
		},
		{
			name:"韩女士",
			text:"一个字,棒!"
		},
		{
			name:"葛先生",
			text:"非常轻松,非常高兴的一次旅途"
		},
		{
			name:"秦先生",
			text:"服务态度超级好"
		},
		{
			name:"易先生",
			text:"很好,很棒,还想再去"
		},
		{
			name:"赵先生",
			text:"世界那么大,我想出去看看"
		},
		{
			name:"金女士",
			text:"来一场说走就走的旅行"
		},]
// 以上为假数据
	for(var i=0;i<messdata.length;i++){
		var num= Math.floor(Math.random()*urls.length);
		var box=$('<div class="messBox">');
		var left=$('<div class="messConLeft">');
		var right=$('<div class="messConRight">');
		var img=$('<div class="messConLeftImg">');
		var leftName=$('<div class="messConLeftName">');
		var txt=$('<div class="messConRightText">');
		img.html(urls[num]);
		leftName.html(messdata[i].name);
		img.appendTo(left);
		leftName.appendTo(left);
		left.appendTo(box);
		txt.html(messdata[i].text);
		txt.appendTo(right);
		right.appendTo(box);
		box.appendTo($('.message_content'));
	}
// 以上为遍历数据

	$("#tel").blur(function(){
			var tel=$("#tel").val();
			var patt=/^1[3,4,5,7,8]\d{9}$/;
			if(!tel.match(patt)){
				telFlag=false;
				alert("手机号码错误!!!");
			}else{
				telFlag=true;
			}
		})

	$('.btn').click(function(){
		var inpName=$('#name').val();
		var inpTel=$('#tel').val();
		var inpText=$('#text').val();


		if(inpName&&telFlag&&inpText){
			num= Math.floor(Math.random()*urls.length);
			var meTxt=$('<div class="messConRightMeText">');
			var meBox=$('<div class="messBox">');
			var meLeft=$('<div class="messConLeft">');
			var meRight=$('<div class="messConRight">');
			var meImg=$('<div class="messConLeftMeImg">');
			var leftMeName=$('<div class="messConLeftName">');

			meImg.html(urls[num]);
			leftMeName.html(inpName);
			meImg.appendTo(meLeft);
			leftMeName.appendTo(meLeft);
			meLeft.appendTo(meBox);
			meTxt.html(inpText);
			meTxt.appendTo(meRight);
			meRight.appendTo(meBox);
			meBox.appendTo($('.message_content'));

			clearInterval(timer);
			alert("留言成功!!!")
			boxs=document.getElementsByClassName('messBox');
			timer=setInterval(show,1000);
		}else{
			alert("输入错误!!!");
		}

	})

	// 以上为点击添加数据
	var boxs=document.getElementsByClassName('messBox');

	function show(){
		console.log(index);
		var ind =index%5;
		boxs[index].style.top=(120+30)*ind+'px';
		index++;
		if(index>5){
			boxs[index-6].style.display='none';
		}
		if(index>=10){
			boxs[index-10].style.top=800+'px';
			boxs[index-10].style.display='block';
		}
		if(index>boxs.length-1){
			clearInterval(timer);
		}
	}
	timer=setInterval(show,1000);
})