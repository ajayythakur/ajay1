// // given an array  [2,3,44,55,78] ,print the array which has the cubes of all the value in original array using forEach ,using map and using traditional for loop

// let arr=[2,3,44,55,78];

// let output=arr.map(function cube(x){
//     return x*3;
// })
// console.log(output);

// // for loop
// let product=1;
// arr.forEach(function cubeUsingEach(y){
// for(i=0; i<=arr.length;i++){
// product=arr*3;
// }
// return(product);
// })
// console.log(arr);

// given an array [1,19,23,2,12,17 ]; ,fliter out all the prime numbers from an array


let filterArr=[1,19,23,2,12,17];

let result=filterArr.filter(function (z){
    if(z%1==z && z%filterAr[i]==z){
        return z;
    }
    else{
        console.log("No prime numbers")
    }
});
console.log(result)