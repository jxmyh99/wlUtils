/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 13:42:41
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 14:55:42
 * @Description: 数组去重
 */


// function arrayUnique(arr){
//     const result = new Map();
//     return arr.filter(item=>!result.has(item) && result.set(item,1))
// }

function arrayUnique(arr){
    if(!Array.isArray(arr)) return [];
    if('function' != Array.prototype.filter){
       return es5Uniquer(arr)
    }
    return es6Uniquer(arr)

}

function es5Uniquer(arr){
    var result = []
    for(var i = 0,len= arr.length;i<len;i++){
        if(result.indexOf(arr[i])=== -1){
            result.push(arr[i])
        }
    }
    return result;
}
function es6Uniquer(arr){
    return arr.filter((item,index,arr)=>arr.indexOf(item,0) === index)
}

// function uni(arr){
//     var result=[arr[0]]
//     for(var i = 0,len = arr.length;i<len;i++){
//         if(!result.includes(arr[i])) result.push(arr[i])
//     } 
//     return result;
// }


module.exports = arrayUnique;