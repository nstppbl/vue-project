<template>
  <div class="content">
    <Task class="todo-task--active"></Task>
    <Subtask/>
    <AddSubtask/>
    <Task/>
    <Task/>
    <AddTask/>
  </div>
</template>


<script>

import AddTask from './AddTask.vue'
import AddSubtask from './AddSubtask.vue'
import Task from './Task.vue'
import Subtask from './Subtask.vue'


export default {
  components: {
    AddTask,
    AddSubtask,
    Task,
    Subtask,
  }
}
</script>

<style lang="scss">


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