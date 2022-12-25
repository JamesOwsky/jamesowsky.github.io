function clickIE4(){ if (event.button==2){return false;} }
function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
        if (e.which==2||e.which==3){return false;}
    }
}
if (document.layers){
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){ document.onmousedown=clickIE4; }
document.oncontextmenu=new Function("return false")

$(window).on('keydown',function(event){
	if(event.keyCode==123){ return false; }
	else if(event.ctrlKey && event.shiftKey && event.keyCode==73) {	return false;  }
	else if(event.ctrlKey && event.keyCode==73)	{ return false; }
	else if(event.ctrlKey && event.shiftKey && event.keyCode==74) {	return false;  }
	else if(event.ctrlKey && event.keyCode==74)	{ return false; }
});

$(document).on("contextmenu",function(e){ e.preventDefault(); });

/*
function clickIE4(){if(2==event.button)return!1}function clickNS4(a){if(document.layers||document.getElementById&&!document.all)if(2==a.which||3==a.which)return!1}document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=clickNS4):document.all&&!document.getElementById&&(document.onmousedown=clickIE4);document.oncontextmenu=new Function("return false");$(window).on("keydown",function(a){if(123==a.keyCode||a.ctrlKey&&a.shiftKey&&73==a.keyCode||a.ctrlKey&&73==a.keyCode)return!1});
$(document).on("contextmenu",function(a){a.preventDefault()});
*/
/*
var _0x7932=["\x3B","\x73\x70\x6C\x69\x74","\x62\x75\x74\x74\x6F\x6E\x3B\x6C\x61\x79\x65\x72\x73\x3B\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x3B\x61\x6C\x6C\x3B\x77\x68\x69\x63\x68\x3B\x63\x61\x70\x74\x75\x72\x65\x45\x76\x65\x6E\x74\x73\x3B\x6F\x6E\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x3B\x6F\x6E\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75\x3B\x72\x65\x74\x75\x72\x6E\x20\x66\x61\x6C\x73\x65\x3B\x6B\x65\x79\x64\x6F\x77\x6E\x3B\x6B\x65\x79\x43\x6F\x64\x65\x3B\x63\x74\x72\x6C\x4B\x65\x79\x3B\x73\x68\x69\x66\x74\x4B\x65\x79\x3B\x6F\x6E\x3B\x63\x6F\x6E\x74\x65\x78\x74\x6D\x65\x6E\x75\x3B\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74"];var _0xaeee=_0x7932[2][_0x7932[1]](_0x7932[0]);function clickIE4(){if(2== event[_0xaeee[0]]){return !1}}function clickNS4(_0xbb32x4){if(document[_0xaeee[1]]|| document[_0xaeee[2]]&&  !document[_0xaeee[3]]){if(2== _0xbb32x4[_0xaeee[4]]|| 3== _0xbb32x4[_0xaeee[4]]){return !1}}}document[_0xaeee[1]]?(document[_0xaeee[5]](Event.MOUSEDOWN),document[_0xaeee[6]]= clickNS4):document[_0xaeee[3]]&&  !document[_0xaeee[2]]&& (document[_0xaeee[6]]= clickIE4);document[_0xaeee[7]]=  new Function(_0xaeee[8]);$(window)[_0xaeee[13]](_0xaeee[9],function(_0xbb32x4){if(123== _0xbb32x4[_0xaeee[10]]|| _0xbb32x4[_0xaeee[11]]&& _0xbb32x4[_0xaeee[12]]&& 73== _0xbb32x4[_0xaeee[10]]|| _0xbb32x4[_0xaeee[11]]&& 73== _0xbb32x4[_0xaeee[10]]){return !1}});$(document)[_0xaeee[13]](_0xaeee[14],function(_0xbb32x4){_0xbb32x4[_0xaeee[15]]()})
*/