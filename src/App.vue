<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
     Header,
     Content,
     Footer,
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