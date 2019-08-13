/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:01:42
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 15:01:54
 * @Description: 
 */
describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(wlutils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(wlutils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= wlutils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = wlutils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})