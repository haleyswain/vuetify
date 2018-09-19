import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Tech from '@/components/Tech'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/tech',
      name: 'Tech',
      component: Tech
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }

  ]
})
