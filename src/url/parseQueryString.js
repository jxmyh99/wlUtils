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
  if (url.indexOf('?') === -1) {
    return {};
  }
  var search =
    url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  var query = {};
  for (var i = 0; i < search.length; i++) {
    let pair = search[i].split('=');
    let JsonKey = lowercase ? pair[0].toLocaleLowerCase() : pair[0];
    query[decodeURIComponent(JsonKey)] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

module.exports = parseQueryString;
