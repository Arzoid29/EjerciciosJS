var prom = 0;
var cont = 0; 
function getRandom(max,min) {
   
 var a = Math.floor(Math.random() * (max - min)) + min;
 prom = prompt("Digite un numero")
 for(var i = 0; i<100000;i++){

    var a = Math.floor(Math.random() * (max - min)) + min;

 if(a>prom){
 console.log("El numero Introducido es mayor  ")
   ++cont
}
 else if (a<prom){
   console.log("El numero Introducido es menor  ")
   ++cont
 }
 else{
    alert("El Numero era: "+prom);
    i+=100000000;
 }
}
}
  console.log(getRandom(1,200));
document.write("Intentos :"+cont);