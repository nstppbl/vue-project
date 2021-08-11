<template>
  <div id="app">
    <div class="container">
      <div class="todo-form">
        <div class="todo-header">
          to-do list
        </div>
        <div class="todo-body">
          <todo-task></todo-task>
          <todo-subtask></todo-subtask>
          <add-subtask></add-subtask>
          <todo-task></todo-task>
          <todo-task></todo-task>
          <add-task></add-task>
        </div>
        <div class="todo-footer">
          <task-qty></task-qty>
          <task-status></task-status>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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

 .todo-form {
   width: $width-1;
   max-width: 540px;
   background-color: #FFF4E9;
   margin: 0 auto;
   text-align: center;
   color: $text-color-dark;
 }

 .todo-header {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 50px;
   background-color: $base-color-dark;
   color: $text-color-dark;
 }

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