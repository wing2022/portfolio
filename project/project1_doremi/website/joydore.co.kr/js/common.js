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

             $(".quick_all_box").click(function(){
                $(".all_box").fadeIn(); 
            });
            $(".all_close").click(function(){
                $(".all_box").fadeOut(); 
            });



             //상단메뉴//
            $(".dp2").hide();

             $("#gnb>li").mouseover(function(){
                $(this).children(".dp2").stop().slideDown(); 

             });

                $("#gnb>li").mouseout(function(){
                $(this).children(".dp2").stop().slideUp(); 

             });
     
     

     
     //menu_slick slide//
     

        $('.menu_list').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
        });
     
     
    //goods_slick slide//
     

        $('.goods_list').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
        });
     
     
     //banner_slick slide//
     
        $('.banner').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 700,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
        });
     
  
     //지도사라지게//
     
     $('.map_link').click(function(){
         $('.map_name, .map_link').fadeOut();
     
     });
     
       
 
 });