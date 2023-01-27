// let ajay=[21,22,23,24,25];
// function doublevalues(x){
//     return x+10;
// }
// let output=ajay.map(x => x.toString());
// console.log(output);

// let output1=ajay.filter(x => x>21 && x<24);
// console.log("Age greater than", output1)


let random=[5,10,15,20,25];

let maxOfAges = random.reduce((max, curr)=>{
    if(max<curr){
        max = curr;
    };
    return max;
},1);
console.log(maxOfAges);

let pratice=[2,4,10,100,40];
let output=pratice.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    };
    return acc;
},0)
console.log(output);