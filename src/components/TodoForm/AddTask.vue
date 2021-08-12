<template>
  <div>
<input class="new-task-button" type="text" name="task" placeholder="Add a new task">    
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

 .new-task-button {
   text-align: center;
   width: $width-2;
   height: 50px;
   background-color: $base-color-pale;
   margin-bottom: 30px;
   margin-top: 30px;
   border-radius: 10px;
   border-style: dashed;
   border-width: 2px;
   border-color: $base-color-dark;
   color: $text-color-light;
 }

 .new-task-button::placeholder {
   text-align: center;
   color: $text-color-light;
 }

</style>