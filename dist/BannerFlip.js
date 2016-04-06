/**
 * @author slowsay
 * @description 一款banner翻转插件
 */
define(function(require) {
    /**
     * @description 广告位切换功能
     * @class BannerFlip
     * @see https://github.com/slowsay/BannerFlip
     * @param {string} id DOM id
     * @param {object} data 数据源
     * @param {number} kind 展示类型
     * @param {number} cuti 第cuti张开始
     * @param {number} width 宽
     * @param {number} height 高
     * @param {number} background 背景颜色
     * @param {number} delay 延迟时间
     * @example
     *  var _data = [{
     t : 'test',
     pic : 'http://img1.cache.netease.com/catchpic/F/F6/F6906BFEF5A112982F8F97A08F0C4270.jpg',
     url : ',http://news.163.com/16/0405/19/BJTNC1N50001124J.html'
     *   }];
     * var BannerFlip = require('bannerFlip');
     * var _banner = new BannerFlip('newbox', _data, 1, 0, 298, 173);
     */
    var BannerFlip = function(id, data, kind, cuti, width, height, background, delay) {
        this.id = id || 'bannerflip';
        this.delay = delay || 3000;
        this.width = width || 100;
        this.height = height || 100;
        this.data = data || [];
        this.bgColor = background || '#000';
        this.kind = kind || 1;
        this.setime = 0;
        this.cuti = cuti || 0;
        $('body').append('<div id=' + this.id + '><ul class=list></ul><ul class=bnav></ul><ul class=con></ul></div>');
        $('#' + this.id).css({
            width : this.width,
            height : this.height,
            position : 'absolute'
        });
        $('#' + this.id + ' .bnav').css({
            lineHeight : '25px',
            textAlign : 'center'
        });
        $('#' + this.id + ' .con').css({
            lineHeight : '25px',
            textAlign : 'center'
        });
        switch(this.kind) {
            case 1:
                this.init();
                break;
            case 2:
                this.initTwo();
                break;
        }
        this.render();
        this.addEventListener();
    };
    BannerFlip.prototype.init = function() {
        var _list = $('.list'), _con = $('.con'), _bnav = $('.bnav');
        for (var i in this.data) {
            _list.append('<li><a href=' + this.data[i].url + '><img src=' + this.data[i].pic + ' width=' + this.width + ' height=' + this.height + ' title=' + this.data[i].t + ' /></a></li>');
            _bnav.append('<li></li>');
            _con.append('<a href=' + this.data[i].url + '>' + this.data[i].t + '</a>');
        }
    };
    BannerFlip.prototype.addEventListener = function() {
        var _list = $('.list'), _con = $('.con'), _bnav = $('.bnav'), _this = this;
        _bnav.find('li').on('click', null, function(e) {
            var _id = $(this).index();
            _this.cuti = _id;
            clearTimeout(_this.setime);
            _this.render();
        });
    };
    BannerFlip.prototype.removeEventListener = function() {
        var _list = $('.list'), _con = $('.con'), _bnav = $('.bnav');
        _bnav.off();
    };
    /**
     * @description 第二种展示
     * @method initTwo
     * @memberof BannerFlip
     * @param {object} option 参数
     */
    BannerFlip.prototype.initTwo = function(option) {

    };
    /**
     * @description 第一种渲染
     * @method upate
     * @memberof BannerFlip
     */
    BannerFlip.prototype.update = function() {
        var _div = $('#' + this.id), _list = $('#' + this.id + ' .list'), _con = $('#' + this.id + ' .con'), _bnav = $('#' + this.id + ' .bnav');
        for (var i = 0, j = _list.find('li').length; i < j; i++) {
            _bnav.find('li').eq(i).removeAttr('class');
            if (this.cuti == i)
                _list.find('li').eq(this.cuti).fadeIn(), _con.find('a').eq(this.cuti).fadeIn(), _bnav.find('li').eq(this.cuti).addClass('s');
            else
                _list.find('li').eq(i).hide(), _con.find('a').eq(i).hide();
        }
    };
    /**
     * @description 第二种渲染
     * @method secondupate
     * @memberof BannerFlip
     */
    BannerFlip.prototype.secondUpdate = function() {

    };
    /**
     * @description 渲染
     * @method render
     * @memberof BannerFlip
     */
    BannerFlip.prototype.render = function() {
        var _this = this;
        switch(this.kind) {
            case 1:
                _this.update();
                break;
            case 2:
                _this.secondUpdate();
                break;
        }
        this.setime = setTimeout(function() {
            clearTimeout(_this.setime);
            _this.cuti++;
            if (_this.cuti > _this.data.length - 1)
                _this.cuti = 0;
            _this.render();
        }, this.delay);
    };
    return BannerFlip;
});
