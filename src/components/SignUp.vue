<template>
  <div>
    <form autocomplete="off">
    	<div class="form-group">
    		<label for="email">Email</label>
    		<input type="email" id="email" class="form-control" placeholder="you@email.com" required>
    	</div>    	
    	<div class="form-group">
    		<label for="username">Username</label>
    		<input type="text" id="username" class="form-control" required>
    	</div>
    	<div class="form-group">
    		<label for="password">Password</label>
    		<input type="password" id="password" class="form-control" required>
    	</div>
    	<button type="submit" class="btn btn-default pull-right">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
	
}
</script>
