/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:35:26
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-09-02 09:01:16
 * @Description:
 */
var getScrollTop = require('./getScrollTop');
var getWindowHeight = require('./getWindowHeight');

function isScrollBottom(ele) {
	var scrollTop = 0;
	var threshold = 20;
	var winHeight = getWindowHeight();
	var eleChildrenHeight = 0;
	if (!ele || ele === 'body') {
		scrollTop = getScrollTop();
		eleChildrenHeight = document.body.clientHeight;
	} else {
		let el = document.querySelector(ele);
		scrollTop = el.scrollTop;
		// 拿到下面的第一元素的下标
		var index = Object.keys(el.childNodes).find((item, index) => {
			return el.childNodes[item].nodeType == 1;
		});
		// 获取每个元素的总高度
		eleChildrenHeight = el.childNodes[index].clientHeight;
	}

	return scrollTop + winHeight + threshold > eleChildrenHeight;
}
module.exports = isScrollBottom;
