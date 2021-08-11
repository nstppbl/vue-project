<template>
  <div class="task-status">
    <label class="status-container">All
      <input type="radio" checked="checked" name="radio">
      <span class="checkmark-radio checkmark-radio-all"></span>
    </label>
    <label class="status-container">Active
      <input type="radio" name="radio">
      <span class="checkmark-radio checkmark-radio-active"></span>
    </label>
    <label class="status-container">Completed
      <input type="radio" name="radio">
      <span class="checkmark-radio checkmark-radio-completed"></span>
    </label>
  </div>
</template>

<script>
export default {
  components: {
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

<style lang="scss" scoped>

.task-status {
  display: flex;
  justify-content: center;
}

@media (max-width: 400px) {


.task-status {
  display: block;
}

.status-container {
  margin: 15px 15px;
}


}


</style>