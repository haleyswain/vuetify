import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Projects from '@/components/Projects'
import Tech from '@/components/Tech'

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
      projects: 'Articles',
      component: Articles
    },
    {
      path: '/projects',
      projects: 'Projects',
      component: Projects
    },
    {
      path: '/tech',
      projects: 'Tech',
      component: Tech
    }

  ]
})
