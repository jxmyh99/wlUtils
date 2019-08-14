/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 11:14:34
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 11:36:58
 * @Description: 
 */


/**
 * @description: 在特定位置插入特定字符
 * @param {str} 原字符 string
 * @param {insertStr} 拼接的字符 string
 * @param {insertIndex} 需要插入的特定位置 number
 * @return: 
 */
function insert(str, insertStr, insertIndex){
    var newStr = '';
    if(insertIndex >= str.length) return newStr= newStr+insertStr
    var before = str.substring(0, insertIndex),
        after = str.substring(insertIndex, str.length);
    newStr = before + "" + insertStr + "" + after;
    return newStr;
}

module.exports = insert;