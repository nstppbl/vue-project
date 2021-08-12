<template>
  <div class="todo-task">
    <label class="checkbox-container">
      <span class="checkbox-label">Task 1</span>
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
      <span class="checkmark-border"></span>
    </label>
      <img class="close-button todo-task__close-button" src="@/assets/icons/close-icon.svg" alt="close-icon">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

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

</style>