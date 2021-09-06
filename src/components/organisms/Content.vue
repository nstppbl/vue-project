<template>
  <div :class="$style.content">
    <TaskList/>
    <AddTask/>
  </div>
</template>

<script>
import TaskList from '../organisms/TaskList.vue'
import AddTask from '../atoms/AddTask.vue'

export default {
  components: {
    TaskList,
    AddTask,
  }
}
</script>

<style  module lang="scss">
.content {
  width: $width-1;
  max-width: 540px;
  background-color: #FFF4E9;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;
  color: $text-color-dark;
}
@media (max-width: 600px) {
  .content {
    width: $width-3;
  }
}



</style>