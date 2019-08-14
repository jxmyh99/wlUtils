/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 14:56:37
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 14:56:37
 * @Description: 
 */
/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj))
        return false
    return !Object.keys(obj).length
}

module.exports = isEmptyObject