require('file-loader?name=[name].[ext]!./favicon.ico')

require('bootstrap/dist/css/bootstrap.css')
require('animate.css/animate.css')

require('./style/iconfont.css')
require('./scss/main.scss')

require('jquery')
require('bootstrap')
require('wowjs')

// 封装百度统计埋点方法
window.installAnalytics = function () {
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement('script');
        // 判断当前域名是测试网还是现网
        if (window.location.host.indexOf('alpha') === -1) {
            hm.src = '//hm.baidu.com/hm.js?70fd7de5d5d3c9fe153258281c8e8c3e'
        } else {
            hm.src = '//hm.baidu.com/hm.js?cdf46b1888db7c5b72377c15299f3e32'
        }
        console.log(hm.src)
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(hm, firstScript);
    })();
}
