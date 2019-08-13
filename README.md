<!--
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 12:05:09
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 12:05:09
 * @Description: 
 -->
# utils
### 正则模块
* [x] isMobile(str)  手机验证
* [x] isChina(str) 中文验证
* [x] isEmail(str) 电子邮箱 
* [x] isIDCard(str) 身份证
* [x] isLicenseNo(str) 车牌号
* [x] isVCode(str)  验证码(6位纯数字)

### 设备
###### getOS() 返回字符串
`ios,android,windowsPhone,MacOSX,windows,linux`
###### getUA()下面的属性
* trident 是否是IE内核
* trident IE内核
* sogouBrowser sogou浏览器
* ucBrowser uc浏览器
* qqBrowser qq浏览器
* baiduBrowser 百度浏览器
* presto opera内核
* webKit 苹果、谷歌内核
* gecko 火狐内核
* mobile 是否为移动终端
* weixin 微信浏览器
* weibo 新浪微博打开
* iosSafari 手机系统的safari浏览器
* iPhone 是否为iPhone
* iPad 是否iPad

### cookie
* getCookie(name) 获取cookie
* setCookie(name,value,days) 设置cookie
* removeCookie(name) 删除cookie

### function 事件处理
* insert(oldStr,insertStr,insertIndex) 在特定位置插入特定字符
* trim(str,isGlobal) 是否需要全局清除空格 isGlobal默认为false
* throttle(delay,noTrailing,callback,debounceMode) 函数节流
* debounce(delay,atBegin,callback) 函数防抖

### array 数组
* arrayEqual(arr1,arr2) 判断两个数组是否相等
* arrayUnique(arr) 数组去重

### object 对象操作
* deepClone(obj) 深拷贝
* isEmptyObject(obj) 判断对象是否为空

### random 随机数
* randomNum(min, max) 随机生成指定范围的数据
* randomColor() 随机生成颜色

### dom 元素操作
* getScrollTop() 获取滚动条距离顶部的距离
* setScrollTop(value) 设置滚动条距顶部的距离
* offset(ele) 获取一个元素的距离文档(document)的位置,类似jQ中的offset()
* scrollTo(to,duration) 在`${duration}`时间内，滚动条平滑滚动到`${to}`指定位置
* windowResize(downCb, upCb) H5软键盘缩回、弹起回调
* fixedInput(className) 弹层上带表单时失焦回顶
* isScrollBottom(ele) 计算当前滚动条是否到底 ele不传默认为body

###### 例子：
```
window.addEventListener('scroll',twlutils.hrottle(300,false,function(){
console.log(isScrollBottom())
    },false))
```

### url 地址相关
* parseQueryString(url) url参数转对象
* stringfyQueryString(obj) 对象序列化

### calculator 计算相关
* accAdd() 加法运算
* accSub() 减法运算
* accMul() 乘法运算
* accDiv() 除法运算
