crl=(crd,frq=1,eps=.0001,vel=9)=>{
n1=nse([crd[0],crd[1]+eps],frq)
n2=nse([crd[0],crd[1]-eps],frq)
a=(n1-n2)/(2*eps)
n1=nse([crd[0]+eps,crd[1]],frq)
n2=nse([crd[0]-eps,crd[1]],frq)
b=(n1-n2)/(2*eps)
return [a*vel+crd[0],-b*vel+crd[1]]
}
nrm=(vec)=>{
m=dst(0,0,...vec)
return [vec[0]/m,vec[1]/m]
}
N=99
F=.01
for(i=0;i<N;i++){
  ct=0
  pts=[]
  sel=(i/N)*2-1
  tries=0
  do{pt=[rnd(W),rnd(H)]}
  while(abs(nse(pt,F)-sel)>.01&&tries++<999)
  pts.push(pt)
  m2(...pt)
  for(j=0;j<9999;j++){
    crlp=crl(pt,F)
    l2(...crlp)
    pts.push(crlp)
    pt=crlp
  }
}
