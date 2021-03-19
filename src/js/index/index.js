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


    // right1 轮播图
    var mySwiper1 = new Swiper('.swiper-container1', {
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '._prev1',
            prevEl: '._prev1',
        },
        effect: "fade",
        loop: true,

    })
    // ============================================================================
    // jd_seckill center 轮播图
    // center
    var mySwiper2 = new Swiper('.swiper-container2', {
        // autoplay: true,//可选选项，自动滑动
        navigation: {
            nextEl: '._prev2',
            prevEl: '._prev2',
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
    // ============================================================================


})


