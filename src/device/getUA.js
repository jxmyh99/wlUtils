/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 15:28:55
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 17:30:01
 * @Description: 获取浏览器UA信息
 */
/**
 * @description:返回当前浏览器的一些内核判断
 * @param {type} 
 * @return: Boolean
 * 分两块
 * 1.设备相关比如设备的品牌
 * 2.浏览器相关，比如 当在什么浏览器环境
 */
function getUA(){
    var u = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent || '';
    return {
        trident: u.indexOf('Trident') > -1, //IE内核
        sogouBrowser:u.indexOf('sogoumobilebrowser') > -1,//sogou浏览器
        ucBrowser:u.indexOf('UCBrowser') > -1,//uc浏览器
        qqBrowser:u.indexOf('QQ') > -1,//qq浏览器
        baiduBrowser:u.indexOf('baidu') > -1,//百度浏览器
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        webApp: u.indexOf('Safari') >= -1, //是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, //是否微信浏览器 （2015-01-22新增）
        weibo: u.indexOf('Weibo') > -1,//微博打开
        iosSafari:((u.indexOf('iPhone') > -1||u.indexOf('iPad') > -1)&&u.indexOf('Safari') >= -1),//是否是ios系统的safari浏览器
        iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone
        iPad: u.indexOf('iPad') > -1, //是否iPad
    }
}

module.exports = getUA;