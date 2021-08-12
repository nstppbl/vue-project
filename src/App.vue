<template>
  <div id="app">
    <TodoForm></TodoForm>
  </div>
</template>

<script>

import todoForm from './components/TodoForm/TodoForm.vue'

  export default {
  components: {
     todoForm,
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




<style lang="scss">

body {
  background: url('./assets/icons/bg-icon.png') no-repeat right, $gradient;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Comfortaa';
}

</style>