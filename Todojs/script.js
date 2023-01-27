/*empty array creation */
let mainArr = []; //to push the data
let containerArr = [];

/*checking value  */
function check_item() {
    if (mainArr.length == 0) { //check for  data is empty
        document.querySelector("#msgBox").innerHTML = "No Items in the todo list";
    } else { // if cards are present it will print this
        document.querySelector("#msgBox").style.display = "none"; //this work is the value is been added in array
    }
}
/*contiounly check the fuction check infinite time */
setInterval(() => {
    check_item()
}, 0)



/*if we click add task  it will show the card popup */
function popUp() {
    let popup1 = document.querySelector(".main-popup")
    popup1.style.display = "grid";
}

function popUp_close() {
    let popup1 = document.querySelector(".main-popup")
    popup1.style.display = "none";
}

function main_list() {
    for (obj of mainArr) {
        if (obj.id == val0) {
            obj.content.add(input_list.value)
        }
    }

    var cloning_item = document.querySelector(".text").cloneNode(true);
    cloning_item.innerText = `${input_list.value}`;
    cloning_item.setAttribute('id', `${Date.now()}`);
    cloning_item.setAttribute('value', `${Date.now()}`);
    var markDone_button = document.createElement('button');
    markDone_button.setAttribute('id', `'btnmarkdone${Date.now()}`);
    markDone_button.setAttribute('class', 'btn_mark_done');
    markDone_button.setAttribute('value', `${Date.now()}`);
    markDone_button.setAttribute('onclick', 'markdone(this.value)');
    markDone_button.innerText = 'Done';
    cloning_item.appendChild(markDone_button);
    cloning_item.setAttribute('onClick', "markdone(this.value)");

    document.getElementById(`${val0}`).getElementsByClassName('content')[0].appendChild(cloning_item).appendChild(markDone_button);
    popUp_close_list()
}

/*to insert data */
let val0; 
let title = document.querySelector("#input_text") /*it takes input element from input field from htnl  */
document.querySelector("#btn_add").addEventListener("click", () => {
    let name = title.value;
    let obj = {
        id: Date.now(),  // to get the curent date and time 
        title: name,
        content: new Set() //add a elemnt in our card
    }
    mainArr.push(obj)
    add_task()
})


/*if we click add new list  it will show the card popup */
function popUp_list() {
    let popup1 = document.querySelector(".list-popup")
    popup1.style.display = "grid";
}
function popUp_close_list() {
    let popup1 = document.querySelector(".list-popup")
    popup1.style.display = "none";
}

let list=document.querySelector("#input_list")
function add_list(additem) {
    popUp_list()

    console.log(list0)
    for (obj of mainArr) {
        console.log(list.value)
        if (obj.id == additem) {
            obj.content.add(list.value)

        }
    }
console.log(mainArr)
}


function add_task() {
    var first_card = document.querySelector('.card').cloneNode(true);
    create_card(first_card);
}
function create_card(card) {
    mainArr.forEach(ele => {
        card.id = ele.id;
        card.querySelector("#card_title").innerHTML = ele.title;
        card.querySelector("#card_title").setAttribute('value', `${ele.id}`);
        card.setAttribute("value", `${ele.id}`);
        card.querySelector("#delete").setAttribute("value", `${ele.id}`);
        card.querySelector("#delete").setAttribute("onclick", "deleteCard(this.value)");
        card.querySelector("#edit").setAttribute("value", `${ele.id}`);
        card.querySelector("#edit").setAttribute("onclick", "add_Sub_task(this.value)");
    });
    card.style.display = "block";
    document.querySelector("#cards").appendChild(card); //element to be added
    popUp_close();
}

function add_Sub_task(val) {
    let pop_display = document.querySelector('.list-popup');
    pop_display.style.display = 'grid'
    val0 = val
};


{/* <h2 >data<span ><button id="btn_mark">Mark Done</button></span></h2> */ }

function deleteCard(main) {
    var delete_div = document.getElementById(`${main}`);
    for (obj of mainArr) {
        if (obj.id == main) {
            mainArr.splice(mainArr.findIndex(obj => obj.id == main), 1)
        }
    }
    delete_div.parentNode.removeChild(delete_div); //build in propertirs remove one child from parent.
    console.log(mainArr);
}

function markdone(value){
    const mark = document.getElementById(`${value}`)
    mark.style.textDecoration="line-through";

    document.getElementById(`btnmarkdone${value}`).style.display = "none";

}


