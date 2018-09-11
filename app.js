const APP = new Vue({
  el: "#app",
  data: {
    todoList: localStorage.todoList ? JSON.parse(localStorage.todoList) : [],
    currentTodoTitle: "",
    showDone: false
  },
  methods: {
    toggleComplete(i) {
      const clickedTodoItem = this.todoList[i];
      clickedTodoItem.isDone = !clickedTodoItem.isDone;
      this.commitChanges();
    },

    commitChanges() {
      localStorage.todoList = JSON.stringify(this.todoList);
    },

    getStoredData() {
      this.todoList = localStorage.todoList
        ? JSON.parse(localStorage.todoList)
        : [];
    },

    addTodo() {
      if (this.currentTodoTitle == "") {
        return;
      }
      this.todoList.unshift({
        title: this.currentTodoTitle,
        isDone: false
      });
      this.currentTodoTitle = "";
      this.commitChanges();
    },

    removeTodo(i) {
      if (
        confirm(
          `Do you realy want to delete this todo item ? \n '${
            this.todoList[i].title
          }'`
        )
      ) {
        this.todoList.splice(i, 1);
        this.commitChanges();
      }
    }
  }
});
