import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routers: [
    {
      path:'/',
      name:'Hello',
      component:Hello
    }
  ]
})