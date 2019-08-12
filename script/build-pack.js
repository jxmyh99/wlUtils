/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 10:26:41
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 11:25:32
 * @Description: 压缩包
 */

const path = require("path")
const fs = require("fs")
const ora = require("ora")
const rm = require("rimraf")
const copy = require("copy")
const chalk = require("chalk")
const  webpack = require("webpack")


const config = require("./webpack.conf")
const pkg= require("../package.json")
const rootPath = path.resolve(__dirname,"../")

let building = ora("building....")
building.start()
rm(path.resolve(rootPath,'dist',`${pkg.name}.min.js`),(err,data)=>{
    if(err) throw (err);
    webpack(config,(error,status)=>{
        if(error) throw error
        building.stop();
        process.stdout.write(status.toString({
            colors:true,
            modules:false,
            children:false,
            chunks:false,
            chunkModules:false
        })+'\n\n')
        console.log(chalk.cyan(" Build copmlete.\n"));
    })
})