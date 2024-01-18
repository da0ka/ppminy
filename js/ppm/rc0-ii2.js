/*2023.12.8
use Information inheritance
*/
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,f,l,o=-1,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],O=[],i=v.c=256;i--;)v[i]={s:i,c:0};
	for(mo&=31;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,i++<mo;)v[0]={s:0,c:0};
	for(x&=mo<5?-1:mo<15?8191:4095;C;){
		i=C.length;d=t=0;
		for(c of C)if(!E[c.s])f=1+c.c,c.s===b&&(l=f,r=t,d=c),t+=f;
		f=i>>8||i;if(!d)l=f,r=t;
		R=R/(t+f)>>>0;L+=R*r;
		for(R*=l;R<1e7;R*=256,L=L<<8>>>0)
			if(255>L>>>24)
				for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
			else++N;
		if(d){C.c+=2;
			if(255<(d.c+=2)){r=t=0;//rescale
				for(c of C)if(t+=f=c.c>>>=1,f&&C.s)C[r++]=c;
				C.c=t+=C.length=r||i}
			if(c=C==v)C=v=d.l;
			else{
				for(i+=C.c;C!=v;v=v.s)
					f=v.length,t=v.c+f,r=2*l*(6+t),t+=i,r=r>6*t?2+r/t/2:r/t/1.6,
					v.c+=r=r<6?r:6,E[c++]=v[f]={s:b,c:r|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.c=0,d.s=v,v=d);--c;d=d.l=[],d.c=0,d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}b=A[a++],x&a||await new Promise(fn)
		}else{for(c of C)E[c.s]=1;C=C.s}
	}
	for(O[0]=mo,i=5;i--;L=L<<8>>>0)
		if(255>L>>>24)
			for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
		else++N;
	for(;!O[--o];)O.length--;return O
}
function PPMd(A){
	for(var L,R=1,a=1,c=A[0],d,e,f,h,i,r,t,o=0,v=[],C=v,E=[],O=[],b=v.c=256;b--;)v[b]={s:b,c:0};
	for(;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,b++<c;)v[0]={s:0,c:0};
	for(;C;R*=f){
		for(i=C.length;R<1e7;R*=256)L=(L<<8|A[a++])>>>0;
		t=0;for(c of C)if(!E[c.s])t+=1+c.c;
		f=i>>8||i;R=R/(t+f)>>>0;r=L/R>>>0;
		if(t>r){
			t=0;for(c of C)if(!E[c.s]&&r<(t+=f=1+c.c))break;t-=f;
			O[o++]=b=c.s;d=c;C.c+=2;
			if(255<(c.c+=2)){h=r=0;
				for(c of C)if(r+=e=c.c>>>=1,e&&C.s)C[h++]=c;
				C.c=r+=C.length=h||i}
			if(c=C==v)C=v=d.l;
			else{
				for(i+=C.c;C!=v;v=v.s)
					h=v.length,r=v.c+h,e=2*f*(6+r),r+=i,
					e=e>6*r?2+e/r/2:e/r/1.6,v.c+=e=e<6?e:6,
					E[c++]=v[h]={s:b,c:e|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.c=0,d.s=v,v=d);--c;d=d.l=[],d.c=0,d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}
		}else{for(c of C)E[c.s]=1;C=C.s}L-=R*t
	}
}
//decoder
(a=>decoder={fn:"b",
64:a,
122:"for(b='r/f/Klse{J;)t[I=256H++]Gu[sGF=iE--D,fr=r>6>>>0;8||;e;nfor(;=n=ob=a=>{if(.o.fo of n)=1h[o=0;){l!]=0,	l+E+o=g.r=[],=tf+=]={o:v:0.lengthgg,g	t=gvar a<<,o|=af,7<(F-=8,o=a<<7-f&255)},e,s	c,o,r	i,l	d	k,t=[,10,13,34,38,92],hun,g,vH;g+a.charCodeAt(l++);b(g))Dg<12((i=g8&7)<7&&b(t[i]),g&27)as;vIDv};g[0],,~u[0]DI0}*E)k<1e7*H)b=(b<<8|F)i=kk=e/(l+i)g=b/eg<l&&g<())break;l-E;a[dG=v;g.2;(o.2)8){c=fr,r&&n)n[cG=n=c||k}o=)nJk+!;t)f+t,rE*2*(6+f),k,*f?2+K2:K1.6,t.?6:r,G[t|r}t?n:();Do;)g=];].r}h=[]}eJ]}b-=e*l}return a}';_=/[-D-K]/.exec(b);)with(b.split(_))b=join(shift());eval(b)",
253:a})("for(b='g/h/@;)c[=256;o=ab=g=g>6else{>>>0;;a=1for(0};++]if(.o+=.fsi+ee of a)l[e	=0;){s!	]=b.r=[],=c]={o:r,f:.lengthbb,b=0,c=bk=>{var f,o,n,d,e,g,h,i,s,t=0,v,clua,b,r;r--r;b[0],,~k[0]--0*=i);v<1e7*)f=(f<<8|k[n)i=v8||v=o/(s+i)f/ob<s&&b<())break;s-=i;u[t=r=e;e2;(e2)8){d=hhg=e,g&&a)a[d=e=ha=d||v}e=)a;va!;c)h+c,g=2*i*(6+h),hv,*h?2+@2:@1.6,c?6:g,	[cg|c?a:();--e;)	];	].r}l=[]}	]}f-=o*s}return u}';_=/[-@]/.exec(b);)with(b.split(_))b=join(shift());eval(b)")