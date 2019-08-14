/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 15:02:05
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-14 09:23:47
 * @Description: 
 */
describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual wlutils.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, wlutils.deepClone(person))
        });

        it(`person deepEqual wlutils.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, wlutils.deepClone(person))
        });

        it(`person deepEqual wlutils.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, wlutils.deepClone(date))
        });

        it(`person deepEqual wlutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, wlutils.deepClone(person))
        });

        it(`person === wlutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, wlutils.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`wlutils.isEmptyObject({}) should return true`, function () {
            assert(wlutils.deepClone({}))
        });

        it(`wlutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(wlutils.isEmptyObject({
                one: 1
            }), true)
        });

        it(`wlutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(wlutils.isEmptyObject([]), true)
        });
    });

    describe('#hasKey()',function(){
        let obj = {a:{b:{c:{e:1,d:2}}}};
        it(`wlutils.hasKey(obj,'a.b') should return true`,function(){
            assert(wlutils.hasKey(obj,'a.b'))
        })
        it(`wlutils.hasKey(obj,'d') should return false`,function(){
            assert.notEqual(wlutils.hasKey(obj,'d'),true)
        })
        it(`wlutils.hasKey(obj,'a.b.c.d') should return true`,function(){
            assert(wlutils.hasKey(obj,'a.b.c.d'),true)
        })
        
        it(`wlutils.hasKey(obj,'a.b.c.f') should return false`,function(){
            assert.notEqual(wlutils.hasKey(obj,'a.b.c.f'),true)
        })
    })
})