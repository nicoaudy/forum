import Vue from 'vue'
import axios from 'axios'

export default {
	signup(context, username, email, password){
        axios.post('/api/auth/signup', {
           username: username, 
           email: email, 
           password: password
        })
        .then(function (response) {
            context.success = true
        }, response => {
            context.response    = response.data
            context.error       = true
        })
    }
}