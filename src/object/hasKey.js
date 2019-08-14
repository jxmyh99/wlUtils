/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 17:58:43
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 09:44:11
 * @Description: 检测对象中是否有key
 */
var isEmptyObject = require("./isEmptyObject")
function hasKey(obj,key){
    let keyArr = key.split('.')
    let keyObj = obj;

    if(isEmptyObject(obj)){
        return false;
    }
    for (var i in keyArr) {
      keyObj = keyObj[keyArr[i]]
      console.log(keyObj)
        if(!keyObj){
          return false;
        }
    }
    return true;
}

module.exports = hasKey;