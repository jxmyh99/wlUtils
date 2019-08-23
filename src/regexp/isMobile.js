/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-23 17:45:24
 * @Description: 手机号验证
 * 
 */
module.exports = function isMobile(str){
    return /^(0|86|17951)?(13[0-9]|15[0-9]|17[1-9]|18[0-9]|14[579]|19[1|9|3|8]|166)[0-9]{8}$/.test(str)
}