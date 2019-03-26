window.onload = function () {
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

  //   banner
  $(function () {
    var a = 0;
    //初始化图片
    $('#list li').eq(0).stop().animate({
      opacity: 1
    }, 300);
    var timer = null;

    function xiaYiZhang() {
      //清空所有图片
      $('#list li').eq(a).stop().animate({
        opacity: 0
      }, 300);
      if (a >= $('#list li').size() - 1) {
        a = 0;
      } else {
        a++;
      }
      $('#list li').eq(a).stop().animate({
        opacity: 1
      }, 300);
      genSui();
    }
    timer = setInterval(xiaYiZhang, 8000);
    $('#list').mouseenter(function () {
      clearInterval(timer)
    }).mouseleave(function () {
      timer = setInterval(xiaYiZhang, 1500)
    });

    $('#next').click(xiaYiZhang);

    //上一张
    function shangYiYe() {
      // console.log($('#list li').eq(a).index());
      $('#list li').eq(a).stop().animate({
        opacity: 0
      }, 300);
      if (a <= 0) {
        a = $('#list li').size() - 1;
      } else {
        a--;
      }
      $('#list li').eq(a).stop().animate({
        opacity: 1
      }, 300);
      genSui();
    }
    $('#prev').click(function () {
      shangYiYe();
    });;

    $('#list li').each(function () {
      $('#dian').append('<dd></dd>');
    });

    function genSui() {
      $('#dian dd').eq(a).css({
        backgroundColor: 'red'
      }).siblings().css({
        backgroundColor: '#ccc'
      });
    }
    genSui();
    $('#dian dd').click(function () {
      var x = $(this).index();
      console.log(x);
      $('#list li').eq(a).stop().animate({
        opacity: 0
      }, 300);
      $('#list li').eq(x).stop().animate({
        opacity: 1
      }, 300);
      a = x;
      genSui();
    });
  });

  $(document).ready(function () {
    $("#dl2").mouseenter(function () {
      $("#dd2").css("display", "block");
      $("#a1").css("color", "#626252")
      $("#a1").css("background-color", "#fff");
      $("#a1").css("height", "44px");
      $("#a1").css("width", "1px solid #c2d58f");
      $("#a1").css("width", "118px");
      $("#a1").css("border-left", "1px solid #e5e5e5");
      $("#a1").css("border-bottom", "1px solid #e5e5e5");

      $("#a2").css("color", "#78a000");
      $("#a2").css("background-color", "#fff");
      $("#a2").css("border-top", "1px solid #c2d58f");
      $("#a2").css("border-bottom", "1px solid #c2d58f");
      $("#a2").css("border-left", "4px solid #91be16");
      $("#a2").css("width", "120px");
      $("#a2").css(" height", "117px");
      $("#a2").css(" line-height", " 44px");
      $("#a2").css("overflow", " hidden");
    });

    $("#dl2").mouseleave(function () {
      $("#dd2").show();
      $("#a2").css("color", "#78a000");
      $("#a2").css("background-color", "#fff");
      $("#a2").css("border-top", "1px solid #c2d58f");
      $("#a2").css("border-bottom", "1px solid #c2d58f");
      $("#a2").css("border-left", "4px solid #91be16");
      $("#a2").css("width", "120px");
      $("#a2").css(" height", "117px");
      $("#a2").css(" line-height", " 44px");
      $("#a2").css("overflow", " hidden");
    });

    $("#dl1").mouseenter(function () {
      $("#dd1").show();
      $("#dd2").hide();
      $("#dd2").css("display", "none");
      $("#a2").css("color", "#626252");
      $("#a2").css("background-color", "#fff");
      $("#a2").css("border-top", "1px solid  #c2d58f");
      $("#a2").css("border-bottom", "1px solid  #e5e5e5");
      $("#a2").css("border-left", "1px solid #e5e5e5");
      $("#a2").css("border-left", "1px solid #e5e5e5");
      $("#a2").css("width", "120px");
      $("#a2").css(" height", "117px");
      $("#a2").css(" line-height", " 44px");
      $("#a2").css("overflow", " hidden");

      $("#a1").css("color", "#78a000");
      $("#a1").css("background-color", "#fff");
      $("#a1").css("border-top", "1px solid #c2d58f");
      $("#a1").css("border-bottom", "1px solid #c2d58f");
      $("#a1").css("border-left", "4px solid #91be16");
      $("#a1").css("width", "116px");
      $("#a1").css(" height", "117px");
      $("#a1").css(" line-height", " 44px");
      $("#a1").css("overflow", " hidden");
    });


    $("#dl1").mouseleave(function () {
      $("#dd1").show();
      $("#dd2").hide();
      $("#a1").css("color", "#78a000");
      $("#a1").css("background-color", "#fff");
      $("#a1").css("border-top", "1px solid #c2d58f");
      $("#a1").css("border-bottom", "1px solid #c2d58f");
      $("#a1").css("border-left", "4px solid #91be16");
      $("#a1").css("width", "116px");
      $("#a1").css(" height", "117px");
      $("#a1").css(" line-height", " 44px");
      $("#a1").css("overflow", " hidden");
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

  // 提取本地存储
  var loca = window.localStorage;
  var welcome_login = document.getElementById("welcome_login");
  welcome_login.innerHTML = '欢迎' + loca.number + '的到来 ';
  $(function () {
  $('#welcome_login').css('color','red');
});



// 渲染
var list = [{
  "id": 1,
},{
  "id": 2,
},{
  "id": 3,
},{
  "id": 4,
},{
  "id": 5,
},{
  "id": 6,
},{
  "id": 7,
},{
  "id": 8,
},{
  "id": 9,
},{
  "id": 10,
}];
var goodlist = document.getElementById('goodlist');
var res = list.map(function(item,index){
  return `<div class="goodlist" id="goodlist${item,index+1}" data-id="${item.id}">
  <div class="list">
      <img src="img/8587ff0f-bba7-4ff3-bd67-fb3957a66df0.webp" alt="">
  </div>

  <!--list1  -->
  <div class="list1">
      <div class="list1_tab">
          <div class="list1_tit">
              <em class="icon3"></em>
              时令鲜果
          </div>
          <s></s>
          <div class="list1_label">
              <img src="img/feced4ff-5d17-4d2c-8062-73c7dc5855ce.webp" alt="">
              <ul>
                  <li>
                      <a href="">金砖凤梨</a>
                  </li>
                  <li>
                      <a href="">红颜草莓</a>
                  </li>
                  <li>
                      <a href="">柑橘橙</a>
                  </li>
                  <li>
                      <a href="">爽口苹果</a>
                  </li>
                  <li>
                      <a href="">清甜梨子</a>
                  </li>
                  <li>
                      <a href="">进口椰子</a>
                  </li>
                  <li>
                      <a href="">莓果缤纷</a>
                  </li>
                  <li>
                      <a href="">火龙果</a>
                  </li>
              </ul>
          </div>

          <!-- <div class="tab"> -->
          <dl>
              <dt class="on">
                  <a href="">热销爆款</a>
              </dt>
              <dd style="display:block">
                  <div class="tab1">
                      <ul>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                          <li>
                              <div class="boss">
                                  <p class="pic">
                                      <a href="">
                                          <img src="img/4339ed60-b3ad-4dab-95d7-7de0c35f1f50.jpg" style="opacity:1;display: inline;"
                                              alt="">
                                      </a>
                                  </p>
                                  <p class="name">
                                      <font>丹墨西哥牛油果 10个装（1.4kg以上）</font>
                                      <span>森林奶油 粮食水果</span>
                                  </p>
                                  <p class="price">
                                      ￥99.00
                                      <span>￥169.00</span>
                                  </p>
                                  <p class="btn">
                                      <a href="" class="ico00"></a>
                                  </p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </dd>
          </dl>
      </div>
  </div>
</div>
</div>`
}).join('');
main.innerHTML = res;

// -----------楼层跳跃
var oNav = $('#LoutiNav'); //导航壳
var aNav = oNav.find('li'); //导航
var header = $()
var aDiv = $('.goodlist'); //楼层
console.log(aDiv)
var oTop = $('#goTop'); //回到顶部 
$(window).scroll(function() {
        //可视窗口高度
        var winH = $(window).height();
        //鼠标滚动的距离
        var iTop = $(window).scrollTop();

        if(iTop >= 500) {
            oNav.fadeIn();
            oTop.fadeIn();
            //鼠标滑动样式改变
            aDiv.each(function() {
                if(winH + iTop - $(this).offset().top+1000 > winH / 2) {
                    aNav.removeClass('active');
                    aNav.eq($(this).index()).addClass('active');
                }
            })
        } else {
            oNav.fadeOut();
            oTop.fadeOut();
        }
    })
//点击回到当前楼层
aNav.click(function() {
    var t = aDiv.eq($(this).index()).offset().top;
    $('body,html').animate({
        "scrollTop": t
    }, 500);
    $(this).addClass('active').siblings().removeClass('active');
});
//回到顶部
oTop.click(function() {
    $('body,html').animate({
        "scrollTop": 0
    }, 500)
})
}