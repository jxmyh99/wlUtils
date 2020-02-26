/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-12-13 10:00:54
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-12-13 10:04:30
 * @Description: 
 */
/**
 *判断是否为null
 *
 * @param {*} variable 需要检查的变量
 * @returns 
 */
function isNull(variable){
  return !variable && typeof(variable)!== 'undefined' && variable !== 0
}
module.exports = isNull;