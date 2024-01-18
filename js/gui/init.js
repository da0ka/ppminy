(i=>{document.write("<script src='js/ppm/rc0-","d ii ii2 ii2-see1 ii2-see2".split(" ")[type.selectedIndex=i],".js'><\/script>");
	mo.value=mo.defaultValue=i?3:2;
	type.options[i].defaultSelected=!0;
	type.onchange=a=>location.href=location.href.replace(/(\?.+)*$/,"?")+type.selectedIndex;
	for(let a=document.getElementsByTagName("input"),b=0,n;i=a[b++];n!="text"&&n!="number"||(i.onblur=function(){this.value||(this.value=this.defaultValue)}))n=i.type
})(location.search.slice(1)&7);
(l=>{
	var of=document.forms.oform,uf=document.forms.uform,info=document.getElementById("rt");
	l.ondrop=uf.upfile.onchange=function(e){l.className="dpass";
		function rate(a,z){sum+=a-rate.a;rate.a=a;info.value=(a/z*1e4|0)/100+"%";info.style.width=(sum/fs*1e4|0)/100+"%"}
		function done(O,a,z,b){
			rate(a,a);O=new Blob([O]);i+=z=O.size;
			b=f[f.p].e;b.className="done";
			b.lastChild.value=a+' to '+z+' in '+(new Date-fr.st)+'ms',
			a>z||(b.lastChild.style.color="red");
			if(a>z||!bad)b.firstChild.href=URL.createObjectURL(O);
			++f.p<f.length?fr.readAsArrayBuffer(f[f.p]):info.value+=", "+fs+" to "+i+"("+(i/fs*1e4|0)/100+"%)"+", "+(new Date-e)+"ms";uf.upfile.value=""
		}
		var f=(e.dataTransfer||e.target).files,i=f.p=0,n,r,sum=0,fs=0,fr=new FileReader,o=ui.mo.value&255,m=js.checked?".js":".htm",bad=lg.checked;
		fr.onload=async a=>{
			fr.st=new Date;a=new Uint8Array(fr.result);rate.a=0;
			var b,c,d=ip2.selectedIndex;
			for(b of a)if(b>127){c=1;break}
			b=await(mp.value|0?bestOrder(a,PPMe):PPMe(a,o,rate));
			a=getSFX(b,b=a.length,!c,d&&ip2.options[d].value);
			if(op.selectedIndex^1)a=Uint8Array.from(a,a=>a.charCodeAt());// not base122
			done(a,b)
		}
		for(e.preventDefault(e.stopPropagation());e=f[i++];fs+=e.size)
			e.e=r=document.createElement("li"),n=e.name,
			r.innerHTML='<a download="'+n.replace(m,'.min')+m+'">'+n+'</a> <input type=button>',
			l.appendChild(r);
		i=0;e=new Date;fr.readAsArrayBuffer(f[f.p])
	};
	l.onclick=function(e){e=e.target||e.srcElement;e.nodeName=="INPUT"&&e.type=="button"&&confirm("remove?")?e.parentNode.outerHTML="":0};
	l.ondragover=function(e){this.className="dover";e.preventDefault();e.dataTransfer.dropEffect='copy'};
	l.ondragleave=function(){this.className="dpass"}
	document.getElementById("kill").onclick=function(){uf.upfile.value=l.innerHTML=""};
	document.forms[0].onclick=of.onclick=function(e,n){
		e=e.target||e.srcElement;
		if(e.nodeName=="INPUT")n=e.type,n!="text"&&n!="number"||(e.value="")
	}
})(document.getElementById("flist"));
const b253d=(q,c,x)=>["Array.from(",q,// [1]"'`
	c,//[2] code
	q,//[4] "'`
	",(c,i)=>",x?~x.indexOf("^")?"(":"255&(":"",//[6] ( or empty
	"(i=c.charCodeAt()%65533)>>8?129+' \x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C \x8E  \x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C \x9E\x9F'.indexOf(c):i",
	x||"",//[8] )-# or )^# or empty
")"].join(""),
bX=[")^",")+",")-"],bE=[64,122,253],cE=["eU8","eL1"],Do=["eval","document.write"];

function rate(a,b){rt.style.width=rt.value=((a/b*1e4|0)/100)+"%"}
function done(A,a,b,u8,t,cs){
	ot.value=A=getSFX(A,a,u8,cs);
	en.disabled=!1;rate(1,1);
	rt.value=`${a} -> ${b} -> ${cs=(op.selectedIndex^1?A:A.replace(/[\x80-\u05ff]/g,11)).length}(${(cs/a*1e4|0)/100}%) bytes in ${new Date-t}ms`
}
function getwrap(a){a=js.checked;return[a?"":h0.value,a?"":h1.value]}

hset.onchange=hset.onfocus=a=>{
	a="<!doctype html>0<title></title>0<meta charset=_>0<script>".split(0).slice(~hset.selectedIndex).join("");
	h0.value=a.replace(/_/,["utf8","utf8","l1"][op.selectedIndex]);
	h1.value="<\/script>"
}
en.onclick=async a=>{en.disabled=!0;
	var d=new Date,t=it.value,c=toCode(t),b=c.length;
	c=await(mp.value|0?bestOrder(c,PPMe):PPMe(c,mo.value&255,rate));
	done(c,b,c.length,!/[^\0-\x7f]/.test(t)||ip.selectedIndex,d)
}
it.ondragover=function(e){this.style.background="#ccc";e=e||event;e.preventDefault();e.dataTransfer.dropEffect='copy'};
it.ondragleave=function(){this.style.background="#fff"};
it.ondrop=function(e){this.style.background="#fff";e=e||event;
	var f=(e.dataTransfer||this).files[0],r=new FileReader;
	e.preventDefault(e.stopPropagation());
	r.onload=async function(){
		var t=new Date,a=new Uint8Array(r.result),b,c,d=ip2.selectedIndex,cs=ip2.options[d].value;
		it.value=new TextDecoder(cs||"utf8").decode(a);
		for(b of a)if(b>127){c=1;break}
		b=await(mp.value|0?bestOrder(a,PPMe):PPMe(a,mo.value&255,rate));
		done(b,a.length,b.length,!c,t,d&&cs)
	};
	r.readAsArrayBuffer(f)
};
dl.onclick=function(a,t){
	if(t=ot.value.trim())
		a=document.createElement("a"),a.href=URL.createObjectURL(new Blob([s2b(t)])),
		a.download=js.checked?"a.js":"a.htm",
		a.click(),URL.revokeObjectURL(a.href);
	else rt.value="nothing in output!"
};
save.onclick=function(){
	for(var b=flist.getElementsByTagName("a"),c=0,d;d=b[c++];)d.click();
	if(c<2)b=this,b.innerText="miss",setTimeout(function(){b.innerText="Save"},500)
};
test.onclick=(a,b)=>(a=ot.value.trim())?window.open().document.write(b=js.checked?"<script>":"",a,b&&"<\/script>"):rt.value="Nothing in Output!";

function s2b(s){
	if(/[\u3400-\uc1ff]/.test(s))s=new Uint8Array(CharCoder.eU16(s)); //from base32768
	else if(/[\uff61-\uff9e]/.test(s))s=new Uint8Array(CharCoder.eSJ(s)); //from base182
	else if(!/[\u0180-\u01ff]|[\u0280-\u02ff]|[\u0380-\u03ff]|[\u0480-\u04ff]|[\u0580-\u05ff]/.test(s))s=new Uint8Array(CharCoder.eL1(s)); //from not base122
	return s
}
function dec2n(s,l){s=s.match(l?/\d+/g:/\d{1,3}/g)||[];l=l?-1:255;for(var i=CharCoder.bytes=s.length;i;)s[--i]&=l;return s||[]}
function hex2n(s){
	for(var i=256,a=[],c;i;a[c=(i>15?"":0)+i.toString(16)]=a[c.toUpperCase()]=i)if(--i<16)a[c=i.toString(16)]=a[c.toUpperCase()]=i;
	for(s=s.match(/[\dA-Fa-f]{1,2}/g)||[],i=CharCoder.bytes=s.length;i;)s[--i]=a[s[i]];return s}

function toCode(s,i){i=ip.selectedIndex;
	if(i>1)return i<3?dec2n(s):hex2n(s);
	return CharCoder[cE[i]](s.replace(/\r\n|\r/g,"\n"))
}
function getSFX(A,a,u8,cs){
	var i=bE[op.selectedIndex],f=i<252||b253best(A),g=f&3,d=u8,e=d&&a<65500?"":d&&a>65499&&!cs?".map(a=>String.fromCharCode(a)).join(''":")",dec=decoder[i],fn=decoder.fn;
	d=!e?"String.fromCharCode(...":d&&a>65499&&!cs?"":`new TextDecoder(${cs?"'"+cs+"'":""}).decode(new Uint8Array(`;
	A=Base["e"+i](A,f>>=2,g);A=i<82?`Array.from(atob("${A}"),a=>a.charCodeAt())`:i<252?`"${A}"`:b253d("`",A,f&&bX[g]+f);
	g=getwrap();pretty.checked&&eval("let _,"+fn+";"+dec.replace(/eval.+/,"dec="+fn));
	return`${g[0]}${dec};${Do[act.selectedIndex]}(${d}${fn}(${A})${e}))${g[1]}`
}
async function bestOrder(A,codec){
	function rate(c,d){rt.value=`order${a} ${b} ${c} ${((c/d*1e4|0)/100)}%`}
	rt.style.width="100%";
	for(var a=0,b=A.length,c,d,e,z=(mp.value&63)+2;a<z;e=c){
		c=await codec(A,a++,rate),d=c.length;
		if(d>b)break;b=d
	}mo.value=a-2;
	return e||c
}