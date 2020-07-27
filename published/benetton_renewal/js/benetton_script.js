/*     서브메뉴     */

var nav = {idx: 0}
$("nav").children().children("li").mouseenter(function () {
   nav.idx = $(this).index();
   $("#slide_menu").children(".menu_bg").children().eq(nav.idx).slideDown(300).siblings().slideUp(10);
   
});

$(".global_outer").mouseleave(function(){
	$("#slide_menu").children(".menu_bg").children().eq(nav.idx).slideUp(300);
});


/*     서브메뉴 모바일, 태블릿     */
$("p.mobile_nav>i").click(function(){
   
   $("nav.mobile_nav").css("opacity", 1).animate({left: "0%"});
});

$("p#close").click(function(){
   $("nav.mobile_nav").animate({left: "-73%"}, {opacity: "0"});
});
//$("nav.mobile_nav");


/*     서브메뉴 슬라이드 업&다운     */

//			$('.mobile_group>li').click(function(){
//				$('.mobile_sub').slideUp();//모든 서브 박스를 올림(숨김)
//				$(this).children(".mobile_sub").slideDown();
//			});
$(function () {

   $('.mobile_group>li').click(function () {
      
      if ($(this).find(".mobile_sub").length) {
         $(this).find(".mobile_sub").stop().slideToggle().parent().siblings().find(".mobile_sub").stop().slideUp();
        
      }

   });
   
});



/*     슬라이드배너     */
$(function () {

   var banner = {
      idx: 0,
      length: $("#slide_box").children("li").length
   };
   var autoBanner = setInterval(doMiddle, 3000); //자동함수 setInterval

   $("#banner_right").click(function () {

      clearInterval(autoBanner);
      ++banner.idx;

      if (banner.idx >= banner.length) {
         banner.idx = 0;
      }
      doBanner();
      autoBanner = setInterval(doMiddle, 3000);

   });

   $("#banner_left").click(function () {

      clearInterval(autoBanner);
      --banner.idx;

      if (banner.idx <= 0) {
         banner.idx = banner.length - 1;
      }
      doBanner();
      autoBanner = setInterval(doMiddle, 3000);

   });

//   $("#thumbnailBox").children("li").click(function () {
//      clearInterval(autoBanner);
//      banner.idx = $(this).index();
//      doBanner();
//      autoBanner = setInterval(doMiddle, 3000);
//   });


   function doBanner() {
   $("#slide_box").children("li").eq(banner.idx).fadeIn(700).siblings("li").fadeOut(700);
	  $(".tablet").children("li").eq(banner.idx).fadeIn(700).siblings("li").fadeOut(700);
	  $(".mobile").children("li").eq(banner.idx).fadeIn(700).siblings("li").fadeOut(700);
      $("#silde_txt_group").children("li").eq(banner.idx).fadeIn(500).addClass("on").siblings().hide().removeClass("on");
      
      $("#pager").children("li").eq(banner.idx).addClass("on_page").siblings().removeClass("on_page");
      
   }


   function doMiddle() {
      ++banner.idx;

      if (banner.idx >= banner.length) {
         banner.idx = 0;
      }
      doBanner();
   };
   
});



/*     탭 슬라이드     */
$(".em_category").children().click(function(){
   
   $(this).addClass("click").siblings().removeClass("click");
   
   var showUp = $(this).index();
   
   $(this).parent().next().children().eq(showUp).fadeIn(300).siblings().fadeOut(300);

});



/*     12월 슬라이드     */

function auto() {
   $(".article2_contents>ul>li.pick").removeClass("pick").next().addClass("pick");

   $(".article2_contents.pc").children().animate({left: "-400px"}, function(){
      $(".article2_contents.pc>ul>li:first").appendTo(".article2_contents.pc>ul");
      $(".article2_contents.pc>ul").css("left", 0);
   });
   
   
   $(".article2_contents.tablet").children().animate({left: "-28%"}, function(){
      $(".article2_contents.tablet>ul>li:first").appendTo(".article2_contents.tablet>ul");
      $(".article2_contents.tablet>ul").css("left", 0);
   });
   
   $(".article2_contents.mobile").children().animate({left: "-32%"}, function(){
      $(".article2_contents.mobile>ul>li:first").appendTo(".article2_contents.mobile>ul");
      $(".article2_contents.mobile>ul").css("left", 0);
   });
   
};
auto();

setInterval("auto()", 3000);