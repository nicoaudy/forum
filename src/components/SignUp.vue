<template>
  <div>
    <div class="alert alert-danger" v-if="error">
        <p>Could not sign you up.</p>
    </div>    
    <div class="alert alert-success" v-if="success">
        <p>You're done! You can now sign in.</p>
    </div>

    <form autocomplete="off" v-on:submit.prevent="signup">
    	<div class="form-group">
    		<label for="email">Email</label>
    		<input type="email" id="email" v-model="form.email" class="form-control" placeholder="you@email.com" required>
    	</div>    	
    	<div class="form-group">
    		<label for="username">Username</label>
    		<input type="text" id="username" v-model="form.username" class="form-control" required>
    	</div>
    	<div class="form-group">
    		<label for="password">Password</label>
    		<input type="password" id="password" v-model="form.password" class="form-control" required>
    	</div>
    	<button type="submit" class="btn btn-default pull-right">Signup</button>
    </form>
  </div>
</template>

<script>
import auth from '../auth'

export default {
    data() {
        return {
            form: {
                email: null,
                username: null,
                password: null,
            },
            success: false,
            error: false,
            response: null
        }
    },
	methods: {
        signup(){
            auth.signup(this, this.form.username, this.form.email, this.form.password)
        }
    }
}
</script>
