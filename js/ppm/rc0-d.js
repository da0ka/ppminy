//2023.12.2 ppm method d
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,f,i=256,l,o=-1,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],O=[];i--;)v[i]={s:i,c:0};//reset order0
	for(mo&=15;d=v[0],d=d.l=[],d.s=v,v=d,i++<mo;)v[0]={s:0,c:0};
	for(x&=mo<4?-1:mo<9?8191:4095;;){
		for(d=i=t=0;c=C[i++];)
			if(!E[c.s])f=1+c.c,c.s===b&&(l=f,r=t,d=c),t+=f;//scan model
		f=--i>>8||i;
		if(!d)l=f,r=t;
		R=R/(t+f)>>>0;L+=R*r;//encode
		for(R*=l;R<1e7;R*=256,L=L<<8>>>0)
			if(255>L>>>24)
				for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
			else++N;
		if(c=d){//hit
			if(255<(c.c+=2))for(c of C)c.c>>=1;//rescale
			if(i=C==v)C=v=d.l;
			else{//update
				for(;C!=v;v=v.s)E[i++]=v[v.length]={s:b,c:0};
				for(d.l?C=v=d.l:(d=d.l=[],d.s=v,v=d);--i;d=d.l=[],d.s=v,v=d)d=E[i];
				E[i].l=v;E.length=0
			}b=A[a++],x&a||await new Promise(fn)
		}else{//fail
			for(c of C)E[c.s]=1;C=C.s;
			if(!C){//done
				for(O[0]=mo,i=5;i--;L=L<<8>>>0)
					if(255>L>>>24)
						for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
					else++N;
				for(;!O[--o];)O.length--;return O
			}
		}
	}
}
//decoder
(a=>decoder={fn:"b",
64:a,
122:"for(b=';)c[E++]Du[nD=256=i;o--,eb=else{>>>0;e.b8||,tk=>{.e.lengthif(=0,=1l[e=[]	=cs++=b.lfor(e of a)){s=0;!]]={b:0:r};b	,b,c=bvar r,f,k<<|=kt+=7<(=e-=8=k<<7-t&255)},i,sc=[,10,13,34,38,92],ano,l	,u	;f+k.charCodeAt(s++);b(f))f<12((i=f8&7)<7&&b(c[i]),f&27);k	n;rEr;b[0],,~u[0]E0;a*);i=a<1e7*)f=(f<<8|)ii=o/(s+i)f/ob<s&&b<())break;s-;k[tD=r=e;e;(+=2)8);e=a=)a;;a!;c)D[cc?a:();e;)];].l}l	}];a=a}f-=o*s}return k}';_=/[-DE]/.exec(b);)with(b.split(_))b=join(shift());eval(b)",
253:a
})("for(b='=i;ob=>>>)0;;)c[=256=1++]e.felse{.o;if(.length=cl[e	=b.r=[],s++for(e of a)){s=0;if(!	]]={f:0,o:r};bb,c=bk=>{var f,o,n,r,e,i,s,t=0,ca,lub;r--r;b[0],,~k[0]--0;a*);i=a<1e7*)f=(f<<8|k[ni8||i=o/(s+if/o0b<s&&b<())break;s-;u[t=r=e;e(+=2)8)e=a=)a;;a!;c)	[cc?a:();--e;)	];	].r}l=[]}	];a=a}f-=o*s}return u}';_=/[-]/.exec(b);)with(b.split(_))b=join(shift());eval(b)")