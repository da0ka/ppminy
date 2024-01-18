/*2023.12.9
use Information inheritance
use SEE in binary context
*/
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,e,f,l,o,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],T=[],M=[],O=[],i=v.c=256;i--;M[i]=Math.sqrt(i))for(o=16,v[i]={s:i,c:0};o--;)T[i<<4|o]=0|(i+1<<14)/(i+2);
	for(mo&=63;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,i++<mo;)v[0]={s:0,c:0};
	for(x&=mo<5?-1:mo<15?8191:4095;;){d=0,i=C.length;
		if(i>1){t=0;
			for(c of C)if(!E[c.s])f=1+c.c,c.s===b&&(l=f,r=t,d=c),t+=f;
			f=i>>8||i;if(!d)l=f,r=t;R=R/(t+f)>>>0;
		}else{// binary context
			c=C[0];f=T[r=c.c<<4|M[C.s.length-1]];
			l=16384-f;R>>>=14;
			if(c.s!==b)T[r]-=f>>6,r=f;
			else T[r]+=l>>6,r=0,l=f,d=c
		}
		L+=R*r;
		for(R*=l;R<1e7;R*=256,L=L<<8>>>0)
			if(255>L>>>24)
				for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
			else++N;
		if(d){C.c+=2;
			if(255<(d.c+=2)){r=t=0;
				for(c of C)if(t+=f=c.c>>>=1,f&&C.s)C[r++]=c;
				C.c=t+=C.length=r||i}
			if(c=C==v)C=v=d.l;
			else{
				for(i+=C.c;C!=v;v=v.s)
					r=v.length,t=v.c+r,e=l*2*(6+t),t+=i,e=e>6*t?2+e/t/2:e/t/1.6,v.c+=e=e>6?6:e,
					E[c++]=v[r]={s:b,c:e|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.c=0,d.s=v,v=d);--c;d=d.l=[],d.c=0,d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}b=A[a++],x&a||await new Promise(fn)
		}else{
			for(c of C)E[c.s]=1;
			do if(!(C=C.s)){
				for(O[0]=mo,i=5;i--;L=L<<8>>>0)
					if(255>L>>>24)
						for(f=L>0xffffffff,O[o++]=255&f--+B,B=L>>>24;N;N--)O[o++]=255&f;
					else++N;
				for(;!O[--o];)O.length--;return O
			}while(i===C.length)
		}
	}
}
function PPMd(A){
	for(var L,R=1,a=1,c=A[0],d,e,f,i,r,t,o,v=[],C=v,E=[],T=[],M=[],O=[],b=v.c=256;b--;M[b]=Math.sqrt(b))for(o=16,v[b]={s:b,c:0};o;)T[b<<4|--o]=0|(b+1<<14)/(b+2);
	for(;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,b++<c;)v[0]={s:0,c:0};
	for(;;R*=f){
		for(i=C.length;R<1e7;R*=256)L=(L<<8|A[a++])>>>0;
		if(i>1){
			t=0;for(c of C)if(!E[c.s])t+=1+c.c;
			f=i>>8||i;R=R/(t+f)>>>0;r=L/R>>>0
			if(c=r<t){t=0;for(c of C)if(!E[c.s]&&r<(t+=f=1+c.c))break;t-=f}
		}else{
			c=C[0];f=T[r=c.c<<4|M[C.s.length-1]];R>>>=14;e=16384-f;
			if(L/R>>>0<f)t=0,T[r]+=e>>6;
			else c=0,T[r]-=f>>6,t=f,f=e
		}L-=R*t;
		if(c){
			O[o++]=b=c.s;d=c;C.c+=2;
			if(255<(c.c+=2)){r=t=0;
				for(c of C)if(t+=e=c.c>>>=1,e&&C.s)C[r++]=c;
				C.c=t+=C.length=r||i}
			if(c=C==v)C=v=d.l;
			else{
				for(i+=C.c;C!=v;v=v.s)
					r=v.length,t=v.c+r,e=f*2*(6+t),t+=i,e=e>6*t?2+e/t/2:e/t/1.6,v.c+=e=e>6?6:e,
					E[c++]=v[r]={s:b,c:e|0};
				for(d.l?C=v=d.l:(d=d.l=[],d.c=0,d.s=v,v=d);--c;d=d.l=[],d.c=0,d.s=v,v=d)d=E[c];
				E[c].l=v;E=[]
			}
		}else{
			for(c of C)E[c.s]=1;
			do if(!(C=C.s))return O;while(i===C.length)
		}
	}
}
//decoder
(a=>decoder={fn:"f",
64:a,
122:"for(f=';)Tf=Se/t/R=e>6Q=cP.eOP;gON){Lh[cK.sJKJ]Iif(Hfor(GGc of g)Ft=0;FHELE!ID,e]={s:b:0b};=256++]l[o;H=g=f;n--[0];G;8||>>>k/n0,t<<Ss=>{q[b=d.l	=1+==v=0,=[],}else{.lengthd	dOdJ,v=dGvar k,n,ac,d,s,c|=st7<(P-=8,c=s7-t&255)},i,rov=[,10,13,34,38,92],g,hqlbO;d+s.charCodeAt(a++);f(d))d<12((e=d8&7)<7&&f(v[e]),d&27)bTGa6,v[aT4|a]=0|(b+114)/(b+2)d,,~lTv[Gso;*LGi<1e7*)k=(k8|)0i>1D)t1+cO;Sii=n/(t+f)0;r=c=r<tD&&r<(tf+cO))break;t-}c,SPO4|MathJqrt(gJ-1)]46384-f<fLt]e6c]-6,Se}}k-=n*tcLs[a=bPJ,dN2(cO2)8Lr=EtePO&&gJ)g[rN=tg=r||i}Hc=Lg	GigO;g!;vJ)tO+v*2*(6+t)iQ*t?2+R2:R1.6,vOeQ?6:e,K[v|e};Gv	?g	:();c;)d=K];K].l}h=[]FIi=TH!(gJ))return s}}}';_=/[^ -CM[-~]/.exec(f);)with(f.split(_))f=join(shift());eval(f)",
253:a})("for(f='e/t/Y=e>6X=0Wq[bVW,V]U=256T<<S--R;)Q,vPf=O.eN=c;gN>>>k/n0for(;;cNif(;=f;n){c of g)h[c.stW;!],e[0],++]+==g	=d.l=1=v=[],}else{]={s:b:0.lengthddNW,dP=dOM=>{var k,n,a,c+Md,f,i,r,t,oPg,hqlbNT;bQo6P[Rb};oQVS4|Ro]W|(b+1S14)/(b+2)d,cRQv[b}*i	<1e7*T)k=(kS8|M[a)0i>1)t++;Oi8||i=n/(t+f)0;r=c=r<t&&r<(tf+))break;t-}c	OV=S4|Mathqrt(g-1)]46384-f<ftUe6cU-6,t,Oe}}k-=n*tcl[o=b=c,d2(2)8r=te=&&g)g[r=t+	=r||i}c	=gi+	N;g!;v)tN+v*2*(6+t),tiX*t?2+Y2:Y1.6PNeX?6:e,[v|e};v?g:();Rc;)d=];].l}h=[]]i=	Q!(g	))return l}}}';_=/[-N-Y]/.exec(f);)with(f.split(_))f=join(shift());eval(f)")