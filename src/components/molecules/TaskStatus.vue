<template>
  <div :class="$style.status">
    <label class="statusContainer"> {{ statusData.status }}
      <input type="radio" :checked="statusData.isChecked" name="radio">
        <span :class="statusData.class"></span>
    </label>
  </div>
</template>

<script>

export default {
  props: {
    statusData: {
      default () {
        return {}
      }
    }
  }
}
</script>

<style  module lang="scss">
.status {
  display: flex;
  justify-content: center;
  }
@media (max-width: 400px) {
  .status {
    display: block;
    text-align: center;
  }
  .statusContainer {
    margin: 15px 15px;
  }
}

</style>