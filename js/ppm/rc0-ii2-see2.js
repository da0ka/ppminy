/*2023.12.8
use Information inheritance
use SEE in binary context and lower context
*/
async function PPMe(A,mo,rate){
	for(var L=0,R=1<<24,B,N=0,a=1,b=A[0],c,d,e,f,h,k,l,o,r,t,z=A.length,x=z>>18?65535:z>>16?16383:2047,fn=b=>setTimeout(c=>b(rate(a,z)),1),v=[],C=v,E=[],S=[],T=[],M=[],O=[],i=v.c=256;i--;S[i]={s:8*(i>>4)+5<<3,c:7,l:3},M[i]=Math.sqrt(i))for(o=16,v[i]={s:i,c:0};o--;)T[i<<4|o]=0|(i+1<<14)/(i+2);
	for(mo&=63;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,i++<mo;)v[0]={s:0,c:0};
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
	for(var L,R=1,a=1,c=A[0],d,e,f,h,i,k,r,t,o=0,v=[],C=v,E=[],S=[],T=[],M=[],O=[],b=v.c=256;b--;S[b]={s:8*(b>>4)+5<<3,c:7,l:3},M[b]=Math.sqrt(b))for(o=16,v[b]={s:b,c:0};o;)T[b<<4|--o]=0|(b+1<<14)/(b+2);
	for(;d=v[0],d=d.l=[],d.c=0,d.s=v,v=d,b++<c;)v[0]={s:0,c:0};
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
122:`for(f='++ZZ]Yu[oYXif(WWb)kVe/t/U=e>6T=256S;WR=1QRbQ<P.cOgON],L=sK8|J,cI))H&&G>>>Fq/jF0E]={s:Dp[r%n[c$.s#$#]"<<4|h#[b=g;jfK=>{|(=f=cfor(;.l--,t,e[0L){c of g)=d=v	=0,+=}else{DbI:0=[Lt=0WengthddOd#	,v=dvar q,jQ,acKd,sQI|KFt7<JX-=8IK7-t&255)},h,i,k,rov=[,10,13,34,38,92Lg	,nmpMub	OS;dQ+sOharCodeAt(aZ);f(dHd<12J(e=dF8&7)<7Gf(v[e]),d&Q27);b;mD8*(bF4)+53I:7,l:3},M]=Matqrt(bHaQ6,v[b};a;)pa]=0b+114)/(b+2);d	,~u];)v}soQ;*i<1e7*S)q=(qJX)F0Pie=!")t1+cOZ;f=iFJ|iPfGn)h=m[M[e-1]k3N>8*i)2i>2*e)1|g#+h>2*iL-=Fh,f!f=j/(t+f)F0,r=ERc=r<t!"Gr<(tfQ+cOHbreak;t-}cf=%OM[g#-1]]FQ4Q6384-fRE<ft%]eF6c%]-F6,f=e}}q-=j*tRcVh>6||hO|*=2,hO=3hZ);s[aY=b#;d;N2R(cO2)F8r=teOFQGg#)g[rY;N=tg=r||i}Wc=	g	iN;g!	;v	#)t	O+v*2*(6+t)iT*t?2+U2:U1.6,vOeT?6:e,$Y	[v|e}v?g:();c;)d=$];$]	}n=[]VQ,t+f"Qh=i;i=;)W!(g#Hreturn s}}}';_=/[^ !&-CM[-~]/.exec(f);)with(f.split(_))f=join(shift());eval(f)`,
253:a})("for(f='e/t/U=e>6T(bSif(RRb)kQ;RP=1OPbO<N,c:L]=KK{s:JJbL0I||H+=GtGF=fEc;D[bC--B>>>Aq/jA0@p[rn[c.s]<<4|.cc;jfor(;h=2f=.l,e[0],=g){++c of g)	=0,=d=v}else{=[],t=0	Rengthddd,v=ds=>{var q,jO,aO,c=sd,f,h,i,k,r,t,ovg,nmpMub56;bB;mCJ8*SA4)+53L7,l:3},MCKMatqrtS))oO6,vCI};o;)pCBoK0|S+114)/S+2);d,b<D)v[0J0L0};*Ei<1e7*56)q=(q8|s[a])A0Nie=!)F1+;iA8HiNf&&n)h=m[M[e-1]k3|(g>8*i)2|(i>2*e)1|g+h>2*i],-=Ah,fG!f=j/(t+f)A0,r=@Pc=r<t!&&r<(F1+))break;t-E}c=M[g-1]]AO4O6384-fP@<ft]GeA6c]-EA6,tE,e}}q-=j*tPcQh>6HBhH(*,h=3h);u[oKb=c;d=Dg+P(+)A8r=Fe=AO&&g)g[rKDg=t+=rHi}Rc=gi+;g!;v)t+v*f*(6+t),FiT*t?2+U2:U1.6,vGeT?6:e,][vI|e}v?g:();BD)d=];]}n=[]QO,Gt+f	Oh=i;i=;)R!(g))return u}}}';_=/[^ -?M[-}]/.exec(f);)with(f.split(_))f=join(shift());eval(f)")