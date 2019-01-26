import * as api from '@/api'

const state = {
	authorizationCode: '',
	accessToken: ''
}

const getters = {
	accessToken(state) {
		console.log('accessToken', state.accessToken)
		return state.accessToken;
	}
}

const mutations = {
	setAuthorizationCode(state, code) {
		state.authorizationCode = code;
	},

	setAccessToken(state, token) {
		state.accessToken = token;
	}
}

const actions = {
	getAccessToken({commit}, code) {

		return api.getAccessToken(code).then(
			res => {
			    console.log('===> res', res)
				commit('setAccessToken', res.access_token);
				return res.data.access_token;
			},
			err => {
				console.log('err', err)
				throw(err);
				//return err
			}
		)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}