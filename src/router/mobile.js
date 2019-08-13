import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	},
	routes: [
		// {
		// 	path: '/',
		// 	name: 'Index',
		// 	component(resolve) {
		// 		require(['../pages/mobile/Index.vue'], resolve)
		// 	}
		// },
		// {
		// 	path: '/',
		// 	name: 'zhuanlan',
		// 	component(resolve) {
		// 		require(['../pages/mobile/Zhuanlan/Zhuanlan.vue'], resolve)
		// 	}
		// },
		{
			path: '/',
			name: 'Biuban',
			component(resolve) {
				require(['../pages/mobile/Biuban/Biuban.vue'], resolve)
			}
		},
	],
})
