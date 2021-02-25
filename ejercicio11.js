var a=0;//la poblacion actual
var b=0;//la tasa de natalidad
var c=0;// la tasa de mortalidad esperada

 a=parseInt(prompt("la poblacion actual"));
 b=parseInt(prompt("la tasa de natalidad"));
 c=parseInt(prompt("la tasa de mortalidad esperada"));

b=b/100;  c=c/100;  c=c*10;
b=b*10;  a= a-c;  a=a+b;

document.write("Poblacion Dentro de 10 a&ntilde;os = "+a);
console.log("Poblacion Dentro de 10 a&ntilde;os = "+a);
