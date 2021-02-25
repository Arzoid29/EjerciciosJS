var arr =[3,6,7,2,0,15,3];
	 var num = arr.length;
	 var car ="+";
   var max = Math.max(...arr);
   console.log(max);
   var graf = 0;
   var MAXLENTCONTS= 10;

   var print = (n) => {
     var i=1;
     while(i <= n){
      document.write("+");
      ++i;
     }
     document.write("<br>")
   }

	 for(var contador=0; contador<num; ++contador){

    graf = (arr[contador]*MAXLENTCONTS)/max;
    graf = Math.floor(graf);
    print(graf);
    
	 }
