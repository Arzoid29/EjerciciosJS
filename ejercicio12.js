var cont=0;
var n=1;
var numero=1241;

while(numero >0)
{    console.log(numero%10)
    document.write(numero%10);
    if((numero%10)==n) 
    {     console.log("cont: ",cont);
        document.write("cont: ",cont);
        ++cont;}
    numero/=10;
    numero= Math.floor(numero);
    console.log("numero: ",numero);}
    document.write("numero: ",numero);

document.write(" el numero se repite: " +cont);
console.log(" el numero se repite: " +cont)