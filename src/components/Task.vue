<template>
  <div :class="$style.task">
    <div :class="[$style.todoTask, taskData.isActive ? $style.todoTaskActive : '']">
      <label class="checkboxContainer">
        <span class="checkboxLabel">{{ taskData.title }}</span>
        <input type="checkbox" checked="checked">
        <span class="checkmark"></span>
        <span class="checkmarkBorder"></span>
      </label>
      <img :class="[$style.closeButton, $style.todoTaskCloseButton]" src="@/assets/icons/close-icon.svg" alt="close-icon">
    </div>
    <SubtaskList />
  </div>
</template>

<script>
import SubtaskList from './SubtaskList.vue'

export default {
  components: {
    SubtaskList,
  },
  props: {
    taskData: {
    default() {
      return {}
    }
  }
  }
}
</script>

<style module lang="scss">
.task {
  display: block;
}
.todoTask {
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
.todoTaskActive {
  border-radius: 10px 10px 0 0;
}
.closeButton {
  cursor: pointer;
}
.todoSubtask {
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
.addSubtask {
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
.addSubtaskInput {
  width: 80%;
  margin-left: 10px;
  background-color: $base-color-pale;
  color: $text-color-dark;
}
.addButton {
  cursor: pointer;
}
</style>