<template>
  <div class="task-status">
    <label class="status-container" > {{ task_status.status }}
      <input type="radio" checked="checked" name="radio">
      <Checkmark v-bind:class="[task_status.class]"/>
    </label>
  </div>
</template>

<script>

import Checkmark from './Checkmark.vue'

export default {
  components: {
    Checkmark,
  },
props: {
  task_status: {
    type: Object,
    default() {
      return {}
    }
  }
},
data() {
  return {}
}
}
</script>

<style lang="scss" scoped>

.task-status {
  display: flex;
  justify-content: center;
}

@media (max-width: 400px) {

.task-status {
  display: block;
  text-align: center;
}

.status-container {
  margin: 15px 15px;
}

}


</style>