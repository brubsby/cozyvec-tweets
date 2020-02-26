t=(n,x0,y0,x1,y1)=>[...Array(n+3).keys()].map(i=>[x=x0+i*(x1-x0)/(n+2),(y0*(x1-x)+y1*(x-x0))/(x1-x0)])
b=mbox()
L=99
F=9
l=[...Array(F+1).keys()].map(j=>t(L,(E=!j||j==F)?b[0]:rnd(b[0],W/2),Y=(b[3]-b[1])*j/F+b[1],E?b[2]:rnd(W/2,b[2]),Y))
for(i=0;i<L;i++){for(k=0;k<F+1;k++){(k?l2:m2)(...l[k][i])}}
