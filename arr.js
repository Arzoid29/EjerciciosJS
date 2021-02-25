

var problema=(arr,n)=>{
var arr=[3,7,2,4,12,1,7];
var n = 14;

for(var i=0;i<=n;++i)
{
    while(j=i+1)
 {
     if(arr[i] + arr[j]== n)
     {
      console.log(arr[i],arr[j]); 
     }
    
 }     
}
}