import $ from '../library/jquery.js';
function setCookie (key, val, hours = 0, path = '/') {
    let str = key + '=' + val;
    let date = new Date();
    let a = date.setTime(Date.now() + (hours - 8) * 3600 * 1000);
    document.cookie = key + '=' + val + ';expires=' + date + ';path=' + path;
}
function getCookie (key) {
    let obj = {};
    document.cookie.split('; ').forEach(elm => {
        obj[elm.split('=')[0]] = elm.split('=')[1]
    })
    return obj[key];
}
$(function () {
    try {
        $('.my_shop_num').text(JSON.parse(getCookie('shop')).length)
    } catch (error) {
        $('.my_shop_num').text('0')
    }
    $.ajax({
        url: '../../interface/details.php',
        type: 'get',
        data: { id: location.search.split('=')[1] },
        dataType: 'json',
        success (res) {
            let res1 = res[0];
            let num = $('input[type=number]');
            let goods = {}
            let shop = [];
            $('#left_img').prop('src', JSON.parse(res1.goods_img)[0].src)
            $('.sku-name').text(res1.goods_title);
            $('._price').text(res1.goods_price);
            $('.add').on('click', function () {
                let num = $('input[type=number]');
                if (+num.val() >= res1.goods_stock) {
                    alert('已超出库存')
                    num.val(res1.goods_stock);
                    return;
                }
                num.val(+$('input[type=number]').val() + 1)
            })
            $('.subtract').on('click', function () {
                if (num.val() <= 1) {
                    alert('不能少于一件商品')
                    num.val(1);
                    return;
                }
                num.val(+$('input[type=number]').val() - 1)
            })
            $('.add_shopping').on('click', function () {
                if (getCookie('shop')) {
                    shop = JSON.parse(getCookie('shop')).filter(elm => {
                        return elm.id != res1.id
                    });
                    goods.id = res1.id;
                    goods.num = num.val();
                    shop.push(goods);
                    setCookie('shop', JSON.stringify(shop), 24);
                } else {
                    goods.id = res1.id;
                    goods.num = num.val();
                    shop.push(goods);
                    setCookie('shop', JSON.stringify(shop), 24);
                }
                $('.my_shop_num').text(JSON.parse(getCookie('shop')).length)
            })
        }
    })

})