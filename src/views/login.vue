<template>
	<main>
		<h2 v-if="!loginError">Authorization...</h2>
		<h2 v-else>Authorization failed</h2>
	</main>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		name: 'login',

		data() {
			return {
				responseType: 'code',
				appID: '5006601696198022940',
				scope: 'read_public',
				redirect: 'https://localhost:8080/login',

				loginError: false
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

			console.log('login', code)

			if (code) {
				this
					.setAuthorizationCode(code)		
					.then(
						code => this.getAccessToken(code)
					)
					.then(
						res => {
							console.log('!!!', res)
							this.$router.push({name: 'pins'})
						}
					)
					.catch(err => {
						console.log('=> !!! getAccessToken Error !!!', err)
						this.loginError = true;
					})
			}
			else {
				window.location.href = `https://api.pinterest.com/oauth/?response_type=${responseType}&client_id=${appID}&scope=${scope}&redirect_uri=${redirect}`;
			}			
		},
		methods: {
			...mapActions(['setAuthorizationCode', 'getAccessToken']),
		}
	}
</script>