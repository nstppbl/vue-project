<template>
  <div class="add-subtask">
      <img class="add-button todo-subtask__add-button" src="@/assets/icons/add-icon.png" alt="add-icon">
    <input class="add-subtask-input" type="text" name="subtask" placeholder="Add a new subtask">
  </div>
</template>

<script>
export default {
  name: 'AddSubtask',
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