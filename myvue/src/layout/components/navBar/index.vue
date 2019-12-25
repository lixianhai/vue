<template>
    <div style="height:1900px">
        <el-scrollbar>
            <el-menu
                :default-active="this.$route.path"
                background-color="#304156"
                text-color="#ccdee2"
                :unique-opened="false"
                active-text-color="#1890ff"
                :collapse-transition="false"
                mode="vertical"
                @select="changeNavselect"
            >
                <sidebar-item v-for="item in routes" :key="item.path" :item="item" :base-path="item.path" />
            </el-menu>
        </el-scrollbar>
    </div>
    
</template>
<script>
import path from 'path'
import SidebarItem from './components/SidebarItem'

export default {
    components: { SidebarItem },
    data() {
        this.onlyOneChild = null
        return {
            navInfoArr: [],
            top:0
        }
    },
    computed: {
        routes() {
            return this.$store.state.user.routes;
        },
    },
    mounted() {
        
    },
    methods: {
        changeNavselect(index) {
            this.$store.commit('navChangeTagsNavActiveClassIndex',index);
        },
    }
}
</script>
<style lang="less" scoped>
.navBar {
    width: 100%;
    min-height: 100vh;
}
.el-scrollbar__view:hover .hover-bar:before {
    top: 0;
    height: 100%;
}
/deep/.el-scrollbar__view {
    height: 100vh!important;
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
/deep/.el-menu {
    width: 100%;
    height: 100%;
    .el-menu-item {
        .svg-icon {
            margin-right: 15px;
        }
    }
    .el-submenu__title {
        .svg-icon {
            margin-right: 15px;
        }
    }
}
</style>