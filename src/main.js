import '@/assets/css/public.css'
import axios from 'axios'
import m_router from './router/mobile.js'
import w_router from './router/web.js'

import MApp from './Mobile'
import WApp from './Web'
import VueAxios from 'vue-axios'
import Global from '../src/pages/web/compoents/Global.vue'

 Vue.prototype.Global = Global//挂载到Vue实例上面
//判断PC或mobile
let role = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
let router = null;
let App = null;
if(navigator.userAgent.match(role) ||window.location.href.match(/mobile=true/i)){
    router = m_router;
    App = MApp;
} else {
    router = w_router;
    App = WApp;
}
Vue.use(Global);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
require('./mock');
const ADD_COUNT = 'ADD_COUNT'; // 用常量代替事件类型，使得代码更清晰
const REMOVE_COUNT = 'REMOVE_COUNT';
//注册状态管理全局参数
var store = new Vuex.Store({
  state:{
    token:'1',
    userID:'',
  },
	
  mutations: {
    //写法与getters相类似
    //组件想要对于vuex 中的数据进行的处理
    //组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
    //内部操作必须在此刻完成(同步)
    [ADD_COUNT] (state, token) { // 第一个参数为 state 用于变更状态 登录
      sessionStorage.setItem("token", token);
      state.token = token;
    },
    [REMOVE_COUNT] (state, token) { // 退出登录
      sessionStorage.removeItem("token", token);
      state.token = token;
    },
  }
});
 
 
w_router.beforeEach((to, from, next) => {
  store.state.token = sessionStorage.getItem('token');//获取本地存储的token
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token !== "") {  // 通过vuex state获取当前的token是否存
     next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //注册组件
  components: { App },
  template: '<App/>'
}) ;


