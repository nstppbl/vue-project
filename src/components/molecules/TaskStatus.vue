<template>
  <div :class="$style.taskStatus">
    <label :class="$style.statusContainer"> {{ taskStatusData.status }}
      <input type="radio" checked="checked" name="radio">
        <span :class="$style.taskStatusData.class"></span> <!-- здесь должен динамически меняться класс, но он не подтягивается из родителя -->
    </label>
  </div>
</template>

<script>

export default {
  props: {
    taskStatusData: {
      default () {
        return {}
      }
    }
  }
}
</script>

<style module lang="scss">
/* The container */
.statusContainer {
  display: block;
  position: relative;
  padding-left: 35px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
.statusContainer input {
  position: absolute;
  opacity: 0;
}
.checkmarkRadioAll {
  position: absolute;
  top: -9px;
  left: 19px;
  width: 50px;
  height: 30px;
  border-radius: 10px;
}
.statusContainer input:checked~.checkmarkRadioAll {
  border: 1.5px solid;
}
.checkmarkRadioActive {
  position: absolute;
  top: -9px;
  left: 19px;
  width: 72px;
  height: 30px;
  border-radius: 10px;
}
.statusContainer input:checked~.checkmarkRadioActive {
  border: 1.5px solid;
}
.checkmarkRadioCompleted {
  position: absolute;
  top: -9px;
  left: 19px;
  width: 108px;
  height: 30px;
  border-radius: 10px;
}
.statusContainer input:checked~.checkmarkRadioCompleted {
  border: 1.5px solid;
}
.checkmarkRadioAll:hover,
.checkmarkRadioActive:hover,
.checkmarkRadioCompleted:hover {
  cursor: pointer;
}
@media (max-width: 400px) {
  .checkmarkRadioAll {
    left: 49px;
  }
  .checkmarkRadioActive {
    left: 38px;
  }
  .checkmarkRadioCompleted {
    left: 21px;
  }
}
.taskStatus {
  display: flex;
  justify-content: center;
  }
@media (max-width: 400px) {
  .taskStatus {
    display: block;
    text-align: center;
  }
  .statusContainer {
    margin: 15px 15px;
  }
}
</style>