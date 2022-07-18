$(document).ready(function(){
    auto_key = 0
    $('#pause').click(function(){
        auto_key = 1
    })
    $('#play').click(function(){
        auto_key = 0
    })


    setInterval(function(){
        if( auto_key == 0 ){
            if( slide_num <= -500 ){             
                slide_num = 0;
                $('#slide_img').stop().css({'left':0})
            }
           slide_num = slide_num - 100;
            $('#slide_img').stop().animate({'left':slide_num+'%'},300)
            //밑에 있는 버튼과 연동
            slide_bt_num = slide_num/-100
            if(slide_bt_num == 5 ){ slide_bt_num = 0 }//맨위 사진을 첫장처럼
            $('#s_bt_point>li').eq( slide_bt_num ).css({'background-color':'transparent','border':'2px solid #000','width':'6px','height':'6px'}).siblings().css({'background-color':'#999','border':'none','width':'8px','height':'8px'})
        }
    },10000)
    //메뉴
    $(window).scroll(function(){
        sc = $(window).scrollTop()
        $('#scroll_text').text( sc )
        if ( sc >= 300){
            $('#best_img>li:nth-child(1)').css({'margin-top':'0px','opacity':'1'})
            $('#best_img>li:nth-child(2)').css({'margin-top':'0px','opacity':'1'})
            $('#best_img>li:nth-child(3)').css({'margin-top':'0px','opacity':'1'})
        }
    })
    
    $('#menu>li').mouseover(function(){
        $(this).children('div').stop().show()
        $('#sub_bg').stop().show()
   })
    $('#menu>li').mouseout(function(){
    $(this).children('div').stop().hide()
    $('#sub_bg').css({'display':'none'})

    })
    


    
    //슬라이드
   $('#s_bt_point>li').click(function(){
       $(this).css({'background-color':'transparent','border':'2px solid #000','width':'6px','height':'6px'})
       $(this).siblings().css({'background-color':'#999','border':'none','width':'8px','height':'8px'})
       bt_num = $(this).index()*-100
       $('#slide_img').stop().animate({'left':+bt_num+'%'},300)
   })
   ///////////////////////////////
   slide_num =  0
   $('#icon_right').click(function(){
    
    if( slide_num <= -500 ){             
        slide_num = 0;
        $('#slide_img').stop().css({'left':0})
    }
   slide_num = slide_num - 100;
    $('#slide_img').stop().animate({'left':slide_num+'%'},300)
    //밑에 있는 버튼과 연동
    slide_bt_num = slide_num/-100
    if(slide_bt_num == 5 ){ slide_bt_num = 0 }//맨위 사진을 첫장처럼
    $('#s_bt_point>li').eq( slide_bt_num ).css({'background-color':'transparent','border':'2px solid #000','width':'6px','height':'6px'}).siblings().css({'background-color':'#999','border':'none','width':'8px','height':'8px'})
})
///////////////////////////////////////////

    $('#icon_left').click(function(){
        if(  slide_num >= 0){
            $('#slide_img').stop().css({'left':'-600%'})
            slide_num = -500}

        slide_num = slide_num +100
        $('#slide_img').animate({'left':+slide_num+'%'},300)
        $('#s_bt_point>li').eq( slide_num/-100).css({'background-color':'transparent','border':'2px solid #000','width':'6px','height':'6px'}).siblings().css({'background-color':'#999','border':'none','width':'8px','height':'8px'})

        //버튼 연동
    })

    
 
  
   //슬라이드 텍스트

   //베스트 슬라이드
   best_num = 0
   $('#best_next').click(function(){
    best_num = best_num -394
    if ( best_num < -1190 ) {  best_num = -1190}
       $('#best_img').animate({'left':+best_num+''})
   })
   $('#best_prev').click(function(){
    best_num = best_num +394
    if ( best_num > 0 ) {  best_num = 0}
       $('#best_img').animate({'left':+best_num+''})
   })
   $('#best_img>li').mouseenter(function(){
    $(this).children('img').stop().animate({'rotate':'-20deg'},300,function(){
        $('#best_img>li>img').stop().animate({'rotate':'0deg'},300)
    })
    //콜백은 두번째중에 쓸때도 this children을 쓰면 그 윗줄의 this children 이 되어버리기 때문에 반응을 안한다
    //그러므로 두번째에 쓸때는 
           
   })
    $('#pause').click(function(){
        $(this).css({'display':'none'})
        $('#play').css({'display':'block'})
        
    })
    $('#play').click(function(){
        $(this).css({'display':'none'})
        $('#pause').css({'display':'block'})
        
    })


  

})