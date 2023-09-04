//Elements to Access
let input = document.getElementById('input');
let button = document.getElementById('add');
let taskName=document.querySelector(".taskName");

//arrays
let todos=[];
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('prevTodos'))||[];
    todos.forEach(todo=>
        {
            input.value=todo;
            addArray();
});
}


//Event-Listeners
button.addEventListener('click',addArray);

//functions

function addArray(){
    if(input.value!='')
    {
    todos.push(input.value);
    console.log(todos);
    displayTodo();
    }
}

function displayTodo(){
    if(input.value!='')
    {
    
    document.querySelector('#todolist').innerHTML+=
    `<div class="newTask">
     <p class="taskName" onclick="strikeOff(this)">
     ${input.value}
     </p>
     <button class="delete" onclick="removeTodo(this)" >
      X
     </button>
    
    </div>`
    
    }
    input.value='';
}

function strikeOff(clickedTodo)
{
    clickedTodo.style="text-decoration:line-through;"
}

 function removeTodo(btn)
 {
    let parent=((btn.parentNode).parentNode);
    parent.removeChild(btn.parentNode);
    let divParent=btn.parentNode;
    let todo=divParent.querySelector('.taskName');
    removeFromArray(todo.innerHTML);

 }

 function removeFromArray(todo)
 {
    let stringTodo=todo.toString().trim();
    console.log(stringTodo);
   
    let x=todos.indexOf(stringTodo);
    console.log(x);
    if(x>-1)
    todos.splice(x,1);
    console.log(todos);
    localStorage.setItem('prevTodos',JSON.stringify(todos));
 }

