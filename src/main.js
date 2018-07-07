import Vue from 'vue'
import App from './App.vue'

// 导入css 和bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入 router.js 路由对象
import router from './routes/router'

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由对象
  router: router

})
