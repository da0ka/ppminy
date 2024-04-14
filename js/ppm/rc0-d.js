//2023.12.2 ppm method d
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,f,i=256,l,o=-1,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],O=[];i--;)d=v[i]={s:i,c:0};//reset order0
	for(mo&=15;d=d.l=[],d.s=v,v=d,i++<mo;)d=v[0]={s:0,c:0};
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
122:"for(b='++]Eu[nED=i;o--,eb=else{=c;)b[>>>0;e.b8||=25,tk=>{.e.lengthif(=0,=1l[e	=[]s++=b.lfor(e of a)){s=0;!	]]={b:0:r};b,b,c=bvar r6,f,k<<|=kt+=7<(D=e-=85&k<<7-t)},i,sc=[,10,13,34,38,92],ano,l,u;f+k.charCodeAt(s++);b(f&127))f<12(i=f8&7)<7&&b(c[i]);kn;rr;,~u[0]0;a*);i=a<1e7*6)f=(f<<8|D)ii=o/(s+i)f/ob<s&&b<())break;s-;k[tE=r=e;e;(+=2)8);e=a=)a;;a!;c)	E[cc?a:();e;)	];	].l}l}	];a=a}f-=o*s}return k}';_=/[-DE]/.exec(b);)with(b.split(_))b=join(shift());eval(b)",
253:a
})("for(b='=256=i;ob=else{=c;)b[>>>0;++]e.f=1.o.lengthif(l[e	s++=b.r=[],for(e of a)){s=0;!	]]={f:0,o:r};bb,c=bk=>{var f,o,n,r,e,i,s,t=0,ca,lub;r--r;,~k[0]--0;a*);i=a<1e7*)f=(f<<8|k[n)i8||i=o/(s+i)f/ob<s&&b<())break;s-;u[t=r=e;e;(+=2)8);e=a=)a;;a!;c)	[cc?a:();--e;)	];	].r}l=[]}	];a=a}f-=o*s}return u}';G=/[-]/.exec(b);)with(b.split(G))b=join(shift());eval(b)")