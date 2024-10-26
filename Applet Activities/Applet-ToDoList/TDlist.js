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
}