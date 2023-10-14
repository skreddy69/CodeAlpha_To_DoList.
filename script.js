document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function () {
            taskItem.remove();
        });

        const checkbox = taskItem.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskItem.style.textDecoration = 'line-through';
            } else {
                taskItem.style.textDecoration = 'none';
            }
        });
    }
});
    