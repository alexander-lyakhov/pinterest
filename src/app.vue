<template>
	<div id="app">
		<nav-bar />
		<router-view></router-view>
	</div>
</template>

<script>
	import navBar from '@/components/nav-bar.vue';

	export default {
		name: 'App',

		components: {
			navBar
		},
	}
</script>

<style lang="scss" scoped>

#app {
	padding-top: 56px;
}
</style>
