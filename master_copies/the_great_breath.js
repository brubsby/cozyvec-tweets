t=(n,x0,y0,x1,y1)=>[...Array(n+3).keys()].map(i=>[x=x0+i*(x1-x0)/(n+2),(y0*(x1-x)+y1*(x-x0))/(x1-x0)]);
[a,b,c,d]=mbox(20)
L=50
r=(y,Y,f)=>{
e=[...t(L,c,y,W/2,Y), ...t(L,W/2,Y,a,y)]
m2(a,y)
l2(W/2,Y)
l2(c,y)
return f?e:e.reverse()}
p=r(rnd(b,H/2),rnd(b,H/2))
Y=rnd(H/2,d)
for(j=0;j<2;j++){
s=r(rnd(H/2,d),Y,1)
for(i=0;i<p.length;i++){if(i==flr(p.length/2))i++
m2(...p[i])
l2(...s[i])}}
