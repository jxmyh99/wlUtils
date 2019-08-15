/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 14:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-15 09:22:58
 * @Description: 车牌号验证
 */
module.exports = function isLicenseNo(str){
    return  /^[京,津,沪,渝,冀,豫,云,辽,黑,湘,皖,鲁,新,苏,浙,赣,鄂,桂,甘,晋,蒙,陕,吉,闽,粤,贵,青,藏,川,宁,琼,台]{1}([a-zA-Z]{1})([D,d,F,f,0-9]{0,1})[a-zA-Z0-9]{4,5}$/gm.test(str)
}