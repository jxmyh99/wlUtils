/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 15:14:47
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-12 15:17:40
 * @Description: 
 */
describe('#device API',function(){
    describe('#getOS()', function () {
        it(`wlutils.getOS() should return "windows"`, function () {
            console.log(`OS:${wlutils.getOS()}`)
            assert(wlutils.getOS() === 'windows' || wlutils.getOS() === 'MacOSX' || wlutils.getOS() === 'linux')
        });
    });
})