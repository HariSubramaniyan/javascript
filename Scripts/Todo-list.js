const todolist = [ {
    name : 'hi hari' ,
    duedate : '2025 - 12 -22'},{name: 'this is for test',
        duedate : '2025-12-22'
    }];
renderTodoList();
// document.querySelector(".add-todo-button").addEventListener('click',() =>{
//     AddTodo();
// })

function renderTodoList(){
    let todolistHTML = '';

    for(let i = 0; i< todolist.length;i++){
        const todo = todolist[i];
        const html = `<div>${todo.name}</div> 
        <div>${todo.duedate}</div>
        <button js-delete-todo-button "> delete</button>`;
        todolistHTML += html;
    }
    console.log(todolistHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,index) =>{
            deleteButton.addEventListener('click', () =>{
                todolist.splice(index,1);
                renderTodoList();

            });

        });
}

document.querySelector(".add-todo-button").addEventListener('click',() =>{
    AddTodo();
})

function AddTodo(){
    const inputele = document.querySelector('.js-name-input');
    const name = inputele.value;
    todolist.push(name)
    console.log(todolist);
    inputele.value = '';
}