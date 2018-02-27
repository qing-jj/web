/**
 * Created by Administrator on 2017/10/20.
 */

//获取样式函数
function getstyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];//ie浏览器的实现方法
    }else{
        //非IE,
        return window.getComputedStyle(obj,null)[attr];
    }
}

//添加事件函数
function addEvent(obj,evt,fn){
    if(obj.addEventListener){
        //在非IE指向的是对象
        obj.addEventListener(evt,fn,false);
    }else if(obj.attachEvent){
        //在IE中this指向window，其中this的指向不一样，下边通过call方法改变其指向，使其统一
        obj.attachEvent("on"+evt,function(){
            fn.call(obj)
        });
    }else{
        obj["on"+evt]=fn;
    }
}
//移除事件函数
function removeEvent(obj,evt,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(evt,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+evt,function(){
            fn.call(obj)
        });
    }else{
        obj["on"+evt]=null;
    }
}

//组织冒泡
function preventBubble(ev){
    var e = ev?ev:window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        //ie下阻止冒泡的方法
        e.cancelBubble = true;
    }
}
//组止默认行为
function preventDefault(ev){
    alert("woshishui");
    var e = ev || event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//运动函数，配合getStyle函数使用

function move(obj,attrobj,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var prop in attrobj){//遍历对象，得到对应属性和属性值
            var current;
            //当属性为透明度时，current的值的算法
            if(prop == "opacity"){
                current = Math.round(parseInt(getStyle(obj,prop)*100)) || 0
            }else{
                //是其他属性时，current的算法
                current = parseFloat(getStyle(obj,prop));
            }
            var speed =( attrobj[prop]-current)/8;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            if(prop == "opacity"){
                obj.style.opacity = (current + speed) / 100;
            }
            else if(prop == "zIndex") {
                obj.style.zIndex = attrobj[prop];
            }
            else {
                obj.style[prop] = current  + speed + "px" ;
            }
            //当遍历属性值没有到达目标位置就改变flag的值
            if(attrobj[prop] != current){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){//如果有回调函数，则调用
                fn();
            }
        }
    },30);
}


