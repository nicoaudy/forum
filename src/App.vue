<template>
  <div id="app">

  	<nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Forum</a> 
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li>
            	<router-link :to="{ name: 'home'}">Home</router-link>
            </li>
            <li  v-if="auth.user.authenticated">
            	<router-link :to="{ name: 'topic.new' }">Post a new topic</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="!auth.user.authenticated">
            	<router-link :to="{ name: 'auth.signin' }">Sign in</router-link>
            </li>
            <li v-if="!auth.user.authenticated">
            	<router-link :to="{ name: 'auth.signup' }">Sign up</router-link>
            </li>
      			<li class="dropdown"  v-if="auth.user.authenticated">
      				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hi, {{ auth.user.profile.username }}
      					<span class="caret"></span>
      				</a>
      				<ul class="dropdown-menu">
            		<li><a href="#" v-on:click="signout">Sign out</a></li>
      				</ul>
      			</li> 
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    
    <div class="container content">
    	<div class="panel panel-default">
	    	<div class="panel-body">
	    		<router-view></router-view>
	    	</div>
    	</div>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted">Built with love - NicoAudy</p>
      </div>
    </footer>

  </div>
</template>

<script>
import auth from './auth/'

export default {
  data() {
    return {
      auth: auth
    }
  },
  methods: {
    signout() {
      auth.signout()
    }
  },
  mounted() {
    auth.check(this)
  }
}
</script>

<style scoped>
	.content {
		margin-top: 50px
	}
</style>
