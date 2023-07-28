let input = document.getElementById('input');
let button = document.getElementById('add');
let todolist = document.getElementById('todolist');


let todos=[];

//button.addEventListener("dblclick",(e)=>{console.log('Double-click works')});
//input.addEventListener('dblclick',()=>{console.log('Hello')});
['click','keypress'].forEach(e=>
button.addEventListener(e,()=>{
let todo=input.value;
todos.push(todo);
console.log(todos);
input.value='';



let txt=document.createElement('p');
txt.innerText=todo;
todolist.appendChild(txt);


txt.addEventListener('click',()=>{
    txt.style.textDecoration = 'line-through';
})

txt.addEventListener('dblclick',()=>{
    let ind=todos.indexOf(todo);
    console.log(todo);
    console.log(ind);
    if(ind>-1){
    todos.splice(ind,1);
    }
    console.log(todos);

    todolist.removeChild(txt);
    })



}
)
);
