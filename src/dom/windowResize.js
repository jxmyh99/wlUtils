/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:03:28
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 11:50:25
 * @Description: 
 */
/**
 * 
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} keyboardDown 当软键盘弹起后，缩回的回调
 * @param {Function} keyboardUp 当软键盘弹起的回调
 */
var getOS = require("../device/getOS")
function windowResize(keyboardDown, keyboardUp) {
	var clientHeight = window.innerHeight;
	keyboardDown = typeof keyboardDown === 'function' ? keyboardDown : function () {}
    keyboardUp = typeof keyboardUp === 'function' ? keyboardUp : function () {}
    

  var isSupported = document.implementation.hasFeature("FocusEvent", "3.0");
  if(isSupported && getOS() === "ios"){
    document.body.addEventListener('focusin',function(){
      keyboardUp();
    })
    document.body.addEventListener('focusout',function(){
      keyboardDown()
    })
  }else{
    window.addEventListener('resize', () => {
      var height = window.innerHeight;
      if (window.orientation == 180 || window.orientation == 0) {
        if (height === clientHeight) {
          keyboardDown();
        }
        if (height < clientHeight) {
          keyboardUp();
        }
      }
    });
  }
}

module.exports = windowResize;


