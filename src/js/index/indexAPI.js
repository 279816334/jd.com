function countDown (futureDate) {
    var currentDate = new Date();
    var futureDate = new Date(futureDate);
    var timeDifference = parseInt((futureDate - currentDate) / 1000);
    var day = parseInt(timeDifference / 3600 / 24);
    var hours = parseInt(timeDifference / 60 / 60 % 24);
    var minute = parseInt(timeDifference / 60 % 60);
    var second = parseInt(timeDifference % 60);
    if (day < 10) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;
    var str = day + '天' + hours + '小时' + minute + '分钟' + second + '秒'
    var arr = [day, hours, minute, second]
    return arr
}

function blockScrollTop () {
    let top = document.documentElement.scrollTop;
    let top1Height = $('#top1').height();
    let top2Height = $('#top2').height();
    let bannerHeight = $('#banner').height();
    let jd_sekillHeight = $('#jd_seckill').height();
    let jd_core1Height = $('#jd_core1').height();
    let J_niceGoodsHeight = $('#J_niceGoods').height();
    // let J_feedsHeight = $('#J_feeds').height();
    if (top > 610) {
        $('#fixed_Search').css('height', 50);
        $('#fixed').css({
            'position': 'fixed',
            'top': 70
        }).find('.go_top').css({
            'padding': '12px 12px',
            'height': 34
        })
    } else {
        $('#fixed_Search').css('height', 0)
        $('#fixed').css({
            'position': 'absolute',
            'top': 681
        }).find('.go_top').css({
            'padding': 0,
            'height': 0
        })

    }

    if (top > (top1Height + top2Height + bannerHeight + jd_sekillHeight + jd_core1Height + J_niceGoodsHeight - 50)) {
        $('#fixed').find('li').eq(3).addClass('_red').siblings().removeClass('_red')
    } else if (top > (top1Height + top2Height + bannerHeight + jd_sekillHeight + jd_core1Height - 50)) {
        $('#fixed').find('li').eq(2).addClass('_red').siblings().removeClass('_red')
    } else if (top > (top1Height + top2Height + bannerHeight + jd_sekillHeight - 50)) {
        $('#fixed').find('li').eq(1).addClass('_red').siblings().removeClass('_red')
    } else if (top > (top1Height + top2Height + bannerHeight - 50)) {
        $('#fixed').find('li').eq(0).addClass('_red').siblings().removeClass('_red')
    } else {
        $('#fixed').find('li').removeClass('_red')
    }



}

function getShopNum () {
    try {
        $('._num').text(JSON.parse(getCookie('shop')).length)
    } catch (error) {
        $('._num').text('0')
    }
}

export {
    countDown,
    blockScrollTop,
    getShopNum
}