/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 11:10:48
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-03-11 14:36:01
 * @Description:
 */
/**
 *
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object}
 */
function parseQueryString(url, lowercase = false, isGlobal = false) {
  url = !url ? window.location.href : url;
  if (isGlobal) {
    url = url.toLocaleLowerCase();
  }
  if (url.indexOf("?") === -1) {
    return {};
  }
  var search = url.replace(/#/g, "").substr(url.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  search = search.split("&");
  var query = {};
  for (var i = 0; i < search.length; i++) {
    let pair = search[i].indexOf("=");
    if (pair > 0) {
      let JsonKey = lowercase
        ? search[i].substring(0, pair).toLocaleLowerCase()
        : search[i].substring(0, pair);
      query[decodeURIComponent(JsonKey)] = decodeURIComponent(
        search[i].substr(pair + 1) || ""
      );
    }
  }
  return query;
}

module.exports = parseQueryString;
