<template>
	<div>
	    <div class="media" v-for="topic in topics">
		    <div class="media-left">
		    	<a href="#"><img :src="topic.user.data.avatar"></a>
		    </div>
		  	<div class="media-body">
		  		<h4 class="media-heading">
		  			<router-link :to="{ name: 'topic', params: { topicId: topic.id }}">{{ topic.title }}</router-link>
		  		</h4>
		  		<p class="text-muted">Posted by {{ topic.user.data.username }} - {{ topic.diffForHuman }}</p>
		  	</div>
	  	</div>
	</div>
</template>

<script>
import store from '../store'

export default {
	data() {
		return {
			topics: []
		}
	},
	methods: {
		getTopicsSection() {
			store.getTopicsBySection(this.$route.params.sectionId).then(topics => {
				this.topics = topics
			})
		}
	},
	mounted() {
		this.getTopicsSection()
	}
}
</script>
