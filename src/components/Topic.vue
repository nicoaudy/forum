<template>
  <div>
    <div class="media" v-if="topic">
    	<div class="media-left">		
	    	<a href="#">
	    		<img v-bind:src="topic.user.data.avatar" alt="" class="media-object">
	    	</a>
    	</div>
		<div class="media-body">
			<h3 class="media-heading">
				{{ topic.title }}
			</h3>
			<p>Posted by {{ topic.user.data.username }} - {{ topic.diffForHuman }}</p>
			<p v-html="$options.filters.marked(topic.body)"></p>

			<div class="media" v-for="post in topic.posts.data">
		    	<div class="media-left">		
			    	<a href="#">
			    		<img v-bind:src="post.user.data.avatar" alt="" class="media-object">
			    	</a>
		    	</div>
				<div class="media-body">
					<p>Posted by {{ post.user.data.username }} - {{ post.diffForHumans }}</p>
					<p v-html="$options.filters.marked(post.body)"></p>
				</div>
		    </div>
		    
		    <div class="well" v-if="!auth.user.authenticated">
		    	Sign up or sign in to reply.	
		    </div><hr>

			<form v-on:submit.prevent="replyTopic" v-if="auth.user.authenticated">
				<div class="form-group">
					<textarea v-model="body" rows="6" class="form-control" placeholder="Reply" required></textarea>
				</div>
				<button type="submit" class="btn btn-default">Reply</button>
			</form>
		</div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import marked from 'marked'
import auth from '../auth'

export default {
	data() {
		return {
			topic: null,
			body: '',
      		auth: auth
		}
	}, 
	methods: {
		getTopic() {
			store.getTopicById(this.$route.params.topicId).then(topic => {
				this.topic = topic
			})
		},
		replyTopic() {
			store.replyTopicById(this.topic.id, this.body).then(post => {
				this.topic.posts.data.push(post)
				this.body = ''
			})
		}
	},
	mounted() {
    	auth.check(this)
		this.getTopic()
	},
	filters: {
		marked: marked
	}
}
</script>
