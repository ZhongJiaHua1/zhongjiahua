window.onload = function () {
  // 左侧菜单栏
  $(document).ready(function () {
    $(".on_b").click(function () {
      $(".number1").animate({
        height: 'toggle'
      });
    });
  });
  $(document).ready(function () {
    $(".num2").click(function () {
      $(".number2").animate({
        height: 'toggle'
      });
    });
  });
  $(document).ready(function () {
    $(".num3").click(function () {
      $(".number3").animate({
        height: 'toggle'
      });
    });
  });


  // 数据库渲染
  var product = document.getElementById('product');
  // console.log(product)
  var ipage = 1; //第一页
  var inum = 8; //每页8条
  var data = 'APItype=goodlist&page=' + ipage + '&qty=' + inum;
  var page = document.getElementById('page');
  // console.log(page)

  ajax('post', '../php/list.php', data, function (str) {

    var datalist = JSON.parse(str);

    // console.log(datalist)
    var pages = Math.ceil(datalist.total / datalist.qty);
    var html = '';
    for (var i = 0; i < pages; i++) {
      html += `<span>${i+1}</span>`;
    }

    var arr = datalist.list;
    // console.log(arr);
    var res = arr.map(function (item) {
      return `<dl data-id="${item.id}">
           <dd>
               <div class="list">
                   <p class="pic">
                       <a href="#javascript;">
                          <img src="${item.img}" style="width:100%;" alt="">
                      </a>
                  </p>
                  <p class="name">
                      <a href="">
                         <font>${item.font}</font>
                        <span>${item.span}</span>
                    </a>
                 </p>
               <p class="price">
                   ${item.price}
                    <span>${item.del}</span>
                </p>
                 <p class="cold">
                     <span>冷链配</span>
                  </p>
             </div>
        </dd>
    </dl>
   </div>
     </div>`
    }).join('');
    product.innerHTML = res;
  });

  var div=document.getElementById("product");
  var dl=div.getElementsByTagName("dl");
  for(var i=0;i<dl.length;i++){
  dl[i].innerHTML=i;
  };
  // console.log(alis)
  var more = getid('more');
  // console.log(more)

  more.onclick = function () {
    //加上过渡效果
    var ipage = 1; //第一页
    var inum = 8; //每页8条
    ipage=2;
    var data = 'APItype=goodlist&page=' + ipage + '&qty=' + inum;
    
    ajax('post', '../php/list.php', data, function (str) {

      var datalist = JSON.parse(str);

      console.log(datalist)
      var pages = Math.ceil(datalist.total / datalist.qty);
      var html = '';
      for (var i = 0; i < pages; i++) {
        html += `<span>${i+1}</span>`;
      }

      var arr = datalist.list;
      // console.log(arr);
      var res = arr.map(function (item) {
        return `<dl data-id="${item.id}">
             <dd>
                 <div class="list">
                     <p class="pic">
                         <a href="#javascript;">
                            <img src="${item.img}" style="width:100%;" alt="">
                        </a>
                    </p>
                    <p class="name">
                        <a href="">
                           <font>${item.font}</font>
                          <span>${item.span}</span>
                      </a>
                   </p>
                 <p class="price">
                     ${item.price}
                      <span>${item.del}</span>
                  </p>
                   <p class="cold">
                       <span>冷链配</span>
                    </p>
               </div>
          </dd>
      </dl>
     </div>
       </div>`

      }).join('');
      if (dl.length<datalist.total) {
        //有数据
        // console.log(inum.total)
        css(more, 'display', 'none');
      }else{
        css(more, 'display', 'none');
      }
      product.innerHTML += res;
    });


  }

  //排序
  var sx = getid('sx');
  sx.onclick = function () {
    //加上过渡效果
    

    var ipage = 1; //第一页
    var inum = 8; //每页8条
    // ipage=2;
    var data = 'APItype=goodlistup&page=' + ipage + '&qty=' + inum;
    
    ajax('post', '../php/list.php', data, function (str) {

      var datalist = JSON.parse(str);

      console.log(datalist)
      var pages = Math.ceil(datalist.total / datalist.qty);
      var html = '';
      for (var i = 0; i < pages; i++) {
        html += `<span>${i+1}</span>`;
      }

      var arr = datalist.list;
      console.log(arr);
      product.innerHTML = '';
      var res = arr.map(function (item) {
        return `<dl data-id="${item.id}">
             <dd>
                 <div class="list">
                     <p class="pic">
                         <a href="#javascript;">
                            <img src="${item.img}" style="width:100%;" alt="">
                        </a>
                    </p>
                    <p class="name">
                        <a href="">
                           <font>${item.font}</font>
                          <span>${item.span}</span>
                      </a>
                   </p>
                 <p class="price">
                     ${item.price}
                      <span>${item.del}</span>
                  </p>
                   <p class="cold">
                       <span>冷链配</span>
                    </p>
               </div>
          </dd>
      </dl>
     </div>
       </div>`
      }).join('');
      // console.log(res)
      product.innerHTML = res;
    });
    
  };
  var jx = getid('jx');
  jx.onclick = function () {
    //加上过渡效果
    

    var ipage = 1; //第一页
    var inum = 8; //每页8条
    // ipage=2;
    var data = 'APItype=goodlistdown&page=' + ipage + '&qty=' + inum;
    
    ajax('post', '../php/list.php', data, function (str) {

      var datalist = JSON.parse(str);

      console.log(datalist)
      var pages = Math.ceil(datalist.total / datalist.qty);
      var html = '';
      for (var i = 0; i < pages; i++) {
        html += `<span>${i+1}</span>`;
      }

      var arr = datalist.list;
      console.log(arr);
      product.innerHTML = '';
      var res = arr.map(function (item) {
        return `<dl data-id="${item.id}">
             <dd>
                 <div class="list">
                     <p class="pic">
                         <a href="#javascript;">
                            <img src="${item.img}" style="width:100%;" alt="">
                        </a>
                    </p>
                    <p class="name">
                        <a href="">
                           <font>${item.font}</font>
                          <span>${item.span}</span>
                      </a>
                   </p>
                 <p class="price">
                     ${item.price}
                      <span>${item.del}</span>
                  </p>
                   <p class="cold">
                       <span>冷链配</span>
                    </p>
               </div>
          </dd>
      </dl>
     </div>
       </div>`
      }).join('');
      // console.log(res)
      product.innerHTML = res;
    });
  };

  //点击获取商品id发起数据库查询
$('#product').on('click', 'dl', function () {
  console.log($(this).attr('data-id'))
  var dataid = $(this).attr('data-id');
  $.ajax({
  type: "get",
  url: "../php/toxqy.php",
  async: true,
  data: "id=" + dataid,
  success: function (str) {
  console.log(str)
  sessionStorage.setItem('value',str);
  window.open('xqy.html')
  }
  
  })
  })
};
