$(function () {

	//购物车渲染事件
	$.ajax({
		type: "post",
		url: "../php/orderCar.php",
		async: true,
		data: "APItype=orderCar&page=1&qty=10",
		success: function (str) {
			var arr = JSON.parse(str)
			// if (arr.list == '') {
			// 	$('.cart-nothing').css('display', 'block');
			// 	$('.cart-tab').css('display', 'none');
			// 	$('.carlist').css('display', 'none');
			// } else {
			var html4 = ''
			$.each(arr.list, function (i, item) {
				// console.log(item)
				var zongjia = item.price * item.num;

				// console.log(zongjia)
				var html5 = ` 
											<li data-id=${item.id} id="cc" class="ll">
													<div class="check">
															<input type="checkbox" class="checkboxs"> 
													</div>
															<div class="pic">
																	<img src="${item.pic}" alt="">
															</div>
															 <div class="name">
																	<a href="">${item.name}</a>
															</div>
	
															<div class="price">${item.price}</div>
	
															<div class="num" >
																	<p class="cutnum">-</p>
																
																			<input type="text"  value="${item.num}" class="nownum">
													 
																	<p class="addnum">+</p>
															</div>
	
															<div class="total">${zongjia}</div>
															
															<div class="del">
		
																	<a href="#javascript;" class="delect">删除</a>
															</div> 
													
	
											</li>
									</ul>
									`
				html4 += html5;
				// console.log(html4)
				$('#sp').html(html4);
				//1.数量加和减
				//1.数量加和减
				$('.num').on('click', '.addnum', function () {
					// console.log($(this));
					var num = $(this).prev().val() * 1; //取值
					num++;
					if (num >= 100) {
						//假设库存量
						num = 100;
					}
					$(this).prev().val(num); //赋值
					//		console.log(num);
					goodTotal($(this));
					$.ajax({
						type: 'POST',
						url: '../php/orderCar.php',
						data: 'APItype=orderCarNum&id=' + item.id + '&num=' + num,
						success: function (str) {

						}


					});
					// console.log(num)

				});
				// 	var data = 'APItype=orderCarNum&id=' + item.id + '&num=' + num;


				// });

				$('.num').on('click', '.cutnum', function () {
					//		console.log($(this));
					var num = $(this).next().val() * 1; //取值
					num--;
					if (num <= 1) {
						//假设库存量
						num = 1;
					}
					$(this).next().val(num); //赋值
					//		console.log(num);
					goodTotal($(this));
					$.ajax({
						type: 'POST',
						url: '../php/orderCar.php',
						data: 'APItype=orderCarNum&id=' + item.id + '&num=' + num,
						success: function (str) {}
					});
				});
				//2.小计的改变：数量变就跟着变
				function goodTotal(now) {
					var num = now.parent().find('input').val() * 1; //数量
					var price = now.parent().prev().text() //获取价格，减掉单位只要数字
					// console.log(price)
					var totalPrice = (num * price).toFixed(2); //保留两位小数
					// console.log(num, price, totalPrice);
					now.parent().next().html(totalPrice);
					allNum();
				}


				//3.删除当行
				$('#cc').on('click', '.delect', function () {
					//jq删除节点   节点.remove()
					var res = confirm('您确定要删除吗?');
					if (res) {
						$(this).parent().parent().remove();
						console.log($(this));
					}
					$.ajax({
						type: 'POST',
						url: '../php/orderCar.php',
						data: 'APItype=orderCarDelete&id=' + item.id,
						success: function (str) {}
					});
					update(); //判断一次
				});

				function update() {
					if ($('.ll .addnum').size() <= 0) {
						$('#del').css('display', 'none');
					} else {
						$('#del').css('display', 'block');
					}
				}



				$('.checkboxs').on('click', function () {
					var checkLe = $('.checkboxs:checked').size();
					if (checkLe == $('.checkboxs').size()) {
						$('#selectall input').prop('checked', true);
					} else {
						$('#selectall input').prop('checked', false);
					}
					allNum();
				});

				$('#selectall').on('click', function () {
					if ($(this).prop('checked')) {
						$('.checkboxs').prop('checked', 'checked')

					} else {
						$('.checkboxs').removeAttr('checked')
					}
					allNum();
					// console.log(allNum())
				})

				//5.总数量和总价的更新
				var arr = [];
				allNum();

				function allNum() {
					arr = []; //存被选中的复选框的下标
					$('.check input').each(function (i, item) {
						if ($('.check input').eq(i).prop('checked')) {
							arr.push(i);
						}
					});
					// console.log(arr);

					var num = 0; //假设存总数量
					var priceAll = 0; //存总价的
					//		console.log($('.good_total').size());
					//		console.log($('.good_total').eq(0).html().slice(2));
					//&bnsp; 6位
					arr.forEach(function (item) { //item值：存的是下标
						num += $('.nownum').eq(item).val() * 1;
						priceAll += $('.total').eq(item).text() * 1; //￥ 99
					});

					// console.log('总数量是：' + num);
					//		console.log('总价格是：' + priceAll);

					$('#allnum').html('已选 ' + num + ' 件商品');
					$('#totalprice').html('总计（不含运费）：￥ ' + priceAll);
				}


				//6.全删
				$('#sc').on('click', function () {
					// console.log(arr);
					var abc = confirm('您确定要删除全部商品吗？');
					// if (res) {
					// for (var i = arr.length - 1; i >= 0; i--) { //从末尾开始删除元素
					// $('#sp li').css('display', 'none');
					// }
					// }
					// var id = $(this).parent().parent().find('#sp');
					// console.log(id);
					// var id = $(this).parent().parent().find('#sp .ll').attr('class');
					if (abc) {
						for (var i = arr.length - 1; i >= 0; i--) { //从末尾开始删除元素
							// $('#sp li').eq(arr[i]).remove();
							var id = $(this).parent().parent().find('#sp .ll').eq(i).attr('data-id');
							console.log(id);
							// console.log($(this));
							$(this).parent().parent().parent().remove();
							$.ajax({
								type: 'POST',
								url: '../php/orderCar.php',
								data: 'APItype=orderCarDeleteAll&id=' + id,
								success: function (str) {
									console.log(123);
								}
							});
						}
					}
					arr = []; //删除了记得清空数组
					update(); //状态改变
					allNum();

				});

			});


		}
	});
});