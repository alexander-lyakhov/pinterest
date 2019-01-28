import * as api from '@/api'
import data from './data.json'

console.log(data)

const state = {
	pins: [],
	cursor: ''
}

const getters = {
	pins(state) {
		return state.pins;
	}
}

const mutations = {
	setPins(state, {data, page}) {
		state.pins = [...state.pins, ...data];
		state.cursor = page.cursor;
	}
}

const actions = {

	fetchPins({commit, state}, accessToken) {
		console.log('fetchPins', accessToken);

		return api.getPins(accessToken, state.cursor).then(
			res => {
				console.log('fetchPins', res)
				commit('setPins', res.data)
			},
			err => {
				throw(err);
			}
		);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}