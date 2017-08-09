<template>
  <div>
    Home
  </div>
</template>

<script>
import store from '../store'

export default {
	mounted() {
		store.getSections().then(sections => {
			console.log(sections)
		})
	}
}
</script>
