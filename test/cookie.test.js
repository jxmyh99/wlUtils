/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 10:00:07
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 10:00:17
 * @Description: 
 */
describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            wlutils.setCookie('test', 'getTestValue')
        })
        it(`wlutils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(wlutils.getCookie('test') === 'getTestValue')
        })
        it(`wlutils.getCookie('empty', '') should return true`, function () {
            assert(wlutils.getCookie('empty') === '')
        })
        after(function () {
            wlutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            wlutils.setCookie('test', 'removeTestValue')
        })
        it(`wlutils.removeCookie('test') should return false`, function () {
            wlutils.removeCookie('test')
            assert.notEqual(wlutils.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`wlutils.getCookie('test', 'setCookie') should return true`, function () {
            wlutils.setCookie('test', 'setCookie')
            assert(wlutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            wlutils.removeCookie('test')
        })
    })
})