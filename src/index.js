/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 10:50:43
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-03-11 13:56:27
 * @Description: webpack打包入口文件
 * @Example: 自动引入子目录下所有js文件
 */
let moduleExports = {
  ver: "1.1.8.1",
};

const r = require.context("./", true, /^\.\/.+\/.+\.js$/);
r.keys().forEach((key) => {
  let attr = key.substring(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
  moduleExports[attr] = r(key);
});

module.exports = moduleExports;
