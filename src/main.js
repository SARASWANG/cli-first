import Vue from 'vue'
import App from './App.vue'

// 导入css 和bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'
// 组册Axios插件
Vue.use(Myaxios)

// 导入 router.js 路由对象
import router from './routes/router'
import Myaxios from './plugins/myaxios';

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router: router

})
