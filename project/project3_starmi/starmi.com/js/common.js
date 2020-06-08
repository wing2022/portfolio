 $(document).ready(function() {

            //맨위로가기 버튼//
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $(".gotop").fadeIn();
                } else {
                    $(".gotop").fadeOut();
                }
            });

            $(".gotop").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                return false;
            });
    
             //전체메뉴//
             $(".all_box").hide();
             
             $(".all_menu").click(function(){
                $(".all_box").fadeIn();
                });
              
             $(".close").click(function(){
                $(".all_box").fadeOut();
                });
     
      
                 $('.popup').click(function(){
                    $('.banner').show(); 
                 
                 });
                $('.noopen, .close').click(function(){
                    $('.banner').hide();                      
                 });
             
     

                 //상단메뉴//
                 $(".dp2").hide();


                $("#gnb>li").mouseover(function(){
                   $(this).children(".dp2").stop().slideDown();
                    });

                $("#gnb>li").mouseout(function(){
                   $(this).children(".dp2").stop().slideUp();
                    });
      

                $('.mainVisual').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
                });
     
                     $('.photo_list').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
                });


 
 
 
 });
    

 





     
    
