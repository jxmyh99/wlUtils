/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 08:29:42
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 11:05:43
 * @Description: 
 */
/** 
 * 乘法 
 * @param arg1 
 * @param arg2 
 * @returns {Number} 
 */  
/** 
 * 除法 
 * @param arg1 
 * @param arg2 
 * @returns {Number} 
 */  
function Div(arg1, arg2) {  
    var t1 = 0, t2 = 0, r1, r2;  
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }  
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }  
    // with (Math) {  
        r1 = Number(arg1.toString().replace(".", ""))  
        r2 = Number(arg2.toString().replace(".", ""))  
        return (r1 / r2) * Math.pow(10, t2 - t1);  
    // }  
}
function accDiv(...args){
    const reducer = (accumulator,currentValue) => Div(accumulator,currentValue)
    return args.reduce(reducer)
}
module.exports = accDiv