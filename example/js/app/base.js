/**
 * @author slowsay
 * @description 翻页功能
 */
define(function(require) {
    /**
     * @method banner切换功能
     */
    var _data = [{
        t : '习近平会见英约克公爵安德鲁王子',
        pic : 'http://img1.cache.netease.com/catchpic/F/F6/F6906BFEF5A112982F8F97A08F0C4270.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }, {
        t : '淳安开展2016年世界气象日宣传活动',
        pic : 'http://img1.cache.netease.com/catchpic/5/5E/5E1B78E921B6E0F49F3CA926009FF0C9.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }, {
        t : '解放军报报社大楼正被拆掉 标识已被卸下',
        pic : 'http://img1.cache.netease.com/catchpic/F/F6/F6906BFEF5A112982F8F97A08F0C4270.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }, {
        t : '习近平会见英约克公爵安德鲁王子',
        pic : 'http://img1.cache.netease.com/catchpic/F/F6/F6906BFEF5A112982F8F97A08F0C4270.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }, {
        t : '淳安开展2016年世界气象日宣传活动',
        pic : 'http://img1.cache.netease.com/catchpic/5/5E/5E1B78E921B6E0F49F3CA926009FF0C9.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }, {
        t : '解放军报报社大楼正被拆掉 标识已被卸下',
        pic : 'http://img1.cache.netease.com/catchpic/F/F6/F6906BFEF5A112982F8F97A08F0C4270.jpg',
        url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
    }];
    var BannerFlip = require('bannerFlip');
    var _banner = new BannerFlip('newbox', _data, 1, 0, 298, 173);
});
