/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 11:51:50
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 13:34:54
 * @Description: 
 */
/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 */
var formatDate = require("./formatDate")
function formatPassTime(startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}
module.exports = formatPassTime