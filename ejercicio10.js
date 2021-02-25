var x=0;   x= parseInt(prompt("escriba el numero de horas trabajadas"))
var a=0;   a= parseInt(prompt("escriba el numero de horas trabajadas"))
var b=0;   b= parseInt(prompt("escriba el numero de horas trabajadas"))
var c=0;   c= parseInt(prompt("escriba el numero de horas trabajadas"))

var n= b**2; var m=4*(a*c); var d= n-m;
var ecuCuad=function (){
if  (d<0){
alert("NO TIENE SOLUCIONES REALES");
}
else if(d=0){
x=-b/2*a;    document.write("Solucion real: " + x);
}
else if(d>0){
 x=(-b+math.sqrt(d))/2*a;  document.write("Solucion real: " + x);
}
return x
}
ecuCuad(1);
document.write("Solucion real: " + x);
