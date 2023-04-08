// ==UserScript==
// @name         自动登录微软
// @namespace    https://setup.office.com/
// @version      1.2
// @description  微软自动登录或skype自动拨号取CID
// @author       福建-兮
// @match        *://setup.office.com/*
// @match        *://login.live.com/*
// @match        *://web.skype.com/*
// @require      https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=login.live.com
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
var href = window.location.href;
if(href.indexOf("login.live.com")!=-1){

var acount = "mywebskey01@outlook.com";
var pwd = "my1webskey01";
var btnSignin = document.getElementById("btnSignin");
if (btnSignin != null) {
    btnSignin.click();
}

geti0116();
function geti0116() {
    var interval1 = setInterval(function() {
        var i0116 = document.getElementById("i0116");
        var databind = i0116.getAttribute("data-bind");
        if (databind.indexOf("ariaDescribedBy") != -1) {
            clearInterval(interval1);
            //alert("interval1");
            i0116.value = acount;
            i0116.blur();
            var idSIButton9 = document.getElementById("idSIButton9");
            idSIButton9.click();

        }
    }, 800);
};

geti0118();
function geti0118() {
    var interval2 = setInterval(function() {
        var i0118 = document.getElementById("i0118");
        var databind = i0118.getAttribute("data-bind");
        if (databind.indexOf("ariaDescribedBy") != -1) {
            clearInterval(interval2);
            //alert("interval2");
            i0118.value = pwd;
            i0118.blur();
            var idSIButton9 = document.getElementById("idSIButton9");
            idSIButton9.click();

        }
    },800);
};

loginkeep();
function loginkeep() {
    var interval3 = setInterval(function() {
        var kl = document.getElementById("KmsiDescription");
        if (kl != null) {
            clearInterval(interval3);
            //alert("interval3");
            var idSIButton9 = document.getElementById("idSIButton9");
            idSIButton9.click();
        }
    },800);
}

//===========
};


//web.skype.com
if(href=="https://web.skype.com/"){
//=======================

var telphone="+118662631098";//+448000188354 //telphone=="+118662631098" //telphone="+611800642008" // +118662637308;
var iid=null;
var f1=true; var f2=true; var f3=true; var f4=true; var f5=true; var f6=false; var f7=false; var f8=false;var f9=false;
var flag1=true;var flag2=true;var flag3=true;var flag4=true;var flag5=true;var flag6=true;var flag7=true;var flag8=true;var flag9=true; var flag10=false;var flag2_1=true;var flag6_1=false
inputiid();
function inputiid(){
    var iniid = prompt("请输入安装ID(注意安装ID位数，否则无法正常获取)：", "安装ID");

    if (iniid == "安装ID") {
        setfalse();
        return
    } else if (iniid == null) {
        setfalse();
        return
    }

    try{
        //iniid= iniid.replace(/\s*/g,"").replace(/-/g,"");
        var tiid=iniid.match(/\d/g);
        for(var i=0;i<tiid.length;i++) {
            cid+=tiid[i];
        };
        if(tiid.length==63){
            var iidt=iniid.match(/[0-9]{7}/g);
        }
        else if(tiid.length==54){
            iidt=iniid.match(/[0-9]{6}/g);
        }
        else {
            alert("获取iid失败！！！");
            inputiid();
            return;
        }
        iid =iidt[0]+"#"+iidt[1]+"#"+iidt[2]+"#"+iidt[3]+"#"+iidt[4]+"#"+iidt[5]+"#"+iidt[6]+"#"+iidt[7]+"#"+iidt[8]+"#";
    //debugger
        async function Run() {
            await xmlCros("http://cid.cngoogle.cf:8899/getcid/?iids=",iid.replace(/#/g,""));
        }
        Run();

    }catch(error){
        alert("获取iid失败！！！");
        inputiid();
        return;
    }
}




//alert(iid);

// var iid="330512311875727788090139496334835149954645445802270599047875924";
//468095188436105980015579375254738813945736399813462042064351441
//var iid="008114871564060192205835678070730342048185557771188293";
//475316091467818845121899432104506630135374833773255097631755683
//7173593 8491458 0796510 8465875 7904046 9091983 3071532 5809192 3994963



//=======================
function lego(res){
    if(res.indexOf("NeverObtained")==-1){
        //debugger
        f9=true;
        var interval1 = setInterval(function() {
            document.querySelectorAll("button").forEach(ev=>{
                if(ev.getAttribute("aria-label")=="结束通话"&&f9){
                    f9=false;
                    clearInterval(interval1);
                    reclll(ev,"结束通话");
                    ev.click();
                }
                if(ev.getAttribute("aria-label")=="关闭"){
                    ev.click();
                }
            });
        })
        GM_setClipboard(res.replace("</br>","\r\n"));
        setTimeout(()=>{
            document.querySelectorAll("button").forEach(ev=>{
                if(ev.getAttribute("aria-label")=="关闭"){
                    ev.click();
                }
            });
            alert(res.replace("</br>","\r\n"));
        },2000);

        return;
    }
//====================

var intervalw = setInterval(function() {
    document.querySelectorAll("button").forEach(ev=>{
        if(ev.getAttribute("aria-label")=="音频通话"){
            reclll(ev,"音频通话");
            f6=true;
        }
        if(ev.getAttribute("aria-label")=="结束通话"){
            reclll(ev,"结束通话");
            f7=true;
        }
    });

    if(iid==null){return;};
    if(f1){
        //拨号盘
        clickbt('.css-1dbjc4n.r-1awozwy.r-14lw9ot.r-1dzdj1l.r-1yadl64.r-1777fci.r-1yvhtrz>button');
    }
    if(f2){
        //911继续
        kill911click();
    }
    if(f3){
        //拨号电话
        inputtxt();
    }
    if(f4){
        //翻译设置--按钮点击
        fy();
    }
    if(f5){
        //翻译设置-语言设置
        fyset();
    }
    getcid();
    if(f8){
        //你对这次通话的质量有何评价?
           document.querySelectorAll("div").forEach(ev=>{if(ev.getAttribute("aria-label")!=null){if (ev.getAttribute("aria-label").indexOf("你对这次通话的质量有何评价")!=-1) {
    document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="取消"){ev.click();f8=false;}});}}});
    }

},200);




}

//=====================


var interval = setInterval(function() {
    document.querySelectorAll("button").forEach(ev=>{
        if(ev.getAttribute("aria-label")=="音频通话"){
            reclll(ev,"音频通话");
            f6=true;
        }
        if(ev.getAttribute("aria-label")=="结束通话"){
            reclll(ev,"结束通话");
            f7=true;
        }
    });
})


//clickbt("div.noFocusOutline > div:nth-child(1) > div.css-1dbjc4n.r-13awgt0 > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(2) > div > button");
function clickbt(btstr) {
    //var bt = document.querySelector('.css-1dbjc4n.r-1awozwy.r-14lw9ot.r-1dzdj1l.r-1yadl64.r-1777fci.r-1yvhtrz>button');
    var bt = document.querySelector(btstr);
    if (bt != null) {
        f1=false;
        bt.click();
        inputtxt();
    }
};

function kill911click() {
    document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="继续"){
        //alert(ev.getAttribute("title"));
        //f2=false;
        ev.click();
    }});
};


function inputtxt() {
    //var input = $(".inputGradient>div>input");
    //var input = document.querySelectorAll(".inputGradient")[1].childNodes[0].children[0];
    var input = document.querySelectorAll(".inputGradient").length;
    if (input >1) {
        //clearInterval(interval5);
        f3=false;
        inputmsg(document.querySelectorAll(".inputGradient")[1].childNodes[0].children[0],telphone);//+448000188354
        setTimeout(()=>{
            document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="呼叫。"){
                //alert(ev.getAttribute("title"));
                ev.click();
            }});
        },3000);
        noaudioclick();
    }
};

function inputmsg(element, txt){
        var ev = new Event("change",{bubbles:true,cancelable:false});
        element.setAttribute("value",txt);
        element.dispatchEvent(ev);
};


function noaudioclick() {
    var interval6 = setInterval(function() {
        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="继续但不启用音频或视频"){
            //alert(ev.getAttribute("title"));
            ev.click();
        }});},
   1000);
};


function fy() {
	var fy = document.querySelector("div[data-text-as-pseudo-element='翻译此调用']");
	    if (fy != null) {
	    	//clearInterval(interval7);
            f4=false;
	    	fy.click();
	   }
};


function fyset() {
	var fytxt =document.querySelector("div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(11) > div:nth-child(1) > div:nth-child(1)");
        if(fytxt!=null){
            if(fytxt.outerText=="英语(美国) - 英语(美国)"){f5=false;}
            else{
                var fy = document.querySelector("button[aria-label='翻译设置']");
                if (fy != null) {
                    f5=false;
                    document.querySelector("button[aria-label='翻译设置']").click();
                    document.querySelectorAll(".css-1dbjc4n.r-1yf6mjq.r-1867qdf.r-1yadl64.r-13awgt0.r-18u37iz.r-xd6kpl.r-f727ji.r-j2kj52.r-tskmnb")[0].click();
                    document.querySelector("button[aria-label='英语(美国)']").click();
                    document.querySelectorAll(".css-1dbjc4n.r-1yf6mjq.r-1867qdf.r-1yadl64.r-13awgt0.r-18u37iz.r-xd6kpl.r-f727ji.r-j2kj52.r-tskmnb")[1].click();
                    document.querySelector("button[aria-label='英语(美国)']").click();
                    document.querySelector("button[aria-label='完成']").click();
                }
            }
        }
    else{
        var fybts=document.querySelectorAll(".css-1dbjc4n.r-1yf6mjq.r-1867qdf.r-1yadl64.r-13awgt0.r-18u37iz.r-xd6kpl.r-f727ji.r-j2kj52.r-tskmnb");
        if(fybts.length>0){
            f5=false;
            document.querySelectorAll(".css-1dbjc4n.r-1yf6mjq.r-1867qdf.r-1yadl64.r-13awgt0.r-18u37iz.r-xd6kpl.r-f727ji.r-j2kj52.r-tskmnb")[0].click();
            document.querySelector("button[aria-label='英语(美国)']").click();
            document.querySelectorAll(".css-1dbjc4n.r-1yf6mjq.r-1867qdf.r-1yadl64.r-13awgt0.r-18u37iz.r-xd6kpl.r-f727ji.r-j2kj52.r-tskmnb")[1].click();
            document.querySelector("button[aria-label='英语(美国)']").click();
            document.querySelector("button[aria-label='完成']").click();
        }
    }
};

//获取CID
function getcid(){
	var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
	if(tq.length>0){
		var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
		if(content.length>0){
			var fy = content[content.length-1];
			//alert(fy.children[0].children[0].getAttribute("data-text-as-pseudo-element"));
			var fycontent=fy.children[0].children[0].getAttribute("data-text-as-pseudo-element");
			getyzm(fy);//验证码 澳大利亚无验证码 ，英国有验证码但已被封
            if(fycontent.indexOf("Sorry, that didn't match. Let's try again")!=-1){flag1=true;getyzm(fy);}
            //That still didn't match. Enter the following number on your phones touch tone pad.
            if(fycontent.indexOf("That still didn't match. Enter the following number on your phones touch tone pad")!=-1){flag1=true;getyzm(fy);}

			selecttxt("Welcome to Microsoft product activation");//英国
            //To activate Windows, Press one. To activate office for Mac, Press 2. For other office products or for PC Games, Press 3.
            selecttxt("To activate Windows");//澳大利亚

            //selecttxt("If you're trying to activate Windows 10 or Windows 11, Press one, otherwise press 2");
            //If you are at your computer with the activation screen Open, press 1    ----121
            //Sorry, that wasn't one of the options. If you are at your computer with the activation wizard open, press one. Otherwise press 2.     ----31
            //selecttxt("If you are at your computer with the activation wizard open, press one. Otherwise press 2");
            //I didn't get that. If you are at your computer with the activation screen Open, press 1.
            //The installation ID is a long number broken into several groups. I'll ask you for one group at a time. Please enter the digits in Group 1.
             //That I need the installation ID that's played on your monitor. Each group is a six or seven digits. Please enter the first group of digits using your phone keypad.
            selecttxt("Please enter the digits in Group 1");
            selecttxt("Please enter the first group");
            //Got it. Thanks. One moment please, while I looked that up.
            //Now I will read the confirmation ID.  //One moment please, while I looked that up
            //Now I will read the confirmation ID
            ////Got it. Thanks. One moment please, while I looked that up.
            selecttxt("Now I will read the confirmation ID");
            selecttxt("Got it. Thanks");
            //Say which block it goes in. Now use your mouse and position your cursor in block A.
            //If you're ready to get started, press 1
            ////Now use your mouse and position your cursor and block A.
            selecttxt("Now use your mouse and position your cursor");
            //If you're finished, press 2
            selecttxt("If you're finished, press 2");
            //"Please enter the number of computers that have been installed
            // Please enter the number of different computers that have been installed with this copy of Windows
            selecttxt("Please enter the number of computers that have been installed");
            selecttxt("Please enter the number of different computers that have been installed");
            //I'm sorry, I was unable to validate your installation ID.
            selecttxt("I'm sorry, I was unable to validate your installation ID");
            //To consent to recording or monitoring of this call, press one. Or to continue without recording or monitoring, press 2.
            selecttxt("to continue without recording or monitoring");
		}
	}
}


//验证码 330512311875727788090139496334835149954645445802270599047875924
function getyzm(fy) {
    var fycontent=fy.children[0].children[0].getAttribute("data-text-as-pseudo-element");
    //For security purposes, please enter the following number on your phone's touch tone pad.
    //This call will not be recorded or monitored.
    //I didn't get that. For security purposes, please enter the following number on your phone's touch tone pad.
    //Let's try  I didn't get that.
    //debugger;
    if(flag1==true){
        if(fycontent.indexOf("I didn't")!=-1||fycontent.indexOf("Let's try")!=-1){
            var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
            if(tq.length>0){
                var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
                if(content.length>0){
                    for(var i=0;i<content.length;i++){
                        var msg=content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element");
                        var patt =/^[\d]+/g;
                        var res=patt.exec(msg);
                        if(res!=null){
                            flag1=false;
                            if(msg.indexOf("/")==-1){
                                document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="使用拨号盘输入号码"){ev.click();}});
                                arbh(res[0]);
                            }
                        }
                    }
                }
            }
        }
    }
    //==============
    // if(fycontent.indexOf("For security purposes")!=-1){
    //     var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
    //     if(tq.length>0){
    //         var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
    //         if(content.length>0){
    //             for(var i=0;i<content.length;i++){
    //                 var msg=content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element");
    //                 var patt =/[\d]{2,3}/g;
    //                 var res=patt.exec(msg);
    //                 if(res!=null&&flag1){
    //                     if(msg.indexOf("/")==-1){
    //                         document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="使用拨号盘输入号码"){ev.click();}});
    //                         flag1=false;
    //                         arbh(res[0]);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    //==============
    // var patt = /[\d]{2,3}/g;
    // var res=patt.exec(fycontent);
    // if(res!=null&&flag1){
    //     //alert(res[0]);
    //     if(fycontent.indexOf("/")==-1){
    //         document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="使用拨号盘输入号码"){ev.click();}});
    //         flag1=false;
    //         setTimeout(()=>{
    //             var dt=document.querySelectorAll("[data-text-as-pseudo-element]");
    //             for(var i=0;i<res[0].length;i++){
    //                 zhixing(res[0][i]);
    //             };
    //         },500);
    //     }
    // }
    //==============
}

function zhixing(txt){
	// var dt=document.querySelectorAll("[data-text-as-pseudo-element]");
	// for(var j=0;j<dt.length;j++) {
	// if(dt[j].getAttribute("data-text-as-pseudo-element")==txt){
	// dt[j].click();
	// break;
	// };
	// }
    document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="使用拨号盘输入号码"){ev.click();}});
    var np=document.querySelectorAll("div.css-1dbjc4n.r-13awgt0 > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(12) > div:nth-child(2) > div > div:nth-child(3) > div>div");
    if(np!=null){
    	var nflag=false;
       for(var i=0;i<np.length;i++){
          var nbt=np[i].childNodes;
           for(var k=0;k<nbt.length;k++){
               if(nbt[k].getAttribute("aria-label")==txt){
                   nbt[k].click();
                   nflag=true;
                   break;
               };
           }
           if(nflag){ break; }
       }
    }
}

function arbh(str) {
    for(var i=0;i<str.length;i++){
        task(str[i],i);
    }
}

function selecttxt(txt){
//     var dt=document.querySelectorAll("[data-text-as-pseudo-element]");
// 	for(var j=0;j<dt.length;j++) {
//         if(dt[j].getAttribute("data-text-as-pseudo-element").indexOf(txt)!=-1){
//             if(txt=="Welcome to Microsoft product activation"&&flag2){
//                zhixing("1");//zhixing("#");zhixing("2");zhixing("#");zhixing("1");zhixing("#");
//             }

//            clearInterval(getCID);
//            break;
//        };
//     }
    var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
	if(content.length>0){
		for(var i=0;i<content.length;i++){
            var htt=content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element");
			if(htt.indexOf(txt)!=-1)
			{
				//alert(content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element"));
                //英国
                if(txt.indexOf("Welcome to Microsoft product activation")!=-1&&flag2){
                    flag2=false;
                    zhixing("3");zhixing("#");zhixing("1");zhixing("#");//zhixing("#");zhixing("2");zhixing("#");zhixing("1");zhixing("#");
                    //arbh("3#1#");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },2000);
                }
                //To consent to recording or monitoring of this call, press one. Or to continue without recording or monitoring, press 2.  美国
                if(txt.indexOf("to continue without recording or monitoring")!=-1&&flag2_1){
                    flag2_1=false;
                    zhixing("2");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },1000);
                }
                //澳大利亚
                //To activate Windows, Press one. To activate office for Mac, Press 2. For other office products or for PC Games, Press 3.
                if(txt.indexOf("To activate Windows")!=-1&&flag2){
                    flag2=false;
                    if(telphone=="+611800642008"){zhixing("1");zhixing("2");zhixing("1");}
                    if(telphone=="+118662631098"){zhixing("3");zhixing("1");}
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },2000);
                }
                if(txt.indexOf("If you're trying to activate Windows 10 or Windows 11, Press one, otherwise press 2")!=-1&&flag3){
                    flag3=false;
                    //zhixing("2");zhixing("#");
                    arbh("2#");
                }
                //If you are at your computer with the activation wizard open, press one. Otherwise press 2     ----31
                //If you are at your computer with the activation screen Open, press 1    ----121
                if(txt.indexOf("If you are at your computer with the activation wizard open, press one. Otherwise press 2")!=-1&&flag4){
                    flag4=false;
                    //zhixing("1");zhixing("#");
                    arbh("1#");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },1000);

                }
                //iid  //The installation ID is a long number broken into several groups. I'll ask you for one group at a time. Please enter the digits in Group 1.
                //That I need the installation ID that's played on your monitor. Each group is a six or seven digits. Please enter the first group of digits using your phone keypad.
                if(flag5){
                    if(txt.indexOf("Please enter the digits in Group 1")!=-1 || txt.indexOf("Please enter the first group")!=-1){
                        flag5=false;
                        // var len=iid.length-1;
                        // for(var j=0;j<iid.length;j++){
                        //     //zhixing(iid[j]);
                        //     task(iid[j],j);
                        // };
                        arbh(iid);
                    }
                }
                //Say which block it goes in. Now use your mouse and position your cursor in block A.
                //If you're ready to get started, press 1
                //Now use your mouse and position your cursor and block A.
                //I didn't get that you're ready for block A is.
                if(flag6){
                    if(txt.indexOf("Now use your mouse and position your cursor")!=-1||htt.indexOf("I didn't get that you're ready for block A is")!=-1){
                        flag6=false;
                        //zhixing("1");zhixing("#");
                        arbh("1#");
                        if(telphone=="+611800642008"||telphone=="+118662631098"){flag10=true;regcida();}//澳大利亚
                        //英国  "+611800642008";//+448000188354
                        var ttiid=iid.replace(/#/g,"");
                        setTimeout((ttiid)=>{
                            document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                            xmlCros1("http://cid.cngoogle.cf:8899/getcid/?iids=",ttiid);
                        },1000);
                    }
                    //regcid();
                }
                if(htt.indexOf("I didn't get that you're ready for block A is")!=-1&&flag6_1){
                    flag6=true;
                    flag6_1=false;
                }
                //Sorry, that wasn't one of the options to finish the activation confirmation ID numbers I give you into the empty blocks in your activation window. These blocks are labeled ABC and so on.
                if(htt.indexOf("Sorry, that wasn't one of the options to finish")!=-1&&flag6_1){flag6=true;flag6_1=false}
                //Got it. Thanks. One moment please, while I looked that up.
                //Now I will read the confirmation ID.
                if(flag7){
                    if(txt.indexOf("Now I will read the confirmation ID")!=-1 || txt.indexOf("Got it. Thanks")!=-1){
                        flag7=false;
                        setTimeout(()=>{
                            document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                        },1000);
                    }

                }
               //If you're finished, press 2
                //Still didn't seem to be like.  //It's didn't seem valid.
                if(txt.indexOf("If you're finished, press 2")!=-1&&flag8){
                    flag8=false;
                    if(telphone=="+448000188354"){regcid();}//英国
                    if(telphone=="+611800642008"||telphone=="+118662631098"){regcidab("b");}//澳大利亚
                     //英国  "+611800642008";//+448000188354
                }
                //I'm sorry, I was unable to validate your installation ID.
                if(txt.indexOf("I'm sorry, I was unable to validate your installation ID")!=-1&&flag8){
                    flag8=false;
                    //clearInterval(getCID);
                    document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    alert("无法获取确认ID，需人工电话！！！");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="结束通话"){ev.click();}});
                        //cidreset();
                    },500);
                    checktel();
                }
                if(flag8){//Don't seem to tell. //Still seem down. //Still seemed.
                    if(htt.indexOf("Still didn't seem to be like")!=-1 || htt.indexOf("It's didn't seem valid")!=-1 || htt.indexOf("Don't seem to tell")!=-1 || htt.indexOf("Still seem down")!=-1 ||htt.indexOf("Still seemed")!=-1){
                        flag8=false;
                        //clearInterval(getCID);
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                        alert("获取失败，请检查是否IID有误");
                        setTimeout(()=>{
                            document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="结束通话"){ev.click();}});
                            //cidreset();
                        },500);
                        checktel();
                    }
                }
                //Please enter the number of computers that have been installed
                if(txt.indexOf("Please enter the number of computers that have been installed")!=-1&&flag9){
                    flag9=false;
                    //zhixing("1");zhixing("#");
                    arbh("1#");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },1000);
                }
                // Please enter the number of different computers that have been installed with this copy of Windows
                if(txt.indexOf("Please enter the number of different computers that have been installed")!=-1&&flag9){
                    flag9=false;
                    //zhixing("1");zhixing("#");
                    arbh("1#");
                    setTimeout(()=>{
                        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("title")=="关闭"){ev.click();}});
                    },1000);
                }
                break;
			}
		}
	}
}

//循环延时2秒输入IID
function task(t, i) {
   setTimeout( function () {
   	    zhixing(t);
   }, 300 * i);
}


var cid="";
//regcid();
//澳大利亚
function regcida(){
    var cida= setInterval(()=>{
        if(flag10){
            var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
            if(tq.length>0){
                var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
                if(content.length>0){
                    //debugger
                    var msg=content[content.length-1].children[0].children[0].getAttribute("data-text-as-pseudo-element");
                    msg =msg.toLowerCase().replace(/\s*/g,"");
                    if(msg.indexOf("blockbis")!=-1){
                        regcidab("a");
                    }

                }
            }
        }
    },100);
};

function regcidab(k){
    if(k=="a"){flag10=false;}
    var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
    if(tq.length>0){
		var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
		if(content.length>0){
			for(var i=0;i<content.length;i++){
				var msg=content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element");
				var patt = /^[\d]/;
				if(patt.test(msg)){
					var res=patt.exec(msg);
					cid+=res;
				}
			}
		}
    }
    if(k=="b"){
        setTimeout(()=>{
            document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="结束通话"){ev.click();}});
            //cidreset();
        },500);
        setTimeout(()=>{
            //cptext(cid);
            checktel();
            var cidmsg= "安装ID："+tempiid.replace(/#/g," ")+"\n确认ID："+cid.substr(cid.length-48);
            GM_setClipboard(cidmsg);
            alert("CID已复制到剪切板！\n"+ cidmsg);

        },1000);
    }
    //alert(cid);
};

//英国
function regcid(){
    var tq =document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh");
    if(tq.length>0){
		var content=document.querySelectorAll(".css-1dbjc4n.r-150rngu.r-eqz5dr.r-16y2uox.r-1wbh5a2.r-11yh6sk.r-1rnoaur.r-2eszeu.r-1sncvnh>div>div");
		if(content.length>0){
			for(var i=0;i<content.length;i++){
				var msg=content[i].children[0].children[0].getAttribute("data-text-as-pseudo-element");
				var patt = /[\d]{6}/;
				if(patt.test(msg)){
					var res=patt.exec(msg);
					cid=cid+" "+res;
				}
			}
		}
    }
    //clearInterval(getCID);
    setTimeout(()=>{
        document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="结束通话"){ev.click();}});
        //cidreset();
    },500);
    setTimeout(()=>{
       //cptext(cid);
        checktel();
        var cidmsg= "安装ID："+tempiid.replace(/#/g," ")+"\n确认ID："+cid.substr(cid.length-48);
        GM_setClipboard(cidmsg);
        alert("CID已复制到剪切板！\n"+ cidmsg);

    },1000);

};


var tempiid=null;
//复制 330512311875727788090139496334835149954645445802270599047875924
//copyTXT("008114871564060192205835678070730342048185557771188293");
function cptext(cptxt){
    //var cid1 = cptxt.match(/[0-9]{6}/g);
    //alert(cptxt);
    var cidmsg= "安装ID："+tempiid.replace(/#/g," ")+"\n确认ID："+cptxt;
    navigator.clipboard.writeText(cidmsg.toString()).then(function() {
        /* clipboard successfully set */
        alert("CID已复制到剪切板！\n"+ cidmsg);
    },function() {
        /* clipboard write failed */
        //chrome://flags/
        var txt ="如你使用的是Firfox浏览器，请打开about:config并将dom.events.testing.asyncClipboard设为true后重试";
        alert("复制失败！\n\n" + txt);
    });
}

//恢复流程开关
function cidreset() {
    tempiid=iid;
    iid=null;
    f1=true; f2=true;f3=true; f4=true; f5=true; f6=false; f7=false;f8=false;
    flag1=true;flag2=true; flag3=true;flag4=true;flag5=true;flag6=true;flag7=true; flag8=true;flag9=true;flag2_1=true;
}
//结束通话
function setfalse() {
    f1=false; f2=false;f3=false; f4=false; f5=false;//f6=true; f7=false;f8=true;
    flag1=false;flag2=false; flag3=false;flag4=false;flag5=false;flag6=false;flag7=false; flag8=false; flag9=false;flag2_1=false;
}

//结束通话后自动开启下次通话
function checktel() {
    // if (confirm("是否开始新的通话，如果取消需要刷新页面才能运行脚本！！！") == true) {
    //     cidreset();
    //     //document.querySelectorAll("button").forEach(ev=>{if(ev.getAttribute("aria-label")=="音频通话"){cidreset();}});
    // } else {
    //     //alert("需要刷新页面才能运行脚本！！！");
    //     return;
    // }
    cidreset();
    alert("如果想开始新的通话，只需按“音频通话”按钮");
}

//监听页面元素
function reclll(element,bs) {
    element.addEventListener('click',function(){
        if(f6&&bs=="音频通话"){
            f6=false;
            cidreset();
            inputiid();
            setTimeout(()=>{
                var tp=document.querySelector(" div.css-1dbjc4n.r-13awgt0 > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(4) > div > div.reactxp-ignore-pointer-events > div > div > div:nth-child(1) > button");
                if(tp!=null){
                    telphone=document.querySelector(" div.css-1dbjc4n.r-13awgt0 > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > div > div:nth-child(4) > div > div.reactxp-ignore-pointer-events > div > div > div:nth-child(1) > button").getAttribute("aria-label");
                }
            },15000);

        }
        if(f7&&bs=="结束通话"){
            f7=false;
            setfalse();
            f8=true;
        }
    })
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
                    lego(outdata.responseText);
                }
            }
        });
    });
}

function xmlCros1(url,_data) {
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
                    //NeverObtained
                    if(outdata.responseText.indexOf("NeverObtained")==-1){
                        document.querySelectorAll("button").forEach(ev=>{
                            if(ev.getAttribute("aria-label")=="结束通话"){
                                reclll(ev,"结束通话");
                                ev.click();
                            }
                        });
                        GM_setClipboard(outdata.responseText.replace("</br>","\r\n"));
                        setTimeout(()=>{
                            document.querySelectorAll("button").forEach(ev=>{
                                debugger;
                                if(ev.getAttribute("aria-label")=="关闭"){
                                    ev.click();
                                }
                            });
                            alert(outdata.responseText.replace("</br>","\r\n"));
                        },2000);
                    }
                }
            }
        });
}



//=========
};

    // Your code here...
})();