var Base=new function(S){
function mkMap(i,c){var a=0,b,e=1;
	if(i==252){
		if(c){i=32;
			for(b=[376,382,,339,8250,353,8482,732,8212,8211,8226,8221,8220,8217,8216,,,381,,338,8249,352,8240,710,8225,8224,8230,8222,402,8218,,8364];i;)b[S(b[--i])]=159-i;
			for(;i<256;)b[S(i)]=i++;return b}
		i=256;
		for(b=e252={10:'n',13:'r',34:'"',92:'\\'};i;)b[--i]=(c=b[i])?'\\'+c:S(i);
		return b}

	if(i==128){
		if(c){for(b=d128=[];b[S(--i+(i>77?65299:i>47?45:i>19?44:40))]=i;);return b}
		for(b=e128=[];i;)b[--i]=S(i+(i>77?65299:i>47?45:i>19?44:40));return b}
	b={9:1,11:1,31:1,88:1,123:63600,127:1645,190:-8096,"\xA0":123};
	if(c){for(i<2070?d322=b:d2070=b;a<i;)b[S(a+(e+=b[a]|0))]=a++}
	else for(i<2070?e322=b:e2070=b;a<i;)b[a]=S(a+(e+=b[a++]|0));
	return b}
function n2cjk(n){return S(n+=n<6400?13312:n<27136?13568:16896)}

for(var a=64,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],e128,d128,e252,e322,d322,e2070,d2070;a--;)d[e[a]]=a;
this.e64=function(s){
	for(var i=0,j=0,n,l=s.length,m=l%3,t=[];i<l;)t[j++]=e[(n=s[i++]<<16|s[i++]<<8|s[i++])>>18&63]+e[n>>12&63]+e[n>>6&63]+e[n&63];
	if(m)t[--j]=t[j].substr(0,t[j].length-3+m);
	return t.join("")};

this.d64=function(s){
	for(var i=0,j=0,l=(s=s.replace(/[^A-Za-z\d\+\/]/g,"").split("")).length,m=l&3,n;i<l;)s[j++]=(n=d[s[i++]]<<18|d[s[i++]]<<12|d[s[i++]]<<6|d[s[i++]])>>16,s[j++]=n>>8&255,s[j++]=n&255;
	this.bytes=s.length=j-[0,0,2,1][m];
	return s};

//delimiter="
this.e85=function(s){
	for(var a=0,b=[],c,o=0,O=[],l=s.length,i=85;i;)b[--i]=S(i+35);
	for(b[57]="x";a<l;){c=(s[a++]|s[a++]<<8|s[a++]<<16|s[a++]<<24)>>>0;
		for(i=5;i--;c=c/85|0)O[o++]=b[c%85]}
	if(l%=4)O.length-=4-l;
	return O.join("")};

this.d85=function(s){
	for(var a=85,b={x:57},c=0,i,o=b[i]=0,O=[],l=s.length;b[S(--a+35)]=a;);
	for(s=s.split("");a<l;){
		for(i=5;i--;)c=c*85+b[s[a+i]];
		for(a+=5;++i<4;c>>>=8)O[o++]=c&255}
	if(l%=5)o=O.length-=5-l;this.bytes=o;
	return O};

//delimiter="
this.e91=function(s){
	for(var a=91,b=0,c=0,l=s.length,n,o=0,O=[],M=[];a;)M[--a]=S((a>57)+!!a+a+33);
	for(;a<l;){
		c|=s[a++]<<b;b+=8;
		if(b>13){n=c&8191;
			if(n>88)c>>=13,b-=13;
			else n=c&16383,c>>=14,b-=14;
			O[o++]=M[n%91];O[o++]=M[n/91|0]}}
	if(b){O[o++]=M[c%91];
		if(b>7||c>90)O[o++]=M[c/91|0]}
	return O.join("")};

this.d91=function(s){
	for(var a=91,b=0,c=-1,d,e,i=0,M=[];M[S((--a>57)+!!a+a+33)]=a;);
	for(s=s.split("");d=s[a++];)
		if(d=M[d],~c)for(c+=d*91,e|=c<<b,b+=(c&8191)>88?13:14,c=-1;s[i++]=e&255,e>>=8,b-=8,b>7;);
		else c=d;
	if(~c)s[i++]=e|c<<b;s.length=this.bytes=i;return s};

// charset=utf8, delimiter="
this.e122=function(A){
	var a=0,b=0,c=8,n,o=0,z=A.length,B,O=new Uint8Array(z*1.15+3),E=new Uint8Array(256);
	for(n of[0,10,13,34,38,92])E[n]=c++;
	function g(c){
		if(a>=z)return-1;
		c=(254>>>b&A[a])<<b;c>>=1,b+=7;
		if(b<8||(b-=8,++a>=z))return c;
		return(65280>>b&A[a])>>8-b|c
	}
	for(;B=g(),~B;O[o++]=B)
		if(c=E[B])n=g(),c=~n?194|28&c<<2:(n=B,222),O[o++]=c|n>>6,B=128|63&n;
	return new TextDecoder().decode(O.subarray(0,o))
};
this.d122=function(s){
	function p(n){n<<=1,d|=n>>b,b+=7;if(b>7)O[o++]=d,b-=8,d=n<<7-b&255}
	for(var i=0,o=0,a,b=0,c,d,l=s.length,E=[0,10,13,34,38,92],O=new Uint8Array(l*1.75);i<l;p(c))
		if(c=s.charCodeAt(i++),127<c)
			a=c>>8&7,7>a&&p(E[a]),c&=127;
	return O.subarray(0,o)
};
//delimiter=`
this.e125=function(A,p=0){
	function g(l){
		if(a>=z)return-1;
		var c=(255>>b&A[a]+p&255)<<b,d=8-l;
		d>0?c>>=d:c<<=-d;b+=l;
		if(b<8||(b-=8,++a>=z))return c;
		return(65280>>b&A[a]+p&255)>>8-b|c
	}
	var a=0,b=0,c=1,d,o=0,z=A.length,B,E=new Uint8Array(256),O=new Uint8Array(z*1.15+3);
	for(d of[13,92,96])E[d]=c++;
	for(;B=g(7),~B;O[o++]=B)if(d=E[B])
		c=g(9),d=~c?d<<3:(c=B,4),
		O[o++]=192|d|c>>6,B=128|c&63;
	return new TextDecoder().decode(O.subarray(0,o)).replace(/\$\{/g,'\\${')
};
this.d125=function(s,e=0){
	function p(n,l){d|=n<<!l>>b>>l,b+=l?9:7;if(b>7)O[o++]=(d&255)-e&255,b-=8,d=n<<8-b}
	for(var i=0,o=0,a,b=0,c,d,l=s.length,E=[,13,92,96],O=new Uint8Array(l*1.75);i<l;)
		if(c=s.charCodeAt(i++)%65533,127<c)
			a=c>>9,a&&p(E[a]),p(c<<2*!a&511,1);
		else p(c);
	return O.subarray(0,o)
};
// charset=shift-jis, delimiter="
this.e182=function(s){
	for(var a=0,b=0,c,l=s.length,n=1,o=0,O=[],M={9:4,29:1,86:1,120:65250};a<182;)M[a]=S(a+(n+=M[a++]|0));
	for(a=0;a<l;){
		c|=s[a++]<<b;b+=8;
		if(b>14){n=c&16383;
			if(n>179)c>>=14,b-=14;
			else n=c&32767,c>>=15,b-=15;
			O[o++]=M[n%182];O[o++]=M[n/182|0]}}
	if(b){O[o++]=M[c%182];
		if(b>7||c>181)O[o++]=M[c/182|0]}
	return O.join("")};

this.d182=function(s){
	for(var a=0,b=0,c=-1,d=1,e=0,i=0,M={9:4,29:1,86:1,120:65250};e<182;)M[S(e+(d+=M[e]|0))]=e++;
	for(s=s.split(e="");d=s[a++];)
		if(d=M[d],~c)for(c+=d*182,e|=c<<b,b+=(c&16383)>179?14:15,c=-1;s[i++]=e&255,e>>=8,b-=8,b>7;);
		else c=d;
	if(~c)s[i++]=e|c<<b;s.length=i;return s};

// charset=latin1, delimiter="
this.e252=function(s){
	for(var b=e252||mkMap(252),i=s.length,x=bestXOR(s),y={10:1,13:1,34:1,92:1}[x]?'\\'+b[x]:S(x),t=Array(i);i;)t[i--]=b[s[i]^x];t[0]=y;
	return t.join("").replace(/\0(([0-7])|[^\0])?/g,function(s,t,u){return(u?"\\x00":"\\0")+(t||"")})};

this.d252=function(s){var b=mkMap(252,1),c,i=0,x=b[(s=s.split(""))[0]];
	for(c in b)b[c]^=x;
	for(c=s.length;i<c;)s[i++]=b[s[i]];
	this.bytes=--s.length;return s};

//delimiter=`
this.e253=function(A,x,f){
	for(var a=0,z=A.length,b=256,c,d,e="\\",B=[],C=[];b;)C[--b]=String.fromCharCode(b);
	for(x&=255;a<z;B[b++]=C[c])
		if(c=A[a++],c=!f?c^x:(f<2?c-x:c+x)&255,c===13||c===92||c===96)B[b++]=e,c^13||(c=114);
		else if(c===36&&(d=A[a],d=!f?d^x:(f<2?d-x:d+x)&255)===123)B[b++]="\\$",c=d,a++;
	return B.join("")
};
// charset=utf16
this.e32768=function(A){
	for(var a=0,b,c,i=0,n=0,l=A.length,s=[];a<l;)
		if(c=A[a++],n<8)b|=c<<7-n,n+=8;
		else n-=7,s[i++]=n2cjk(b|=c>>n),b=c<<15-n&32767;
	if(0<n)if(s[i++]=n2cjk(b),8<n)s[i++]=n2cjk(32768);
	return s.join("")
};
this.d32768=function(s){
	if(!s)return new Uint8Array(0);
	var a=0,b,c,i=0,n=s.length-1,z=15*(n>>3)+n%8*2,A=s[n]==n2cjk(32768);
	n%8<1&&!A&&z++,n%8&&A&&z--;A=new Uint8Array(z);
	for(n=0;a<z;n-=8,A[a++]=b>>n&255)
		if(n<8)c=s.charCodeAt(i++),b=b<<15|(c-=c<19712?13312:c<40704?13568:16896),n+=15;
	return A
}}(String.fromCharCode);
function b253cost(A,x,f){
	for(var a=0,z=A.length,b=z,c;a<z;c^36||(c=A[a],c=!f?c^x:(f<2?c-x:c+x)&255)^123||(b++,a++))
		c=A[a++],c=!f?c^x:(f<2?c-x:c+x)&255,c^13&&c^92&&c^96||b++;return b
}
//fast optimizer(not consider ${)
function b253best(A){
	for(var a=A.length,z=a,b,c,d,e=a,f,r=3,B=new Uint8Array([96,92,13]),C=new Uint32Array(256);a;)C[A[--a]]++;
	for(A=0;r--;)for(b=256;b--;){
		for(a=3,c=b>99?3:b>9?2:b&&1,c+=b&&r&&4,d=C[!r?b^36:(r<2?b+36:b-36)&255];a;c+=C[!r?b^f:(r<2?b+f:b-f)&255])f=B[--a];
		if(z>c||z==c&&e>d)z=c,e=d,A=b<<2|r
	}return A
}
//slow and strong optimizer
function b253best2(A){
	for(var a=0,z=1/0,b,c,d=3;d--;)for(b=256;b--;){
		c=b>99?3:b>9?2:b&&1,c+=b&&d&&4,c+=b253cost(A,b,d);
		if(z>c)z=c,a=b<<2|d
	}return a
}
function bestXOR(A){
	for(var i=A.length,j=256,o,s,t=1/0,x,E=[10,13,34,92],F=new Uint32Array(j);i;)++F[A[--i]];
	for(;j;){
		for(s=o=F[--j],i=4;i;)s+=F[j^E[--i]];
		if(t>s||t==s&&o<F[x])t=s,x=j}
	return x}

if(!this.CharCoder)var CharCoder={};
!function(S){
function isA(s){return s instanceof Array?s:[]}
for(var a=128,b="&'\275w\301\311\303\304\u014f\323-\334.0/3v\273\274\277\300\305\266\267\1\u01c5}\335~\200\177\203  2\202,\r\264\17\20%\22(\24\25\26\27+\31\32*z\265\36\37 u\u01b9x$|)y{",c,Wd=[],We=[];a;We[Wd[a|128]=S(c+=c<37?151:c<182?988:8029)]=a|128)c=b.charCodeAt(We[Wd[--a]=S(a)]=a)||a-12;
for(a in b={
eU8:function(s){
	if(this.TextEncoder){if(!s.buffer)s=new Uint8Array(s);return new TextEncoder().encode(s)}
	for(var a=[],c,i=0,j=0,l=CharCoder.size=s.length;i<l;)(c=s.charCodeAt(i++))<128?a[j++]=c:a[c>2047?a[a[j++]=c>>12|224,j++]=c>>6&63|128:a[j++]=c>>6&31|192,j++]=c&63|128;CharCoder.bytes=j;
	return a}

,dU8:function(a){var c=CharCoder.size||a.length,i=0,j=CharCoder.size=0,t=isA(a);
	if(c<32767||c<65537&&S.apply){
		for(;(c=a[i++])>-1;)t[j++]=c<128?c:c>223?(c&15)<<12|(a[i++]&63)<<6|a[i++]&63:(c&31)<<6|a[i++]&63;t.length=CharCoder.bytes=j;
		if(S.apply)return S.apply(0,t);
		return eval("S("+t+")")}
	for(;(c=a[i++])>-1;)t[j++]=S(c<128?c:c>223?(c&15)<<12|(a[i++]&63)<<6|a[i++]&63:(c&31)<<6|a[i++]&63);t.length=CharCoder.bytes=j;
	return t.join("")}

,eU16:function(s,f){//little endian
	for(var a=[],i=0,j=0,l=s.length,n;i<l;a[j++]=n>>8)n=s.charCodeAt(i++),a[j++]=n&255;CharCoder.bytes=j;
	return a}

,dU16:function(a){
	var i=0,j=0,l=a.length,t=isA(a);CharCoder.bytes=l>>1;
	if(i<65534||i<131074&&S.apply){
		for(;i<l;)t[j++]=a[i++]|a[i++]<<8;t.length=j;
		if(S.apply)return S.apply(0,t);
		return eval("S("+t+")")}
	for(;i<l;)t[j++]=S(a[i++]|a[i++]<<8);t.length=j;
	return t.join("")}

,eL1:function(s){var a=[],i=CharCoder.bytes=s.length;
	for(;i;)a[--i]=s.charCodeAt(i)&255;
	return a}

,dL1:function(a){var i=a.length,t=isA(a);return CharCoder.by(t)}

,eW1251:function(s){
	for(var a=s.split(""),i=0,e=We;s=a[i];)a[i++]=e[s]||s.charCodeAt(0)&255;CharCoder.bytes=i;
	return a}

,dW1251:function(a){for(var d=Wd,i=CharCoder.bytes=a.length,t=isA(a);i;)t[--i]=d[a[i]];
	return t.join("")}

,eSU:function(s,n){if((n&=255)<32||n>64)n=64;
	for(var a=[],c,i=0,j=0,m=252-n,p=127-n;c=s.charCodeAt(i++);a[j++]=c&255)if(c>127)
		if(c<0x3100&&c>0x2FFF)a[j++]=128;
		else if(c>0x4DFF&&c<0xA040)a[j++]=(((c-=19968)-(c%=m))/m)+129,c+=c<p?n:n+1;
		else if(c>0xFEFF)a[j++]=241;
		else if(c>0x1FFF&&c<0x2700)a[j++]=(c>>8)+210;
		else if(c<0x500&&c>0x2FF)a[j++]=(c>>8)+249;
		else a[j++]=251,a[j++]=c>>8;CharCoder.bytes=j;
	return a}

,dSU:function(s,n){if((n&=255)<32||n>64)n=64;
	for(var c,i=0,j=0,m=252-n,t=isA(s);(c=s[i++])>-1;)
		t[j++]=c<128?c
		:c<129?12288|s[i++]
		:c<241?(c-129)*m+(c=s[i++])-(c<127?n:n+1)+19968
		:c<242?65280|s[i++]
		:c<249?c-210<<8|s[i++]
		:c<251?c-249<<8|s[i++]
		:s[i++]<<8|s[i++];t.length=j;
	return CharCoder.by(t)}

,eJ7U:function(s){for(var b,c=56,i=0,j=0,w,x=14,y,t=[],R=[];++c<4096;)R[c]=c<69?36:c<615&&c>533?38:c<784&&c>767?32:c<1701&&c>1247?51:c>4079?34:y;
	for(;c=s.charCodeAt(i++);t[j++]=c)
		if(c<128){if(x>14&&c>31)t[j++]=w=x=14;
			else if(c<24&&c>13)t[j++]=c}
		else{  if((b=y=R[c>>4])<33)b+=(c&=255)/96|0;
			else if(b<35)b+=(c-=65216)/96|0;
			else if(b<37)b+=(c-=880)/96|0;
			else if(b<39)b+=(c-=8544)/96|0;
			else if(b<52)b+=(c-=19920)/96|0;
			else b=32+((b=c%9216)-b%96)/96;
			if(w!=(x=y?15:c/9216|16))t[j++]=w=x;
			t[j++]=b,c=c%96+32}CharCoder.bytes=j;
	return t}

,dJ7U:function(s){for(var b,c,d,i=0,j=0,x,t=isA(s);(c=s[i++])>-1;)
	c>31?t[j++]=!b?c:b>1?(b-2)*9216+(c-32)*96+s[i++]-32:((x=(c-=32)<<8|(d=s[i++]-32))<576?12288:x<1056?65024:x<1536?496:x<4912?7968:18096)+c*96+d:c<14||c>23?t[j++]=c:s[i]<14||s[i]>23?b=c-14:t[j++]=s[i++];
	t.length=j;CharCoder.bytes=i-1;return CharCoder.by(t)}

,eEU16A:function(s){for(var a=[],b,c,i=0,j=0,k=128,n;c=s.charCodeAt(i++);a[j++]=b)
	if(b=c&127,n=c>>7,c<256){
		if(k!=(n|=128))k=a[j++]=n}
	else if(c<0x3100&&c>0x2FFF){
		if(k!=(n+=34))k=a[j++]=n}
	else if(c>0x4DFF&&c<0xA010)c-=19968,a[j++]=((c-(c%=208))/208)+151,b=c+32;
	else if(c>0xFEFF){
		if(k!=(n-=378))k=a[j++]=n}
	else if(c<0x2680&&c>0x20FF){
		if(k!=(n+=70))k=a[j++]=n}
	else if(c>0x047F||c<0x0380){
		if(k!=(n=(c-(c%=19968))/19968+147))k=a[j++]=n;
		a[j++]=(c-(b=c%156))/156}
	else{if(k!=(n+=127))k=a[j++]=n}CharCoder.bytes=j;
	return a}

,dEU16A:function(s){for(var a,b=0,c=1,i=0,j=0,t=isA(s);(a=s[i++])>-1;)a<128?t[j++]=b+(c?a:a*156+s[i++]):a>150?t[j++]=(a-151)*208+s[i++]+19936:b=(a&=c=31)<2?a<<7:a<4?a+94<<7:a>18?(c=0,a-19)*19968:a<6?a+506<<7:a<8?a+1<<7:a+58<<7;
	t.length=j;CharCoder.bytes=i-1;return CharCoder.by(t)}

,eEU16:function(s){for(var a=[],b,c,i=0,j=0,k=128,n;c=s.charCodeAt(i++);a[j++]=b)
	if(b=c&127,n=c>>7,c<256){
		if(k!=(n|=128))k=a[j++]=n}
	else if(c<0x3100&&c>0x2FFF){
		if(k!=(n+=34))k=a[j++]=n}
	else if(c>0xFEFF){
		if(k!=(n-=378))k=a[j++]=n}
	else if(c<0x2680&&c>0x20FF){
		if(k!=(n+=70))k=a[j++]=n}
	else if(c>0x047F||c<0x0380){
		if(k!=(n=(c-(c%=19968))/19968+147))k=a[j++]=n;
		a[j++]=(c-(b=c%156))/156}
	else{if(k!=(n+=127))k=a[j++]=n}CharCoder.bytes=j;
	return a}

,dEU16:function(s){for(var a,b=0,c=1,i=0,j=0,t=isA(s);(a=s[i++])>-1;)a<128?t[j++]=b+(c?a:a*156+s[i++]):b=(a&=c=31)<2?a<<7:a<4?a+94<<7:a>18?(c=0,a-19)*19968:a<6?a+506<<7:a<8?a+1<<7:a+58<<7;
	t.length=j;CharCoder.bytes=i-1;return CharCoder.by(t)}

,e7b:function(s){for(var a=[],c,i=0,j=0,l=s.length;i<l;a[j++]=c)
	for(c=s.charCodeAt(i++);c>127;c>>=7)a[j++]=c&127|128;
	CharCoder.bytes=j;return a}

,d7b:function(a){
	for(var i=0,j=0,l=CharCoder.bytes=a.length,c,d,e,t=isA(a);i<l;t[j++]=d+(c&127)*(1<<7*e))
		for(c=a[i++],d=e=0;c>127;c=a[i++])d+=(c&127)*(1<<7*e++);
	t.length=j;return CharCoder.by(t)}

,by:function(a,i){
	if((i=a.length)<65537&&S.apply)return S.apply(0,a);
	if(i<32767)return eval("S("+a+")");
	if(S.apply){for(var b=65536,c=0,s="";i=a.slice(c,c+=b),b=i.length;)s+=S.apply(0,i);return s}
	for(;i;)a[--i]=S(a[i]);return a.join("")}})CharCoder[a]=b[a]}(String.fromCharCode)