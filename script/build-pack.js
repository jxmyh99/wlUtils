/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 10:26:41
 * @LastEditors: 明月寒
 * @LastEditTime: 2020-07-24 10:56:47
 * @Description: 压缩包
 */

const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');
const webpack = require('webpack');

const config = require('./webpack.conf');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');
const cleandir = require('clean-dir');
let building = ora('building....');
building.start();
rm(path.resolve(rootPath, 'dist', `${pkg.name}.min.js`), (err, data) => {
  if (err) throw err;
  webpack(config, (error, status) => {
    if (error) throw error;
    building.stop();
    process.stdout.write(
      status.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n'
    );
    cleandir(rootPath + '/dis', (err) => {
      console.error(err);
    });
    console.log(chalk.cyan(' Build copmlete.\n'));
  });
});
