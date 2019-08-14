<!--
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 12:05:09
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 14:34:05
 * @Description: 
 -->
# 常用工具函数的收集
在前端工作中有一些常用的，使用频率比较高的函数，为了增快开发速度，特此把那些函数封装起来
## :building_construction:  安装使用

1. 直接下载`min`目录下的[wlutils.min.js](https://github.com/jxmyh99/wlUtils/blob/3a02da35c74f176b7532633e531e0462dd924b23/dist/wlutils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="wlutils.min.js"></script>
  <script>
      var OS = wlutils.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev wlutils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const wlutils = require('wlutils')
const OS = wlutils.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('wlutils/<方法名>')
const getOS = require('wlutils/getOS')
const OS = getOS()
```

## 正则模块


* [x] isMobile(str)  手机验证
* [x] isChina(str) 中文验证
* [x] isEmail(str) 电子邮箱 
* [x] isIDCard(str) 身份证
* [x] isLicenseNo(str) 车牌号
* [x] isVCode(str)  验证码(6位纯数字)

```
let mobile = 13212121234;
wlutils.isMobiel(mobile);
//true
wlutils.isChina('中')
//true
wlutils.isEmail('133@tt.com')
//true
wlutils.isIDCard("622224188203234033")
//true
wlutils.isLicenseNo("浙a12345")
//true
wlutils.isVCode("133223")
//true
```

## 设备
#### getOS() 返回字符串
###### 下面是`wlutils.getOS()`返回的系统字符串
`ios,android,windowsPhone,MacOSX,windows,linux`

```
    var os = wlutils.getOS();
    console.log(`当前系统是${ios}`)
```


#### getUA()

```
    var ua = wlutils.getUA();
    ua.qqBrowser //当前环境是否是qq浏览器 返回是Boolear值
```
##### 属性：
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

## cookie
* getCookie(name) 获取cookie

```
wlutils.getCookie('test')
```
* setCookie(name,value,days) 设置cookie

```
wlutils.setCookie('test', 'getTestValue')
```
* removeCookie(name) 删除cookie

```
wlutils.removeCookie('test')
```

## function 事件处理

* throttle(delay,noTrailing,callback,debounceMode) 函数节流
* debounce(delay,atBegin,callback) 函数防抖

## array 数组
* arrayEqual(arr1,arr2) 判断两个数组是否相等
* arrayUnique(arr) 数组去重

## object 对象操作
* deepClone(obj) 深拷贝

```
    var obj = {a:1}
    var obj1 = wlutils.deepClone(obj);
    obj.a = 2; //{a:2}
    obj1 // {a:1}
    
```
* isEmptyObject(obj) 判断对象是否为空

```
 wlutils.isEmptyObject({})  //true
 wlutils.isEmptyObject({a:1}) //false
```

* hasKye(obj,key) 检测对象中是否有key

```
    let obj = {a:{b:{c:{e:1,d:2}}}};
    wlutils.hasKey(obj,'a.b') //true
    wlutils.hasKey(obj,'d') //false
    wlutils.hasKey(obj,'a.b.c') //true
    wlutils.hasKey(obj,'a.b.c.f') //false
```

## random 随机数
* randomNum(min, max) 随机生成指定范围的数据
* randomColor() 随机生成颜色

## dom 元素操作
* getScrollTop() 获取滚动条距离顶部的距离
* setScrollTop(value) 设置滚动条距顶部的距离
* offset(ele) 获取一个元素的距离文档(document)的位置,类似jQ中的offset()
* scrollTo(to,duration) 在`${duration}`时间内，滚动条平滑滚动到`${to}`指定位置
* resetScroll() 解决安卓底部表单聚焦后被档住的问题
* windowResize(keyboardDown, keyboardUp) H5软键盘缩回、弹起回调

```
windowResize(function(){
    // 键盘隐藏
  },function(){
    // 键盘显示
  })
```
* fixedInput(className) 弹层上带表单时失焦回顶

```
 wlutils.fixedInput('.abc') //特定的input表单加上
```

* isScrollBottom(ele) 计算当前滚动条是否到底 ele不传默认为body

```
window.addEventListener('scroll',twlutils.hrottle(300,false,function(){
//如果到底了就会返回true
console.log(isScrollBottom())
    },false))
```
## string 字符串处理相关
* digitUppercase(number) 现金转大写

```
    wlutils.digitUppercase(12.00) 
    //壹拾贰元整
``` 
* insert(oldStr,insertStr,insertIndex) 在特定位置插入特定字符


```
wlutils.insert('浙A12345','-',2) //'浙A-12345'
```

* trim(str,isGlobal) 是否需要全局清除空格 isGlobal默认为false

```
wlutils.trim(' ab ') //"ab"
wlutils.trim(' a b ') //"a b"
wlutils.trim(' a b ',true) //"ab"
```

## time 相关
* formatDate(dateStr) 格式化日期

```
wlutils.formatDate('2019-12-12 12:00:00') 
//2019/12/12 12:00:00
```
* formatPassTime(time) time距现在的已过时间

```
let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
wlutils.formatPassTime(time)
//"1年前"
```
* formatRemainTime(time) 距离time还剩多少时间

```
let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
time = time + oneSecond + oneMinute + oneHour + oneDay
wlutils.formatRemainTime(time)
//"1天 1小时 1分钟 1秒"            
```
* isLeapYear(year) 判断是否是闰年
* isSameDay(day1,day2) 判断两天是否为一天
* timeLeft(start,end) 判断两个时间相差多少时间

```
let startTime = new Date('2019-10-1 10:24:00')
let endTime = new Date('2019-10-24 10:24:00')
wlutils.timeLeft(startTime, endTime)
//{ d: 23, h: 0, m: 0, s: 0 }
```


## url 地址相关
* parseQueryString(url) url参数转对象
* stringfyQueryString(obj) 对象序列化

## calculator 计算相关
* accAdd() 加法运算
* accSub() 减法运算
* accMul() 乘法运算
* accDiv() 除法运算
