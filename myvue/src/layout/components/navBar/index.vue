<template>
    <div class="navBar">
        <el-row>
            <el-col :span="24" >
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
                            <el-menu-item index="/echarts/bar">{{$t('navBar.barChart')}}</el-menu-item>
                            <el-menu-item index="/echarts/line">{{$t('navBar.lineChart')}}</el-menu-item>
                            <el-menu-item index="/echarts/pie">{{$t('navBar.pieChart')}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/components">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{$t('navBar.components')}}</span>
                    </el-menu-item>
                </el-menu>
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
        // navInfo:function() {
        //     localStorage.removeItem("navInfo")
        //     var isNavInfo =  window.localStorage.getItem('navInfo');
        //     console.log(isNavInfo)
        //     var locaNavInfo = isNavInfo == null?[]:JSON.parse(window.localStorage.getItem('navInfo'));
        //     return locaNavInfo.length?locaNavInfo:[]
        // }
    },
    created() {
        // console.log(this.navInfo)
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        changeNavselect(index) {
            // setTimeout(()=>{
            //     var matched =  this.$route.matched;
            //     var title = matched[matched.length-1].meta.title;
            //     var path =  matched[matched.length-1].path;
            //     var obj = {
            //         title:title,
            //         path:path
            //     }
            //     if(JSON.stringify(this.navInfo).indexOf(JSON.stringify(obj)) == -1){
            //         this.navInfo.push(obj);
            //     }
            //     console.log(this.navInfo)
            //     window.localStorage.setItem('navInfo',JSON.stringify(this.navInfo));
            // },20)
        }
    }
}
</script>
<style scoped>
.navBar {
    width: 100%;
}
</style>