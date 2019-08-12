/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 10:12:26
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 11:08:31
 * @Description: webkpack.config
 */
const webpack = require("webpack")
const path = require("path")

const pkg = require("../package.json")

const rootPath = path.resolve(__dirname,'../')

const config = {
    mode: "production",
    entry: path.resolve(rootPath,"src" , "index.js"),
    output:{
        filename: `${pkg.name}.min.js`,
        path:path.resolve(rootPath,'dist'),
        library:`${pkg.name}`,
        libraryTarget:"umd"
    },
    module:{
        rules:[{
            test:/\.js$/,
            loader:"babel-loader"
        }]
    }
}
module.exports = config