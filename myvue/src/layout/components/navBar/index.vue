<template>
    <div class="navBar">
        <el-row>
            <el-col :span="24" >
                <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#304156"
                    text-color="#efefef"
                    active-text-color="#1890ff"
                    style="height:100vh;"
                >
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">图表</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">组件</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
.navBar {
    width: 100%;
}
</style>