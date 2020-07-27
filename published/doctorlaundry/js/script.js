//$(document).ready(function(){
//   
//   $("#menu_1>ul>li").mouseover(function () {
//      $(this).children(".submenu").stop().slideDown(300);
//   }).mouseout(function () {
//      $(this).children(".submenu").stop().slideUp(200);
//   });
//   
//   $("#menu_2>ul>li").mouseover(function () {
//      $(this).children(".submenu").stop().slideDown(300);
//   }).mouseout(function () {
//      $(this).children(".submenu").stop().slideUp(200);
//   });
//   
//   $(window).on('scroll', function(){ 
//     if ($(this).scrollTop() === 0){
//         $('#header_bottom').removeClass('header_scroll');
//         $('#menu_1>ul>li>a').css('color','#fff');
//         $('#menu_2>ul>li>a').css('color','#fff');
//     } else {
//         $('#header_bottom').addClass('header_scroll');
//         $('#menu_1>ul>li>a').css('color','#090e4f');
//         $('#menu_2>ul>li>a').css('color','#090e4f');
//     }
//   });
//
//   $("#right_btn").click(function () {
//      $("#slide_wrap>ul").animate({
//         marginLeft: "-445"
//      }, function () {
//         $("#slide_wrap>ul>li:first").appendTo("#slide_wrap>ul");
//      });
//   });
//});
//

/*     GNB     */

   $("#menu_1>ul>li").mouseover(function () {
      $(this).children(".submenu").stop().slideDown(300);
   }).mouseout(function () {
      $(this).children(".submenu").stop().slideUp(200);
   });

   $("#menu_2>ul>li").mouseover(function () {
      $(this).children(".submenu").stop().slideDown(300);
   }).mouseout(function () {
      $(this).children(".submenu").stop().slideUp(200);
   });

   $(window).on('scroll', function () {
      if ($(this).scrollTop() === 0) {
         $('#header_bottom').removeClass('header_scroll');
         $('#menu_1>ul>li>a').css('color', '#fff');
         $('#menu_2>ul>li>a').css('color', '#fff');
      } else {
         $('#header_bottom').addClass('header_scroll');
         $('#menu_1>ul>li>a').css('color', '#090e4f');
         $('#menu_2>ul>li>a').css('color', '#090e4f');
      }
   });


/*     laundry category     */

   $("#right_btn").click(function () {
      $("#slide_wrap>ul").animate({marginLeft: "-445"}, 800, "swing", function () {
         $("#slide_wrap>ul>li:first").appendTo("#slide_wrap>ul");
         $("#slide_wrap>ul").css("marginLeft", 0);
      });
   });

//   $("#left_btn").click(function () {
//      $("#slide_wrap>ul").animate({marginLeft: "445"}, 800, "swing", function () {
//         $("#slide_wrap>ul>li:last").prependTo("#slide_wrap>ul");
//         $("#slide_wrap>ul").css("marginLeft", 0);
//      });
//   });

   $("#left_btn").click(function () {
      $("#slide_wrap>ul>li:last").prependTo("#slide_wrap>ul");
      $("#slide_wrap>ul").css("marginLeft", 0);
      $("#slide_wrap>ul").animate({marginLeft: "445"}, 800, "swing");
   });
   

//   $("#left_btn").click(function () {
//      $("#slide_wrap>ul>li:last").prependTo("#slide_wrap>ul");
//      $("#slide_wrap>ul").animate({marginLeft: "445"}, 800, "swing", function () {
//         $("#slide_wrap>ul").css("marginLeft", 0);
//      });
//   });