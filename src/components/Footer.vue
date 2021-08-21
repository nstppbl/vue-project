<template>
  <div class="todo-footer">
    <TaskQty/>
    <TaskStatus
    v-for="status in statuses"
    :key="status.id"
    :task_status="status"
    />
  </div>
</template>


<script>

import TaskQty from './TaskQty.vue'
import TaskStatus from './TaskStatus.vue'

export default {
  components: {
    TaskQty,
    TaskStatus,
  },
   data() {
    return {
      statuses : [
        {
        id: 1,
        status: "All",
        class: "checkmark-radio-all"
        },
        {
        id:2,
        status: "Active",
        class: "checkmark-radio-active"
        },
        {
        id:3,
        status: "Completed",
        class: "checkmark-radio-completed"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: $base-color-dark;
  color: $text-color-light;
}

@media (max-width: 400px) {

  .todo-footer {
    height: 120px;
  }

  .add-subtask-input {
    letter-spacing: -.5px;
  }

}


</style>