function ajedrez (peso){
var cont=0;
var resultado=0;

while(cont<=64){
    resultado+= 2**cont;
    ++cont;}
return resultado;}
document.write(" total: "+ajedrez(1));
console.log(" total: "+ajedrez(1))


var g = Math.floor(Math.random(4,200));
document.write(" <br><br><br><br><br>total: ",g);