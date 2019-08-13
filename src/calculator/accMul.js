/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 09:02:04
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 11:05:58
 * @Description: 
 */
/** 
 * 乘法 
 * @param arg1 
 * @param arg2 
 * @returns {Number} 
 */  
function Mul(arg1, arg2) {  
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();  
    try { m += s1.split(".")[1].length } catch (e) { }  
    try { m += s2.split(".")[1].length } catch (e) { }  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)  
} 
function accMul(...args){
    const reducer = (accumulator,currentValue) => Mul(accumulator,currentValue)
    return args.reduce(reducer)
}
module.exports = accMul;