import Vue from 'vue'
import axios from 'axios'
import router from '../router'

export default {
  user: {
    authenticated: false,
    profile: null
  },
  check(){
    if (localStorage.getItem('id_token') !== null) {
      axios.get('/api/user').then(response => {
        this.user.authenticated = true
        this.user.profile       = response.data.data
      })
    }
  },
  signin(context, email, password){
    axios.post('/api/auth/signin', {
      email: email,
      password: password
    }).then(response => {
      context.error = false
      localStorage.setItem('id_token', response.data.meta.token)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')

      this.user.authenticated = true,
      this.user.profile = response.data.data

      router.push({
        name: 'home'
      })
    }, response => {
      context.error = true
    })
  },
	signup(context, username, email, password){
        axios.post('/api/auth/signup', {
           username: username, 
           email: email, 
           password: password
        })
        .then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    }
}