/**
 * @author Administrator
 */
require.config({
    waitSeconds : 50,
    baseUrl : 'js',
    paths : {
        jquery : 'lib/jquery',
        BannerFlip : 'lib/BannerFlip',
        css : 'lib/css',
        /*
         * @model page
         */
        base : 'app/base'
    },
    shim : {
        base : ['jquery', 'BannerFlip', 'css!../css/main.css']
    }
});
require(['base'], function(a) {
    //todo
});

