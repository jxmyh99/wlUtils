
# wlUtils
一些正则验证，工具函数的收集

###### 正则模块
* [x] 手机验证 isMobile
* [x] 中文验证 isChina
* [x] 电子邮箱 isEmail
* [x] 身份证   isIDCard
* [x] 车牌号   isLicenseNo
* [x] 验证码   isVCode 6位纯数字

###### 设备
###### 获取设备操作系统  getOS 返回字符串
`ios,android,windowsPhone,MacOSX,windows,linux`
###### 通过userAgent判断当前浏览器的内核
* trident 是否是IE内核
* presto 是否是opera内核
* webKit 是否是苹果或谷歌内核
* gecko 火狐内核
* mobile 是否为移动端