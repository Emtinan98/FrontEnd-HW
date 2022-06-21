function summation(N) {
     total = 0;
      for( i = 1; i <= N; i++){
        total += i;
      }
      return console.log(total);
  }
  
summation(5)

function summationEven(N) {
    total = 0;
     for( i = 1; i <= N; i++){
        if (i%2==0){
            total += i; 
        }
     }
     return console.log(total);
 }

summationEven(5)

