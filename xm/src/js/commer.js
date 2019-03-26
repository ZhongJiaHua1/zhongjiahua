// 导航栏
$(function () {
    $(".nav_all").mouseenter(function () {
      $('.nav_list').show();
    });
    $(".nav_all").mouseleave(function () {
      $('.nav_list').show();
    });
    $(".nav_list").mouseleave(function () {
      $('.nav_list').hide();
    });
  });

  // 回到顶部
$(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
        $("#left_menu").fadeIn(1500);
      } else {
        $("#left_menu").fadeOut(1500);
      }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#l1").click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
  
    });
    $("#go1").click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });

//   头部渐变
  $(function () {
    var index = 0;
    var pic = $('#header_bar img');
    console.log(pic)
    var length = pic.length;
    var transform = function () {
      if (index === length) {
        index = 0;
      } else {
        index++;
      }
      pic.eq(index - 1).fadeOut(500);
      pic.eq(index).fadeIn(500);
    };
    transform();
    setInterval(transform, 2000);
  });