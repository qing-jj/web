/**
 * Created by Administrator on 2017/11/18.
 */
/**
 * Created by Administrator on 2017/11/14.
 */

window.onload = function(){
    //声明hoSpotList对象，保存hot_spot_list页面的全局变量
    var hotSpotList = {};
   hotSpotList.hotSpotItem = [];//储存人们景点数据（就是说星级评价高的）
    hotSpotList.list = document.getElementById("hot_spot_list").getElementsByTagName("li");

    //筛选数据得到热门景点
    for(var j=0;j<hot_spot_data.hot_spot_list.length;j++){
        if(hot_spot_data.hot_spot_list[j].grade>4){
            hotSpotList.hotSpotItem.push(hot_spot_data.hot_spot_list[j])
        }
    }
    console.log(hotSpotList.hotSpotItem);
    //对页面的li遍历渲染数据并添加点击事件
    for(var i =0 ;i<hotSpotList.list.length;i++){
        hotSpotList.imagetag = hotSpotList.list[i].getElementsByClassName("hot_spot_list_img")[0];
        hotSpotList.imagetag.style.backgroundImage = "url("+hotSpotList.hotSpotItem[i].source+")";

        hotSpotList.title = hotSpotList.list[i].getElementsByClassName("hot_spot_item_title")[0];
        hotSpotList.title.innerHTML = hotSpotList.hotSpotItem[i].title;

        //渲染评价
        grade(i,hot_spot_data.hot_spot_list[i].grade);
        hotSpotList.discripte = hotSpotList.list[i].getElementsByClassName("hot_spot_list_dis")[0];
        hotSpotList.discripteinfo = hotSpotList.discripte.getElementsByTagName("p")[0];
        hotSpotList.discripteinfo.innerHTML = hotSpotList.hotSpotItem[i].dis;
        hotSpotList.list[i].index = i;
        //遍历对每个li的a添加点击事件，
        hotSpotList.list[i].onclick = function(){
            localStorage.Selected = JSON.stringify(hotSpotList.hotSpotItem[this.index]);
            //console.log(hotSpotList.hotSpotItem[this.index]);
            //window.open("http://localhost/jianwu/tour/hot_spot_detail.html","_blank")

        }

    }
    //渲染星级评价函数
    function grade(n,num){
        var spanstage = hotSpotList.list[n].getElementsByClassName("hot_spot_item_assess")[0].getElementsByTagName("span");
        for(var j=0;j<num;j++){
            spanstage[j].style.backgroundPositionY = "top"
        }
    }


}
