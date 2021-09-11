<template>
  <div :class="$style.title">
    to-do list
  </div>
</template>

<style  module lang="scss">
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.1rem;
  background-color: $base-color-dark;
  color: $text-color-dark;
}
</style>