var a=parseInt(prompt("introduca un el valor (a)"));
var b=prompt("introduca un el valor (b)");
var c=prompt("introduca un el valor que se negativo (c)");


function ecuCuad(a, b, c){

return ((-1*b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);


}
var resultado_ecuCuad = ecuCuad(a, b, c);
alert("ecuCuad =" + resultado_ecuCuad)


function ecuCuad2 (a, b, c){

    return ((-1*b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

}
var resultado_ecuCuad2 = ecuCuad2 (a, b, c);
alert("ecuCuad2 =" + resultado_ecuCuad2)


