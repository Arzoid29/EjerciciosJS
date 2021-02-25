
var arr =[3,7,3,4,12,2];
var nun = 0;
nun= parseInt(prompt("digita un valor"));

var j= 1;
for(var i = 0; i<=arr.length;++i){
     console.log("Valor de j principio",j)
     
     var j=(j<arr.length)? ++j  : j;
     console.log("Valor de j ",j);
     
     console.log("Valor de j+ ",j);
     console.log("Valor en el arreglo",arr[j])
        if(arr[i] + arr[j] == nun){
            console.log(arr[i],arr[j]);
        }
 
    }








