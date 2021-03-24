import $ from '../library/jquery.js';

$(function () {

    // 手机号判断
    $('.next').on('click', function () {
        let reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        let phone = $('input[name=phone]').val();
        if (!reg.test(phone)) {
            $('#phoneTest').text('手机号错误请重新输入');
            return;
        }
        $('.arrow').eq(0).css('color', 'rgb(19, 184, 19)').next('.two').children('span').css({
            'background': 'rgb(19, 184, 19)',
            'border': 'none',
            'color': 'white'
        })
        $("#tbs1").css('display', 'none').next('#tbs2').css('display', 'block');
    })

    let username = $('input[name=username]');
    let password = $('input[name=password]');
    let truePassword = $('input[name=truePassword]');
    let span_uname = $('.span_uname');
    let span_pwd = $('.span_pwd');
    let span_truePwd = $('.span_truePwd');
    let timer = null;
    let flag = false;
    let flag1 = false;
    let flag2 = false;

    // 用户名判断
    username.on('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (!username.val()) {
                span_uname.css('display', 'none')
                return;
            }
            $.ajax({
                url: '../../interface/register_users.php',
                type: 'post',
                data: { username: username.val() },
                datatype: 'json',
                success (xhr) {
                    let code = JSON.parse(xhr).code;
                    if (code == 1) {
                        span_uname.text('用户名已存在').css({
                            'color': 'red',
                            'display': 'block'
                        });
                        flag = false;
                    } else if (code == 2) {
                        span_uname.text('用户名可以使用').css({
                            'color': 'green',
                            'display': 'block'
                        });
                        flag = true;
                    }
                }
            })
        }, 200)
    })

    // 密码判断
    password.on('input', function () {
        clearTimeout(timer);

        timer = setTimeout(function () {
            if (!password.val()) {
                span_pwd.css('display', 'none');
                return;
            }

            if (password.val().length < 8 || password.val().length > 16) {
                span_pwd.text("请输入8-16位的密码").css({
                    'display': 'block',
                    'color': 'red'
                });
                flag1 = false;
                return;
            }

            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/.test(password.val())) {
                span_pwd.text("密码可以使用").css('color', 'green');
                flag1 = true;
            } else {
                span_pwd.text("必须包含大小写字母和数字").css('color', 'red')
                flag1 = false;
            }

        }, 200)
    })

    // 密码二次判断
    truePassword.on('input', function () {
        clearTimeout(timer)
        if (!truePassword.val()) {
            span_truePwd.css('display', 'none');
            return;
        }
        timer = setTimeout(function () {
            if (truePassword.val() != password.val()) {
                span_truePwd.text('密码错误，请重新输入').css({
                    'color': 'red',
                    'display': 'block'
                });
                flag2 = false;
                return;
            }
            flag2 = true;
            span_truePwd.text('密码正确').css('color', 'green');
        }, 200)
    })

    // 注册
    $('.registerNow').on('click', function () {
        if (flag && flag1 && flag2) {
            $.ajax({
                url: '../../interface/register_ok.php',
                type: 'POST',
                data: {
                    username: username.val(),
                    password: password.val()
                },
                datatype: 'json',
                success (xhr) {
                    if (xhr) {
                        console.log(1);
                        $('#tbs3').css('display', 'block').siblings().css('display', 'none')
                        $('._uname').text(username.val());
                    }
                }
            })
        }
    })

})