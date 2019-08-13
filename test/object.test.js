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
})