<template>
     <div>
        <h2 class="sub-header">添加 Hero</h2>
        <form>
            <div class="form-group">
                <label for="name">英雄名称</label>
                <input  type="text" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
                <label for="sex">英雄性别</label>
                <input type="text" class="form-control" id="sex" placeholder="Sex">
            </div>
            <!--  点击提交按钮时，发送请求  -->
            <button type="submit" class="btn btn-success" @click="handleAdd">Submit</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
