webskype 自动拨打电话脚本

~~~~~~~~
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

//异步函数 等待 xmlCros执行完成后继续往下执行lego函数
async function Run(url,_data) {
    await xmlCros("http://cid.cngoogle.cf:8899/getcid/?iids=","727694511367451409112002706078034229665380495949478100566471760");
    debugger
}
    
function lego(){
        alert("rest")
 }

function xmlCros(url,_data) {
   return new Promise((res)=>{
        GM_xmlhttpRequest({
            url: url+_data,
            method:"GET",
            headers: {
                "Content-Type":'text/plain; charset="utf-8"',
            },
            onload: function(outdata) {
                if (/^content-type: text\/xml/m.test(outdata.responseHeaders)) {
                    //alert(outdata.responseText);
                    outdata.responseXML = new DOMParser().parseFromString(outdata.responseText, "text/xml");
                } else if (/^content-type: text\/html/m.test(outdata.responseHeaders)) {
                    alert(outdata.responseText);
                    //异步后接着执行 lego()函数
                    lego();
                }
            }
        });
    });
}
Run();
   // alert(result);
    // Your code here...
})();
~~~~~~~~
