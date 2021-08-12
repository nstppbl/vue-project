<template>
  <div class="todo-subtask todo-subtask--active">
    <label class="checkbox-container">
      <span class="checkbox-label">Subtask 1</span>
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
      <span class="checkmark-border"></span>
    </label>
      <img class="close-button todo-task__close-button" src="@/assets/icons/close-icon.svg" alt="close-icon">
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

  .todo-subtask {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $width-2;
    height: 50px;
    background-color: $base-color-pale;
    color: $text-color-dark;
    margin: 0px auto;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid $base-color-light;
    border-top: 0;
  }

.close-button {
  cursor: pointer;
}

</style>