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
                            <svg-icon style="font-size:1.3em;" icon-class="dashboard" />
                            <span slot="title">{{$t('navBar.dashboard')}}</span>
                        </el-menu-item>
                        <el-submenu index="/table">
                            <template slot="title">
                                <svg-icon style="font-size:1em;" icon-class="table" />
                                <span>{{$t('navBar.table')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/table/dynamic-table">
                                    <svg-icon icon-class="dynamic_table" />
                                    {{$t('navBar.dynamicTable')}}
                                </el-menu-item>
                                <el-menu-item index="/table/inline-edit-table">
                                    <svg-icon style="font-size:1.4em;" icon-class="edit_table" />
                                    {{$t('navBar.complexTable')}}
                                </el-menu-item>
                                <el-menu-item index="/table/drag-table"> 
                                    <svg-icon style="font-size:1.3em;" icon-class="drag" />
                                    {{$t('navBar.dragTable')}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/echarts">
                            <template slot="title">
                                <svg-icon icon-class="chart" />
                                <span>{{$t('navBar.charts')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-submenu index="/echarts/pictorialBar">
                                    <template slot="title">
                                        <svg-icon style="font-size:1.3em;" icon-class="elephant" />
                                        <span>{{$t('navBar.pictorialBarChart')}}</span>
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/echarts/pictorialBar/waterContent">
                                            <svg-icon style="font-size:1.3em;" icon-class="content" />
                                            {{$t('navBar.waterContentChart')}}
                                        </el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/forest">
                                            <svg-icon style="font-size:1.3em;" icon-class="forest" />
                                            {{$t('navBar.forestChart')}}
                                        </el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/vehicles">
                                            <svg-icon style="font-size:1.3em;" icon-class="car" />
                                            {{$t('navBar.vehiclesChart')}}
                                        </el-menu-item>
                                        <el-menu-item index="/echarts/pictorialBar/christmas">
                                            <svg-icon style="font-size:1.3em;" icon-class="reindeer" />
                                            {{$t('navBar.christmasChart')}}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                                <el-menu-item index="/echarts/keyboard">
                                    <svg-icon icon-class="bridge" />
                                    {{$t('navBar.keyboard')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/bar">
                                    <svg-icon icon-class="bar" />
                                    {{$t('navBar.barChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/line">
                                    <svg-icon style="font-size:1.3em;" icon-class="line" />
                                    {{$t('navBar.lineChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/blend">
                                    <svg-icon style="font-size:1.3em;" icon-class="drag" />
                                    {{$t('navBar.blendChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/pie">
                                    <svg-icon icon-class="pie" />
                                    {{$t('navBar.pieChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/scatter">
                                    <svg-icon icon-class="scatter" />
                                    {{$t('navBar.scatterChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/radar">
                                    <svg-icon icon-class="radar" />
                                    {{$t('navBar.radarChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/tree">
                                    <svg-icon style="font-size:1.3em;" icon-class="tree_svg" />
                                    {{$t('navBar.treeChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/sunburst">
                                    <svg-icon style="font-size:1.3em;" icon-class="sun" />
                                    {{$t('navBar.sunburstChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/parallel">
                                    <svg-icon style="font-size:1.3em;" icon-class="coordinate" />
                                    {{$t('navBar.parallelChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/funnel">
                                    <svg-icon style="font-size:1.3em;" icon-class="funnel" />
                                    {{$t('navBar.funnelChart')}}
                                </el-menu-item>
                                <el-menu-item index="/echarts/gauge">
                                    <svg-icon style="font-size:1.3em;" icon-class="dashboard" />
                                    {{$t('navBar.gaugeChart')}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-menu-item index="/icons">
                            <svg-icon icon-class="icon" />
                            <span slot="title">{{$t('navBar.icons')}}</span>
                        </el-menu-item>
                        <el-submenu index="/components">
                            <template slot="title">
                                <svg-icon icon-class="component" />
                                <span slot="title">{{$t('navBar.components')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/components/button">
                                    <svg-icon icon-class="button" />
                                    {{$t('navBar.button')}}
                                </el-menu-item>
                                <el-menu-item index="/components/form">
                                    <svg-icon icon-class="form" />
                                    {{$t('navBar.form')}}
                                </el-menu-item>
                                <el-menu-item index="/components/collapse">
                                    <svg-icon icon-class="fold_svg" />
                                    {{$t('navBar.collapse')}}
                                </el-menu-item>
                                <el-menu-item index="/components/carousel">
                                    <svg-icon icon-class="riding_svg" />
                                    {{$t('navBar.carousel')}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/error-page">
                            <template slot="title">
                                <svg-icon icon-class="404" />
                                <span slot="title">{{$t('navBar.errorPages')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/error-page/401">
                                    <svg-icon icon-class="401" />
                                    401
                                </el-menu-item>
                                <el-menu-item index="/error-page/404">
                                    <svg-icon icon-class="404" />
                                    404
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/excel">
                            <template slot="title">
                                <svg-icon icon-class="excel" />
                                <span>{{$t('navBar.excel')}}</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/excel/export-excel">
                                    <svg-icon icon-class="export_excel" />
                                    {{$t('navBar.importExcel')}}
                                </el-menu-item>
                                <el-menu-item index="/excel/merge-header">
                                    <svg-icon icon-class="header_excel" />
                                    {{$t('navBar.mergeHeader')}}
                                </el-menu-item>
                                <el-menu-item index="/excel/select-excel">
                                    <svg-icon icon-class="selected_excel" />
                                    {{$t('navBar.importSelected')}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="/zip">
                            <template slot="title">
                                <svg-icon icon-class="zip" />
                                <span>Zip</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/zip">
                                    <svg-icon icon-class="export_zip" />
                                    Export Zip
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
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
<style lang="less" scoped>
.navBar {
    width: 100%;
}
.is-active {
    color: #64d9d6!important;
    .svg-icon {
        color: inherit;
    }
}
.svg-icon {
    width: 24px!important;
    margin-right: 5px;
    font-size: 1.1em;
}
.el-menu-item.is-active .svg-icon {
    color: inherit;
}
</style>