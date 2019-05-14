import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	mode: 'history',
 	routes: [
	// {
	// 	path: '/',
	// 	name: 'Index',
	// 	component(resolve) {
	// 		require(['../pages/web/Index.vue'], resolve)
	// 	}
	// },
	// {
	// 	path: '/',
	// 	name: 'Destination',
	// 	component(resolve) {
	// 		require(['../pages/web/Destination/Destination.vue'], resolve)
	// 	}
	// },
	// {
	// 	path: '/',
	// 	name: 'Destination_Citydetail',
	// 	component(resolve) {
	// 		require(['../pages/web/Destination/Destination_Citydetail.vue'], resolve)
	// 	}
	// },
		// {
		// 	path: '/',
		// 	name: 'Destination_list_Strategy',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_list_Strategy'], resolve)
		// 	}
		// },
		{
			path: '/',
			name: 'Destination_Countrydetail',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_Countrydetail'], resolve)
			}
		},
	],

	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
