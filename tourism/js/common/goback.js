/**
 * Created by Administrator on 2017/11/11.
 */
window.onload = function(){
    var goTop = document.getElementById("gotop");
    var spanTips = goTop.getElementsByTagName("span")[0];
    goTop.onmouseenter = function(){
        spanTips.innerHTML = "������"
    }
    goTop.onmouseenter = function(){
        spanTips.innerHTML = "���ض���"
    }
}