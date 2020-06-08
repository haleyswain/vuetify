import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resources from '@/components/Resources'
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
      path: '/resources',
      name: 'Resources',
      component: Resources
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
