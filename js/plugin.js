// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length+1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask));
}

// Delete task  
function deleteTask(id) {
    // найти по id элемент массива и удалить из массива
    // найти элемент на страницы с таким же id и удалить его из разметки
    if(!Number(id)) return console.log('id must be a number');
    id = String(id);
    let idExist;
    tasks.forEach(task => {
        if (task.id === id){
            idExist = id;
            tasks.splice(task, 1);
        }
    });
    if(!idExist) return console.log(`element with id ${id} is not found`);

    let elements = ul.getElementsByClassName('list-group-item');

    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];
        if (el.getAttribute('data-id') === id){
            el.parentNode.removeChild(el);
            console.log (`element with id ${id} has been deleted successfully`);
      }  
    }
}
deleteTask('abc');
deleteTask('1');
deleteTask('5');
deleteTask(2);

// Alert
function message(text) {      
    // удалять существующий алерт
    // создать элемент div
    // дать ему класс alert alert-info
    // вставить в алерт текст
    // добавить этот алерт в начало контейнра перед формой

    let message = document.querySelector('.alert');
    if (message){
        message.remove();
    }
    const container = document.getElementById('container');
    message = document.createElement('div');
    message.className = 'alert alert-info'; 
    message.innerHTML = text;
    container.insertBefore(message, container.firstChild);
}
message('message_1');
message('message_2');
message('message_3');