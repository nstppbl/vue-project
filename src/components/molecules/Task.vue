<template>
  <div :class="$style.task">
    <div :class="$style.todoTask">
      <label class="checkboxContainer">
        <span class="checkboxLabel">{{ taskData.title }}</span>
        <input type="checkbox" :checked="taskData.isActive">
        <span class="checkmark"></span>
        <span class="checkmarkBorder"></span>
      </label>
      <img :class="[$style.closeButton, $style.todoTaskCloseButton]" src="@/assets/icons/close-icon.svg" alt="close-icon">
    </div>
  </div>
</template>

<script>
export default {
  components: {
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
.addButton {
  cursor: pointer;
}
</style>