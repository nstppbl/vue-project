import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import TodoForm from './components/TodoForm/TodoForm.vue'

Vue.config.productionTip = false


Vue.component('TodoForm', TodoForm)


new Vue({
  render: h => h(App)
}).$mount('#app')