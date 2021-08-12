<template>
  <div class="todo-footer">
    <TaskQty></TaskQty>
    <TaskStatus></TaskStatus>
  </div>
</template>


<script>

import TaskQty from './TaskQty.vue'
import TaskStatus from './TaskStatus.vue'


export default {
  name: 'TodoFooter',
  components: {
    TaskQty,
    TaskStatus,
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


</style>