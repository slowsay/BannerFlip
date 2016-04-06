/**
 * @author Administrator
 */
require.config({
    waitSeconds : 50,
    baseUrl : 'js',
    paths : {
        jquery : 'lib/jquery',
        bannerFlip : 'plugins/BannerFlip',
        css : 'lib/css',
        /*
         * @model page
         */
        base : 'app/base'
    },
    shim : {
        base : ['jquery', 'bannerFlip', 'css!../css/main.css']
    }
});
require(['base'], function(a) {
    //todo
});

