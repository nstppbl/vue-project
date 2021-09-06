<template>
  <div :class="$style.todoHeader">
    to-do list
  </div>
</template>

<style  module lang="scss">
.todoHeader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $base-color-dark;
  color: $text-color-dark;
}
</style>