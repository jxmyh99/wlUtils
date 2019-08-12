/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 14:48:03
 * @Description: 长度为6位的纯数字验证码
 */
module.exports = function isVCode(str){
    return  /[0-9]{6}/.test(str)
}