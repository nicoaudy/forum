<template>
  <div>
  	<h3>Sections</h3><hr>
  	<ul class="list-unstyled">
  		<li class="well" v-for="section in sections">
  			<h4>
  				<router-link :to="{ name: 'section', params: {sectionId: section.id} }">{{ section.title }}</router-link>
  			</h4>
  			<p>{{ section.description }}</p>
  		</li>
  	</ul>
  </div>
</template>

<script>
import store from '../store'

export default {
	data() {
		return {
			sections: []
		}
	}, 
	methods: {
		getSections() {
			store.getSections().then(sections => {
				this.sections = sections
			})
		}
	},
	mounted() {
		this.getSections()
	}
}
</script>
