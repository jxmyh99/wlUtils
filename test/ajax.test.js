/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2021-03-11 11:27:27
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-03-11 13:37:08
 * @Description:
 */
describe("#ajax Api", () => {
  describe("#ajaxGetInterfaceDomain test", () => {
    before(() => {
      // window.location.href =
      // "https://testopen.chediandian.com/wash/ent-list/index?ApiKey=a9505b93eb78f266e25752aed2d77267&ApiST=1589256648&ApiSign=33181f8a55c6c2e1ccf9cd477b1e9226";
    });
    it(`wlutils.ajaxGetInterfaceDomain('app') should return https://testapp.chediandian.com`, () => {
      assert(
        wlutils.ajaxGetInterfaceDomain("app") ==
          "https://testapp.chediandian.com"
      );
    });
  });
  // describe("#ajaxGetInterfaceDomain test2", () => {
  //   before(() => {
  //     window.location.href =
  //       "https://testopen.chediandian.com/wash/ent-list/index?ApiKey=a9505b93eb78f266e25752aed2d77267&ApiST=1589256648&ApiSign=33181f8a55c6c2e1ccf9cd477b1e9226&apihost=2";
  //   });
  //   it(`wlutils.ajaxGetInterfaceDomain('app') should return https://test2app.chediandian.com`, () => {
  //     assert(
  //       wlutils.ajaxGetInterfaceDomain("app") ==
  //         "https://test2app.chediandian.com"
  //     );
  //   });
  // });
  // describe("#ajaxGetInterfaceDomain test2", () => {
  //   before(() => {
  //     window.location.href =
  //       "https://testopen.chediandian.com/wash/ent-list/index?ApiKey=a9505b93eb78f266e25752aed2d77267&ApiST=1589256648&ApiSign=33181f8a55c6c2e1ccf9cd477b1e9226";
  //   });
  //   it(`wlutils.ajaxGetInterfaceDomain('app') 内页 should return https://test2app.chediandian.com`, () => {
  //     assert(
  //       wlutils.ajaxGetInterfaceDomain("app") ==
  //         "https://test2app.chediandian.com"
  //     );
  //   });
  // });
  // describe("#ajaxGetInterfaceDomain test3", () => {
  //   before(() => {
  //     window.location.href =
  //       "https://testopen.chediandian.com/wash/ent-list/index?ApiKey=a9505b93eb78f266e25752aed2d77267&ApiST=1589256648&ApiSign=33181f8a55c6c2e1ccf9cd477b1e9226&apihost=3";
  //   });
  //   it(`wlutils.ajaxGetInterfaceDomain('app') should return https://test3app.chediandian.com`, () => {
  //     assert(
  //       wlutils.ajaxGetInterfaceDomain("app") ==
  //         "https://test3app.chediandian.com"
  //     );
  //   });
  // });
  // describe("#ajaxGetSeverEnv", () => {});
});
