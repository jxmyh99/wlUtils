/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-23 17:22:14
 * @Description: 手机号验证
 */
module.exports = function isMobile(str){
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57]|199)[0-9]{8}$/.test(str)
}