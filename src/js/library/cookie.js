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
    return key ? obj[key] : obj;
}


export {
    setCookie,
    getCookie
}