import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			component(resolve) {
				require(['../pages/web/Index.vue'], resolve)
			}
		},
		{
			path: '/Destination',
			name: 'Destination',
			component(resolve) {
				require(['../pages/web/Destination/Destination.vue'], resolve)
			}
		},
		{
			path: '/Destination_Citydetail',
			name: 'Destination_Citydetail',
			component(resolve) {
				require(['../pages/web/Destination/Destination_Citydetail.vue'], resolve)
			}
		},
		{
			path: '/Destination_list_Strategy',
			name: 'Destination_list_Strategy',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_list_Strategy'], resolve)
			}
		},
		{
			path: '/Destination_Countrydetail',
			name: 'Destination_Countrydetail',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_Countrydetail'], resolve)
			}
		},
		{
			path: '/Destination_Citylist',
			name: 'Destination_Citylist',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_Citylist'], resolve)
			}
		},
			{
			path: '/Destination_mguide',
			name: 'Destination_mguide',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_mguide'], resolve)
			}
		},
		{
			path: '/Destination_Landscape_introduction',
			name: 'Destination_Landscape_introduction',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_Landscape_introduction'], resolve)
			}
		},
		{
			path: '/Destination_Continent',
			name: 'Destination_Continent',//:id
			component(resolve) {
				require(['../pages/web/Destination/Destination_Continent'], resolve)
			}
		},
			{
			path: '/Thread',
			name: 'Thread',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread'], resolve)
			},
		// 	 meta: {
		//       requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
		//     },
		//   },
		//   { path: '*', component: P404 }  //这里是保证错误地址会跳转到404界面进行提示
		// },
		},
		{
				path: '/Login',
				name: 'Login',//:id
				component(resolve) {
					require(['../pages/web/Login'], resolve)
				},
		
			},
			{
				path: '/Register',
				name: 'Register',//:id
				component(resolve) {
					require(['../pages/web/Register'], resolve)
				},
		
			},

			{
				path: '/Thread_CompanionsList',
				name: 'Thread_CompanionsList',//:id
				component(resolve) {
					require(['../pages/web/Thread/Thread_CompanionsList'], resolve)
				},
		
			},

		{
			path: '/Thread_CompanionsDetail',
			name: 'Thread_CompanionsDetail',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread_CompanionsDetail'], resolve)
			},
						
		},
		{
			path: '/Thread_Visa',
			name: 'Thread_Visa',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread_Visa'], resolve)
			},
						
		},
		{
			path: '/Thread_Photography',
			name: 'Thread_Photography',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread_Photography'], resolve)
			},
						
		},
		{
			path: '/Thread_Zhuanlan',
			name: 'Thread_Zhuanlan',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread_Zhuanlan'], resolve)
			},
						
		},
		{
			path: '/Thread_Zhuanlan_PersonalDetail',
			name: 'Thread_Zhuanlan_PersonalDetail',//:Zhuanlanbannerid
			component(resolve) {
				require(['../pages/web/Thread/Thread_Zhuanlan_PersonalDetail'], resolve)
			},
						
		},
		{
			path: '/',
			name: 'Thread_ZhuanlanDetail',//:wenzhangid
			component(resolve) {
				require(['../pages/web/Thread/Thread_ZhuanlanDetail'], resolve)
			},
						
		},
			{
			path: '/Thread_Ask',
			name: 'Thread_Ask',//:id
			component(resolve) {
				require(['../pages/web/Thread/Thread_Ask'], resolve)
			},
						
		},
				{
			path: '/About',
			name: 'About',//:id
			component(resolve) {
				require(['../pages/web/About'], resolve)
			},
						
		},
		{
			path: '/Q_PlayList',
			name: 'Q_PlayList',//:id
			component(resolve) {
				require(['../pages/web/Plan/Q_PlanList'], resolve)
			},
						
		},
		{
			path: '/Q_Video',
			name: 'Q_Video',//:Q_VideoDetailid
			component(resolve) {
				require(['../pages/web/Q_Video'], resolve)
			},
						
		},
		{
			path: '/Q_VideoDetail',
			name: 'Q_VideoDetail', //
			component(resolve) {
				require(['../pages/web/Q_VideoDetail'], resolve)
			},
			// 	 meta: {
			//       requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
			//     },
			//   },
			//   { path: '*', component: P404 }  //这里是保证错误地址会跳转到404界面进行提示
			// },		
		},

{
			path: '/TravelAssistant',
			name: 'TravelAssistant', //
			component(resolve) {
				require(['../pages/web/TravelAssistant/TravelAssistant'], resolve)
			},
				
		},
{
			path: '/hotel',
			name: 'hotel', //
			component(resolve) {
				require(['../pages/web/Hotel/hotel'], resolve)
			},
				
		},
{
			path: '/Q_PlanDetail',
			name: 'Q_PlanDetail', //
			component(resolve) {
				require(['../pages/web/Plan/Q_PlanDetail'], resolve)
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
