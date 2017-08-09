import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Topics from '@/components/Topics'
import Topic from '@/components/Topic'
import NewTopic from '@/components/NewTopic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/signin',
    	name: 'auth.signin',
    	component: SignIn
    },
    {
    	path: '/signup',
    	name: 'auth.signup',
    	component: SignUp
    },
    {
    	path: '/section/:sectionId',
    	name: 'section',
    	component: Topics
    },
    {
    	path: '/topic/:topicId',
    	name: 'topic',
    	component: Topic
    },
    {
    	path: '/topic/new',
    	name: 'topic.new',
    	component: NewTopic
    }
  ]
})
