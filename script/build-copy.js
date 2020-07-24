/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 10:26:46
 * @LastEditors: 明月寒
 * @LastEditTime: 2020-07-24 10:54:14
 * @Description: 复制文件
 */
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');

const rootPath = path.resolve(__dirname, '../');

let copying = ora('Loading copying....');
copying.start();

rm('*.js', (err, data) => {
  if (err) throw err;
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'));
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, rootPath + '/dis/', (error, files) => {
      console.log(error);
      if (error) throw error;
      if (index === folderList.length - 1) {
        console.log(' Copy complete.\n');
        copying.stop();
      }
    });
  });
});
