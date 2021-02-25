var horasTrabajadas = 0;
var salarioPorHora = 0;
var salarioBruto = 0;
var retencion = 0; 
var salarioNeto = 0;
var salarionormal = 0;
var salarioExtra = 0;

horasTrabajadas = parseInt(prompt("escriba el numero de horas trabajadas"))
salarioPorHora= parseInt(prompt("escriba su salario por hora"))

if (horasTrabajadas>40) {
   var horasExtras = horasTrabajadas - 40;
    salarioExtra = 1.5 * salarioPorHora * horasExtras;
    salarionormal = 40*salarioPorHora;
}
else{
     salarionormal=salarioPorHora* horasTrabajadas;
}

salarioBruto = salarioExtra + salarionormal;

if (salarioBruto>=1100) {
    retencion = 0.1 * 1100
}
if(salarioBruto>=1500) {
    retencion = 0.15 * 1500
}
 if (salarioBruto>2600) {
     retencion = 0.25 * ( salarioBruto - 2600)
}
salarioNeto = salarioBruto - retencion ;
document.write("Salario bruto " + salarioBruto+" Salario neto " + salarioNeto+ " retencion "+ retencion)
console.log(retencion)
document.write(retencion)