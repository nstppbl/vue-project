<template>
  <div :class="$style.todoFooter">
    <TaskQty/>
    <div :class="$style.taskStatusWrap">
      <TaskStatus v-for="status in statuses" :key="status.id" :taskStatusData="status" />
    </div>
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
        class: "checkmarkRadioAll",
        },
        {
        id: 2,
        status: "Active",
        class: "checkmarkRadioActive",
        },
        {
        id: 3,
        status: "Completed",
        class: "checkmarkRadioCompleted",
        }
      ]
    }
  }
}
</script>

<style  module lang="scss">
.todoFooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: $base-color-dark;
  color: $text-color-light;
}
.taskStatusWrap {
  display: flex;
}
@media (max-width: 400px) {
  .todoFooter {
    height: 120px;
  }
  .addSubtaskInput {
    letter-spacing: -.5px;
  }
  .taskStatusWrap {
    display: block;
    justify-content: center;
  } 
}
</style>