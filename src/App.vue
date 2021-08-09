<template>
  <div id="app">
    <div class="container">
      <div class="todo-form">
        <div class="todo-header">
          to-do list
        </div>
        <div class="todo-body">
            <div class="todo-item todo-item--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 1</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-item__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-item todo-item--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 2</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-item__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="todo-item todo-item--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 3</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button todo-item__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <button class="todo-button">Add a new task</button>
        </div>
        <div class="todo-footer">
          <div class="task-qty">1/3 left</div>
          <div class="task-status">
            <label class="container">All
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark-radio-all"></span>
              </label>
              <label class="container">Active
              <input type="radio" name="radio">
              <span class="checkmark-radio-active"></span>
              </label>
             <label class="container">Completed
              <input type="radio" name="radio">
              <span class="checkmark-radio-completed"></span>
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

.todo-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 480px;
    height: 50px;
    background-color: $base-color-light;
    color: $text-color-dark;
    margin: 30px auto;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
}

.todo-button {
    width: 480px;
    height: 50px;
    background-color: $base-color-pale;
    margin-bottom: 30px;
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




</style>
