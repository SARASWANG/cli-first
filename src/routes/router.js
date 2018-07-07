import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'

// 导入heroes 列表组件
import HeroList from '../views/heroes/list.vue';

// 2 导入wuqi 列表组件
import WuqiList from '../views/wuqi/list.vue';

// 注册插件
Vue.use(VueRouter)

// 创建路由对象
const router = new VueRouter({
    // 书写路由规则
    routes: [
        // 配置根路径 写法一：
        // { name: 'home', path: '/', redirect: '/heroes' },
        // 配置根路径 写法二：
        { name: 'home', path: '/', redirect: {name : 'heroes'} },

        // heroes 的路由规则
        { name: 'heroes', path: '/heroes', component: HeroList },
        // 1 wuqi 的路由规则
        { name: 'wuqi', path: '/wuqi', component: WuqiList }

    ]
})

// 导出路由对象，因为要在main.js 文件中的vue 中配置router
export default router