/**
 * Created by Administrator on 2017/10/20.
 */

//��ȡ��ʽ����
function getstyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];//ie�������ʵ�ַ���
    }else{
        //��IE,
        return window.getComputedStyle(obj,null)[attr];
    }
}

//����¼�����
function addEvent(obj,evt,fn){
    if(obj.addEventListener){
        //�ڷ�IEָ����Ƕ���
        obj.addEventListener(evt,fn,false);
    }else if(obj.attachEvent){
        //��IE��thisָ��window������this��ָ��һ�����±�ͨ��call�����ı���ָ��ʹ��ͳһ
        obj.attachEvent("on"+evt,function(){
            fn.call(obj)
        });
    }else{
        obj["on"+evt]=fn;
    }
}
//�Ƴ��¼�����
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

//��֯ð��
function preventBubble(ev){
    var e = ev?ev:window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }else{
        //ie����ֹð�ݵķ���
        e.cancelBubble = true;
    }
}
//��ֹĬ����Ϊ
function preventDefault(ev){
    alert("woshishui");
    var e = ev || event;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnValue = false;
    }
}

//�˶����������getStyle����ʹ��

function move(obj,attrobj,fn){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        for(var prop in attrobj){//�������󣬵õ���Ӧ���Ժ�����ֵ
            var current;
            //������Ϊ͸����ʱ��current��ֵ���㷨
            if(prop == "opacity"){
                current = Math.round(parseInt(getStyle(obj,prop)*100)) || 0
            }else{
                //����������ʱ��current���㷨
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
            //����������ֵû�е���Ŀ��λ�þ͸ı�flag��ֵ
            if(attrobj[prop] != current){
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){//����лص������������
                fn();
            }
        }
    },30);
}


