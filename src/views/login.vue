<template>
	<main>
		<h2 v-if="!authorizationError">Authorization...</h2>
		<h2 v-else>Authorization failed</h2>
	</main>
</template>

<script>
	import {mapMutations, mapActions} from 'vuex';

	export default {
		name: 'login',

		data() {
			return {
				responseType: 'code',
				appID: '5006601696198022940',
				scope: 'read_public',
				redirect: 'https://localhost:8080/login',

				authorizationError: false
			}
		},

		created() {
			const {
				responseType,
				appID,
				scope,
				redirect
			} = this;

			const {code} = this.$route.query;
			code ?
				this.authorize(code):
				window.location.href = `https://api.pinterest.com/oauth/?response_type=${responseType}&client_id=${appID}&scope=${scope}&redirect_uri=${redirect}`;
		},
		methods: {
			...mapMutations(['setAuthorizationCode']),
			...mapActions(['getAccessToken']),

			authorize(code) {
				this.setAuthorizationCode(code);
				this
					.getAccessToken(code)
					.then(res => {
						this.$router.push({name: 'pins'})
					})
					.catch(err => {
						this.authorizationError = true;
					})
			}
		}
	}
</script>