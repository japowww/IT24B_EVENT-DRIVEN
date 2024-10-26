class todolist{
    constructor(){
        this.EditingIndex = -1;
        this.addButton = document.getElementById(`addButton`);
        this.todoInput = document.getElementById('todoInput');  
        this.todoList = document.getElementById('todoList');  
        this.addButton = addEventListener(`click`, () => this.addOrUpdateTask());
        this.todolist.addEventListener(`click`, (e) => this.handlebuttnclic(e));  
    }
    addOrUpdateTask() {
        const taskText = this.todoInput.value.trim();
        if (taskText) {
            if (this.editingIndex === -1) {
                this.addTask(taskText);
            } else {
                this.updateTask(taskText);
            }
            this.todoInput.value = '';
            this.resetEditing();
        }
    }

    addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="timestamp" style="display: block; margin-top: 0.5rem; color: gray;">Date Added: ${new Date().toLocaleString()}</span>
            <div style="margin-top: 0.5rem;">
                <button class="btn btn-success btn-sm doneButton">Done</button>
                <button class="btn btn-warning btn-sm editButton">Edit</button>
                <button class="btn btn-danger btn-sm removeButton">Remove</button>
            </div>
        `;
        this.todoList.appendChild(listItem);
    }
    handleButtonClick(e) {
        const target = e.target;
        const action = target.classList.contains('doneButton') ? 'done' :
                       target.classList.contains('editButton') ? 'edit' :
                       target.classList.contains('removeButton') ? 'remove' : null;

        if (!action) return;

        const taskItem = target.closest('li');

        if (action === 'done') {
            taskItem.querySelector('.task-text').classList.toggle('completed');
        } else if (action === 'edit') {
            this.editTask(taskItem);
        } else if (action === 'remove') {
            taskItem.remove();
        }
    }

    updateTask(taskText) {
        this.todoList.children[this.editingIndex].querySelector('.task-text').textContent = taskText;
    }

    editTask(taskItem) {
        this.todoInput.value = taskItem.querySelector('.task-text').textContent;
        this.editingIndex = Array.from(this.todoList.children).indexOf(taskItem);
        this.addButton.textContent = 'Update';
    }

    resetEditing() {
        this.editingIndex = -1;
        this.addButton.textContent = 'Add';
    }
}

document.addEventListener('DOMContentLoaded', () => new TodoList());