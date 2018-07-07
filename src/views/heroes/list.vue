<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <router-link class="btn btn-success" :to="{ name: 'heroesadd' }">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item, index) in list">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
                <!--  点击编辑按钮  -->
              <router-link :to="{ name: 'heroedit', params: { id: item.id } }">编辑</router-link>
              &nbsp;&nbsp;
              <a @click.prevent="handleDelete(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 倒入axios
import axios from "axios";
export default {
    data() {
        return {
            list: []
        };
    },
    created() {
        // 调用函数
        this.loadList();
    },
    methods: {
        // 加载列表函数
        loadList() {
            axios.get("http://localhost:3000/heroes").then(res => {
                console.log(res.data);
                if (res.status == 200) {
                    this.list = res.data;
                }
            });
        },
        // 删除处理函数
        handleDelete(id) {
            // 删除提示
            if (!confirm("是否确认删除？")) {
                return;
            }
            axios.delete(`http://localhost:3000/heroes/${id}`).then(res => {
                if (res.status == 200) {
                    // 删除成功，重新渲染列表
                    this.loadList();
                } else {
                    alert("删除失败");
                }
            });
        }
    }
};
</script>

<style>
</style>
