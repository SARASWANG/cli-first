<template>
  <div>
    <!--  3 header 头部组件引用  -->
    <add-header></add-header>

    <div class="container-fluid">
      <div class="row">
        <!--  sidebar 侧边栏 -->
        <sidebar></sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
         <!--   主内容区域 ,路由出口， 给路由占位置的 -->
         <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1 导入header 组件
import AddHeader from './components/header'

// 1 导入sidebar 组件
import Sidebar from './components/sidebar'

export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    // 2 配置组件
    components : {
      AddHeader,
      Sidebar
    }
};
</script>

<style>
</style>
