// find out all the primes numbers in an array using foreach loop
let arr=[1,2,3,4,5,6,7,8,9,10];
function checkPrime(num){
    if (num==0){
      return false;
    }
      else if (num==1){
        return true;
      }
      else{
    
        // run our for loop 
        for (let i=2;i<num;i++){
    
          if(num%i==0){
            return false
          }
          
        }
    
        
      }
    
    
      return true
    
      
    }

arr.forEach(function cb(x) {
   let a=checkPrime(x)
   if(a==true){
    console.log("Prime no.")
   }
   else{
    console.log("Not a prime no.")
   }
    console.log(x);
} )











// find out the largest number in an array using forEach loop