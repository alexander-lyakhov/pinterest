<template>
	<div id="app">
		<nav-bar v-if="showNavbar" />
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

		created() {
			console.log('app created', this.$route)
			//this.$store.dispatch('getAuthorizationCode')
		},

		computed: {
			showNavbar() {
				return !this.$route.meta.hideNavbar;
			}
		}
	}
</script>

<style lang="scss" scoped>

#app {
	padding-top: 56px;
}
</style>
