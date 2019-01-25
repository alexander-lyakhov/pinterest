import * as api from '@/api'
import data from './data.json'

console.log(data)

const state = {
	pins: []
}

const mutations = {
}

const actions = {

	fetchPins({commit}, accessToken) {
		console.log('fetchPins', accessToken);

		return api.getPins(accessToken).then(
			res => {
				console.log(res, res.json())
			}
		);
	}
}

export default {
	state,
	mutations,
	actions
}