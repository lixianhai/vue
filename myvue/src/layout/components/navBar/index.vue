<template>
    <div class="navBar">
        <el-row>
            <el-col :span="24" >
                <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#304156"
                    text-color="#efefef"
                    active-text-color="#1890ff"
                    style="height:100vh;"
                    router
                >
                    <el-menu-item index="/dashboard">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="/echarts">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/echarts/bar">柱状图</el-menu-item>
                            <el-menu-item index="/echarts/line">折线图</el-menu-item>
                            <el-menu-item index="/echarts/pie">饼状图</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/components">
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