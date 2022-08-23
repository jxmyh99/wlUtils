/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-06-13 22:37:12
 * @Description: 车牌号验证
 */
module.exports = function isLicenseNo(str) {
  return /^[京,津,沪,渝,冀,豫,云,辽,黑,湘,皖,鲁,新,苏,浙,赣,鄂,桂,甘,晋,蒙,陕,吉,闽,粤,贵,青,藏,川,宁,琼,台]{1}([a-zA-Z]{1})([^OoIi]{0,1})[a-zA-Z0-9]{5}$/gm.test(
    str.replace(/\s/g, "")
  );
};
