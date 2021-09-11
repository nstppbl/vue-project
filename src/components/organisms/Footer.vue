<template>
  <div :class="$style.footer">
  <div>
    <div class="taskQty">1/3 left</div>
  </div>
    <div :class="$style.statusWrap">
      <TaskStatus v-for="status in statuses" :key="status.id" :statusData="status"/>
    </div>
  </div>
</template>

<script>
import TaskStatus from '../molecules/TaskStatus.vue'

export default {
  components: {
    TaskStatus,
  },
   data() {
    return {
      statuses : [
        {
        id: 1,
        status: "All",
        class: "checkmarkRadioAll",
        isChecked: true,
        },
        {
        id: 2,
        status: "Active",
        class: "checkmarkRadioActive",
        isChecked: false,
        },
        {
        id: 3,
        status: "Completed",
        class: "checkmarkRadioCompleted",
        isChecked: false,
        }
      ]
    }
  }
}
</script>

<style  module lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.1rem;
  padding-left: 1.87rem;
  padding-right: 1.87rem;
  background-color: $base-color-dark;
  color: $text-color-light;
}
.statusWrap {
  display: flex;
}
@media (max-width: 400px) {
  .footer {
    height: 11.25rem;
  }
  .statusWrap {
    display: block;
    justify-content: center;
  } 
}
</style>