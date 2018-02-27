/**
 * Created by Administrator on 2017/11/14.
 */
window.onload = function(){
        //声明hoSpotList对象，保存hot_spot_list页面的全局变量
        var hotSpotListdetail = {};
        hotSpotListdetail.detail = JSON.parse(localStorage.Selected);
        //console.log(hotSpotListdetail.detail);

        //景点照片
        hotSpotListdetail.hot_spot_detail_title_img = document.getElementById("hot_spot_detail_title_img").getElementsByTagName("img")[0];
        hotSpotListdetail.hot_spot_detail_title_img.setAttribute("src",hotSpotListdetail.detail.source);

        //景点名称
        hotSpotListdetail.hot_spot_detail_place = document.getElementById("hot_spot_detail_place");
        hotSpotListdetail.hot_spot_detail_place.innerHTML = hotSpotListdetail.detail.title;

        //描述文字
        hotSpotListdetail.hot_spot_detail_info_dis = document.getElementById("hot_spot_detail_info_dis");
        hotSpotListdetail.hot_spot_detail_info_dis.innerHTML = hotSpotListdetail.detail.dis;





    //渲染更多的数据
        hotSpotListdetail.list = document.getElementById("hot_spot_detail_more").getElementsByTagName("li");

        for(var i =0 ;i<hotSpotListdetail.list.length;i++){
            hotSpotListdetail.imagetag = hotSpotListdetail.list[i].getElementsByTagName("img")[0];
            hotSpotListdetail.imagetag.setAttribute("src",hot_spot_data.hot_spot_list[i].source);

            hotSpotListdetail.ptag = hotSpotListdetail.list[i].getElementsByTagName("p")[0];
            hotSpotListdetail.ptag.innerHTML = hot_spot_data.hot_spot_list[i].title;

        }



    //顾客信息正则验证
    //姓名输入框
    hotSpotListdetail.hot_spot_contact_username = document.getElementById("hot_spot_contact_username").getElementsByTagName("input")[0];

    //电话号码输入框
    hotSpotListdetail.hot_spot_contact_tel = document.getElementById("hot_spot_contact_tel").getElementsByTagName("input")[0];

    //提示信息
    hotSpotListdetail.hot_spot_contact_tips_name = document.getElementById("hot_spot_contact_tips_name");
    hotSpotListdetail.hot_spot_contact_tips_tel = document.getElementById("hot_spot_contact_tips_tel");


    hotSpotListdetail.reg1 = /^([\u4e00-\u9fa5]){2,4}$/g;
    hotSpotListdetail.reg2 = /^1[35789]\d{9}$/g;

    //失去焦点，验证姓名
    hotSpotListdetail.hot_spot_contact_username.onblur = function(){
        //console.log(hotSpotListdetail.hot_spot_contact_username.value)
        if(!hotSpotListdetail.reg1.test(hotSpotListdetail.hot_spot_contact_username.value)){
            hotSpotListdetail.hot_spot_contact_tips_name.style.opacity = 1;
            hotSpotListdetail.hot_spot_contact_tips_name.getElementsByTagName("span")[0].innerHTML = "请输入正确的姓名"
        }
    };
    //获得焦点，恢复原状
    hotSpotListdetail.hot_spot_contact_username.onfocus = function(){
        hotSpotListdetail.hot_spot_contact_tips_name.style.opacity = 0;
        hotSpotListdetail.hot_spot_contact_tips_name.getElementsByTagName("span")[0].innerHTML = ""
    };
    //失去焦点验证电话号码
    hotSpotListdetail.hot_spot_contact_tel.onblur = function(){
        if(!hotSpotListdetail.reg2.test(hotSpotListdetail.hot_spot_contact_tel.value)){
            hotSpotListdetail.hot_spot_contact_tips_tel.style.opacity = 1;
            hotSpotListdetail.hot_spot_contact_tips_tel.getElementsByTagName("span")[0].innerHTML = "请输入正确的电话号码"
        }
    };
    //获得焦点，恢复原状
    hotSpotListdetail.hot_spot_contact_tel.onfocus = function(){
        hotSpotListdetail.hot_spot_contact_tips_tel.style.opacity = 0;
        hotSpotListdetail.hot_spot_contact_tips_tel.getElementsByTagName("span")[0].innerHTML = ""
    }




    //百度地图

    var map = new BMap.Map("hot_spot_contact_map");          // 创建地图实例
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    map.centerAndZoom(point, 15);// 初始化地图，设置中心点坐标和地图级别
    map.addControl(new BMap.NavigationControl());
    map.enableScrollWheelZoom(true);
    map.hide()

}