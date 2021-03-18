
let regPws1 = /[a-zA-Z0-9]{8,16}/;
let regPws2 = /[A-Z][a-z]\d/;
let regPws3 = / /;

function testPwd (reg) {
    return function (password) {
        return reg.test(password);
    }
}

export default {
    testPwd: testPwd(regPws),
}
