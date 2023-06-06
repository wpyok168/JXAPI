// ==UserScript==
// @name        VIP视频解析230606
// @namespace    http://tampermonkey.net/
// @version      0.5.3
// @description  try to take over the world!
// @author       福建-兮
// @match        *://www.iqiyi.com/v_*
// @match        *://v.qq.com/*
// @match        *://www.bilibili.com/bangumi/play/*
// @match        *://www.bilibili.com/video/*
// @match        *://www.mgtv.com/*
// @match        *://v.youku.com/*
// @grant        GM.getValue
// @grant        GM.setValue
// @connect      *
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADyUlEQVRYhc2UbWhbVRjHf7dpZzXGBemmU2FtM1uEZssoOOhmXbsXXLPVidqydTiZzQfpGPhlH2T95GKKzDGwijgdTJlbohXUdU5aypbqHDIYKih1rg4VphtoJY1U23L8cM7NufcmWe6tRX3gcF7+z3Oe33nOuRf+R3YIuAAI4DfgA+BupTUAo0oTauycrwaOAuOWdau+B1hyo+TOIEFoi+CZMYFh5GtzaIZhTKjD5NkFQHx5GZERiJ8nVZCvUhB9WQAifkBqGYHY2yt1c95/WCcZ/0Wvm23oEx0D/F6oEocA8WZKB8V6LFVAbmJqofriAM7k1paDMBacNBOXyW7hVYD3BzTRiogaXBkCIKzm5z+Fy2PFblLb0dchYEB0HWSzcm3Hk0r0L41ya+fjEsDf9hCJiT58lQwktXPj/cp5dopYD/j9cvr5+dLJrZYegXePy3FNrVqcvAQdz6ao6tpexr7BjwCo3gDAZ6PSp2E5hOrlOFcN4MhhbwAAty0sIrTvPVaWm6zcJgHOaf3RDtk3t8rebfmtFuuBjW06HoBgOKdrgJr1ALzwnA5uCMsqmKXzUv6d3ZARcLBfXl82C6++pMR7owUAAovgriYbaaQRWtfrTT8+5R7AtOvXYPg0dLTDQBII1EN4WwEAgJVdgD5pTa2+/+/H5YOiKoIbM7+C2jvgkU1m7Cpo67f52QHq5HGtJ93ZLfv0iFoItbgCyFnFIli6GdbEof018C8uAjALLK6DqgjpEXliq6XUp0Sk0xtAw3ZYF4e6zXJu2GUNUKl6dcLciXGUv3qVNwCnCeCWcgvA/i1dNgd1wt0xeYcBA5aH7HDmYzX13TEdnre2pNEO4C+HP2bk+MMX9/iY/vYrzgxfpHWXfJrBe2DZJrj6NWR+lI5VEflytx6U8+rV8MNFrQfD0HoArn8HU9fsa3eu0MmDFZBRyVPxp5l4+xV9I74HouxPn8SLCeDKGExPgWHc2DdYARPTcvxOopvMiTfA9ghHB9n3YLRg8FzNZCqS3A4AMJs+NW8QBrJCty8omjwfYL4gzOQAv/6lksefciYvDGBC9K7daFv70wOAcMyTiSfIpI4Uci0MADBzdsgGcZNHCGvy7Im3isnFAeYDokTy0gA5iJYNniGSz+8oldwdAMDMmWF6m9fmQRhmc/wDUn2dZJPH3GztDgBgZvRsHsQUMO0oR6qvk8njKbfbugcoBFHp0D0m/wfW1ExCCBJCsOsL2W5++LF/IbHVAk05AO7bOtddyku7FLPMuRbfe2t+CvuDl/hmcO77/Mf2N6TgrX4E/h5BAAAAAElFTkSuQmCC
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
    //type:0：腾讯、爱奇艺，1：支持哔哩哔哩
var obj =[
    {"name":"bljiex_1解析","url":"https://vip.bljiex.com/?v="},
    {"name":"bljiex_2解析","url":"https://svip.bljiex.cc/?v="},
    {"name":"bozrc解析","url":"https://jx.bozrc.com:4433/player/?url="},
    {"name":"ccyjjd解析","url":"https://ckmov.ccyjjd.com/ckmov/?url="},
    {"name":"ckmov_1解析","url":"https://www.ckmov.vip/api.php?url="},
    {"name":"ckmov_2解析","url":"https://www.ckmov.com/?url="},
    {"name":"ckplayer解析","url":"https://www.ckplayer.vip/jiexi/?url="},
    {"name":"h8jx解析","url":"https://www.h8jx.com/jiexi.php?url="},
    {"name":"ikukk解析","url":"http://www.ikukk.com/?url="},
    {"name":"im1907解析","url":"https://im1907.top/?jx="},
    {"name":"itiantai解析","url":"https://jm.itiantai.cn/?url="},
    {"name":"iztyy解析","url":"https://jx.iztyy.com/Bei/?url="},
    {"name":"janan解析","url":"https://jiexi.janan.net/jiexi/?url="},
    {"name":"jiexi解析","url":"https://api.jiexi.la/?url="},
    {"name":"jsonplayer解析","url":"https://jx.jsonplayer.com/player/?url="},
    {"name":"m1907_1解析","url":"https://z1.m1907.top/?eps=0&jx="},
    {"name":"m1907_2解析","url":"https://z1.m1907.top/?jx="},
    {"name":"m3u8_1解析","url":"https://jx.m3u8.tv/jiexi/?url="},
    {"name":"m3u8_2解析","url":"https://dmjx.m3u8.tv/?url="},
    {"name":"mmkv解析","url":"https://jx.mmkv.cn/tv.php?url="},
    {"name":"mtosz解析","url":"https://www.mtosz.com/m3u8.php?url="},
    {"name":"nnxv解析","url":"https://jx.nnxv.cn/tv.php?url="},
    {"name":"nxflv解析","url":"https://www.nxflv.com/?url="},
    {"name":"ok_1解析","url":"https://okjx.cc/?url="},
    {"name":"ok_api解析","url":"https://api.okjx.cc:3389/jx.php?url="},
    {"name":"playerjy_1解析","url":"https://jx.playerjy.com/?ads=0&url="},
    {"name":"playerjy_2解析","url":"https://jx.playerjy.com/?url="},
    {"name":"playm3u8解析","url":"https://www.playm3u8.cn/jiexi.php?url="},
    {"name":"ppflv解析","url":"http://jx.ppflv.com/?url="},
    {"name":"qianqi解析","url":"https://api.qianqi.net/vip/?url="},
    {"name":"rdhk解析","url":"https://jx.rdhk.net/?v="},
    {"name":"vercel解析","url":"https://thinkibm.vercel.app/?url="},
    {"name":"wandhi解析","url":"http://tv.wandhi.com/go.html?url="},
    {"name":"we-vip解析","url":"https://jx.we-vip.com/?url="},
    {"name":"yangtu解析","url":"https://jx.yangtu.top/?url="},
    {"name":"yemu解析","url":"https://www.yemu.xyz/?url="},
    {"name":"yh0523解析","url":"https://go.yh0523.cn/y.cy?url="},
    {"name":"yparse解析","url":"https://jx.yparse.com/index.php?url="},
    {"name":"盘古解析","url":"https://www.pangujiexi.cc/jiexi.php?url="},
    {"name":"无名解析","url":"https://jx.m3u8.tv/jiexi/?url="},
    {"name":"虾米解析","url":"https://jx.xmflv.com/?url="},
    {"name":"咸鱼解析","url":"https://jx.aidouer.net/?url="},
    {"name":"智狐解析","url":"https://zhihuweb.com/player.html?url="},
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
width:500px;
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

function jiexi(element,mydivclass,iframestyle){
    //alert(iframestyle);
    //原视频窗口切换成解析视频窗口页面代码
    //element.outerHTML="";
    var div=document.createElement("txpdiv");
    div.id="mydiv";
    if(mydivclass!="")
    {
         div.setAttribute("class",mydivclass);
    }
    else{
        div.style="position:absolute;width:100%;max-width:100%;height:100%;max-height:100%;border:none;outline:none;margin:0;padding:0;background-color:black;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:xx-large;"
    }
    //element.appendChild(div);
    element.parentElement.replaceChild(div,element);
    //原视频窗口切换成解析视频窗口页面代码

    getapi();

    //<iframe src="https://z1.m1907.top?jx=我的地址" width="100%" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    var para=document.createElement("iframe");
    para.id="videoiframe";
    para.src=api;
    if(iframestyle==undefined)
    {
        para.style="position:absolute;width:100%;max-width:100%;height:100%;max-height:100%;border:none;outline:none;margin:0;padding:0;";
    }
    else{
         para.style=iframestyle;
    }

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
    para.allow="autoplay; encrypted-media";
    para.setAttribute("allowfullscreen","true");
    para.setAttribute("allowtransparency","true");
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
                document.querySelectorAll("video").forEach(x=>{if(x.currentTime>0){
                    x.pause();
                    if(x.played.length==1)
                    {
                        clearInterval(tt);
                        jiexi(document.querySelector("#flashbox").firstElementChild,"");jiexi(document.querySelector("#flashbox").firstElementChild,"");
                    }
                };});
            }
            //腾讯
            else if(document.querySelector(".player__container")!=null)
            {
                //document.querySelector(".player__wrapper.container-player").children[0].outerHTML="";
                document.querySelectorAll("video").forEach(x=>{if(x.currentTime>0){
                    x.pause();
                    if(x.played.length==1)
                    {
                        clearInterval(tt);
                        document.querySelector(".player-bottom.player__bottom").outerHTML="";
                        jiexi(document.querySelector(".player__container").firstElementChild,document.querySelector(".player__container").children[0].getAttribute("class"));
                    }
                };});
            }
            //bilibili
            else if(document.querySelector(".bpx-player-video-wrap> video")!=null)
            {
                document.querySelectorAll("video").forEach(x=>{if(x.currentTime>0){
                    x.pause();
                    if(x.played.length==1)
                    {
                        clearInterval(tt);
                        jiexi(document.querySelector(".bpx-player-primary-area").firstElementChild,document.querySelector(".bpx-player-primary-area").children[0].getAttribute("class"));
                    }
                };});
            }
            //芒果TV
            else if(document.querySelector("#mgtv-player-wrap")!=null)
            {
                document.querySelectorAll("video").forEach(x=>{if(x.currentTime>0){
                    x.pause();
                    if(x.played.length==1)
                    {
                        clearInterval(tt);
                        var mgdiv1 = document.createElement("div");
                        mgdiv1.setAttribute("class","video c-player-video");
                        document.querySelector("#mgtv-player-wrap").parentElement.replaceChild(mgdiv1,document.querySelector("#mgtv-player-wrap"));
                        document.querySelector(".m-playwrap").style="height:600px;width:100%";
                        jiexi(document.querySelector(".video.c-player-video"),document.querySelector(".video.c-player-video").getAttribute("class"),"height:100%");
                    }
                };});
            }
            //优酷
            else if(document.querySelector(".video-layer>video")!=null)
            {
                document.querySelectorAll("video").forEach(x=>{if(x.currentTime>0){
                    x.pause();
                    if(x.played.length==1)
                    {
                        clearInterval(tt);
                        var ykc=document.querySelector("#ykPlayer").children;for(var i=1;i<ykc.length;i++){ykc[i].remove();}
                        var ykdiv = document.createElement("div");
                        ykdiv.setAttribute("class","video-layer");
                        document.querySelector(".video-layer").parentElement.replaceChild(ykdiv,document.querySelector(".video-layer"));
                        jiexi(document.querySelector(".video-layer"),document.querySelector(".video-layer").getAttribute("class"));
                    }
                };});
            }
            //else if(document.querySelector("#flashbox")!=null){}
        },500);
    }
    //去广告
    if (location.href.includes('v.qq.com')) {
        var adq=setInterval(()=>{
            if(document.querySelector(".player-side-ads__close")!=null)
            {
                document.querySelector(".player-side-ads__close").click();//去掉腾讯两侧对联广告
                clearInterval(adq);
            }
        },1000);
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