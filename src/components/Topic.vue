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
			<p>{{ topic.body | marked }}</p>

			<div class="media" v-for="post in topic.posts.data">
		    	<div class="media-left">		
			    	<a href="#">
			    		<img v-bind:src="post.user.data.avatar" alt="" class="media-object">
			    	</a>
		    	</div>
				<div class="media-body">
					<p>Posted by {{ post.user.data.username }} - {{ post.diffForHumans }}</p>
					<div v-html="post.body" filters="marked"></div>
				</div>
		    </div>

		</div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import marked from 'marked'

export default {
	data() {
		return {
			topic: null
		}
	}, 
	methods: {
		getTopic() {
			store.getTopicById(this.$route.params.topicId).then(topic => {
				this.topic = topic
			})
		}
	},
	mounted() {
		this.getTopic()
	},
	filters: {
		marked: marked
	}
}
</script>
