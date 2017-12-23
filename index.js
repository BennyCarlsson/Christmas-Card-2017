f=(i,y)=>y>24?"\n":i<-0 & y==12?"*":y<(25-i)/2||y>=25-(25-i)/2 ?".":"#"
for(s=t="",i=4,z=y=0;i<100;y>24?(y=0,i+=4,z>2?z=0:z++):y++)
  s+=f(i/4-(2-z),y),i/4<5?t+=f(4,y):null
console.log(s+t+"\nMerry Christmas")