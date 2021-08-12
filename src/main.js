import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

Vue.config.productionTip = false


Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('Footer', Footer)


new Vue({
  render: h => h(App)
}).$mount('#app')