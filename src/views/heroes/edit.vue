<template>
    <div>
        <h2 class="sub-header">编辑 Hero</h2>
        <form>
            <div class="form-group">
                <label for="name">英雄名称</label>
                <input  v-model="formdata.name" type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="sex">英雄性别</label>
                <input v-model="formdata.gender" type="text" class="form-control" id="sex" placeholder="Sex">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="handleEdit">Submit</button>
        </form>
    </div>
</template>

<script>

// 1、进入编辑页，显示当前要编辑的英雄
// 获取url的id值
// 发送请求，获取数据
// 绑定文本框

// 2、点击submit按钮，实现更新功能

export default {
    data() {
        return {
            formdata : {
                name : '',
                gender : ''
            },
            // 默认id值给 -1
            urlId : -1
        }
    },
    // 组件创建完毕的时候
    created() {
        // ------获取路由的参数-----this 时vue的实例，$route上是路由规则上的数据
        this.urlId = this.$route.params.id;

        this.loadData()
    },
    methods : {
        // 根据id，获取对应的英雄数据
        loadData() {
            this.$http
                .get(`heroes/${this.urlId}`)
                .then((res) => {
                    if(res.status == 200 ) {
                        // console.log(this)   // vue实例对象
                        // console.log(res)    // 对象，res.data根据id值查询到的数据
                        this.formdata = res.data
                    }
                })
        },
        handleEdit() {
            this.$http
                // put 传递数据等同与post ，需要传递数据，也是一个对象
                .put(`heroes/${this.urlId}`,this.formdata)
                .then((res) => {
                    if(res.status == 200) {
                        // 跳转到数据列表页
                        this.$router.push({name : 'heroes'});
                    }else {
                        alert('修改失败')
                    }
                })
        }
    }
};
</script>

<style>
</style>
