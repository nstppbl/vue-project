import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import todoTask from './components/todo-task.vue'
import todoSubTask from './components/todo-subtask.vue'
import addSubTask from './components/add-subtask.vue'
import addTask from './components/add-task.vue'
import taskQty from './components/task-qty.vue'
import taskStatus from './components/task-status.vue'
import todoForm from './components/todo-form.vue'

Vue.config.productionTip = false

Vue.component('todo-task', todoTask)
Vue.component('todo-subtask', todoSubTask)
Vue.component('add-subtask', addSubTask)
Vue.component('add-task', addTask)
Vue.component('task-qty', taskQty)
Vue.component('task-status', taskStatus)
Vue.component('todo-form', todoForm)


new Vue({
  render: h => h(App)
}).$mount('#app')