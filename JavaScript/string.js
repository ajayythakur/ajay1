let S="AasDd"
{
  let first=0;
  let second=0;
  let B=[];
  for(let i=0;i<=S.length;i++){
    if(S[i]==A){
      first++;
    }
    else if(S[i]==D){
      second++;
       B.push(second);

    }
  }
          B.push(first);
          B.push(second);


return (B);
}
console.log(B);