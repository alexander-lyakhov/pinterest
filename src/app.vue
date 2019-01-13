<template>
	<div id="app">
		<nav-bar />
		<router-view></router-view>
	</div>
</template>

<script>
	import navBar from '@/components/nav-bar';

	export default {
		name: 'App',

		components: {
			navBar
		},
	}
</script>

<style lang="scss" scoped>
</style>
