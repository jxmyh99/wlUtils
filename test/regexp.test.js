/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-12 11:45:58
 * @LastEditors: 明月寒
 * @LastEditTime: 2021-06-13 23:00:47
 * @Description:
 */
describe("regExp API:", function () {
  describe("#isMobile", function () {
    it(`wlutils.isMobile('13412123232') should return true`, function () {
      assert(wlutils.isMobile("13412123232"), true);
    });
    it(`wlutils.isMobile('15412123232') should return true`, function () {
      assert(wlutils.isMobile("15412123232"), true);
    });
    it(`wlutils.isMobile('17312123232') should return true`, function () {
      assert(wlutils.isMobile("17312123232"), true);
    });
    it(`wlutils.isMobile('19912123232') should return true`, function () {
      assert(wlutils.isMobile("19912123232"), true);
    });
    it(`wlutils.isMobile('14912123232') should return true`, function () {
      assert(wlutils.isMobile("14912123232"), true);
    });
    it(`wlutils.isMobile('17312123232') should return true`, function () {
      assert(wlutils.isMobile("17312123232"), true);
    });
    it(`wlutils.isMobile('19112123232') should return true`, function () {
      assert(wlutils.isMobile("19112123232"), true);
    });
    it(`wlutils.isMobile('19312123232') should return true`, function () {
      assert(wlutils.isMobile("19312123232"), true);
    });
    it(`wlutils.isMobile('16612123232') should return true`, function () {
      assert(wlutils.isMobile("16612123232"), true);
    });
    it(`wlutils.isMobile('17112123232') should return true`, function () {
      assert(wlutils.isMobile("17112123232"), true);
    });
    it(`wlutils.isMobile('17512123232') should return true`, function () {
      assert(wlutils.isMobile("17512123232"), true);
    });
    it(`wlutils.isMobile('17212123232') should return true`, function () {
      assert(wlutils.isMobile("17212123232"), true);
    });
    it(`wlutils.isMobile('17402123232') should return true`, function () {
      assert(wlutils.isMobile("17402123232"), true);
    });
    it(`wlutils.isMobile('19812123232') should return true`, function () {
      assert(wlutils.isMobile("19812123232"), true);
    });
    it(`wlutils.isMobile('1') should return false`, function () {
      assert.notEqual(wlutils.isMobile("1"), true);
    });
    const mobileArr = [
      130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
      // 141,
      145, 146, 147, 148, 149, 150, 151, 152, 153, 155, 156, 157, 158, 159, 162,
      165, 166, 167, 169, 170, 171, 172, 173, 175, 176, 177, 178, 179, 180, 181,
      182, 183, 184, 185, 186, 187, 188, 189, 191, 193, 195, 196, 198, 199,
    ];
    mobileArr.map((element) => {
      it(`wlutils.isMobile('${element}12123232') should return true`, function () {
        assert(wlutils.isMobile(element + "12123232"), true);
      });
    });
  });
  describe("#isChina", function () {
    it(`wlutils.isChina('中国') should return true`, function () {
      assert(wlutils.isChina("中国"), true);
    });
    it(`wlutils.isChina('1') should return false`, function () {
      assert.notEqual(wlutils.isChina("1"), true);
    });
  });
  describe("#isEmail", function () {
    it(`wlutils.isEmail('tt.com') should return true`, function () {
      assert.notEqual(wlutils.isEmail("tt.com"), true);
    });
    it(`wlutils.isEmail('133@tt.com') should return false`, function () {
      assert(wlutils.isEmail("133@tt.com"), true);
    });
  });

  describe("#isIDCard", function () {
    it(`wlutils.isIDCard("622224188203234033") should return true `, function () {
      assert(wlutils.isIDCard("622224188203234033"));
    });
    it(`wlutils.isIDCard("zas224188203234033") should return false`, function () {
      assert(!wlutils.isIDCard("leiquan@live.com"));
    });
  });
  describe("#isLicenseNo", function () {
    let JsonData = [
      {
        No: "浙AOp1345",
        Result: "false",
      },
      {
        No: "浙Aop1345",
        Result: "false",
      },
      {
        No: "浙AIp1345",
        Result: "false",
      },
      {
        No: "浙Aip1345",
        Result: "false",
      },
    ];
    it(`wlutils.isLicenseNo("浙a12 345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙a12345"));
    });
    it(`wlutils.isLicenseNo("浙app1345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙ad21345"));
    });
    it(`wlutils.isLicenseNo("浙AOp1345") should return false`, function () {
      assert.notEqual(wlutils.isLicenseNo("浙AOp1345"));
    });
    it(`wlutils.isLicenseNo("浙Aop1345") should return false`, function () {
      assert.notEqual(wlutils.isLicenseNo("浙Aop1345"));
    });
    it(`wlutils.isLicenseNo("浙AIp1345") should return false`, function () {
      assert.notEqual(wlutils.isLicenseNo("浙AIp1345"));
    });
    it(`wlutils.isLicenseNo("浙Aip1345") should return false`, function () {
      assert.notEqual(wlutils.isLicenseNo("浙AIp1345"));
    });

    it(`wlutils.isLicenseNo("浙ad21345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙ad21345"));
    });
    it(`wlutils.isLicenseNo("浙aD21345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙aD21345"));
    });
    it(`wlutils.isLicenseNo("浙af21345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙af21345"));
    });
    it(`wlutils.isLicenseNo("浙aF21345") should return true`, function () {
      assert(wlutils.isLicenseNo("浙aF21345"));
    });
    it(`大车电动车牌wlutils.isLicenseNo("浙a12134d") should return true`, function () {
      assert(wlutils.isLicenseNo("浙a12134d"));
    });
    it(`wlutils.isLicenseNo("军a12344") should return true`, function () {
      assert(!wlutils.isLicenseNo("军a12344"));
    });
  });
  describe("#isVCode", function () {
    it(`wlutils.isVCode("133223") should return true`, function () {
      assert(wlutils.isVCode("133223"));
    });
    it(`wlutils.isVCode("1332231") should return false`, function () {
      assert.notEqual(wlutils.isVCode("1332231"));
    });
    it(`wlutils.isVCode("") should return false`, function () {
      assert(!wlutils.isVCode(""));
    });
  });
});
