import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'http://forum-api.dev'

const store = {}

export default store

store.state = {
	topic: null
}

store.getSections = () => {
	return new Promise((resolve, reject) => {
		Vue.http.get('api/sections').then(response => {
			resolve(response.data.data)
		})
	})
}

store.getTopicsBySection = (id) => {
	return new Promise((resolve, reject) => {
		Vue.http.get('api/topic', {params: {'section_id': id}}).then(response => {
			resolve(response.data.data)
		})
	})
}