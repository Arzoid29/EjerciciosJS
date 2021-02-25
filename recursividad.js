    let fibo=(mes)=>{
    if(mes==0 || mes==1){
    return 1;


    }
    else{


        return console.log(fibo(mes-1)+fibo(mes-2));
    }



    }
    fibo(12);+1