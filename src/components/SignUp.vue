<template>
  <div>
    <div class="alert alert-danger" v-if="error && !success">
        <p>Could not sign you up.</p>
    </div>    
    <div class="alert alert-success" v-if="success">
        <p>You're done! You can now sign in.</p>
    </div>

    <form autocomplete="off" v-on:submit.prevent="signup" v-if="!success">
    	<div class="form-group">
    		<label for="email">Email</label>
    		<input type="email" id="email" v-model="email" class="form-control" placeholder="you@email.com" required>
    	</div>    	
    	<div class="form-group">
    		<label for="username">Username</label>
    		<input type="text" id="username" v-model="username" class="form-control" required>
    	</div>
    	<div class="form-group">
    		<label for="password">Password</label>
    		<input type="password" id="password" v-model="password" class="form-control" required>
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
            email: null,
            username: null,
            password: null,
            success: false,
            error: false,
            response: null
        }
    },
	methods: {
        signup(){
            auth.signup(this, this.username, this.email, this.password)
        }
    }
}
</script>
