/*
 * @Author: 明月寒
 * @Github: http://www.33u3.com
 * @Date: 2019-08-14 13:38:16
 * @LastEditors: 明月寒
 * @LastEditTime: 2019-09-02 09:31:17
 * @Description:
 */
describe('Time API:', function() {
	describe('#formatDate()', function() {
		it(`wlutils.formatDate('2019-12-12 12:00:00') === '2019/12/12 12:00:00' should return true`, function() {
			assert(wlutils.formatDate('2019-12-12 12:00:00') === '2019/12/12 12:00:00');
		});

		it(`wlutils.formatDate('2019-12-1 12:00:00') === '2019/12/1 12:00:00' should return true`, function() {
			assert(wlutils.formatDate('2019-12-1 12:00:00') === '2019/12/1 12:00:00');
		});
	});
	describe('#formatPassTime()', function() {
		it(`wlutils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function() {
			let time = new Date().getTime() - 30000;
			assert(wlutils.formatPassTime(time) === '刚刚');
		});

		it(`wlutils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function() {
			let time = new Date().getTime() - 70000;
			assert(wlutils.formatPassTime(time) === '1分钟前');
		});

		it(`wlutils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function() {
			let time = new Date().getTime() - 70000 * 60;
			assert(wlutils.formatPassTime(time) === '1小时前');
		});

		it(`wlutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function() {
			let time = new Date().getTime() - 70000 * 60 * 24;
			assert(wlutils.formatPassTime(time) === '1天前');
		});

		it(`wlutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function() {
			let time = new Date().getTime() - 70000 * 60 * 24 * 30;
			assert(wlutils.formatPassTime(time) === '1个月前');
		});

		it(`wlutils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function() {
			let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12;
			assert(wlutils.formatPassTime(time) === '1年前');
		});

		it(`wlutils.formatPassTime('2019/09/02 00:00:00') === 9小时前`, function() {
			let time = new Date('2019/09/02 00:00:00');
			console.log(wlutils.formatPassTime(time));
			console.log(wlutils.formatPassTime('2019/09/02 00:00:00'));
			// assert(wlutils.formatPassTime('2019/09/02 00:00:00') === '9小时前');
		});
	});

	describe('#formatRemainTime()', function() {
		it(`wlutils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function() {
			let time = new Date().getTime(),
				oneSecond = 1000,
				oneMinute = oneSecond * 60,
				oneHour = oneMinute * 60,
				oneDay = oneHour * 24;
			time = time + oneSecond + oneMinute + oneHour + oneDay;
			console.log(wlutils.formatRemainTime(time));
			assert(wlutils.formatRemainTime(time) === '1天 1小时 1分钟 1秒');
		});
	});

	describe('#isLeapYear()', function() {
		it(`wlutils.isLeapYear(2008) should return true`, function() {
			assert(wlutils.isLeapYear(2008));
		});
		it(`wlutils.isLeapYear(2012) should return true`, function() {
			assert(wlutils.isLeapYear(2012));
		});
		it(`wlutils.isLeapYear(2016) should return true`, function() {
			assert(wlutils.isLeapYear(2016));
		});
		it(`wlutils.isLeapYear(2020) should return true`, function() {
			assert(wlutils.isLeapYear(2020));
		});
		it(`wlutils.isLeapYear(2024) should return true`, function() {
			assert(wlutils.isLeapYear(2024));
		});
		it(`wlutils.isLeapYear(2017) should return false`, function() {
			assert.notEqual(wlutils.isLeapYear(2017), true);
		});
		it(`wlutils.isLeapYear(2019) should return false`, function() {
			assert.notEqual(wlutils.isLeapYear(2019), true);
		});
		it(`wlutils.isLeapYear(2019) should return false`, function() {
			assert.notEqual(wlutils.isLeapYear(2019), true);
		});
	});

	describe('#isSameDay()', function() {
		it(`wlutils.isSameDay(new Date()) should return true`, function() {
			assert(wlutils.isSameDay(new Date()) === true);
		});
		it(`wlutils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function() {
			assert(wlutils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false);
		});
	});

	describe('#timeLeft()', function() {
		it(`wlutils.timeLeft('2019-10-24 10:24:00', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-24 10:24:00');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 });
		});
		it(`wlutils.timeLeft('2019-10-25 10:24:00', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-25 10:24:00');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:24:00', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-1 10:24:00');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 23, h: 0, m: 0, s: 0 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:24:00', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-24 6:24:00');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 4, m: 0, s: 0 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:21:00', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-24 10:21:00');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 3, s: 0 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:23:30', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-24 10:23:30');
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:23:30', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = '2019-10-24 10:23:30';
			let endTime = new Date('2019-10-24 10:24:00');
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:23:30', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = new Date('2019-10-24 10:23:30');
			let endTime = '2019-10-24 10:24:00';
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 });
		});
		it(`wlutils.timeLeft('2019-10-1 10:23:30', '2019-10-24 10:24:00') should return true`, function() {
			let startTime = '2019-10-24 10:23:30';
			let endTime = '2019-10-24 10:24:00';
			assert.deepEqual(wlutils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 });
		});
	});
});
