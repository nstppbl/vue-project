<template>
  <div :class="$style.taskStatus">
    <label :class="$style.statusContainer"> {{ taskStatusData.status }}
      <input type="radio" checked="checked" name="radio">
        <span class="checkmarkRadio checkmarkRadioActive"></span>
    </label>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    taskStatusData: {

      default () {
        return {}
      }
    }
  }
}
</script>

<style  module lang="scss">
@import "@/assets/styles/custom-radiobutton.scss";

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