<template>
  <div id="app">
    <div class="container">
      <div class="todo-form">
        <div class="todo-header">
          to-do list
        </div>
        <div class="todo-body">
            <div class="todo-task todo-task--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 1</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-subtask todo-subtask--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Subtask 1</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-subtask">
              <label class="checkbox-container">
                <span class="checkbox-label">Subtask 2</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-subtask">
              <label class="checkbox-container">
                <span class="checkbox-label">Subtask 3</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="add-subtask">
              <a href="#" class="add-button todo-subtask__add-button">
                <img src="@/assets/icons/add-icon.png" alt="add-icon">
              </a>
            <input class="add-subtask-input" type="text" name="subtask" placeholder="Add a new task">
            </div>
            <div class="todo-task">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 2</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-task">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 3</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-task__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <button class="todo-button">Add a new task</button>
        </div>
        <div class="todo-footer">
          <div class="task-qty">1/3 left</div>
          <div class="task-status">
            <label class="status-container">All
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark-radio checkmark-radio-all"></span>
              </label>
              <label class="status-container">Active
              <input type="radio" name="radio">
              <span class="checkmark-radio checkmark-radio-active"></span>
              </label>
             <label class="status-container">Completed
              <input type="radio" name="radio">
              <span class="checkmark-radio checkmark-radio-completed"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss">

body {
    background: url('./assets/icons/bg-icon.png') no-repeat right, $gradient;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Comfortaa';
}

.todo-form {
    width: 540px;
    background-color: #FFF4E9;
    margin: 0 auto;
    text-align: center;
    color: $text-color-dark;
}


.todo-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: $base-color-dark;
    color: $text-color-dark;
}

.todo-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 480px;
    height: 50px;
    background-color: $base-color-light;
    color: $text-color-dark;
    margin: 0px auto;
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
}

.todo-task--active {
  border-radius: 10px 10px 0 0;
}



.todo-subtask {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 480px;
    height: 50px;
    background-color: $base-color-pale;
    color: $text-color-dark;
    margin: 0px auto;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid $base-color-light;
    border-top: 0;
}

.todo-button {
    width: 480px;
    height: 50px;
    background-color: $base-color-pale;
    margin-bottom: 30px;
    margin-top: 30px;
    border-radius: 10px;
    border-style: dashed;
    border-width: 2px;
    border-color: $base-color-dark;
    color: $text-color-light;
}

.todo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: $base-color-dark;
    color: $text-color-light;
}

.task-status {
  display: flex;
  justify-content: center;
}

.status {
    margin-left: 25px;
    padding: 5px;
    background-color: $base-color-dark;
    color: $text-color-light;
}

.add-subtask {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 480px;
    height: 50px;
    background-color: $base-color-pale;
    color: $text-color-dark;
    margin: 0px auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 0 0 10px 10px;
    border: 1px solid $base-color-light;
    border-top: 0;
}

.add-subtask-input {
    margin-left: 10px;
    background-color: $base-color-pale;
    color: $text-color-dark;
}

.add-subtask-input::placeholder {
    color: $text-color-light;
}


</style>
