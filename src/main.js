import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Routers from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '@/assets/css/base.css';
import echarts from 'echarts'
import config from '@/config'
import 'babel-polyfill'

Vue.prototype.$echarts = echarts
Vue.use(VueRouter);
Vue.use(iView);



const RouterConfig = {
    mode: 'history',
    routes: Routers,
};
const router = new VueRouter(RouterConfig);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router: router,
  render: h => h(App)
})

Vue.prototype.$config = config