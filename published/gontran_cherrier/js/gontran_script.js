$(window).on('scroll', function () {
   if ($(this).scrollTop() === 0) {
      $('header').removeClass('header_scroll');
   }
   else {
      $('header').addClass('header_scroll');     
   }
});



$("nav>ul>li").click(function(){
   $(this).addClass("on").siblings().removeClass("click");
});

$("header>div>h1").click(function(){
   $("nav>ul>li").removeClass("on");
});






/*      Bonjour Story      */
$(".second_brwn>ul>li").click(function(){
   
   $(this).addClass("tab").siblings().removeClass("tab");
   
   var showUp = $(this).index();
   
//   $(".second_right>ul>li").eq(showUp).animate({left: "0"}, function(){
//      $(this).siblings().css("display", none);
//   });
//   $(".second_right>ul>li").eq(showUp).fadeIn(300).siblings().fadeOut(300);
   
   $(".second_right>ul").animate({"left":-1060*showUp},300);
   
   
});






/*      menu      */
$(".third_tab>ul>li>p").click(function(){
   $(this).addClass("pick").parent().siblings().children("p").removeClass("pick");
   
   var select = $(this).parent("li").index();
   $(".third_right>ul>li").eq(select).addClass("select").siblings().removeClass("select");
   $(".third_left>ul>li").eq(select).fadeIn(300).siblings().fadeOut(300);
});








$(function(){
	   var idx = 0; 
     var dir = -1;
   
		$(".p_linker").click(function(e){
			e.preventDefault();
			//console.log(1111);
			idx = $(".p_linker").index(this);
			var target = $(this).data("linker");
			var top = $(target).offset().top;
			$("html,body").animate({"scrollTop":top},300);
			pagingNum( );
		});
      

      $(window).scroll(function(e){
         var contTop = $('html, body').scrollTop();
         var findNav = $('.nav li');
         var pager = $('.pager li');
         console.log(contTop);
         findNav.removeClass('on');
         pager.eq('0').addClass('on').siblings().removeClass('on');
         
         if(contTop >= 1080 && contTop < 2090){
            findNav.eq('0').addClass('on').siblings().removeClass('on');
            pager.eq('1').addClass('on').siblings().removeClass('on');
         }else if(contTop >= 2090 && contTop < 3160){
            findNav.eq('1').addClass('on').siblings().removeClass('on');
            pager.eq('2').addClass('on').siblings().removeClass('on');
         }
         
         if(contTop >= 3160 && contTop < 4210){
            findNav.eq('2').addClass('on').siblings().removeClass('on');
            pager.eq('3').addClass('on').siblings().removeClass('on');
         }else if(contTop >= 4210){
            findNav.eq('3').addClass('on').siblings().removeClass('on');
            pager.eq('4').addClass('on').siblings().removeClass('on');
         }
//         dir = e.deltaY;
         scrollFn();
//         console.log("휠이벤트"+dir);
      });
      
      var scrollOn;
      
      function scrollBox(){
         var top = $(".boxes");
         pagingNum( );
//         $("body,html").animate({"scrollTop":top.eq(idx).offset().top},300);
      }
   
   
   
      function scrollFn(){
         
         if(scrollOn){
            clearTimeout(scrollOn);
         }
         
         
         
//         scrollOn = setTimeout(function(){
//            
//            if(dir>0) {
//               idx--;
//               if(idx<0) idx = 0;
//            }else if(dir<0) {
//               idx++;
//               if(idx>4) idx = 4;
//            }
//            scrollBox();
//            //console.log(idx+"/"+idx);
//            
//            
//         },100);
         
      }
      

		function pagingNum( ){
			$(".pager").children("li").eq(idx).addClass("on").siblings().removeClass("on");
       
		}
   });