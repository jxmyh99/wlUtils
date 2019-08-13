/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 09:09:00
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 10:58:39
 * @Description: 
 */
/** 
 * 减法 
 * @param arg1 
 * @param arg2 
 * @returns Number
 */  
function Sub(arg1,arg2){  
    var r1,r2,m,n;  
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
    m=Math.pow(10,Math.max(r1,r2));  
    //last modify by deeka  
    //动态控制精度长度  
    n=(r1>=r2)?r1:r2;  
    return (((arg1*m-arg2*m)/m).toFixed(n))*1;  
}
function accSub(...args){
    const reducer = (accumulator,currentValue) => Sub(accumulator,currentValue)
    return args.reduce(reducer)
}
module.exports = accSub