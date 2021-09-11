<template>
  <div>
    <input :class="$style.button" type="text" name="task" placeholder="Add a new task">    
  </div>
</template>

<style  module lang="scss">
.button {
  text-align: center;
  width: $width-2;
  height: 3.1rem;
  background-color: $base-color-pale;
  margin: 1.87rem 0;
  border-radius: 10px;
  border-style: dashed;
  border-width: 2px;
  border-color: $base-color-dark;
  color: $text-color-light;
  cursor: pointer;
}
.button::placeholder {
  text-align: center;
  color: $text-color-light;
}
</style>