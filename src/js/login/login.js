import $ from '../library/jquery.js';
import {
    setCookie,
    getCookie
} from '../library/cookie.js';

$(function () {
    let clickElm = $('.choice').children()
    //按钮点击增删样式
    clickElm.on({
        'click': function () {
            $(this).css({
                color: '#e4393c',
                'font-weight': 'bold',
            }).siblings().css({
                color: '#666',
                'font-weight': '500',
            })
        },

    })

    // 扫码、登录切换
    clickElm.eq(1).on('click', function () {
        $('#tabs').css('height', '370')
        $('#tabs2').css('display', 'flex');
        $('#tabs1').css('display', 'none');
    }).siblings().on('click', function () {
        $('#tabs').css('height', '430');
        $('#tabs2').css('display', 'none');
        $('#tabs1').css('display', 'flex');
        $('#error').css('display', 'none');
    })

    // input点击样式
    $('input[name=username]').on({
        'focus': function () {
            $(this).prev().css({
                'background-color': "rgba(0,0,0,0.2)"
            })
        },
        'blur': function () {
            $(this).prev().css({
                'background-color': "rgba(0,0,0,0.1)"
            })
        }
    })

    $('input[name=password]').on({
        'focus': function () {
            $(this).prev().css({
                'background-color': "rgba(0,0,0,0.2)"
            })
        },
        'blur': function () {
            $(this).prev().css({
                'background-color': "rgba(0,0,0,0.1)"
            })
        }
    })


    // 清空input
    $('input').on('input', function () {
        if ($(this).val()) {
            $(this).next().css('display', 'block')
        }
    })

    $('.clear').on('click', function () {
        $(this).prev('input').val('')
        $(this).css('display', 'none')
    })


    // 提交信息
    $("#in").on('click', function () {
        let username = $('input[name=username]').val();
        let password = $('input[name=password]').val();
        if (!password && !username) {
            $('#error').text('请输入用户名密码').css('display', 'block');
            return;
        } else if (!password) {
            $('#error').text('请输入密码').css('display', 'block');
            return;
        } else if (!username) {
            $('#error').text('请输入用户名').css('display', 'block');
            return;
        }
        $('#error').css('display', 'none');

        $.ajax({
            url: '../../interface/login.php',
            type: 'post',
            data: {
                username,
                password
            },
            datatype: 'json',
            success (xhr) {
                let code = JSON.parse(xhr).code;
                console.log(code);
                if (code == 1) {
                    setCookie('uname', username, 24);
                    location.href = "../html/index.html";
                } else if (code == 2) {
                    $("#error").text('用户名密码错误').css('display', 'block');
                }
            },
            error (xhr, info, err) {
                console.log(err);
            }
        })


    })

    // 防抖二维码动画
    let timer = null;
    $('#hover').on({
        'mouseover': function () {
            clearTimeout(timer)
            let _this = this
            timer = setTimeout(function () {
                $(_this).stop(true, false).children().eq(0).animate({
                    'margin-left': '-155px'
                }, 200).siblings().delay(200).animate({
                    'opacity': 1
                }, 200)
            }, 200)
        },
        'mouseout': function () {
            clearTimeout(timer)
            let _this = this
            timer = setTimeout(function () {
                $(_this).stop(true, false).children().eq(1).animate({
                    'opacity': 0
                }, 200).siblings().delay(200).animate({
                    'margin-left': '0'
                }, 200)
            }, 200)
        }
    })




})