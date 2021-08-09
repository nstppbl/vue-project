<template>
  <div id="app">
    <div class="container">
      <div class="form-header">
        <div class="title form-header__title">to-do list</div>
      </div>
      <div class="form-body">
            <div class="item form-bodyitem form-bodyitem--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 1</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
              <a href="#" class="close-button form-body__close-button">
                <img src="@/assets/icons/close-icon.svg" alt="close-icon">
              </a>
            </div>
            <div class="item form-bodyitem form-bodyitem--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 2</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
                <a href="#" class="close-button form-body__close-button">
                  <img src="@/assets/icons/close-icon.svg" alt="close-icon">
                </a>
            </div>
            <div class="item form-bodyitem form-bodyitem--active">
              <label class="checkbox-container">
                <span class="checkbox-label">Task 3</span>
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="checkmark-border"></span>
              </label>
                <a href="#" class="close-button form-body__close-button">
                  <img src="@/assets/icons/close-icon.svg" alt="close-icon">
                </a>
            </div>
      <button class="button form-body__button">Add a new task</button>
    </div>
    <div class="form-footer">
      <div class="task-qty form-footer__task-qty">1/3 left</div>
      <div class="task-status">
        <button class="status task-statusstatus task-statusstatus--active">All</button>
        <button class="status task-status__status">Active</button>
        <button class="status task-status__status">Completed</button>
      </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">


body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: $background-gradient;
    overflow: hidden;
    font-family: 'Comfortaa';
}


%flex-element-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }


.container {
    width: 540px;
    background-color: #FFF4E9;
    margin: 0 auto;
    text-align: center;
    color: $text-color-dark;
}
.form-header {
    @extend %flex-element-center;
    height: 50px;
    background-color: $base-color ;
  &__title {
  }
}

.form-body {
  &__item {
            display: flex;
            justify-content: space-between;
            width: 480px;
            height: 50px;
            background-color: $base-color;
            margin: 30px auto;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 10px;
            @extend %flex-element-center;

  }

  &__item--active {
  }

  &__button {
            width: 480px;
            height: 50px;
            background-color: #FFECD8;
            margin: 30px auto;
            border-radius: 10px;
            border-style: dashed;
            border-width: 2px;
            border-color: $base-color;
            @extend %flex-element-center;
  }
}
.item {
    display: flex;
}
.button {
    color: rgba(255, 202, 147, 1);
}
.form-footer {
    @extend %flex-element-center;
    justify-content: space-between;
    height: 50px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: $base-color ;
    color: $text-color-light;
  &__task-qty {
  }
}
.task-qty {
}
.task-status {
    display: flex;
  &__status {
  }

  &__status--active {
            border-radius: 5px;
            border-style: solid;
            border-width: 1px;
            border-color: $text-color-light;
  }
}
.status {
    margin-left: 25px;
    padding: 5px;
    background-color: $base-color;
    color: $text-color-light;
}





</style>
