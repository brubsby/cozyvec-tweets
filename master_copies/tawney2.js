// https://www.michaelrosenfeldart.com/artists/lenore-tawney-1907-2007/selected-works/2
C=32
b=mbox(20,35)
h=b[3]-b[1]
w=b[2]-b[0]
x=w*.2
y=h*.4
for(i=0;i<C;i++){
m2(i*x/C+W/2-x,y*(C-i)/C+b[1])
l2(b[0]+i*(b[2]-b[0])/C,b[3])
j=C-i
l2(j*x/C+W/2,y*(C-j)/C+b[1])
}
