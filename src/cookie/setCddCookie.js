/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2020-12-30 17:39:10
 * @LastEditors: 明月寒
 * @LastEditTime: 2020-12-30 17:43:37
 * @Description:
 */
/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCddCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie =
    name + "=" + value + ";domain=.chediandian.com;path=/;expires=" + date;
}

module.exports = setCddCookie;
