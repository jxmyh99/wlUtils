/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 13:49:23
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-15 09:29:39
 * @Description: 
 */
describe('#string API',function(){
    describe('#digitUppercase',function(){
        it(`wlutils.digitUppercase(12.00) === '壹拾贰元整' should retun true`,function(){
            console.log(wlutils.ver)
            assert(wlutils.digitUppercase(12.00) === '壹拾贰元整')
        })
        it(`wlutils.digitUppercase(9999999999) === '玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整' should return true`, function () {
            assert(wlutils.digitUppercase(9999999999) === "玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整")
        });

        it(`wlutils.digitUppercase(0) === '零元整' should return true`, function () {
            assert(wlutils.digitUppercase(0) === "零元整")
        });

        it(`wlutils.digitUppercase(-235423545) === '欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整' should return true`, function () {
            assert(wlutils.digitUppercase(-235423545) === "欠贰亿叁仟伍佰肆拾贰万叁仟伍佰肆拾伍元整")
        });
    })

    describe('#insert',()=>{
        it(`insert('浙A12345','-',2) return 浙A-12345`,()=>{
            console.log(wlutils.insert('浙A12345','-',2))
            assert(wlutils.insert('浙A12345','-',2) === '浙A-12345')
        })
    })
})