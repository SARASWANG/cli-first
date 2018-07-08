import Vue from 'vue'
// 1 导入axios
import axios from "axios";
// 2 自定义一个空对象
const Myaxios = {}

// 3 插件必须有一个install方法
Myaxios.install = function () {
    // 4 配置全局的基路径
    axios.defaults.baseURL = 'http://localhost:3000/';
    // 5 把axios 挂载到vue的原型上，方便vue的所有实例都能调用
    Vue.prototype.$http = axios;
};
// 6 导出插件
export default Myaxios