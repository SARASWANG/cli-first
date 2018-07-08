<template>
    <div>
        <h2 class="sub-header">Add Hero</h2>
        <form>
            <div class="form-group">
                <label for="name">英雄名称</label>
                <input v-model="formdata.name " type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="sex">英雄性别</label>
                <input v-model="formdata.gender " type="text" class="form-control" id="sex" placeholder="Sex">
            </div>
            <!--  点击提交按钮时，发送请求  -->
            <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
// 引入axios
export default {
    data() {
        return {
            // 双向绑定表单数据，一个对象的格式，方便post传递数据
            formdata: {
                name : '',
                gender : ''
            }
        }
    },
    methods: {
        // 点击提交按钮的处理函数
        handleAdd() {
            this.$http
                .post('heroes',this.formdata)
                .then((res) => {
                    if(res.status == 201) {
                        // 添加成功后跳转到列表页面, ---参考vur-router 的编程式导航
                        this.$router.push({ name: 'heroes' });
                    }
                })
        }
    }
}
</script>

<style>

</style>
