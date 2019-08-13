/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:13:46
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 15:22:09
 * @Description: 
 */
var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
function fixedInput(className){
    let dom = document.querySelectorAll(className)
    dom.addEventListener('blur',scrollTop)
}
function scrollTop(){
    setTimeout(()=>{
        var scrollHeight = getScrollTop;
        setScrollTop(0,Math.max(scrollHeight-1,0))
    },100)
}
module.exports = fixedInput