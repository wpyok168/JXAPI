// ==UserScript==
// @name         油猴脚本跨域测试
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?domain=baidu.com
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_xmlhttpRequest
// @grant GM_setClipboard
// @unsafeWindow

// ==/UserScript==

(function() {
    'use strict';
    //alert(GM_getValue("kw"));
if (GM_getValue("kw") == undefined) {
    GM_setValue("kw", "小说");
}
var t = setInterval(function() {
    if (document.querySelector("#kw") != null) {
        document.querySelector("#kw").value = GM_getValue("kw");

        clearInterval(t);
    }
},
500);
xmlCros("https://www.sina.com.cn");
function xmlCros(url) {
    GM_xmlhttpRequest({
        method: "GET",
        url: url,

        onload: function(data) {
            if (/^content-type: text\/xml/m.test(data.responseHeaders)) {
                data.responseXML = new DOMParser().parseFromString(data.responseText, "text/xml");
            } else if (/^content-type: text\/html/m.test(data.responseHeaders)) {
                var myif = document.createElement('iframe');
                myif.id = "myiframe";
                myif.style = "width:100%;heigth:100%;";
                document.body.append(myif);
                myif.contentDocument.open();
                myif.contentDocument.write(data.responseText);
                myif.contentDocument.close();
            }

            //GM_setClipboard(data.responseHeaders, "已复制");
        }

    });
}
    var tt = setInterval(()=>{
        if(document.querySelector("#myiframe").contentDocument.querySelector("#newyear2015TopBlank")!=null)
        {
            alert(document.querySelector("#myiframe").contentDocument.querySelector("#newyear2015TopBlank").outerHTML);
            clearInterval(tt);
        }

    },1000);

    // Your code here...
})();
