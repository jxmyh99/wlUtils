/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 13:58:18
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 14:07:10
 * @Description: 
 */
describe('#Array API',function(){
    describe('#Equal()', function () {
        it(`wlutils.arrayEqual([1,2,3],[1,2,3]) should return true`, function () {
            assert(wlutils.arrayEqual([1,2,3],[1,2,3]))
        });
        it(`wlutils.arrayEqual([1,2,3],[1,2,4]) should return true`, function () {
            assert(!wlutils.arrayEqual([1,2,3],[1,2,4]))
        });
    });

    describe('#Unique()', function () {
        it(`wlutils.arrayUnique([1,2,3,1,'1']) should return true`, function () {
            console.log(wlutils.arrayUnique([1,2,3,1,'1']));
            assert(wlutils.arrayEqual(wlutils.arrayUnique([1,2,3,1,'1']),[1, 2, 3, '1']))
        });
        it(`wlutils.arrayUnique([1,2,3,1,2,4]) should return true`, function () {
            console.log(wlutils.arrayUnique([1,2,3,1,2,4]));
            assert(wlutils.arrayEqual(wlutils.arrayUnique([1,2,3,1,2,4]),[1, 2, 3, 4]))
        });
    });
})