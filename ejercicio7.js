
function fibonacci(meses){
    var cont = 0;
    var pareja1 = 0;
    var pareja2 = 1;
    var pareja3 = 0;
    while(cont <= meses){
        
        pareja3= pareja2 + pareja1;
        pareja1= pareja2;
        pareja2= pareja3;
        cont++;
    }
       return pareja1;
    }



console.log(" Pareja Total "+fibonacci(12))

document.write(" Las parajas son: ",+fibonacci(12)) 