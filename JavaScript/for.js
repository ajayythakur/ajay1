// function sumofNnumbers(n){
//     let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
//     console.log(i)    
// }
// return sum;
// }
// let sum = sumofNnumbers(5)
// console.log("Total sum is " + sum);

// console.log("product of N number")
// function prodNnumber(n){
//     let product=1;
//     for(i=1;i<=n;i++){
//         product=product*i;
//         console.log(i);
//     }
//     return(product);
// }
// let product=prodNnumber(3);
// console.log("Product is " + product)


function even(n){
    for(i=1;i<=n;i++){
        if(i%2==0){
            console.log(i,"Even No.",);
        }
        else if(i%2!==0){
            console.log(i,"Odd Number.")
        }
        else{
            console.log("Enter a valid no.")
        }
        
    }
    return(i);
}
console.log(even());