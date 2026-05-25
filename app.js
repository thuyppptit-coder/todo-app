const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTaskItem(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Xóa';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.append(taskText, deleteButton);
    return li;
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        return;
    }

    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addTask();
    }
});
