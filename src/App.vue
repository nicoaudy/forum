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
            <li><a href="#">Home</a></li>
            <li><a href="#">Post a topic</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up</a></li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">Hi, Nico
					<span class="caret"></span>
				</a>
				<ul class="dropdown-menu">
            		<li><a href="#">Sign out</a></li>
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
export default {
  name: 'app'
}
</script>

<style scoped>
	.content {
		margin-top: 50px
	}
</style>
