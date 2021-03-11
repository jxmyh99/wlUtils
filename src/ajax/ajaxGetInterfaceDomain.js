/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2021-03-11 10:19:23
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-03-11 11:14:27
 * @Description:
 */

let getCookie = require("../cookie/getCookie");
let setCookie = require("../cookie/setCookie");
let parseQueryString = require("../url/parseQueryString");
let ajaxGetServerEnv = require("./ajaxGetServerEnv");
let isNull = require("../object/isNull");

/**
 * 根据url上apihost参数来返回不同壮态的接口环境
 * @param {String} domain 使用的接口接口的domain
 * @returns {String}
 */

function ajaxGetInterfaceDomain(domain = "auto") {
  const APICOOKIENAME = "wlWebAjaxInterfaceDomain";
  const strUrl = parseQueryString(window.location.href, true);
  const env = ajaxGetServerEnv();
  const host = window.location.hostname.includes("localhost")
    ? 0
    : window.location.hostname.toLocaleLowerCase().split(".")[0];
  let currentInterfaceServerNO = "";
  var currentInterfaceServer = "";
  // 判断是不是使用ip访问
  if (isNaN(host * 1)) {
    // 如果是open或者auto域名的话
    if (domain.includes("auto") || domain.includes("open")) {
      currentInterfaceServerNO = "";
    } else if (typeof strUrl.apihost == "undefined") {
      currentInterfaceServerNO = isNull(getCookie(APICOOKIENAME))
        ? ""
        : getCookie(APICOOKIENAME);
    } else {
      setCookie(APICOOKIENAME, strUrl.apihost, 100000);
      currentInterfaceServerNO = strUrl.apihost <= 1 ? "" : strUrl.apihost;
    }

    if (env == "local") {
      // 本地使用localapp.chediandian.com访问
      currentInterfaceServer = `https://test${
        currentInterfaceServerNO + domain
      }.chediandian.com`;
    } else {
      currentInterfaceServer = `https://${
        env == "online" ? domain : env + currentInterfaceServerNO + domain
      }.chediandian.com`;
    }
  } else {
    currentInterfaceServer = "http://10.0.0.225:3000";
  }
  return currentInterfaceServer;
}

module.exports = ajaxGetInterfaceDomain;
