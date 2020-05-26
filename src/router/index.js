import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import AddTask from '../views/AddTask.vue'
import Statistics from '../views/Statistics.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/addTask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/stats',
    name: 'Statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
