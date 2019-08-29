/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:13:46
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-29 15:50:40
 * @Description: 
 * 2019-08-29 修复类绑定事件上的问题
 */
var getScrollTop = require('./getScrollTop');
var setScrollTop = require('./setScrollTop');
function fixedInput(className){
    let dom = document.querySelectorAll(className)
    if(dom.length){
        for(var i = 0;i<dom.length;i++){
            dom[i].addEventListener('blur',scrollTop)
        }
    }else{
        dom.addEventListener('blur',scrollTop)
    }
    
}
function scrollTop(){
    setTimeout(()=>{
        var scrollHeight = getScrollTop;
        setScrollTop(0,Math.max(scrollHeight-1,0))
    },100)
}
module.exports = fixedInput