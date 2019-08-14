/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 11:52:28
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 13:48:08
 * @Description: 统一格式化传入的日期 因为ios只支持2010/10/11格式，但有些时候会传入2010-12-12这种格式的数据
 */
/**
 * @desc   格式化${date}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
function formatDate(date){
    return date.replace(/\.(\w)*/g, '').replace(/-/gi, '/')
}

module.exports = formatDate
