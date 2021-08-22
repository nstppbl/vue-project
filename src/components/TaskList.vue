<template>
  <div>
      <Task
      v-for="task in tasks"
      :key="task.title"
      :task_data="task"
      />
  </div>
</template>

<script>

import Task from './Task.vue'

export default {
  components: {
    Task,
  },
  data() {
    return {
      tasks: [
        {
          title: 'Task 1',
          isActive: true,
          activeClass: 'todo-task--active'
        },
        {
          title: 'Task 2',
          isActive: true,
          activeClass: 'todo-task--active'
        },
        {
          title: 'Task 3',
          isActive: true,
          activeClass: 'todo-task--active'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>



</style>