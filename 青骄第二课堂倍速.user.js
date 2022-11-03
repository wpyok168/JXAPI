// ==UserScript==
// @name         青骄第二课堂倍速
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       福建-兮
// @match        *://www.2-class.com/courses/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var interval1 = setInterval(function() {
        var pc =document.querySelector(".prism-controlbar");
        //alert(pc);
        if(pc!=null)
        {
            if(document.querySelector("#video-player0 > video")!=null)
            //if(document.querySelector("#video-player0 > video").getAttribute("src")!=null)
            {
                clearInterval(interval1);
                //document.querySelector(".prism-play-btn").click();//自动播放
                var bs =document.querySelector(".prism-controlbar-bg");
                var popContent ='<div id="bsslect" style="float: right; margin-right: 105px; margin-top: 10px;"><p>选择播放速率：<select id="selRate">    <option value="0.5">0.5</option>    <option value="1" selected>1.0</option>    <option value="1.25">1.25</option>    <option value="1.5">1.5</option>    <option value="2">2.0</option>  <option value="2.5">2.5</option>   <option value="3">3.0</option></select></p><p></div>';
                //var sc = '<script>document.querySelector("#selRate").onchange=function(){var num=document.querySelector("#selRate").options[document.querySelector("#selRate").selectedIndex].value;alert(num);document.querySelector("#video-player0 > video").playbackRate=num;};</script>';
                bs.innerHTML= bs.innerHTML + popContent ;
                interval2();
            }

        }
    },
    800);

    var interval2 = setInterval(function() {
        var pl =document.querySelector("#video-player0 > video").getAttribute("src");
        //alert(pc);
        var temp;
        if(pl!=null)
        {
            //clearInterval(interval2);
            var num=document.querySelector("#selRate").options[document.querySelector("#selRate").selectedIndex].value;
            //alert(num);
            if(temp!=num){
                document.querySelector("#video-player0 > video").playbackRate=num;
                temp=num;
            }
        }
    },
    2000);

    // Your code here...
})();