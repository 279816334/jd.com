import $ from '../library/jquery.js';
import Swiper from '../library/swiper.js';

$(function () {
    // banner 轮播图
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
    var mySwiper1 = new Swiper('.swiper-container1', {
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
    var mySwiper2 = new Swiper('.swiper-container2', {
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
    var mySwiper3 = new Swiper('.swiper-container3', {
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
    var mySwiper4 = new Swiper('.swiper-container4', {
        autoplay: {
            delay: 0,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        speed: 6000,
        allowTouchMove: false,
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            snapOnRelease: false,
        },
    })
    mySwiper4.scrollbar.$el.css({
        'height': '3px',
        'margin-bottom': '5px',
        'opacity': '0'
    })
    mySwiper4.scrollbar.$dragEl.css({
        'transform': 'translate3d(0px, 0px, 0px)',
        'height': '9px',
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
})

