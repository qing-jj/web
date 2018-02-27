$(function(){
        var n = 0
        var w =$('#pic li').width()
        var timer = null
       $('#bpic li div').eq(0).css('display','block')
       
        //向左滑动
        $('#lbtn').click(function(){
         n--
        if(n<0){
           
            $('#pic').css({
                left:w*-5+'px'
            })
           n=4
        }
        $('#pic').fnmovel(w*-n)
        $('#bpic li').each(function(){
                $('#bpic li div').css('display','none')
            })
         $('#bpic li div').eq(n).css('display','block')
        $('.lb').show()
        $('.rb').hide()
        })

        //向右滑动
        $('#rbtn').click(function(){
            n++
         if(n==$('#pic li').length){
            
             $('#pic').css({
                left:0+'px'
            })

             n=1
         }
         
        $('#pic').fnmover(w*-n)
        $('#bpic li').each(function(){
                $('#bpic li div').css('display','none')
            })
        if(n == $('#pic li').length-1){
             $('#bpic li div').eq(0).css('display','block')
        }else{
            $('#bpic li div').eq(n).css('display','block')
        }
         
         $('.rb').show()
        $('.lb').hide()
        })

        //按钮显示/隐藏
        $('.box').hover(function(){
            $('#rbtn a').show()
            $('#lbtn a').show()
            clearInterval(timer)
        },function(){
        $('#rbtn a').hide()
        $('#lbtn a').hide()
        timer= setInterval(function(){
            n++
            if(n==$('#pic li').length){
                $('#bpic li div').eq(0).css('display','block')
                $('#pic').css({
                left:0+'px'
                })
             n=1
             }
             $('#bpic li').each(function(){
                $('#bpic li div').css('display','none')
            })
             if(n == $('#pic li').length-1){
             $('#bpic li div').eq(0).css('display','block')
             }else{
            $('#bpic li div').eq(n).css('display','block')
            }
            $('#pic').fnmover(w*-n)
        },5000)
     })

        //点击移动
        $('#bpic li').click(function(){
            $('#bpic li').each(function(){
                $('#bpic li div').css('display','none')
            })
            n = $(this).index()
            $('#bpic li div').eq(n).css('display','block')
            $('#pic').fnmove(w*(-n))
        })


        //设置文字
       var obj = {0:localStorage.ls,1:'Pairs，France',2:'巴黎，是法兰西共和国的首都，法国最大城市，欧洲第二大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。巴黎有小巴黎、大巴黎之分。小巴黎指大环城公路以内的巴黎城市内，面积105.4平方公里，人口200多万；巴黎建都已有1400多年的历史，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。'}
     
        var obj1 = {0:'巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。 在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。',1:'巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。 在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。',2:'巴黎，是法兰西共和国的首都，法国最大城市，法国的政治、经济、文化、商业中心。世界四大国际化都市之一。巴黎位于法国北部巴黎盆地的中央，横跨塞纳河两岸。建都1400多年，它不仅是法国，也是西欧的一个政治、经济和文化中心，巴黎香水有“梦幻工业”之称。巴黎是历史之城、美食之都和创作重镇。巴黎是著名的世界艺术之都，印象派美术发源地，芭蕾舞的诞生地，欧洲启蒙思想运动中心，电影的故乡，现代奥林匹克运动会创始地。巴黎又是世界公认的文化之都，大量的科学机构、研究院、图书馆、博物馆、电影院、剧院、音乐厅分布于全市的各个角落。 在自中世纪以来的发展中，一直保留过去的印记，某些街道的布局历史悠久，也保留了统一的风格。形形色色不同背景的巴黎居民，为这座梦想之城带来缤纷活力，形成花都独一无二的印记。'}
     $('.middlel_tr p').setText(obj)
     $('.tc li p:nth-child(2)').setText(obj1)
    
      //设置middler图片    
     var obj2={'奥赛博物馆':'img/lytc/more1.png','埃菲尔铁塔':'img/lytc/more2.png','凡尔赛宫':'img/lytc/more3.png','圣心大教堂':'img/lytc/more4.png','凯旋门':'img/lytc/more5.png'}
     
     $('.middler li img').setImg(obj2,3)

     //设置.pic的图片
    var obj3={0:'img/lytc/ly1.png',1:'img/lytc/ly2.png',2:'img/lytc/ly3.png',3:'img/lytc/ly4.png',4:'img/lytc/ly5.png',5:'img/lytc/ly1.png'}
    $('#pic li img').setImg(obj3)
    $('#bpic li img').setImg(obj3)
        })
