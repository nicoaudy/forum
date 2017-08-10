<template>
  <div>
    <div class="alert alert-danger" v-if="error">
        <p>Could not sign you in with those details.</p>
    </div>
	<form autocomplete="off" v-on:submit.prevent="signin">
    	<div class="form-group">
    		<label for="email">Email</label>
    		<input type="email" id="email" v-model="email" class="form-control" placeholder="you@email.com" required>
    	</div>
    	<div class="form-group">
    		<label for="password">Password</label>
    		<input type="password" id="password" v-model="password" class="form-control" required>
    	</div>
    	<button type="submit" class="btn btn-default pull-right">Signin</button>
    </form>
  </div>
</template>

<script>
import auth from '../auth'

export default {
    data() {
        return {
            email: null,
            password: null,
            success: false,
            error: false,
            response: null
        }
    },
	methods: {
        signin(){
            auth.signin(this, this.email, this.password)
        }
    }
}
</script>
