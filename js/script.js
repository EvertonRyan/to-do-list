document.querySelector('.add').addEventListener('click', () => {
    const task = document.querySelector('#task');
    const taskList = document.querySelector('.task-list');
    const addTask = document.createElement('li');
    const txtTask = document.createElement('span');
    txtTask.classList = 'txt-task';
    txtTask.innerText = task.value;
    const options = document.createElement('p');
    options.classList = 'options';
    const checkTask = document.createElement('span');
    checkTask.classList = 'check-task';
    checkTask.innerHTML = '<i class="fa-solid fa-check"></i>';
    const removeTask = document.createElement('span');
    removeTask.classList = 'remove-task';
    removeTask.innerHTML = '<i class="fa-solid fa-trash"></i>';
    if (task.value === '') {
        alert('Escreva uma tarefa')
    } else {
        taskList.appendChild(addTask);
        addTask.appendChild(txtTask);
        addTask.appendChild(options);
        options.appendChild(checkTask);
        options.appendChild(removeTask);
        task.value = '';
    }

    checkTask.addEventListener('click', () => {
        if (txtTask.style.textDecoration === 'none') {
            txtTask.style.color = '#808080';
            txtTask.style.textDecoration = 'line-through';
            txtTask.style.fontStyle = 'italic';
        } else {
            txtTask.style.color = '#FFF';
            txtTask.style.textDecoration = 'none';
            txtTask.style.fontStyle = 'normal';
        }
    })

    removeTask.addEventListener('click', () => {
        taskList.removeChild(addTask);
    })
})