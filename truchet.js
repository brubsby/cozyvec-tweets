a=(x,y,r,q)=>{s=q*HPI;for(i=0;i<=(C=9);i++){(i?l2:m2)(x+r*cos(t=s+i/C*HPI),y+r*sin(t))}}
l=(x,y,w,p)=>{if(p){a(x,y,w/2,0);a(x+w,y+w,w/2,2)}else{a(x+w,y,w/2,1);a(x,y+w,w/2,3)}}
d=16.6;for(k=33;k<177;k+=d){for(j=33;j<237;j+=d){l(k,j,d,rnd()<.5)}}
