import $ from '../library/jquery.js';
import {
    totalPrice,
    all_num,
    click_input,
    click_goods,
    rightNum
} from './shoppingCartAPI.js'
import {
    setCookie,
    getCookie
} from '../library/cookie.js'



$(async function () {
    try {
        let _id = [];
        let cookie = JSON.parse(getCookie('shop'))
        cookie.forEach(elm => {
            _id.push(elm.id);
        });
        all_num();
        rightNum();
        await $.ajax({
            url: '../../interface/shoppingCart.php',
            type: 'post',
            data: { id: _id.join() },
            dataType: 'json',
            success (res) {
                let temp = '';
                res.forEach((elm, i) => {
                    temp += `
                <div class="_goods">
                <input type="checkbox" data-id="${i + 1}">
                <div class="_goods_container">
                    <img src="${JSON.parse(elm.goods_img)[0].src}" alt="">
                    <div>
                       ${elm.goods_title}
                    </div>
                </div>
                <span class="unitPrice">${Number(elm.goods_price).toFixed(2)}</span>
                <div class="goods_num">
                    <span class="subtract">-</span>
                    <input type="text" value="${cookie[i].num}" name="goods_val">
                    <span class="add">+</span>
                </div>
                <span class="Subtotal">￥${(elm.goods_price * cookie[i].num).toFixed(2)}</span>
                <span class="goods_remove" data-id="${i + 1}">删除</span>
                </div>
                `
                })
                $('.all_goods_body').html(temp);
                // 全选
                $('.all_checked').find('input').on('click', function () {
                    if (this.checked) {
                        $('._goods').find('input[type=checkbox]').prop('checked', true)
                        $('.all_goods_total').find('input').prop('checked', true)
                        $('.Totalprice').text(totalPrice().toFixed(2))
                        rightNum()
                    } else {
                        $('._goods').find('input[type=checkbox]').prop('checked', false)
                        $('.all_goods_total').find('input').prop('checked', false)
                        $('.Totalprice').text('0.00')
                        rightNum()
                    }
                })

                // 商品单选
                $('._goods').find('input[type=checkbox]').on('click', function () {
                    let flag = true;
                    let sum = 0;
                    Array.from($('._goods').find('input[type=checkbox]')).forEach(elm => {
                        if (!elm.checked) {
                            flag = false;
                            return
                        }
                        sum += parseInt($(elm).siblings('.Subtotal').text().slice(1));
                    })
                    $('.Totalprice').text(sum.toFixed(2));
                    if (flag) {
                        rightNum()
                        $('.all_checked').find('input').prop('checked', true)
                        $('.all_goods_total').find('input').prop('checked', true)
                    } else {
                        rightNum()
                        $('.all_checked').find('input').prop('checked', false)
                        $('.all_goods_total').find('input').prop('checked', false)
                    }
                })

                // 商品添加数量
                $('.add').on('click', function () {
                    let val = $(this).siblings('input[name=goods_val]');
                    val.val(+val.val() + 1);
                    $(this).parent().siblings('.Subtotal').text('￥' + (val.val() * parseInt($(this).parent().siblings('.unitPrice').text())).toFixed(2))
                    $('.Totalprice').text(click_goods().toFixed(2))
                    rightNum()
                })

                $('.subtract').on('click', function () {
                    let val = $(this).siblings('input[name=goods_val]');
                    if (val.val() <= 0) {
                        val.val('0')
                    } else {
                        val.val(+val.val() - 1);
                        $(this).parent().siblings('.Subtotal').text('￥' + (val.val() * parseInt($(this).parent().siblings('.unitPrice').text())).toFixed(2))
                        $('.Totalprice').text(click_goods().toFixed(2))
                    }
                    rightNum()
                })

                // 删除
                $('.goods_remove').on('click', function () {
                    let id = $(this).attr('data-id')
                    let flag = confirm('确定删除该商品么');
                    let shop;
                    if (flag) {
                        shop = JSON.parse(getCookie('shop')).filter(elm => {
                            return elm.id != id;
                        })
                        setCookie('shop', JSON.stringify(shop), 24)
                        location.reload()
                    }

                })

                // 全选2
                $('.all_goods_total').find('input').on('click', function () {
                    if (this.checked) {
                        $('._goods').find('input[type=checkbox]').prop('checked', true)
                        $('.all_checked').find('input').prop('checked', true)
                        $('.Totalprice').text(totalPrice().toFixed(2))
                        rightNum()
                    } else {
                        $('._goods').find('input[type=checkbox]').prop('checked', false)
                        $('.all_checked').find('input').prop('checked', false)
                        $('.Totalprice').text('0.00')
                        rightNum()
                    }
                })

                // 删除多个
                $('.del_checked').on('click', function () {
                    let shop;
                    let flag = confirm('确定删除商品么');
                    if (flag) {
                        Array.from($('._goods').find('input[type=checkbox]')).forEach(elm => {
                            let id = $(elm).attr('data-id')
                            if (elm.checked) {
                                shop = JSON.parse(getCookie('shop')).filter(elm1 => {
                                    return elm1.id != id;
                                })
                                setCookie('shop', JSON.stringify(shop), 24)
                            }
                        })
                        location.reload()
                    }
                })


            }
        })


    } catch (error) {
        let temp = `
             <div class="goods_null">
                 您的购物车空空如也噢，还不剁手加点东西
            </div>
                `;

        $('.all_goods_body').html(temp);
    }


})

