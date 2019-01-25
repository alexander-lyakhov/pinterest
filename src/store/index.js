import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth';
import pins from './modules/pins';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth,
		pins
	}
});
