/*!
 * browser.js 0.0.1 - https://github.com/yckart/browser.js
 * Prude browser detection, made since jQuery.browser is deprecated.
 *
 * Based upon https://github.com/jquery/jquery-browser
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/27
 **/
(function($) {
    this.browser = {};

    var uaMatch = (function(ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];

        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    }(navigator.userAgent || ""));

    if(uaMatch.browser) {
        this.browser[uaMatch.browser] = true;
        this.browser.version = uaMatch.version;
    }

    if(this.browser.chrome) this.browser.webkit = true;

    if($) $.browser = this.browser;
    return this;
}(window.jQuery));