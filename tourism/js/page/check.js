function Check(form,name,tel,option,btn){
		this.form = document.getElementById(form)
		this.name = document.getElementById(name)
		this.tel = document.getElementById(tel) 
		var _this = this
		this.name.onblur=function(){
			_this.checkname()
		}
		this.tel.onblur=function(){
			_this.checktel()
		}
		this.select = this.form.getElementsByTagName('select')
		_this.setoptions.call(this.select,option)
		this.btn = document.getElementById(btn)
		this.btn.onclick = function(){
			_this.sub()
		}
		this.timer = null
		this.flag = true
	}
	Check.prototype.checkname = function(){
		var pattern = /^[^\s\d]+$/
		var p1 = this.name.nextSibling
		if(p1.className == 'red'){
			this.name.parentNode.removeChild(p1)
		}
		if(!pattern.test(this.name.value)){
			var p = document.createElement('p')
			p.innerHTML ="请输入正确的名字"
			p.className = 'red'
			this.name.parentNode.insertBefore(p,this.name.nextSibling)
			this.flag = false
		}else{
			this.flag = true
		}
		
	}
	Check.prototype.checktel = function(){
		var pattern = /^1\d{10}$/
		var p1 = this.tel.nextSibling
		if(p1.className == 'red'){
			this.tel.parentNode.removeChild(p1)
		}
		if(!pattern.test(this.tel.value)){
			var p = document.createElement('p')
			p.innerHTML ="请输入正确的号码"
			p.className = 'red'
			this.tel.parentNode.insertBefore(p,this.tel.nextSibling)
			this.flag = false
		}else{
			this.flag = true
		}
	}
	Check.prototype.setoptions=function(option){
		var _this = $(this)
		$.each(option,function(k,v){
			for(var i = 0;i<v.length;i++){
				_this.eq(k).append($('<option>').html(v[i]))
			}
		})
	}
	Check.prototype.sub=function(){
		var a = document.getElementById('show')
		var t1 = parseInt(window.getComputedStyle(a).bottom)
		var b = $('#show')
		var end =-300
		var _this = this
		a.style.bottom = -500+'px'
		function animate(a,end,t){
			var s = Math.ceil((end - t)/20)
			a.style.bottom = (t+s)+'px'
			
		}
		if(this.flag){
			b.fadeIn()
			clearInterval(this.timer)
			this.timer = setInterval(function(){
			var t = parseInt(window.getComputedStyle(a).bottom)
			if(t>=end){
				clearInterval(_this.timer)
				b.fadeOut()
				
			}
			animate(a,end,t)
			},30)
		}
		
		
	}