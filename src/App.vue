<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
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
  font-family: 'Comfortaa';
}
#app {
  overflow: auto;
}
@media (max-width: 400px) {
  #app {
    width: $width-2;
  }
}
</style>