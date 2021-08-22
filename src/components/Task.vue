<template>
  <div class="task">
    <div class="todo-task" v-bind:class="[task_data.isActive ? task_data.activeClass : '']">
      <label class="checkbox-container">
        <span class="checkbox-label">{{ task_data.title }}</span>
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <span class="checkmark-border"></span>
      </label>
      <img class="close-button todo-task__close-button" src="@/assets/icons/close-icon.svg" alt="close-icon">
    </div>
    <SubtaskList/>
  </div>
</template>

<script>

import SubtaskList from './SubtaskList.vue'

export default {
  components: {
    SubtaskList,
  },
  props: {
    task_data: {
    type: Object,
    default() {
      return {}
    }
  }
  }
}
</script>

<style lang="scss" scoped>

.task {
  display: block;
}

.todo-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $width-2;
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

.close-button {
  cursor: pointer;
}

.todo-subtask {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: $width-2;
  height: 50px;
  background-color: $base-color-pale;
  color: $text-color-dark;
  margin: 0px auto;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid $base-color-light;
  border-top: 0;
  }

.add-subtask {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: $width-2;
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
  width: 80%;
  margin-left: 10px;
  background-color: $base-color-pale;
  color: $text-color-dark;
}

.add-button {
  cursor: pointer;
}


</style>