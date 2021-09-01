<template>
  <div :class="$style.subtask">
    <Subtask v-for="subtask in subtasks" :key="subtask.id" :subtask_data="subtask" />
    <AddSubtask />
  </div>
</template>

<script>
import Subtask from './Subtask.vue'
import AddSubtask from './AddSubtask.vue'

export default {
  components: {
    Subtask,
    AddSubtask
  },
    data() {
    return{
      subtasks: [
        {
          id: 1,
          title: 'Subtask 1',
          isActive: true,
        },
        {
          id: 2,
          title: 'Subtask 2',
          isActive: true,
        },
      ]
    }
  }
}
</script>

<style  module lang="scss">
.todoSubtask {
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
.closeButton {
  cursor: pointer;
}
.addSubtask {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: $width-2;
  height: 50px;
  background-color: $base-color-pale;
  color: $text-color-dark;
  margin: 0px auto;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0 0 10px 10px;
  border: 1px solid $base-color-light;
  border-top: 0;
}
.addSubtaskInput {
  width: 80%;
  margin-left: 10px;
  background-color: $base-color-pale;
  color: $text-color-dark;
}
.addButton {
  cursor: pointer;
}
.addSubtaskInput::placeholder {
  color: $text-color-light;
}
</style>