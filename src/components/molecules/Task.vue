<template>
  <div :class="$style.task">
    <div :class="$style.todoTask">
      <label class="checkboxContainer">
        <span class="checkboxLabel">{{ taskData.title }}</span>
        <input type="checkbox" :checked="taskData.isActive">
        <span class="checkmark"></span>
        <span class="checkmarkBorder"></span>
      </label>
      <img :class="$style.closeButton" src="@/assets/icons/close-icon.svg" alt="close-icon">
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
  height: 3.1rem;
  background-color: $base-color-light;
  color: $text-color-dark;
  margin: 1.87rem auto 0;
  padding: 0 1.25rem;
  border-radius: 10px;
}
.todoTaskActive {
  border-radius: 10px 10px 0 0;
}
.closeButton {
  cursor: pointer;
}
</style>