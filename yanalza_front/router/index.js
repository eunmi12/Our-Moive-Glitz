import { createRouter, createWebHistory } from 'vue-router'


//승호작성

//승호작성완

//진우작성

//진우작성완

//은미작성

//은미작성완


//재영작성
import MainPage from '../views/MainPage.vue'
//재영작성완

//회창작성

//회창작성완

//아름작성

//아름작성완

//치혁작성

//치혁작성완
const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //승호작성

//승호작성완


//진우작성

//진우작성완


//은미작성


//은미작성완


//재영작성

//재영작성완


//회창작성


//회창작성완

//아름작성

//아름작성완

//치혁작성

//치혁작성완

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router