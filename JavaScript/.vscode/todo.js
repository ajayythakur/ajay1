let btnElement=document.getElementById("btn");
let inputElement=document.getElementById("input");
let list=document.getElementById("list");
btnElement.addEventListener("click",function(){
    let value=inputElement.value;
    // Creat element in js 
    let liElement=document.createElement("li"); // it creates dom element
  
   // liElement.innerText=value;
   //liElement.innerHTML=value+'<button type="button" class="btn btn-info">Info</button>'
   // template literals syntax
   liElement.innerHTML=`${value} <button type="button" class="btn btn-info">Delete</button>`
   liElement.addEventListener("click",function(event){
  //event.target actually gives us the exact element on which the inteaction  has happened by the user

  list.removeChild(event.target);
   //console.log(event.target.tagName);
 // list.removeChild(event.target);
// if(event.target.tagName)
if(event.target.tagName=="BUTTON"){
    // it will return the parent element of event.target
    let parentElement=event.target.parentElement
       // then only i will perform the delete operation
    //console.log(parentElement)
     list.removeChild(parentElement);  // remove Child works only for child element 
}

   })
    list.appendChild(liElement);
})
// selectt the button and add the listener
// div select
//  let divElment=document.getElementById("div");
// console.log(divElment.innerHTML); // inner html will give you all the html  
// console.log(divElment.innerText);  // will return only text content ,it will strip off ,it will not give you the html elements
