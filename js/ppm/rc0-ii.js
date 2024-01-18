/* 2023.12.12
use Information inheritance
*/
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,f,l,o=-1,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],O=[],i=256;i--;)v[i]={s:i,c:0};
	for(mo&=31;d=v[0],d=d.l=[],d.s=v,v=d,i++<mo;)v[0]={s:0,c:0};
	for(x&=mo<5?-1:mo<15?8191:4095;;){
		d=t=0,i=C.length;
		for(c of C)if(!E[c.s])f=1+c.c,c.s===b&&(l=f,r=t,d=c),t+=f;
		f=i>>8||i;if(!d)l=f,r=t;
		R=R/(C.c=t+f)>>>0;L+=R*r;
		for(R*=l;R<1e7;R*=256,L=L<<8>>>0)
			if(255>L>>>24)
				for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
			else++N;
		if(d){
			if(255<(d.c+=2))for(c of C)c.c>>>=1;//rescale
			if(c=C==v)C=v=d.l;
			else{
				for(i=C.c;C!=v;v=v.s)
					t=0|v.c,r=2*l*(6+t),t+=i,r=r>6*t?2+r/t/2:r/t/1.6,
					E[c++]=v[v.length]={s:b,c:r>6?6:r|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.s=v,v=d);--c;d=d.l=[],d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}b=A[a++],x&a||await new Promise(fn)
		}else{
			for(c of C)E[c.s]=1;
			if(!(C=C.s)){
				for(O[0]=mo,i=5;i--;L=L<<8>>>0)
					if(255>L>>>24)
						for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
					else++N;
				for(;!O[--o];)O.length--;return O
			}
		}
	}
}
function PPMd(A){
	for(var L,R=1,a=1,c=A[0],d,e,f,i,r,t,o=0,v=[],C=v,E=[],O=[],b=256;b--;)v[b]={s:b,c:0};
	for(;d=v[0],d=d.l=[],d.s=v,v=d,b++<c;)v[0]={s:0,c:0};
	for(;;){
		for(t=0,i=C.length;R<1e7;R*=256)L=(L<<8|A[a++])>>>0;
		for(c of C)if(!E[c.s])t+=1+c.c;
		f=i>>8||i;R=R/(C.c=t+f)>>>0;r=L/R>>>0;
		if(t>r){
			t=0;for(c of C)if(!E[c.s]&&r<(t+=f=1+c.c))break;t-=f;
			O[o++]=b=c.s;d=c;
			if(255<(c.c+=2))for(c of C)c.c>>>=1;
			if(c=C==v)C=v=d.l;
			else{
				for(i=C.c;C!=v;v=v.s)
					r=0|v.c,e=2*f*(6+r),r+=i,
					e=e>6*r?2+e/r/2:e/r/1.6,
					E[c++]=v[v.length]={s:b,c:e>6?6:e|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.s=v,v=d);--c;d=d.l=[],d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}
		}else{
			for(c of C)E[c.s]=1;
			if(!(C=C.s))return O
		}L-=R*t,R*=f
	}
}
//decoder
(a=>decoder={fn:"b",
64:a,
122:"for(b='f/h/I;)c[H++]Gu[nGF=256E=aD;o--.cb=else{>>>0;e.f8||=i,hk=>{.o,f.lengthfor(0};if(=0,=1l[e	s++=b.r=[],=ce of a)]={o:r:){s=0;!	]bb,c=bvar o,nrE,e,gi,stc=[,10,13,34,38,92],lua,k<<|=kh+=7<(F=f-=8=k<<7-h&255)};g+kharCodeAt(s++);b(g))g<12((i=g8&7)<7&&b(c[i]),g&27);kn;rHr;b[0],,~u[0]H0;a*);iD<1e7*E)g=(g<<8|F)ii=o/(a=s+i)g/ob<s&&b<())break;s-;k[tG=r=e;e;(+=2)8);eD=)a;;a!;c)h|0*2*(6+h)+D=f>6*h?2+I2:I1.6,	G[cf>6?6:f|c?a:();e;)	];	].r}l=[]}	];aD}g-=o*s}return k}';_=/[-D-I]/.exec(b);)with(b.split(_))b=join(shift());eval(b)",
253:a})("for(b='f/h/;)c[=256=a;o,fb=else{>>>0;++]=i=1.length.ffor(0};if(l[e	s++e=b.r=[],=ce of a)){s=0;!	]]={l:r:bb,c=bk=>{var o,n,r,e,g,h,i,s,t=0,clua,b;r--r;b[0],,~k[0]--0;a*);i<1e7*)g=(g<<8|k[n)i8||i=o/(a=s+i)g/ob<s&&b<())break;s-;u[t=r=e;e;(e+=2)8)e;e=)a;;a!;c)h|0*2*(6+h),h+=f>6*h?2+2:1.6,	[cf>6?6:f|c?a:();--e;)	];	].r}l=[]}	];a}g-=o*s}return u}';_=/[-]/.exec(b);)with(b.split(_))b=join(shift());eval(b)")