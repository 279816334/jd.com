

function totalPrice () {
    let sum = 0;
    Array.from($('.Subtotal')).forEach(elm => {
        sum += Number(elm.textContent.slice(1));
    })
    return sum;
}

function all_num () {
    try {
        $('.all_goods_head_num').text(JSON.parse(getCookie('shop')).length)
    } catch (error) {
        $('.all_goods_head_num').text('0');
    }
}

function click_input () {
    let flag = true;
    Array.from($('._goods').find('input[type=checkbox]')).forEach(elm => {
        if (!elm.checked) flag = false;
        return
    })
    if (flag) {
        $('.all_checked').find('input').prop('checked', true)
        $('.Totalprice').text(totalPrice().toFixed(2))
    } else {
        $('.all_checked').find('input').prop('checked', false)
    }
}

function click_goods () {
    let sum = 0;
    Array.from($('._goods').find('input[type=checkbox]')).forEach(elm => {
        if ($(elm).prop('checked')) {
            $('.Totalprice').text($(this).parent().siblings('.Subtotal').text().slice(1))
            sum += parseInt($(elm).siblings('.Subtotal').text().slice(1));
        }
    })
    return sum;
}

function rightNum () {
    let sum = 0;
    Array.from($('._goods').find('input[type=checkbox]')).forEach(elm => {
        if (elm.checked) {
            sum += parseInt($(elm).parent().find('input[name=goods_val]').val())
        }
    })
    $('.right_num').text(sum)
}


export {

    totalPrice,
    all_num,
    click_input,
    click_goods,
    rightNum
}