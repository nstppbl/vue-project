<template>
  <div>
    <Task v-for="task in tasks" :key="task.id" :taskData="task"/>
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
          id: 1,
          title: "Task 1",
          isActive: false,
        },
        {
          id: 2,
          title: "Task 2",
          isActive: false,
        },
        {
          id: 3,
          title: "Task 3",
          isActive: false,
        }
      ]
    }
  }
}
</script>