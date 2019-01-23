import Vue from "vue";
import Vuex from "vuex";

import * as api from '@/api'

import data from './data.json'

Vue.use(Vuex);

console.log(data)

export default new Vuex.Store({
	state: {
		pins: data,
		authorizationCode: '',
		accessToken: ''
	},

	mutations: {
		setAuthorizationCode(state, code) {
			console.log('setAuthorizationCode', code)
			state.authorizationCode = code;
		},

		setAccessToken(state, token) {
			state.accessToken = token;
		}
	},

	actions: {
		async setAuthorizationCode({commit}, code) {
			commit('setAuthorizationCode', code);
			return code;
		},

		getAccessToken({commit}, code) {
			return api.getAccessToken(code).then(
				res => {
					commit('setAccessToken', res.data.access_token);
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
});
