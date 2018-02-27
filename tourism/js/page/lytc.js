 $(function(){
       var arr = {0:'img/lytc/head1.png',1:'img/lytc/head2.png',2:'img/lytc/head3.png'}
       var obj = {'法国巴黎 • 二日游':'img/lytc/ly1.png','法国巴黎 • 四日游':'img/lytc/ly2.png','法国巴黎 • 一日游':'img/lytc/ly3.png','法国巴黎 • 五日游':'img/lytc/ly4.png','法国巴黎 • 六日游':'img/lytc/ly5.png','法国巴黎 • 三日游':'img/lytc/ly6.png'}
       var option = {0:['艾菲尔铁塔','凡尔赛宫','塞纳河','卢浮宫','巴黎圣母院'],1:[1,2,3,4,5,6,7,8,9],2:[1,2,3,4,5,6,7,8,9]}
        $('.banner img').setImg(arr).eq(1).show()
        $('.banner img').fademove()
       $('.mlm img').setImg(obj,2)
       var a=new Check('fom','name','tel',option,'btn')

       //地图
       var map = new BMap.Map('map');
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.NavigationControl());
    
      $('.mlm li').click(function(){
       localStorage.ls = $(this).find('div').html()
       localStorage.a = 1

      })
      console.log($('.mlm li').eq(1).find('div').html())
    })