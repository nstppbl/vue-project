<template>
  <div class="todo-header">
    to-do list
  </div>
</template>


<script>
export default {
  name: 'TodoHeader',
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

<style scoped lang="scss">

.todo-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $base-color-dark;
  color: $text-color-dark;
}

</style>