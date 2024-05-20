document.querySelector('.add').addEventListener('click', () => {
    const task = document.querySelector('#task');
    let taskValue = task.value.trim();

    if (!taskValue) {
        alert('Escreva uma tarefa');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <span class="txt-task">${taskValue}</span>
    <p class="options">
        <span class="check-task"><i class="fa-solid fa-check"></i></span>
        <span class="remove-task"><i class="fa-solid fa-trash"></i></span>
    </p>
    `;

    const taskList = document.querySelector('.task-list');
    taskList.appendChild(taskItem);
    task.value = '';
})

document.querySelector('.task-list').addEventListener('click', (event) => {
    if (event.target.closest('.check-task')) {
        const txtTask = event.target.closest('li').querySelector('.txt-task');
        txtTask.style.color = txtTask.style.color === 'rgb(255, 255, 255)' ? '#808080' : '#FFF';
        txtTask.style.textDecoration = txtTask.style.textDecoration === 'none' ? 'line-through' : 'none';
        txtTask.style.fontStyle = txtTask.style.fontStyle === 'normal' ? 'italic' : 'normal';
    }

    if (event.target.closest('.remove-task')) {
        event.target.closest('li').remove();
    }
})