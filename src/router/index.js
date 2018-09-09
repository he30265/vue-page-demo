import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import about from '@/components/about'
import aboutFirst from '@/components/aboutcomponents/aboutFirst'
import aboutSecond from '@/components/aboutcomponents/aboutSecond'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: '',
      component: about,
      children: [
        {
          path: '/',
          name: 'aboutFirst',
          component: aboutFirst
        },
        {
          path: '/aboutSecond',
          name: 'aboutSecond',
          component: aboutSecond
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
