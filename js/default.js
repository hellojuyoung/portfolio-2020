$(document).ready(function () {

  //화면 height 적용하기
  function applyHeight() {

    //화면 높이값 담기
    var windowH = $(window).height();

    $(".intro, .main-box").css({
      height: windowH + "px"
    });

    $("#about .cont-wrap, #about .about-grp").css({
      height: windowH + "px"
    });

    $("#publish").css({
      height: windowH + "px"
    });

    $("#design, #design .thumb-img-wrap").css({
      height: windowH + "px"
    });

  }



  //intro slideUp
  function slideUpIntro() {
    $(".intro")
      .delay(2500)
      .animate({
        top: "-" + 100 + "%"
      }, 700, "easeInExpo");
  }



  //반응형 웹을 위한 이벤트 분리 (add Device Class)
  function addDeviceClass() {
    if ($(window).width() > 1023) {
      //pc web
      $("body").removeClass("tablet mobile");
    } else if ($(window).width() > 767) {
      //tablet web
      $("body").addClass("tablet");
    } else {
      //mobile web
      $("body").removeClass("tablet").addClass("mobile");
    }
  }



  //반응형 웹을 위한 이벤트 분리 (resize)
  $(window).resize(function () {
    addDeviceClass();
    applyHeight();
    slideUpIntro();
  });



  addDeviceClass();
  applyHeight();
  setTimeout(typingIntro, 700);
  slideUpIntro();

});



//intro 타이핑
function typingIntro() {
  var sentence = 0;

  var writingTxt = "Nice to meet you!";
  var area = "";

  function typeWriting() {
    if (sentence < writingTxt.length) {
      $(".intro-txt span").text((area += writingTxt[sentence]));
      sentence++;

      setTimeout(typeWriting, 70);
    }
  }

  typeWriting();
}



function rollingKeyword() {
  var key = ['웹 퍼블리셔', '고양이를 좋아하는', '책임감 있는', '노력하고 발전하는'];

  for (var i = 0; i < key.length; i++) {
    var random = Math.floor(Math.random() * key.length);
    result = key[random];

    $(".random-key").text(result);
  }
}



//modal show&hide
function showModal() {
  $(".design-grp .thumb").on("click", function (e) {
    e.preventDefault();
    var findModalId = $(this).find("a").attr("href");

    $(".modal, .dimmed").addClass("on");
    $(".modal").find(findModalId).addClass("on");

    $(".close").on("click", function () {
      $(".modal, .dimmed").removeClass("on");
      $(".modal").find(findModalId).removeClass("on");
    });
  });
}

function mobileGnbToggle() {
  if ($(".mobile-gnb-btn").hasClass("on")) {
    $(".mobile-gnb-btn").removeClass("on");
    $(".mobile-nav-wrap").removeClass("on");
  } else {
    $(".mobile-gnb-btn").addClass("on");
    $(".mobile-nav-wrap").addClass("on");
  }
}



//run!
$(document).ready(function () {
  setInterval(rollingKeyword, 3500, "easeInExpo");
  showModal();
  //mobileGnbToggle();
});