import Vue from 'vue'
import axios from 'axios'

export default {
  signin(context, email, password){
    axios.post('/api/auth/signin', {
      email: email,
      password: password
    }).then(response => {
      context.error = false
      localStorage.setItem('id_token', response.data.meta.token)
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