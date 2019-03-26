window.onload = function () {
    var phoneNun = document.getElementById('phoneNun');
    var password = document.getElementById('password');
    var btnReg = document.getElementById('btnReg');
    var storage = window.localStorage;
    btnReg.onclick = function () {
        var name = phoneNun.value.trim();
        var passwords = password.value.trim();
        if (name && passwords) {
            var url = '../php/03login.php';
            var data = 'phoneNun=' + name + '&passwords=' + passwords;

            ajax('post', url, data, function (str) {
                console.log(str)
                if (str == 'yes') {
                    location.href = '../1.html';
                    storage.value = name;



                } else {
                    alert('你的手机号或密码错误');
                }

            })
        }
    }
}