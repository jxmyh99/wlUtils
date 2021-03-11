/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2021-03-11 10:21:39
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-03-11 11:27:01
 * @Description:
 */
/**
 * @desc 获取当前页面所在的服务壮态
 * @returns {String}
 */
var ajaxGetServerEnv = function () {
  var host = window.location.hostname.includes("localhost")
    ? "0"
    : window.location.hostname.toLocaleLowerCase().split(".")[0];
  var currentOnline = host.replace(/test|beta|local/g, "");
  var currentBeta = "beta";
  var currentTest = "test";
  var currentLocal = "local";
  var returnEvn = currentLocal;
  // 如果是使用域名访问的，非域名访问的就列为本地
  if (isNaN(host * 1)) {
    if (host.indexOf(currentOnline) == 0) {
      returnEvn = "online";
    } else if (host.indexOf(currentBeta) == 0) {
      returnEvn = "beta";
    } else if (host.indexOf(currentTest) == 0) {
      returnEvn = "test";
    } else if (host.indexOf(currentLocal) == 0) {
      returnEvn = "local";
    }
  } else {
    returnEvn = "test";
  }
  return returnEvn;
};

module.exports = ajaxGetServerEnv;
