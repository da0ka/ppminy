/*2023.12.8
use Information inheritance
use SEE in binary context and lower context
*/
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,e,f,h,k,l,o,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],S=[],T=[],M=[],O=[],i=v.c=256;i--;S[i]={s:8*(i>>4)+5<<3,c:7,l:3},M[i]=Math.sqrt(i))for(o=16,d=v[i]={s:i,c:0};o--;)T[i<<4|o]=0|(i+1<<14)/(i+2);
	for(mo&=63;d=d.l=[],d.c=0,d.s=v,v=d,i++<mo;)d=v[0]={s:0,c:0};
	for(x&=mo<5?-1:mo<15?8191:4095;;){
		d=0,i=C.length;
		if(1<i){
			e=t=0;for(c of C)if(!E[c.s])f=1+c.c,c.s===b&&(l=f,r=t,d=c),t+=f,e++;
			f=i>>8||i;//P(esc)
			if(1<f&&E.length){//P'(esc)
				h=S[M[e-1]<<4|k<<3|(C.c>i*8)<<2|(i>e*2)<<1|(C.s.length+h>i*2)],
				h.s-=f=h.s>>h.l,f+=!f;
				if(k=!d)h.s+=t+f;
				else h.l>6||--h.c||(h.s*=2,h.c=3<<h.l++)
			}
			if(!d)l=f,r=t;t+=f
		}else{//P"(esc)
			c=C[0];f=T[r=c.c<<4|M[C.s.length-1]];t=16384,l=t-f;
			if(c.s!==b)T[r]-=f>>6,r=f;
			else T[r]+=l>>6,r=0,l=f,d=c
		}
		R=R/t>>>0;L+=R*r;
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
			for(h=i;(C=C.s)&&i==C.length;);
			if(!C){
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
	for(var L,R=1,a=1,c=A[0],d,e,f,h,i,k,r,t,o=0,v=[],C=v,E=[],S=[],T=[],M=[],O=[],b=v.c=256;b--;S[b]={s:8*(b>>4)+5<<3,c:7,l:3},M[b]=Math.sqrt(b))for(o=16,d=v[b]={s:b,c:0};o;)T[b<<4|--o]=0|(b+1<<14)/(b+2);
	for(;d=d.l=[],d.c=0,d.s=v,v=d,b++<c;)d=v[0]={s:0,c:0};
	for(;;R*=f){
		for(i=C.length;R<1e7;R*=256)L=(L<<8|A[a++])>>>0;
		if(b=1<i){
			e=t=0;for(c of C)if(!E[c.s])t+=1+c.c,e++;
			f=i>>8||i;
			if(b=1<f&&E.length)
				h=S[M[e-1]<<4|k<<3|(C.c>i*8)<<2|(i>e*2)<<1|(C.s.length+h>i*2)],
				h.s-=f=h.s>>h.l,f+=!f;
			R=R/(t+f)>>>0;r=L/R>>>0;
			if(c=r<t){t=0;for(c of C)if(!E[c.s]&&r<(t+=f=1+c.c))break;t-=f}
		}else{
			c=C[0];f=T[r=c.c<<4|M[C.s.length-1]];R>>>=14;e=16384-f;
			if(L/R>>>0<f)t=0,T[r]+=e>>6;
			else c=0,T[r]-=f>>6,t=f,f=e
		}L-=R*t;
		if(c){
			if(b)k=0,h.l>6||--h.c||(h.s*=2,h.c=3<<h.l++);
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
			if(b)k=1,h.s+=t+f;
			for(c of C)E[c.s]=1;
			for(h=i;(C=C.s)&&i==C.length;);
			if(!C)return O
		}
	}
}
//decoder
(a=>decoder={fn:"f",
64:a,
122:`for(f='++YY]Xu[oXWif(VVb)kUe/t/T=e>6S;VR=1QRbQ<P.cOgON8|L,cK))J&&I>>>Hq/AH0G]={s:Fn[cE.sDED]%B[r$=25#<<""4|f=hD],[b=g;As=>{|(=f=cfor(;.l--,t,e){c of g)=d=v	=0,+=}else{FbK:0=[t=0VengthddOdD	,v=dvar q,AQ,ac=s[0d,s"QK|=sHt7<LW-=8K#5&s"7-t)},h,i,k,rov=[,10,13,34,38,92g	,nCBMub	O#6;dQ+sOharCodeAt(aY);f(d&127Jd<12Le=dH8&7)<7If(v[e]);b;CF8*(bH4)+5"3K:7,l:3},M]=Matqrt(bJaQ6,d	[b};a;)Ba]=0b+1"14)/(b+2);,~u];)d	}soQ;*i<1e7*#6)q=(q"LW)H0Pie=!%)t1+cOY;iHL|iPfIn)h=C[M[e-1]k"3N>8*i)"2i>2*e)"1|gD+h>2*i-=Hh,f!f=A/(t+f)H0,r=GRc=r<t!%Ir<(t1+cOJbreak;t-}c[0$OM[gD-1]]HQ4Q6384-fRG<ft$]eH6c$]-H6,e}}q-=A*tRcUh>6||hO|*=2,hO=3"hY);s[aX=bD;d;N2R(cO2)H8r=teOHQIgD)g[rX;N=tg=r||i}Vc=	g	iN;g!	;v	D)t	O+v*2*(6+t)iS*t?2+T2:T1.6,vOeS?6:e,EX	[v|e}v?g:();c;)d=E];E]	}n=[]UQ,t+f%Qh=i;i=;)V!(gDJreturn s}}}';_=/[^ !&-CM[-~]/.exec(f);)with(f.split(_))f=join(shift());eval(f)`,
253:a})("for(f='e/t/U=e>6T(bSif(RRb)kQ;RP=1OPbO<N,c:L]=KK{s:JJbL0I||H+=GtGF=fEc;D[bC--B],A>>>@q/j@0p[rn[c.s]<<4|.cc;jfor(;h=2f=.l,e=g){++c of g)	=0,=d=v}else{=[At=0	Rengthddd,v=ds=>{var q,jO,aO,c=s[0Ad,f,h,i,k,r,t,ovg,nmpMub56;bB;mCJ8*S@4)+53L7,l:3},MCKMatqrtS))oO6,dCI};o;)pCBoK0|S+114)/S+2);,b<D)d[0J0L0};*Ei<1e7*56)q=(q8|s[a])@0Nie=!)F1+;i@8HiNf&&n)h=m[M[e-1]k3|(g>8*i)2|(i>2*e)1|g+h>2*iA-=@h,fG!f=j/(t+f)@0,r=Pc=r<t!&&r<(F1+))break;t-E}c[0A=M[g-1]]@O4O6384-fP<ft]Ge@6c]-E@6,tE,e}}q-=j*tPcQh>6HBhH(*,h=3h);u[oKb=c;d=Dg+P(+)@8r=Fe=@O&&g)g[rKDg=t+=rHi}Rc=gi+;g!;v)t+v*f*(6+t),FiT*t?2+U2:U1.6,vGeT?6:e,][vI|e}v?g:();BD)d=];]}n=[]QO,Gt+f	Oh=i;i=;)R!(g))return u}}}';_=/[^ -?M[-}]/.exec(f);)with(f.split(_))f=join(shift());eval(f)")