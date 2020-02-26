t=(n,x0,y0,x1,y1)=>[...Array(n+3).keys()].map(i=>[x=x0+i*(x1-x0)/(n+2),(y0*(x1-x)+y1*(x-x0))/(x1-x0)]);
[a,b,c,d]=mbox(20)
L=50
r=(l,h)=>{
m2(a,y=rnd(l,h))
l2(W/2,Y=rnd(l,h))
l2(c,y)
return [...t(L,c,y,W/2,Y),...t(L,W/2,Y,a,y)]}
p=r(b,H/2)
s=t(L,a,d,c,d)
m2(a,d)
l2(c,d)
for(i=0;i<p.length;i++){
m2(...p[i])
l2(...s[i%s.length])}
