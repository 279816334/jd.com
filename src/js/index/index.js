import $ from '../library/jquery.js';
import Swiper from '../library/swiper.js';
import { setCookie, getCookie } from '../library/cookie.js';
import { countDown, blockScrollTop, getShopNum } from './indexAPI.js';
import '../library/jQuery.lazyload.js';



$(function () {
    // banner 轮播图
    $("img").lazyload({ effect: "fadeIn", threshold: 260, });
    blockScrollTop();
    getShopNum();
    if (getCookie('uname')) {
        $('._username').text(getCookie('uname') + '')
        $('._register').text('')
    } else {
        $('._username').text('你好，请登录')
        $('._register').text('免费注册')
    }
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: "fade",
        clickable: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    for (let i = 0; i < mySwiper.pagination.bullets.length; i++) {
        mySwiper.pagination.bullets[i].onmouseover = function () {
            this.click();
        };
    }

    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    mySwiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    mySwiper.pagination.destroy()
    mySwiper.pagination.init()
    mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
    //鼠标覆盖停止自动切换
    mySwiper.el.onmouseover = function () {
        mySwiper.autoplay.stop();
    }

    //鼠标离开开始自动切换
    mySwiper.el.onmouseout = function () {
        mySwiper.autoplay.start();
    }

    // right1 轮播图
    let mySwiper1 = new Swiper('.swiper-container1', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '._prev1_1',
            prevEl: '._prev1_2',
        },
        effect: "fade",
        loop: true,
    })
    mySwiper1.el.onmouseover = function () {
        mySwiper1.autoplay.stop();
    }

    //鼠标离开开始自动切换
    mySwiper1.el.onmouseout = function () {
        mySwiper1.autoplay.start();
    }
    // ============================================================================
    // jd_seckill center 轮播图
    // center
    let mySwiper2 = new Swiper('.swiper-container2', {
        // autoplay: true,//可选选项，自动滑动
        navigation: {
            nextEl: '._prev2_2',
            prevEl: '._prev2_1',
        },
        loop: true,
        speed: 800,
        allowTouchMove: false,
    })

    // right
    let mySwiper3 = new Swiper('.swiper-container3', {
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        loop: true,
        speed: 600,
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    mySwiper3.el.onmouseover = function () {
        mySwiper3.autoplay.stop();
    }

    //鼠标离开开始自动切换
    mySwiper3.el.onmouseout = function () {
        mySwiper3.autoplay.start();
    }
    // ============================================================================

    // 每日特价tabs
    $('.tab_head').children('div').on('mouseover', function () {
        let _index = $(this).index();
        $('.tab_body').eq(_index).css('display', 'block')
    })

    // ============================================================================
    // 发现好货轮播
    // let swiper4_chr = $('.swiper-container4').children('.swiper-wrapper');
    // let l1 = swiper4_chr.find('.swiper-slide');
    // let scroll_bottom = $('.scroll_bottom');
    // let timer = null;
    // // timer = setInterval(() => {
    // //     let left = parseInt(swiper4_chr.css('left')) - 1
    // //     let scr_left = Math.floor((Math.abs(left) / 1895) * 850) + "px";
    // //     if (Math.abs(left) == 1895) {
    // //         left = 0
    // //     }
    // //     swiper4_chr.css('left', left)
    // //     scroll_bottom.children().css('left', scr_left)
    // //     console.log($('.swiper-container4').children('.swiper-wrapper').css('left'));
    // // }, 15);
    let mySwiper4 = new Swiper('.swiper-container4', {
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        speed: 3000,
        slidesPerView: 5,
        allowTouchMove: false,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: false,
        },
    })

    let timer = null;
    mySwiper4.el.onmouseover = function () {
        // clearInterval(timer);
        mySwiper4.init = false;
        // timer = setInterval(function () {
        mySwiper4.autoplay.stop();
        // }, 500)
    }

    //鼠标离开开始自动切换
    mySwiper4.el.onmouseout = function () {
        // clearInterval(timer);
        // timer = setInterval(function () {
        mySwiper4.autoplay.start();
        // }, 500)

    }

    Array.from(mySwiper4.slides).forEach((elm, i) => {
        if (!(i % 2)) {
            elm.style.margin = '40px 0 0  0';
        } else {
            elm.style.margin = '20px 0 0  0';
        }
        elm.style.height = '200px'
    })
    mySwiper4.scrollbar.$el.css({
        'height': '3px',
        'margin-bottom': '5px',
        'opacity': '1'
    })
    mySwiper4.scrollbar.$dragEl.css({
        'transform': 'translate3d(0px, 0px, 0px)',
        'height': '9px',
        // 'width': '15px',
        'background': 'red',
        'margin': 0,
        'margin-top': '-3px',
        'transform': 'translate3d(0px, 0px, 0px)'
    })

    $('#J_niceGoods').find('.right').on({
        'mouseenter': function () {
            mySwiper4.scrollbar.$el.css({
                'opacity': '1'
            })
        },
        'mouseleave': function () {
            mySwiper4.scrollbar.$el.css({
                'opacity': '0'
            })

        },
    });
    // =======================================================================
    // 渲染
    $.ajax({
        url: '../../interface/index_goods.php',
        type: 'get',
        dataType: 'json',
        success (res) {
            let temp = '';
            res.forEach((elm, i) => {
                // console.log(JSON.parse(elm.goods_img)[0].src);
                temp += `   
                <li class="feed_goods">
                <a href="./details.html?id=${elm.id}" target="_blank">
                    <div class="feed_goods_img">
                        <img src="${JSON.parse(elm.goods_img)[0].src[0]}" alt="">
                    </div>
                    <div class="feed_goods_title">
                        <p>${(elm.goods_title).slice(0, 25)}...</p>
                    </div>
                    <div class="feed_goods_price">
                        <span>￥</span>
                        <span>${elm.goods_price}</span>
                        <span>券</span>
                    </div>
                </a>
                <div class="resemble">
                    <div>
                        <span class=""></span>
                        <span>找相似</span>
                    </div>
                </div>
            </li>`
            })
            $('.goods_list').html(temp)
        }

    })

    // 滚动顶部导航，侧栏
    $(window).on('scroll', function () {
        blockScrollTop();

    })

    // 我的购物车
    $('.shopping').on({
        'mouseenter': function () {
            getShopNum()
        },
        'click': function () {
            location.href = './login.html'
        }
    })

    // 返回顶部
    $('.go_top').on('click', function () {
        scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })

    // fixed点击定位
    $('#fixed').on('click', function (e) {
        let target = e.target;
        let top1Height = $('#top1').height();
        let top2Height = $('#top2').height();
        let bannerHeight = $('#banner').height();
        let jd_sekillHeight = $('#jd_seckill').height();
        let jd_core1Height = $('#jd_core1').height();
        let J_niceGoodsHeight = $('#J_niceGoods').height();
        switch (target.id) {
            case 'fixed_jdms':
                scrollTo({
                    top: top1Height + top2Height + bannerHeight - 30,
                    behavior: 'smooth'
                })
                break;
            case 'fixed_tsyh':
                scrollTo({
                    top: top1Height + top2Height + bannerHeight + jd_sekillHeight - 40,
                    behavior: 'smooth'
                })
                break;
            case 'fixed_fxhh':
                scrollTo({
                    top: top1Height + top2Height + bannerHeight + jd_sekillHeight + jd_core1Height - 20,
                    behavior: 'smooth'
                })
                break;
            case 'fixed_wntj':
                scrollTo({
                    top: top1Height + top2Height + bannerHeight + jd_sekillHeight + jd_core1Height + J_niceGoodsHeight,
                    behavior: 'smooth'
                })
                break;
        }

    })


    $('.tab_body').eq(0).css('display', 'block').siblings('.tab_body').css('display', 'none');
    $('.tab_head').children('div').on('mouseover', function () {
        let _index = $(this).index();
        $('.unline').css('left', 52 * _index + 11);
        $('.tab_body').eq(_index).css('display', 'block').siblings('.tab_body').css('display', 'none');
    })



    setInterval(function () {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        if (hours % 2) {
            $('.sessions').text(+hours + 1 + ':00');
            let time = countDown(year + '/' + (month + 1) + '/' + day + ' ' + (hours + 1) + ':00:00');
            $('.hours').text(time[1])
            $('.minutes').text(time[2])
            $('.seconds').text(time[3])
        } else {
            $('.sessions').text(+hours + 2 + ':00');
            let time = countDown(year + '/' + (month + 1) + '/' + day + ' ' + (hours + 2) + ':00:00');
            $('.hours').text(time[1])
            $('.minutes').text(time[2])
            $('.seconds').text(time[3])
        }
    }, 1000)

})


