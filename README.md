# JXAPI
视频解析脚本学习

# 爱奇艺
~~~
var videoapi="https://jx.parwix.com:4433/player/?url=";
    var api;var videourl;
    function getapi(){
        videourl=window.location.href;
        if(videourl.indexOf('?')!=-1){
            videourl=videourl.slice(0,videourl.indexOf('?')+1);
        }
        api=videoapi+videourl;
    }
    getapi();

document.querySelector("#flashbox").children[0].outerHTML=""
var div = document.createElement("div");
div.setAttribute("x-webkit-airplay","allow");
div.style="cursor: default;width:100% height:100%";
div.setAttribute("_idm_id__","83173377");
div.allow="autoplay; fullscreen; payment";
div.innerHTML='<iframe id="videoiframe" src="'+ api +'" allow="autoplay; fullscreen; payment" autoplay="autoplay" autoload="true" allow="autoplay; fullscreen; payment" style="position: absolute; width: 100%; height: 100%; top:-5px; border: none; "></iframe>';
document.querySelector("#flashbox").appendChild(div);
~~~

~~~
//ul li 列表json 数据
var text = '{ "sites" : [' +
	'{ "name":"PAR解析" , "url":"https://jx.parwix.com:4433/player/?url=" },' +
	'{ "name":"178du解析" , "url":"https://jx.178du.com/jx2.php?url=" },' +
	'{ "name":"yemu解析" , "url":"https://www.yemu.xyz/?url=" },' +
	'{ "name":"gai4解析" , "url":"https://www.gai4.com/?url=" } ]}';
var obj = JSON.parse(text);
//创建ul li 列表
var ul=document.createElement("ul");
ul.id="myul";
ul.style="display:none";
document.body.append(ul);
for(var i=0;i<obj.sites.length;i++){
	var li=document.createElement("li");
	li.title=obj.sites[i].url;
	li.innerText=obj.sites[i].name;
	 ul.append(li);
	 }


~~~
~~~
//油猴脚本跨域
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
                myif.style = "width:100%;height:1500px;";
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
~~~
