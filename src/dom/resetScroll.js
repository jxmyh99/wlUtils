/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 11:46:28
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 11:47:28
 * @Description: 解决安卓机型上底部的表单被弹出键盘挡住的问题
 */
function resetScroll(){
    if (/Android/gi.test(navigator.userAgent)) {
        window.addEventListener('resize', function() {
          if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            window.setTimeout(function() {
              //关键是这里的scrollIntoViewIfNeeded方法    
              document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
          }
        })
    }
}
module.exports = resetScroll