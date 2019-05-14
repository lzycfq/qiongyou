// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/public.css'
//import Vue from 'vue'
import axios from 'axios'
import m_router from './router/mobile.js'
import w_router from './router/web.js'
import MApp from './Mobile'
import WApp from './Web'
import VueAxios from 'vue-axios'
//import ElementUI from 'element-ui'
// import VueQriously from 'vue-qriously';
// import MyImg from './components/common/MyImg'
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// import CryptoJS from 'crypto-js/crypto-js'
// import waterfall from 'vue-waterfall2'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper, /* { default global options } */)
// Vue.use(waterfall)
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

//Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// Vue.use(VueQriously);
// Vue.use(preview)
Vue.config.productionTip = false
require('./mock');


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',

});
