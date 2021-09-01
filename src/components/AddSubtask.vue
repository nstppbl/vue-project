<template>
  <div :class="$style.addSubtask">
      <img :class="$style.addButton" src="@/assets/icons/add-icon.png" alt="add-icon">
    <input :class="$style.addSubtaskInput" type="text" name="subtask" placeholder="Add a new subtask">
  </div>
</template>

<style  module lang="scss">
.addSubtask {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: $width-2;
  height: 50px;
  background-color: $base-color-pale;
  color: $text-color-dark;
  padding-left: 20px;
  margin: 0px auto;
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
.addSubtaskInput::placeholder {
  color: $text-color-light;
}
</style>