(function($){$.fn.extend({
		fademove:function(option){	//淡入淡出
			var defaults={
				timer:null,
				index:2,
			}
			var obj = $.extend({},defaults,option)
			var _this = $(this)
			obj.timer = setInterval(function(){
				if(obj.index>2){
					obj.index = 0
				}
				_this.eq(obj.index).fadeIn().siblings().fadeOut()
				obj.index++
			},5000)
			return $(this)
		},
		setImg:function(obj,flag){		//设置图片
			var index = 0
			var _this = $(this)
			$.each(obj,function(k,v){
				_this.eq(index).attr('src',v)
				if(flag == 2){
					_this.parent().siblings().eq(index).html(k)
				}else if(flag == 3){
					_this.siblings().eq(index).html(k)
				}
				index++
			})
			return $(this)
		},
		addOptions:function(options){
			var _this = $(this)
			$.each(options,function(k,v){
				_this.append($('<option>').html(v))
			})
		},
		setText:function(obj,flag){		//设置文字
			var index = 0
			var _this = $(this)
			$.each(obj,function(k,v){
				_this.eq(index).html(v)
				index++
			})
			return $(this)
		},
		fnmover:function(end){
			
		var timer = null
			var _this = $(this)
			clearInterval(timer)
			timer = setInterval(function(){
			var s =(end-parseFloat(_this.css('left')))/20
			
				s = Math.floor(s)
				if(parseFloat(_this.css('left'))<=end){
					clearInterval(timer)
			
				}
			
			
			_this.css('left',parseFloat(_this.css('left'))+s+'px')
			
			
			},5)
		},
		fnmovel:function(end){
			var timer = null
			var _this = $(this)
			clearInterval(timer)
			timer = setInterval(function(){
			var s =(end-parseFloat(_this.css('left')))/20
			
				s = Math.ceil(s)
				if(parseFloat(_this.css('left'))>=end){
					clearInterval(timer)
			
				}
			
			
			_this.css('left',parseFloat(_this.css('left'))+s+'px')
			
			
			},5)
		},
		fnmove:function(end){
			var timer = null
			var _this = $(this)
			clearInterval(timer)
			timer = setInterval(function(){
			var s =(end-parseFloat(_this.css('left')))/20
			if(s>0){
				s = Math.ceil(s)
				if(parseFloat(_this.css('left'))>=end){
					clearInterval(timer)
			
				}
			}else{
				s = Math.floor(s)
				if(parseFloat(_this.css('left'))<=end){
					clearInterval(timer)
			
				}
			}
			
			_this.css('left',parseFloat(_this.css('left'))+s+'px')
			
			
			},5)
		},
	})})($)
	
	