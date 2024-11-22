let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let tasks = JSON.parse(localStorage.getItem('@listTask')) || [];

function renderTasks(){
    listElement.innerHTML = '';

    tasks.map((todo)=>{
        let liElement = document.createElement('li');
        let taskText = document.createTextNode(todo);

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        let linkText = document.createTextNode('excluir');
        linkElement.appendChild(linkText);

        let position = tasks.indexOf(todo);

        linkElement.setAttribute('onclick', `dellTask(${position})`);

        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);

    });
}

renderTasks();

function addTask(){
    if(inputElement.value === ''){
        alert('Digite alguma tarefa!');
        return false;
    }else{
        let newTask = inputElement.value;

        tasks.push(newTask);
        inputElement.value = '';
        
        renderTasks();
        saveData();
    }
}

buttonElement.onclick = addTask;

function dellTask(position){
    tasks.splice(position, 1);
    renderTasks();
    saveData();
}

function saveData(){
    localStorage.setItem('@listTask', JSON.stringify(tasks));
}