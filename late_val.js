ppr(55,91)
for(i=0;i<(Y=200);i++){t=0;for(j=0;j<(X=999);j++){y=H*i/Y;x=W*j/X;y+=nse([x,y],0.02,6);e=at2((h=H/3)-y,(w=W/2)-x);if(min(W,H)/7*(2-2*sin(e)+sin(e)*(sqrt(abs(cos(e)))/(sin(e)+1.4)))>dst(x,y,w,h)){(t++?l2:m2)(x,y)}else{t=0}}}
