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
		// {
		// 	path: '/',
		// 	name: 'Destination_Countrydetail',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_Countrydetail'], resolve)
		// 	}
		// },
		// {
		// 	path: '/',
		// 	name: 'Destination_Citylist',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_Citylist'], resolve)
		// 	}
		// },
		// 	{
		// 	path: '/',
		// 	name: 'Destination_mguide',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_mguide'], resolve)
		// 	}
		// },
		// {
		// 	path: '/',
		// 	name: 'Destination_Landscape_introduction',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_Landscape_introduction'], resolve)
		// 	}
		// },
		// {
		// 	path: '/',
		// 	name: 'Destination_Continent',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Destination/Destination_Continent'], resolve)
		// 	}
		// },
		// 	{
		// 	path: '/',
		// 	name: 'Thread',//:id
		// 	component(resolve) {
		// 		require(['../pages/web/Thread/Thread'], resolve)
		// 	},
		// // 	 meta: {
  // //       requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
  // //     },
  // //   },
  // //   { path: '*', component: P404 }  //这里是保证错误地址会跳转到404界面进行提示
		// // },
		// }
			// {
			// 		path: '/',
			// 		name: 'Login',//:id
			// 		component(resolve) {
			// 			require(['../pages/web/Login'], resolve)
			// 		},
			// 
			// 	},
				// 	{
				// 		path: '/',
				// 		name: 'Register',//:id
				// 		component(resolve) {
				// 			require(['../pages/web/Register'], resolve)
				// 		},
				// 
				// 	}
				
				// 	{
				// 		path: '/',
				// 		name: 'Thread_CompanionsList',//:id
				// 		component(resolve) {
				// 			require(['../pages/web/Thread/Thread_CompanionsList'], resolve)
				// 		},
				// 
				// 	},
					
				// {
				// 	path: '/',
				// 	name: 'Thread_CompanionsDetail',//:id
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_CompanionsDetail'], resolve)
				// 	},
				// 				
				// },
				// {
				// 	path: '/',
				// 	name: 'Thread_Visa',//:id
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_Visa'], resolve)
				// 	},
				// 				
				// },
				// {
				// 	path: '/',
				// 	name: 'Thread_Photography',//:id
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_Photography'], resolve)
				// 	},
				// 				
				// },
				// {
				// 	path: '/',
				// 	name: 'Thread_Zhuanlan',//:id
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_Zhuanlan'], resolve)
				// 	},
				// 				
				// },
				// {
				// 	path: '/',
				// 	name: 'Thread_Zhuanlan_PersonalDetail',//:Zhuanlanbannerid
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_Zhuanlan_PersonalDetail'], resolve)
				// 	},
				// 				
				// },
				// {
				// 	path: '/',
				// 	name: 'Thread_ZhuanlanDetail',//:wenzhangid
				// 	component(resolve) {
				// 		require(['../pages/web/Thread/Thread_ZhuanlanDetail'], resolve)
				// 	},
				// 				
				// },
					{
					path: '/',
					name: 'Thread_Ask',//:id
					component(resolve) {
						require(['../pages/web/Thread/Thread_Ask'], resolve)
					},
								
				},
				
	],
    
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
