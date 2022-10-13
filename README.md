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
