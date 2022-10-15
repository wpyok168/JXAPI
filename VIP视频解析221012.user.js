// ==UserScript==
// @name        VIP视频解析221012
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *://www.iqiyi.com/v_*
// @match        *://v.qq.com/*
// @grant        GM.getValue
// @grant        GM.setValue
// @connect      *
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//创建按钮图标
var mydiv=document.createElement("div");
mydiv.title="点击展开解析接口";
mydiv.id="jxbhttps";
mydiv.style='top: 119px; left: 25px; font-size: 15px; width: 35px; height: 35px; line-height: 35px; background-size: 100% 100%; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADyUlEQVRYhc2UbWhbVRjHf7dpZzXGBemmU2FtM1uEZssoOOhmXbsXXLPVidqydTiZzQfpGPhlH2T95GKKzDGwijgdTJlbohXUdU5aypbqHDIYKih1rg4VphtoJY1U23L8cM7NufcmWe6tRX3gcF7+z3Oe33nOuRf+R3YIuAAI4DfgA+BupTUAo0oTauycrwaOAuOWdau+B1hyo+TOIEFoi+CZMYFh5GtzaIZhTKjD5NkFQHx5GZERiJ8nVZCvUhB9WQAifkBqGYHY2yt1c95/WCcZ/0Wvm23oEx0D/F6oEocA8WZKB8V6LFVAbmJqofriAM7k1paDMBacNBOXyW7hVYD3BzTRiogaXBkCIKzm5z+Fy2PFblLb0dchYEB0HWSzcm3Hk0r0L41ya+fjEsDf9hCJiT58lQwktXPj/cp5dopYD/j9cvr5+dLJrZYegXePy3FNrVqcvAQdz6ao6tpexr7BjwCo3gDAZ6PSp2E5hOrlOFcN4MhhbwAAty0sIrTvPVaWm6zcJgHOaf3RDtk3t8rebfmtFuuBjW06HoBgOKdrgJr1ALzwnA5uCMsqmKXzUv6d3ZARcLBfXl82C6++pMR7owUAAovgriYbaaQRWtfrTT8+5R7AtOvXYPg0dLTDQBII1EN4WwEAgJVdgD5pTa2+/+/H5YOiKoIbM7+C2jvgkU1m7Cpo67f52QHq5HGtJ93ZLfv0iFoItbgCyFnFIli6GdbEof018C8uAjALLK6DqgjpEXliq6XUp0Sk0xtAw3ZYF4e6zXJu2GUNUKl6dcLciXGUv3qVNwCnCeCWcgvA/i1dNgd1wt0xeYcBA5aH7HDmYzX13TEdnre2pNEO4C+HP2bk+MMX9/iY/vYrzgxfpHWXfJrBe2DZJrj6NWR+lI5VEflytx6U8+rV8MNFrQfD0HoArn8HU9fsa3eu0MmDFZBRyVPxp5l4+xV9I74HouxPn8SLCeDKGExPgWHc2DdYARPTcvxOopvMiTfA9ghHB9n3YLRg8FzNZCqS3A4AMJs+NW8QBrJCty8omjwfYL4gzOQAv/6lksefciYvDGBC9K7daFv70wOAcMyTiSfIpI4Uci0MADBzdsgGcZNHCGvy7Im3isnFAeYDokTy0gA5iJYNniGSz+8oldwdAMDMmWF6m9fmQRhmc/wDUn2dZJPH3GztDgBgZvRsHsQUMO0oR6qvk8njKbfbugcoBFHp0D0m/wfW1ExCCBJCsOsL2W5++LF/IbHVAk05AO7bOtddyku7FLPMuRbfe2t+CvuDl/hmcO77/Mf2N6TgrX4E/h5BAAAAAElFTkSuQmCC"); text-align: center; background-color: transparent; overflow: hidden; user-select: none; position: absolute; z-index: 963540817; bottom: 280px; border-radius: 10px; zoom: 0.6 !important; transform: rotateZ(0deg);';
document.body.append(mydiv);
//为按钮图标创建点击脚本
var jiexiscript= document.createElement("script");
jiexiscript.type="text/javascript";
document.head.append(jiexiscript);
jiexiscript.innerHTML=(function(){/*
document.querySelector("#jxbhttps").onclick = function() {
    //alert(document.querySelector("#myul").style.display);
    var jiexi_ul=document.querySelector("#myul");
    if (jiexi_ul.style.display == "none") {
        var top = document.querySelector("#jxbhttps").offsetTop;
        var left = document.querySelector("#jxbhttps").offsetLeft + document.querySelector("#jxbhttps").offsetWidth + 3;
        jiexi_ul.style = "display:black; position:fixed;top: 90px;left:50px;";
    } else if (jiexi_ul.style.display == "black" || jiexi_ul.style.display == "") {
        jiexi_ul.style = "display:none";
    }
    document.querySelector("#myul").onmouseleave=function(){document.querySelector("#myul").style = "display:none";};
};
*/}).toString().split('\n').slice(1, -1).join('\n');

//ul li 列表json 数据
    var obj =[
	{ "name":"178du解析" , "url":"https://jx.178du.com/jx2.php?url=" },
	{ "name":"PAR解析" , "url":"https://jx.parwix.com:4433/player/?url=" },
	{ "name":"yemu解析" , "url":"https://www.yemu.xyz/?url=" },
	{ "name":"盖世解析" , "url":"https://www.gai4.com/?url=" },

        {"name":"爱豆","url":"https://jx.aidouer.net/?url="},
        {"name":"RDHK","url":"https://jx.rdhk.net/?v="},
        {"name":"人人迷","url":"https://jx.blbo.cc:4433/?url="},
        {"name":"思古3","url":"https://jsap.attakids.com/?url="},
        {"name":"听乐","url":"https://jx.dj6u.com/?url="},

        {"name": "综合/B站", "url": "https://jx.bozrc.com:4433/player/?url="},
        {"name": "虾米", "url": "https://jx.xmflv.com/?url="},
        {"name": "OK", "url": "https://api.okjx.cc:3389/jx.php?url="},
        {"name": "猪蹄", "url": "https://jx.iztyy.com/Bei/?url="},
        {"name": "yparse","url": "https://jx.yparse.com/index.php?url="},
        {"name": "MAO","url": "https://www.mtosz.com/m3u8.php?url="},
        {"name": "M3U8TV","url": "https://jx.m3u8.tv/jiexi/?url="},
        {"name": "夜幕", "url": "https://www.yemu.xyz/?url="},
        {"name": "BL","url": "https://svip.bljiex.cc/?v="},
        {"name": "七彩","url": "https://www.xymav.com/?url="},
        {"name": "铭人云","url": "https://parse.123mingren.com/?url="},
        {"name": "4kdv","url": "https://jx.4kdv.com/?url="},

        {"name": "qianqi","url": "https://api.qianqi.net/vip/?url="},
        {"name": "laobandq","url": "https://vip.laobandq.com/jiexi.php?url="},
        {"name": "playm3u8","url": "https://www.playm3u8.cn/jiexi.php?url="},
        {"name": "无名小站","url": "https://www.administratorw.com/video.php?url="},
        {"name": "CK","url": "https://www.ckplayer.vip/jiexi/?url="},
        {"name": "m1907", "url": "https://z1.m1907.top/?jx="},
        {"name":"纯净/B站","url":"https://im1907.top/?jx="},
	{"name":"OK解析","url":"https://okjx.cc/?url="},
	{"name":"七哥","url":"https://jx.mmkv.cn/tv.php?url="},
	{"name":"迪奥","url":"https://123.1dior.cn/?url="},
	{"name":"ckmov","url":"https://www.ckmov.vip/api.php?url="},
	{"name":"playerjy/B站","url":"https://jx.playerjy.com/?url="},
	{"name":"ccyjjd","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
	{"name":"诺诺","url":"https://www.ckmov.com/?url="},
	{"name":"H8","url":"https://www.h8jx.com/jiexi.php?url="},
	{"name":"BL","url":"https://vip.bljiex.com/?v="},
	{"name":"解析la","url":"https://api.jiexi.la/?url="},
	{"name":"MUTV","url":"https://jiexi.janan.net/jiexi/?url="},
	{"name":"盘古","url":"https://www.pangujiexi.cc/jiexi.php?url="},
	{"name":"0523","url":"https://go.yh0523.cn/y.cy?url="},
	{"name":"17云","url":"https://www.1717yun.com/jx/ty.php?url="},
	{"name":"8090","url":"https://www.8090g.cn/?url="},
	{"name":"诺讯","url":"https://www.nxflv.com/?url="},
	{"name":"180","url":"https://jx.000180.top/jx/?url="},
	{"name":"52damu","url":"https://jx.52damu.com/?url="},
        {"name":"admin","url":"https://www.administratorw.com/admin.php?url="},
        {"name":"vercel","url":"https://thinkibm.vercel.app/?url="},
        {"name":"5gseo","url":"https://sb.5gseo.net/?url="},
        {"name":"973973","url":"https://jx.973973.xyz/?url="},
        {"name":"lecurl","url":"https://lecurl.cn/?url="},

]
//创建ul li 列表
var ul=document.createElement("ul");
ul.id="myul";
ul.style="display:none";
document.body.append(ul);
for(var i=0;i<obj.length;i++){
	var li=document.createElement("li");
	li.title=obj[i].url;
	li.innerText=obj[i].name;
	 ul.append(li);
	 }
//为ul li 添加CSS样式
var style=document.createElement("style");
style.type="text/css";
document.head.append(style);
style.innerHTML=(function () { /*
#myul{
width:250px;
position:fixed;
z-index:963540817
}
#myul li{
color:white;
text-decoration:none;
width:105px;
height:30px;
background:#555;
margin-top:5px;
margin-left:0px;
margin-right:10px;
line-height:30px;
text-align:center;
font-family:"微软雅黑";
font-size:14px;
border:1px solid black;
list-style:none;padding:0;
float:left;
}
#myul li:hover{background:#cc0066;}
*/}).toString().split('\n').slice(1, -1).join('\n');
//为ul li 添加点击事件脚本
var script= document.createElement("script");
script.type="text/javascript";
document.head.append(script);
script.innerHTML=(function(){/*
var ul = document.querySelector("#myul");
　　ul.onclick = function (e) {
　　e = e || window.event; //这一行及下一行是为兼容IE8及以下版本
　　var target = e.target || e.srcElement;
　　if (target.tagName.toLowerCase() === "li") {
　　　　var li = this.querySelectorAll("li");
　　　　index = Array.prototype.indexOf.call(li, target);
　　　　//alert(target.innerHTML + index + "\n" + target.title);
        localStorage.setItem("jiexiurl",target.title);

        var videoapi='https://jx.178du.com/jx2.php?url=';
        var api;var videourl;
        function getapi(){
           if(localStorage.getItem("jiexiurl")!=null){
                videoapi=localStorage.getItem("jiexiurl");
                var lis= document.querySelector("#myul").children;
                for(var i=0;  i<lis.length; i++){
	                if(lis[i].getAttribute("title").indexOf(videoapi)!=-1){lis[i].style="background:#000777"}
                    else{lis[i].removeAttribute("style")}
                }
            };
           videourl=window.location.href;
           if(videourl.indexOf('?')!=-1){
            videourl=videourl.slice(0,videourl.indexOf('?'));
           }
          api=videoapi+videourl;
    }
    getapi();
        document.querySelector("#videoiframe").setAttribute("src",api);

　　}
};
*/}).toString().split('\n').slice(1, -1).join('\n');

    //=================================================================================
    //解析接口
    var videoapi='https://jx.parwix.com:4433/player/?url=';
    var api;var videourl;
    function getapi(){
        if(localStorage.getItem("jiexiurl")!=null){
            videoapi=localStorage.getItem("jiexiurl");
            var lis= document.querySelector("#myul").children;
                for(var i=0; i<lis.length; i++){
	                if(lis[i].getAttribute("title").indexOf(videoapi)!=-1){lis[i].style="background:#000777"}
                    else{lis[i].removeAttribute("style")}
                }
        };
        videourl=window.location.href;
        if(videourl.indexOf('?')!=-1){
            videourl=videourl.slice(0,videourl.indexOf('?'));
        }
        api=videoapi+videourl;
    }
    getapi();

function jiexi(element){

    //原视频窗口切换成解析视频窗口页面代码
    //element.outerHTML="";
    var div=document.createElement("txpdiv");
    div.id="mydiv";
    div.style="position:absolute;width:100%;max-width:100%;height:100%;max-height:100%;border:none;outline:none;margin:0;padding:0;background-color:black;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:xx-large;"
    element.appendChild(div);
    //原视频窗口切换成解析视频窗口页面代码

    getapi();

    var para=document.createElement("iframe");
    para.id="videoiframe";
    para.src=api;
    para.style="position:absolute;width:100%;max-width:100%;height:100%;max-height:100%;border:none;outline:none;margin:0;padding:0;";
    para.marginwidth="0";
    para.marginheight="0";
    para.width="100%";
    para.height="100%";
    para.loading="lazy";
    para.allowtransparency="true";
    para.frameborder="0";
    para.scrolling="no";
    para.security="restricted";
    //para.sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts";
    para.allowfullscreen="allowfullscreen";
    para.mozallowfullscreen="mozallowfullscreen";
    para.msallowfullscreen="msallowfullscreen";
    para.oallowfullscreen="oallowfullscreen";
    para.webkitallowfullscreen="webkitallowfullscreen"
    para.setAttribute("autoplay","autoplay");
    para.setAttribute("muted","false");
    para.setAttribute("autoload","true");
    //para.allow="autoplay; fullscreen; payment";
    para.allow="autoplay; fullscreen; payment";
    para.onload=function(){
        qhvideo();
        try {
            window.name = "filmFirstPlay";

        } catch (e) { }
    };
    //var para=document.createElement("div");
    //para.innerHTML='<iframe id="videoiframe" src="https://jx.renrenmi.cc/?url=' +window.location.href.slice(0,window.location.href.indexOf('?'))+'" marginwidth="0" marginheight="0" width="100%" height="100%" style="width:100%;max-width:100%;height:100%;max-height:100%;border:none;outline:none;margin:0;padding:0;position:absolute;"></iframe>';
    document.querySelector("#mydiv").appendChild(para);

    clearInterval(tm);
    //closeVIPdiv();
}
    function qhvideo() {
        setInterval(() => {
            var videourl=window.location.href;
            if(videourl.indexOf('?')!=-1){
                videourl=videourl.slice(0,videourl.indexOf('?'));
            }
            if(document.querySelector("#videoiframe").src.indexOf(videourl)==-1){
                //jiexi();

                if(document.querySelector("body > div.wrapper.mod_vip_popup > a")!=null){
                    document.querySelector("body > div.wrapper.mod_vip_popup > a").click();
                    jiexi();
                }
                else{window.location.reload();}
            }
        },500);
    }

    function closeVIPdiv() {
        var tt = setInterval(() => {
            //爱奇艺
            if(document.querySelector("#flashbox")!=null){
                //alert(document.querySelector("#flashbox").outerHTML);
                //debugger;
                document.querySelector("#flashbox").children[0].outerHTML="";
                jiexi(document.querySelector("#flashbox"));
                clearInterval(tt);
            }
            //腾讯
            else if(document.querySelector(".container-main__left")!=null)
            {
                document.querySelector(".player__wrapper.container-player").children[0].outerHTML=""
                jiexi(document.querySelector(".player__wrapper.container-player"));
                clearInterval(tt);
            }
            //else if(document.querySelector("#flashbox")!=null){}
        },500);
    }
    var tm;
    function jiexiQQ(){
          tm = setInterval(() => {
                jiexi(document.querySelector("#flashbox"));
            },500)
        }
    //jiexiQQ();
    closeVIPdiv();
    // Your code here...
})();