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
routes: [{
			path: '/',
			name: 'Index',
			component(resolve) {
				require(['../pages/mobile/Index.vue'], resolve)
			}

		},
// 
// 		{
// 			path: '/Serve_gonggao',
// 			name: 'Serve_gonggao',
// 			component(resolve) {
// 				require(['../pages/mobile/serve/Serve_gonggao'], resolve)
// 			}
// 		},
// 		{
// 			path: '/Serve_zhengce',
// 			name: 'Serve_zhengce',
// 			component(resolve) {
// 				require(['../pages/mobile/serve/Serve_zhengce'], resolve)
// 			}
// 		},
// 		{
// 			path: '/Serve_linian',
// 			name: 'Serve_linian',
// 			component(resolve) {
// 				require(['../pages/mobile/serve/Serve_linian'], resolve)
// 			}
// 		},
// 		{
// 			path: '/Detail', //:id
// 			name: 'Detail',
// 			component(resolve) {
// 				require(['../pages/mobile/Detail.vue'], resolve)
// 			}
// 		},
// 		{
// 			path: '/Product_list/', //:id
// 			name: 'Product_list',
// 			component(resolve) {
// 				require(['../pages/mobile/Product_list.vue'], resolve)
// 			}
// 		},
// 		{
// 			path: '/Product',
// 			name: 'Product',
// 			component(resolve) {
// 				require(['../pages/mobile/Product.vue'], resolve)
// 			}
// 		},
		//         {
		//             path: '/preferential-list',
		//             name: 'preferential_list',
		//             component(resolve){
		//                 require(['../pages/mobile/PreferentialList.vue'],resolve)
		//             }
		//         },
		//         {
		//             path: '/dialing/:id',
		//             name: 'dialing',
		//             component(resolve){
		//                 require(['../pages/mobile/Dialing.vue'],resolve)
		//             }
		//         },
		//         {
		//             path: '/detail/:id',
		//             name: 'detail',
		//             component(resolve){
		//                 require(['../pages/mobile/Detail.vue'],resolve)
		//             }
		//         },
		//         {
		//             path:'/home/call-customer',
		//             name:'call',
		//             component(resolve){
		//                 require(['../pages/mobile/Call.vue'],resolve)
		//             }
		//         },
		//         {
		//             path:'/test',
		//             name:'test',
		//             component(resolve){
		//                 require(['../pages/mobile/Test.vue'],resolve)
		//             }
		//         }
		
		
	],


})
