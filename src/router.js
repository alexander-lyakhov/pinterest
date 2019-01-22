import Vue from "vue";
import Router from "vue-router";
import login from "./views/login.vue";
import pins from "./views/pins.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "login",
			component: login
		},
		{
			path: "/pins",
			name: "pins",
			component: pins
		},
		{
			path: "/boards",
			name: "boards",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/boards.vue")
		},
		{
			path: "/about",
			name: "about",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/about.vue")
		},
		{
			path: "*",
			component: login
		}
	]
});
