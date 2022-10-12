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
