/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2020-07-24 09:43:16
 * @Description: 身份证简单验证
 */
module.exports = function isIDCard(str) {
  return /(^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/.test(
    str.replace(/\s/g, '')
  );
};
