<template>
    <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in navList" :key="item.path">
                <span class="no-redirect" v-if="index===navList.length-1">{{item.meta.title}}</span>
                <a v-else>{{item.meta.title}}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
export default {
    data() {
        return {
            navList:[]
        }
    },
    watch: {
        $route(to,form) {
            this.getNavList();
        }
    },
    created() {
        this.getNavList();
    },
    methods: {
        getNavList() {
            let matched = this.$route.matched.filter(item=>item.meta && item.meta.title);
            const first = matched[0]
            
            if (!this.isDashboard(first)) {
                matched = [{ path: '/dashboard', meta: { title: '首页' }}].concat(matched)
            }

            this.navList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
        },
        isDashboard(route) {
            const name = route && route.name
            if (!name) {
                return false
            }
            return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
        },
    }
}
</script>
<style lang="less" scoped>
.el-breadcrumb {
    height: 100%;
    line-height: 50px;
    .el-breadcrumb__inner {
        color: #606266!important;
        font-weight: 400!important;
    }
    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
    a {
        color: #606266!important;
    }
}
</style>