class todolist{
    constructor(){
        this.EditingIndex = -1;
        this.addButton = document.getElementById(`addButton`);
        this.Input = document.getElementById(`Input`);
        this.todolist = document.getElementById(`todolist`);

        this.addButton = addEventListener(`click`, () => this.addOrUpdateTask());
        this.todolist.addEventListener(`click`, (e) => this.handlebuttnclic(e));  
    }
    addOrUpdateTask() {
        const taskText = this.todoInput.value.trim();
        if (taskText) {
            this.editingIndex === -1 ? this.addTask(taskText) : this.updateTask(taskText);
            this.todoInput.value = '';
            this.resetEditing();
        }
    }
    
    addTask(taskText){
const   Listitem = document.createElement(`li`);
Listitem.innerHTML = `
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
}