<template>
  <div>
  	<p v-if="!auth.user.authenticated">Please sign in before posting a topic</p>
    
    <form v-if="auth.user.authenticated" v-on:submit.prevent="postTopic">
    	<div class="form-group">
    		<label for="section">Section</label>
    		<select id="section" class="form-control" v-model="section" required>
    			<option v-for="section in sections" v-bind:value="section.id">{{ section.title }}</option>
    		</select>
    	</div>
    	<div class="form-group">
    		<label for="title">Title</label>
    		<input type="text" id="title" class="form-control" v-model="title">
    	</div>
    	<div class="form-group">
    		<label for="body">body</label>
    		<textarea id="body" rows="8" v-model="body" class="form-control"></textarea>
    	</div>
    	<button type="submit" class="btn btn-primary">Create topic</button>
    </form>
  </div>
</template>

<script>
import auth from '../auth'
import store from '../store'
import router from '../router'

export default {
	data() {
		return {
			auth: auth,
			sections: [],
			section: null,
			title: null,
			body: null,
		}
	},
	methods: {
		postTopic(){
			store.createTopic(this.section, this.title, this.body).then(topic => {
				router.push({
					name: 'topic',
					params: {
						topicId: topic.id
					}
				})	
			})
		}
	},
	mounted() {
		store.getSections().then(sections => {
			this.sections = sections
			this.section = sections[0].id
		})
	}	
}
</script>
