import Vue from 'vue'
import axios from 'axios'

const store = {}

export default store

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

store.replyTopicById = (id, body) => {
	return new Promise((resolve, reject) => {
		axios.post('/api/topic/' + id + '/post', {
			body: body
		})
		.then(response => {
			resolve(response.data.data)
		})
	})
}

store.createTopic = (section, title, body) => {
	return new Promise((resolve, reject) => {
		axios.post('/api/topic', {
			section_id: section, 
			title: title,
			body: body
		})
		.then(response => {
			resolve(response.data.data)
		}, response => {
			reject(response.data)
		})
	})
}