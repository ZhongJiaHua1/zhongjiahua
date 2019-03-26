window.onload = function () {
    $(function () {
        $('#phoneNun').click(function () {
            $('#phoneNun').css('border', '0');
        });
        //   console.log('phoneNun')
    });


    //一、定义了一个获取元素的方法
    function getEle(selector) {
        return document.querySelector(selector);
    }
    //二、获取到需要用到的DOM元素
    var box = getEle("#hezi"), //容器
        bgColor = getEle(".bgColor"), //背景色
        txt = getEle(".txt"), //文本
        slider = getEle(".slider"), //滑块
        icon = getEle(".slider>i"),

        successMoveDistance = box.offsetWidth - slider.offsetWidth, //解锁需要滑动的距离
        downX, //用于存放鼠标按下时的位置
        isSuccess = false; //是否解锁成功的标志，默认不成功
    //    console.log(bgColor)
    //三、给滑块添加鼠标按下事件
    slider.onmousedown = mousedownHandler;

    //3.1鼠标按下事件的方法实现
    function mousedownHandler(e) {
        bgColor.style.transition = "";
        slider.style.transition = "";
        var e = e || window.event || e.which;
        downX = e.clientX;
        //在鼠标按下时，分别给鼠标添加移动和松开事件
        document.onmousemove = mousemoveHandler;
        document.onmouseup = mouseupHandler;
    };

    //四、定义一个获取鼠标当前需要移动多少距离的方法
    function getOffsetX(offset, min, max) {
        if (offset < min) {
            offset = min;
        } else if (offset > max) {
            offset = max;
        }
        return offset;
    }

    //3.1.1鼠标移动事件的方法实现
    function mousemoveHandler(e) {
        var e = e || window.event || e.which;
        var moveX = e.clientX;
        var offsetX = getOffsetX(moveX - downX, 0, successMoveDistance);
        bgColor.style.width = offsetX + "px";
        slider.style.left = offsetX + "px";

        if (offsetX == successMoveDistance) {
            success();
        }
        //如果不设置滑块滑动时会出现问题（目前还不知道为什么）
        e.preventDefault();
    };

    //3.1.2鼠标松开事件的方法实现
    function mouseupHandler(e) {
        if (!isSuccess) {
            bgColor.style.width = 0 + "px";
            slider.style.left = 0 + "px";
            bgColor.style.transition = "width 0.8s linear";
            slider.style.transition = "left 0.8s linear";
        }
        document.onmousemove = null;
        document.onmouseup = null;
    };

    //五、定义一个滑块解锁成功的方法
    function success() {
        isSuccess = true;
        txt.innerHTML = "验证成功";
        bgColor.style.backgroundColor = "lightgreen";
        slider.className = "slider active";
        icon.className = "iconfont icon-xuanzhong";
        //滑动成功时，移除鼠标按下事件和鼠标移动事件
        slider.onmousedown = null;
        document.onmousemove = null;
    };
    $.idcode.setCode();

    $("#btns").click(function () {
        var IsBy = $.idcode.validateCode();
        alert(IsBy);
        console.log(IsBy);
    });

    // -------------连接数据库
    /*
		需求：
            用户名验证；
            注册
            登陆
            退出
            发帖
            顶贴
            踩贴
            点击加载更多
	 */
    //获取节点
    var phoneNun = getid('phoneNun');
    // console.log(phoneNun)
    var yes = getid('yes');
    // console.log(yes)
    var no = getid('no');
    // console.log(no)
    var btnReg = getid('btnReg');
    // console.log(btnReg)
    var password = getid('password');
    var isok  = false;
    // console.log(password)


    phoneNun.onblur = function () {
        var name = phoneNun.value.trim();
            console.log(name);
        if(name) {
            // 非空判断
            if(checkReg.tel(name)){
                // 正则通过      
            var url = '../php/01checkname.php';
            var data = 'phoneNun=' + name;
            ajax('post', url, data, function (str) {
                console.log(str)
                if(str == 'yes'){
                    yes.innerHTML = 'yes';
                    yes.style.color = '#58bc58';
                    isok = true;//开关，控制是否能注册
                }else{
                    yes.innerHTML = 'no';
                    yes.style.color = 'red';
                    isok = false;
                }
            });
            }else{
                yes.innerHTML = '正则不通过';
                yes.style.color = 'red';
            }
        }else{
            alert('请输入手机号');
    }
}

// 密码
password.onblur = function(){
    var passwords = password.value.trim();
    if(passwords){
        //非空判断
        if(checkReg.psweasy(passwords)){
            //正则通过      
            no.innerHTML = '正则通过';
            no.style.color = '#58bc58';
            isok =  true ;

        }else{
            no.innerHTML = '正则不通过';
            no.style.color = 'red';
            isok = false;
        }     
    }else{
        alert('请输入密码');
        isok =false;
    }
}

//4、点击注册按钮的时候验证用户名是否存在
btnReg.onclick = function() {
    var name = phoneNun.value.trim();
    var passwords = password.value.trim();
    //非空-正则-ajax
    if(isok) {
        //5、如果不存在：可以注册(把用户名和密码存到数据库)，把数据传给后端(ajax)
        var url = '../php/02reg.php';
        var data =  'phoneNun=' + name + '&password=' + passwords;
        ajax('post', url, data, function(str) {
            console.log(str)
            location.href ='../html/login.html';
        });
    }
}

}