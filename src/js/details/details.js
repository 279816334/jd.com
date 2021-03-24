import $ from '../library/jquery.js';
import { setCookie, getCookie } from '../library/cookie.js';
import { Enlarge } from './Enlarge.js';

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
            let list_li = '';
            new Enlarge('#_details .left');
            JSON.parse(res1.goods_img)[0].src.forEach((elm, i) => {
                if (i % 2 != 0) list_li += `<li><img src="${elm}"></img>`;
            })
            $('#left_img').prop('src', JSON.parse(res1.goods_img)[0].src[0])
            $('.enlarge').css('background-image', 'url(' + JSON.parse(res1.goods_img)[0].src[0] + ')');
            $('.sku-name').text(res1.goods_title);
            $('._price').text(res1.goods_price);
            $('.list').children().html(list_li).children().on('mouseover', function () {
                let url = $(this).children().prop('src').slice(0, -6).concat('.jpg')
                $(this).css('border', '1px solid #c81623').siblings().css('border', '1px solid transparent');
                $('#left_img').prop('src', url);
                $('.enlarge').css('background-image', 'url(' + url + ')');
            });
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
                if (!getCookie('uname')) {
                    location.href = './login.html'
                    return
                }
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