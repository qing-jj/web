$(function(){
	// $(".dlzc>button:eq(1)").addClass("zc");
	$(".dlzc>button:eq(1)").click(function(){
		$(".dlzc>button:eq(0)").hide();
		$(".dlzc>span").show();
		$(this).css("margin-left","0").removeClass("zc");
		$(".sign-in").show();
		$(".login-box-un").hide()
        
	})
	$(".dlzc>span").click(function(){
		$(".dlzc>button:eq(0)").show();
		$(".dlzc>span").hide();
		$(this).css("margin-left","15px");
		$(".dlzc>button:eq(1)").addClass("zc");
		$(".sign-in").hide();
		$(".login-box-un").show()
	})
	// 正则
	var reg1 = /^[a-zA-Z]\w{5,17}$/;  //用户名
	var reg2 = /\w{6,18}@\w+\.com$/;  //邮箱
	var reg3 = /\S{6,18}$/;  //密码
	var reg4 = /^[a-zA-Z]\w{5,17}$|\w{6,18}@\w+\.com$/; //用户名密码
	$(".name>input").blur(function(){
		if(!reg1.test($(".name>input").val())){
			$(".name>p").html("以字母开头的6~18位字母数字或则下划线")
		}else{
			$(".name>p").html("");
		}
	})
	$(".email>input").blur(function(){
		if(!reg2.test($(".email>input").val())){
			$(".email>p").html("请输入正确的邮箱格式")
		}else{
			$(".email>p").html("");
		}
	})
	$(".sign-in .password:eq(0)>input").blur(function(){
		if(!reg3.test($(this).val())){
			$(".sign-in .password:eq(0)>p").html("请输入6~18非空白字符")
		}else{
			$(".sign-in .password:eq(0)>p").html("");
		}
	})

	$(".sign-in .password:eq(1)>input").blur(function(){
		alert(1)
		if($(this).val() != $(".sign-in .password:eq(0)>input").val()||$(this).val("")){
			$(".sign-in .password:eq(1)>p").html("两次密码必须相同")
		}else{
			$(".sign-in .password:eq(1)>p").html("");
		}
	})

	$(".login-box-un .user>input").blur(function(){
		if(!reg4.test($(this).val())){
			$(".login-box-un .user>p").html("6~18位字母数字或则下划线或则邮箱")
		}else{
			$(".login-box-un .user>p").html("");
		}
	})


	$(".login-box-un .password>input").blur(function(){
		if(!reg3.test($(this).val())){
			$(".login-box-un .password>p").html("请输入6~18非空白字符")
		}else{
			$(".login-box-un .password>p").html("");
		}
	})

	

		
		
	
})