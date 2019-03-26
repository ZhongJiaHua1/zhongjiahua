window.onload = function () {
	$(function () {
		var yunlist = sessionStorage.getItem('value');
		var dataobj = JSON.parse(yunlist)
		// console.log(yunlist)
		//  console.log(dataobj)
		$.each(dataobj, function (i, item) {
			// console.log(item.id)
			// var html4 = img/list2.jpg;
			// console.log(html4)
			$('#img').attr('src', item.img);
			// console.log($('#img'))
			$('#price').html(item.price);
			$('#title').html(item.font);
			$("#btn01").click(function () {
				// $('').html(item.id);
				// console.log(item.id)
				var data = 'APItype=addOrderCar&id=' + item.id + '&pic=' + item.img + '&name=' + item.font + '&price=' + item.price + '&num=1';
				ajax('post', '../php/orderCar.php', data, function (str) {

					// console.log(str)

					// var arr = datalist.list;

				});
			});
			var num = 0;
			$('#cart').on('click', '.up', function () {
				//		console.log($(this));
				var num = $(this).prev().val() * 1; //取值
				num++;
				if (num >= 100) {
					//假设库存量
					num = 100;
				}
				$(this).prev().val(num); //赋值
				var number = $('#sum').attr('value');
				// console.log(num);
				// goodTotal($(this));
			});
			// console.log(num);
			$('#cart').on('click', '.dowm', function () {
				//		console.log($(this));
				var num = $(this).next().val() * 1; //取值
				num--;
				if (num <= 1) {
					//假设库存量
					num = 1;
				}
				$(this).next().val(num); //赋值

				// console.log(num);
				// goodTotal($(this));
			});

			$('#btn01').on('click', function () {
				var number = $('#sum').val();
				var id = item.id;
				console.log(number);
				console.log(id);
				$.ajax({
					type: 'post',
					url: '../php/newOrders.php',
					data: {
						'id': id,
						'num': number
					},
					success: function (str) {}
				});
			})
			// console.log(num);

			// console.log( $('#sum'));
			$('#go2').on('click', function () {

				window.open('gwc.html');


			});
		});
	});
	$(function () {

		var magnifierConfig = {
			magnifier: "#magnifier1", //最外层的大容器
			width: 500, //承载容器宽
			height: 500, //承载容器高
			moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
			zoom: 3 //缩放比例
		};

		var _magnifier = magnifier(magnifierConfig);

		/*magnifier的内置函数调用*/
		/*
			//设置magnifier函数的index属性
			_magnifier.setIndex(1);

			//重新载入主图,根据magnifier函数的index属性
			_magnifier.eqImg();
		*/
	});

	$(document).ready(function () {
		$(".phone").hover(function () {
			$(".ewm").animate({
				height: 'toggle'
			});
		});
	});

	var xd_nav = document.getElementById('xd_nav');
	// console.log(xd_nav)
	var top = xd_nav.offsetTop;

	window.onscroll = function () {
		var scrollTop = window.scrollY;
		if (scrollTop >= top) {
			xd_nav.className = 'zz';
		} else {
			xd_nav.className = '';
		}
	}


	// 存贮
	var sum = getid('sum');
	// console.log(sum)
	var btn01 = getid('btn01');
	// console.log(btn01)
	btn01.onclick = function () {

		var name = sum.value.trim();

	}
	// 飞入购物车
	$(function () {
		$(".buy_btn").click(function () {
			console.log($(".buy_btn"));
			$('#pop_cart').css('display', 'block');
			setTimeout(function () {
				$('#pop_cart').hide(); //将DIV标签隐藏。
			}, 5000);
		});
	});



}