<template>
  <div>
<input :class="$style.newTaskButton" type="text" name="task" placeholder="Add a new task">    
  </div>
</template>

<style  module lang="scss">
.newTaskButton {
  text-align: center;
  width: $width-2;
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
.newTaskButton::placeholder {
  text-align: center;
  color: $text-color-light;
}
</style>