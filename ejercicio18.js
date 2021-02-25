var c1 =  parseInt(prompt("escriba el numero de horas trabajadas"));
var c2 =   parseInt(prompt("escriba el numero de horas trabajadas"));
var c3 =  parseInt(prompt("escriba el numero de horas trabajadas"));

var trigoTriang= function(){
if (c1 == c2 && c2 == c3) {
    console.log("<h1>triangulo equilatero</h1>");
    document.write("<h1>triangulo equilatero</h1>");

} else if (c1 == c2 && c2 != c3  ) {
    console.log("<h1> triangulo isoseles</h1>");
    document.write("<h1> triangulo isoseles</h1>");

} else if(c1!=c2&&c2==c3 ){
    console.log("<h1> triangulo isoseles</h1>");
    document.write("<h1> triangulo isoseles</h1>");
    
}else {
    console.log("<h1>triangulo escaleno</h1>");
    document.write("<h1>triangulo escaleno</h1>");
}
}
trigoTriang()

