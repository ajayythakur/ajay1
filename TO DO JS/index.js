const taskList = [];

const addTask =() =>{
    const name = document.getElementById('name').value;
    console.log(name);

    const tempObj = {
        id: Date.now(),
        taskname : name
    }

    taskList.push(tempObj);
    // console.log(taskList); 
    addTaskonscreen();
}


function addTaskonscreen(){
    const element = document.createElement('div');
    element.setAttribute('class', 'child')   
    
    const existingElement = document.getElementById('parent');
    existingElement.appendChild(element);
    element.innerText = taskList[taskList.length-1].taskname;


}
