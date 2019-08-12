/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 15:14:20
 * @Description: 中文验证
 */
/**
 * 
 * @desc 验证中文
 * @augments str {String}
 * @return {Boolean} 
 */
module.exports = function isChina(str){
    return /[\u4e00-\u9fa5]/gm.test(str)
}