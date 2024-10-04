console.log("Hello World")
let cp=[4, 5, 0, 1, 9, 0, 5, 0];
let res=[];
let countofzero = 0;
for(i=0;i<=cp.length;i++){
    if(cp[i]!=0){
        res.push(cp[i])
    }
   else{
    countofzero++;
   }
   }
   for(i=0; i<countofzero; i++){
    res.push(0)

   }   
   console.log(res);
        
    
   
    

   

