import Vue from 'vue'
import axios from 'axios'

const store = {}

export default store

store.state = {
	topic: null
}

store.getSections = () => {
	return new Promise((resolve, reject) => {
		axios.get('/api/sections').then(response => {
			resolve(response.data.data)
		})
	})
}

store.getTopicsBySection = (id) => {
	return new Promise((resolve, reject) => {
		axios.get('/api/topic', {params: {'section_id': id}})
		.then(response => {
			resolve(response.data.data)
		})
	})
}

store.getTopicById = (id) => {
	return new Promise((resolve, reject) => {
		axios.get('/api/topic/' + id)
		.then(response => {
			resolve(response.data.data)
		})	
	})
}