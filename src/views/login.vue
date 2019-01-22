<template>
	<main>
		<h2>Authorization...</h2>
	</main>
</template>

<script>
	export default {
		name: 'login',

		data() {
			return {
				responseType: 'token',
				appID: '5006601696198022940',
				scope: 'read_public',
				redirect: 'https://localhost:8080/pins'
			}
		},

		created() {
			const {
				responseType,
				appID,
				scope,
				redirect
			} = this;

			window.location.href = `https://api.pinterest.com/oauth/?response_type=${responseType}&client_id=${appID}&scope=${scope}&redirect_uri=${redirect}`;
		}
	}
</script>

<style lang="scss" scoped>
</style>