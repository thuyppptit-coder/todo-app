const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTaskItem(text) {
  const li = document.createElement('li');
  li.className = 'task-item';
  li.textContent = text;
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
