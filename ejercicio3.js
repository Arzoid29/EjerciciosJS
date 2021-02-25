var pulgadas = 0;
 
pulgadas = prompt("escribe el valor de pulgada" , "ejemplo 65")

 var reducir = function (unidad){
     let contador = 0;
     while (pulgadas >= unidad ){
         pulgadas = pulgadas - unidad;
         ++contador;
     }
return contador ; 
 }
 yardas = reducir(36);
 pies = reducir(12);

 document.write(" yardas: " +yardas +" pies: "+pies+ " pulgadas: "+pulgadas);
 console.log(" yardas: " +yardas +" pies: "+pies+ " pulgadas: "+pulgadas);