var prom = 0;
var cont = 0; 

function getRandom(max,min) {
var a = Math.floor(Math.random() * (max - min)) + min;
alert("hola");
 for(var i = 0; i<100000;i++){
 if(prom>a){
   
    prom = prompt("Digite un numero")

    alert("El numero Introducido es mayor que el numero a adivinar ");   
    ++cont}
 else if (prom<a){
    prom = prompt("Digite un numero")
    alert("El numero Introducido es menor que el numero a adivinar ");
    ++cont}
    
 else{
    alert("Excelente adivinaste el numero que era : "+a);
    i+=1000000;}
}
}
function tiempo(){
   if(prom==0){
      alert("Se acabo el tiempo");
   }
   setTimeout(tiempo(),3000);
}



  console.log(getRandom(1,10));
document.write("Intentos :"+cont);
