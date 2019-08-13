/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 08:33:32
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-08-13 11:07:57
 * @Description: 
 */
describe('#calculator api',function(){
    describe('#accAdd',()=>{
        it('accAdd(0.1,0.2) should return 0.3',()=>{
            assert(wlutils.accAdd(0.1,0.2) === 0.3)
        })

        it('accAdd(0,0.2) should return 0.2',()=>{
            assert(wlutils.accAdd(0,0.2) === 0.2)
        })
        it('accAdd(0.1,0.2,0.3) should return 0.6',()=>{
            assert(wlutils.accAdd(0.1,0.2,0.3) === 0.6)
        })
    })

    describe('#accMul',()=>{
        it('accMul(0.1,0.2,0.2) should return 0.004',()=>{
            console.log(wlutils.accMul(0.1,0.2,0.2))
            assert(wlutils.accMul(0.1,0.2,0.2) === 0.004)
        })

        it('accMul(0,0.2) should return 0',()=>{
            assert(wlutils.accMul(0,0.2) === 0)
        })
    })

    describe('#accSub',()=>{
        it('accSub(0.2,0.1,0.1) should return 0',()=>{
            console.log(wlutils.accSub(0.2,0.1,0.1))
            assert(wlutils.accSub(0.2,0.1,0.1) === 0)
        })

        it('accSub(0,0.2) should return -0.2',()=>{
            assert(wlutils.accSub(0,0.2) === -0.2)
        })
        it('accSub(0.01,0.1) should return -0.09',()=>{
            assert(wlutils.accSub(0.01,0.1) === -0.09)
        })
    })
    describe('#accDiv',()=>{
        it('accDiv(0.2,0.1,0.1) should return 20',()=>{
            console.log(wlutils.accDiv(0.2,0.1,0.1))
            assert(wlutils.accDiv(0.2,0.1,0.1) === 20)
        })

        it('accDiv(0,0.2) should return 0',()=>{
            assert(wlutils.accDiv(0,0.2) === 0)
        })
        it('accDiv(0.01,0.1) 不等于 0.09',()=>{
            assert.notEqual(wlutils.accDiv(0.01,0.1) === 0.09)
        })
    })
})