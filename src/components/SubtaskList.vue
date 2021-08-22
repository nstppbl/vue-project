<template>
<div class="subtask">
    <Subtask
      v-for="subtask in subtasks"
      :key="subtask.title"
      :subtask_data="subtask"
  />
  <AddSubtask/>
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
          title: 'Subtask 1',
          isActive: true,
          activeClass: 'todo-subtask--active'
        },
        {
          title: 'Subtask 2',
          isActive: true,
          activeClass: 'todo-subtask--active'
        },
      ]
    }
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

.add-subtask {
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

.add-subtask-input {
  width: 80%;
  margin-left: 10px;
  background-color: $base-color-pale;
  color: $text-color-dark;
}

.add-button {
  cursor: pointer;
}

.add-subtask-input::placeholder {
  color: $text-color-light;
}

</style>