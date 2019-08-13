/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 09:08:04
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 11:06:14
 * @Description: 
 */
/** 
 * 加法 
 * @param arg1 
 * @param arg2 
 * @returns {Number} 
 */  
// accAdd(1,2,3,4,5) 1+2+3
// accAdd(0.1,0.2,0.3) 
function add(arg1,arg2) {  
    var r1, r2, m, c; 
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }  
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }  
    c = Math.abs(r1 - r2);  
    m = Math.pow(10, Math.max(r1, r2))  
    if (c > 0) {  
        var cm = Math.pow(10, c);  
        if (r1 > r2) {  
            arg1 = Number(arg1.toString().replace(".", ""));  
            arg2 = Number(arg2.toString().replace(".", "")) * cm;  
        }  
        else {  
            arg1 = Number(arg1.toString().replace(".", "")) * cm;  
            arg2 = Number(arg2.toString().replace(".", ""));  
        }  
    }  
    else {  
        arg1 = Number(arg1.toString().replace(".", ""));  
        arg2 = Number(arg2.toString().replace(".", ""));  
    }  
    return (arg1 + arg2) / m  
}  

function accAdd(...args){
    const reducer = (accumulator,currentValue) => add(accumulator,currentValue)
    return args.reduce(reducer)
}

module.exports = accAdd