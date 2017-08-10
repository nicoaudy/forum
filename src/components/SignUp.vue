<template>
  <div>
    <form autocomplete="off" v-on:submit.prevent="signup">
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
export default {
    data() {
        return {
            email: null,
            username: null,
            password: null,
        }
    },
	methods: {
        signup() {
            console.log(this.email)
        }
    }
}
</script>
