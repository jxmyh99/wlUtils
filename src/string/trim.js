/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 11:25:53
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 13:40:26
 * @Description: 是否清除所有空格
 */
function trim(str, isGlobal=false){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (isGlobal) {
        result = result.replace(/\s/g, "");
    }
    return result;
}

module.exports = trim;