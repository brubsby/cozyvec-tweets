paper("Postcard",0)
pen(.25)
Y=rnd(2,3)*99
f=rnd(.005,.04)
a=rnd(3,9)
o=flr(rnd(1,3.25))
for(i=0;i<Y;i++){t=0;for(j=0;j<(X=999);j++){y=H*i/Y;x=W*j/X;y=y+nse([x,y],f,a,o);if(dst(W/2,H/2,x,y)<min(W,H)/4){(t++?l2:m2)(x,y)}else{t=0}}}
