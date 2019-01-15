import Vue from "vue";
import Vuex from "vuex";

import data from './data.json'

Vue.use(Vuex);

console.log(data)

export default new Vuex.Store({
	state: {
		pins: data
	},
	mutations: {},
	actions: {}
});
