<template>
  <div>
    <Task v-for="task in tasks" :key="task.id" :taskData="task"/>
  </div>
</template>

<script>
import Task from '../molecules/Task.vue'

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
          isActive: true,
        },
        {
          id: 2,
          title: "Task 2",
          isActive: true,
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