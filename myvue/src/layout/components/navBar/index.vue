<template>
    <div class="navBar">
        <el-row>
            <el-col :span="24" >
                <el-scrollbar>
                    <el-menu
                        :default-active="this.$route.path"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="changeNavselect"
                        background-color="#304156"
                        text-color="#efefef"
                        active-text-color="#1890ff"
                        style="height:100vh;"
                        router
                    >
                        <el-menu-item index="/dashboard">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{$t('navBar.dashboard')}}</span>
                        </el-menu-item>
                        <el-submenu index="/echarts">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{$t('navBar.charts')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-submenu index="/echarts/pictorialBar">
                                    <template slot="title">
                                        <span>{{$t('navBar.pictorialBarChart')}}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/echarts/pictorialBar/waterContent">{{$t('navBar.waterContentChart')}}</el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/forest">{{$t('navBar.forestChart')}}</el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/christmas">{{$t('navBar.christmasChart')}}</el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/vehicles">{{$t('navBar.vehiclesChart')}}</el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-menu-item index="/echarts/keyboard">{{$t('navBar.keyboard')}}</el-menu-item>
                                <el-menu-item index="/echarts/bar">{{$t('navBar.barChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/line">{{$t('navBar.lineChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/blend">{{$t('navBar.blendChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/pie">{{$t('navBar.pieChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/scatter">{{$t('navBar.scatterChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/radar">{{$t('navBar.radarChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/tree">{{$t('navBar.treeChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/sunburst">{{$t('navBar.sunburstChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/parallel">{{$t('navBar.parallelChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/funnel">{{$t('navBar.funnelChart')}}</el-menu-item>
                                <el-menu-item index="/echarts/gauge">{{$t('navBar.gaugeChart')}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="/components">
                            <i class="el-icon-menu"></i>
                            <span slot="title">{{$t('navBar.components')}}</span>
                        </el-menu-item>
                    </el-menu>
                </el-scrollbar>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navInfoArr: []
        }
    },
    computed: {
        
    },
    created() {
        
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        changeNavselect(index) {
            this.$store.commit('navChangeTagsNavActiveClassIndex',index);
        }
    }
}
</script>
<style scoped>
.navBar {
    width: 100%;
}
</style>