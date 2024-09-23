"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <span class="task-remove">✖</span>
            `;
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.addEventListener('change', () => {
                const taskSpan = li.querySelector('.task-text');
                if (checkbox.checked) {
                    taskSpan.classList.add('task-completed');
                }
                else {
                    taskSpan.classList.remove('task-completed');
                }
            });
            const removeButton = li.querySelector('.task-remove');
            removeButton.addEventListener('click', () => {
                li.remove();
            });
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
