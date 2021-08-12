<template>
  <div class="todo-form">
    <TodoHeader/>
    <TodoTask class="todo-task--active"></TodoTask>
    <TodoSubtask/>
    <AddSubtask/>
    <TodoTask/>
    <TodoTask/>
    <AddTask/>
    <TodoFooter/>
  </div>
</template>


<script>

import AddTask from './AddTask.vue'
import AddSubtask from './AddSubtask.vue'
import TodoTask from './TodoTask.vue'
import TodoSubtask from './TodoSubtask.vue'
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'

export default {
  name: 'TodoForm',
  components: {
    AddTask,
    AddSubtask,
    TodoTask,
    TodoSubtask,
    TodoHeader,
    TodoFooter
  },
  props: [
  ],
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
  },
  computed: {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="scss">


.todo-form {
  width: $width-1;
  max-width: 540px;
  background-color: #FFF4E9;
  margin: 0 auto;
  text-align: center;
  color: $text-color-dark;
}

</style>