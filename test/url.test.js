/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-13 13:58:03
 * @LastEditors: 明月寒
 * @LastEditTime: 2020-07-24 09:59:14
 * @Description:
 */
describe('Url API:', function () {
  describe('#parseQueryString()', function () {
    it(`wlutils.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
      let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10';
      assert.deepEqual(wlutils.parseQueryString(url), {
        wd: '百度',
        rsv_spt: '10',
      });
    });
    it(`wlutils.parseQueryString('www.baidu.com?a=123&b=%26') deepEqual '{
            a: '123',
            b: '&'
        }' should return true`, function () {
      let url = 'www.baidu.com?a=123&b=%26';
      assert.deepEqual(wlutils.parseQueryString(url), {
        a: '123',
        b: '&',
      });
    });
    it(`wlutils.parseQueryString('www.baidu.com?A=123&B=Dd',true) deepEqual '{
            a: '123',
            b: 'Dd'
        }' should return true`, function () {
      let url = 'www.baidu.com?A=123&B=Dd';
      assert.deepEqual(wlutils.parseQueryString(url, true), {
        a: '123',
        b: 'Dd',
      });
    });
    it(`wlutils.parseQueryString('www.baidu.com?A=123&B=Dd',true,true) deepEqual '{
            a: '123',
            b: 'dd'
        }' should return true`, function () {
      let url = 'www.baidu.com?A=123&B=Dd';
      assert.deepEqual(wlutils.parseQueryString(url, true, true), {
        a: '123',
        b: 'dd',
      });
    });
    it(`wlutils.parseQueryString('') deepEqual '{}' should return true`, function () {
      let url = '';
      assert.deepEqual(wlutils.parseQueryString(url), {});
    });
  });

  describe('#stringfyQueryString()', function () {
    it(`wlutils.stringfyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
      let param = {
        wd: '百度',
        rsv_spt: '10',
      };
      assert(
        wlutils.stringfyQueryString(param) ===
          'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
      );
    });
  });
});
