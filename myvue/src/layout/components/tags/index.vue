<template>
    <div class="tags-view-wrap">
        <el-scrollbar style="width:100%;height:100%">
            <span @click.stop="tagsRouter(item,index)" v-for="(item,index) in navInfo" :key="item.path" class="tags-view-item" :class="tagsNavActiveClassIndex == index ? 'active':''">
                {{item.title}}
                <span v-if="item.title!=='首页'" @click.stop="closeTags(item)" class="el-icon-close"></span>
            </span>
        </el-scrollbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navInfo:[]
        }
    },
    watch: {
        $route:function(to) {
            var that = this;
            var obj = {
                title:to.meta.title,
                path:to.path
            }
            if(JSON.stringify(this.navInfo).indexOf(JSON.stringify(obj)) == -1) {
                this.navInfo.push(obj)
                window.localStorage.setItem('navInfo',JSON.stringify(this.navInfo))
            }
            var arr = JSON.parse(JSON.stringify(this.navInfo));
            var index = arr.findIndex(function(item) {
                return item.path === that.$route.path;
            });
            this.$store.commit('changeTagsNavActiveClassIndex',index)
        }
    },
    computed: {
        tagsNavActiveClassIndex() {
            return this.$store.state.tagsNavActiveClassIndex;
        },
        navActivePath() {
            return this.$store.state.navActivePath;
        },
        navInfoArr() {
            var isNavInfo = JSON.parse(window.localStorage.getItem('navInfo'));
            var navInfo = isNavInfo == null?[{title:'首页',path:'/dashboard'}]:isNavInfo;
            return navInfo
        }
    },
    created() {
        this.navInfo.push(...this.navInfoArr);
        this.getNavIndex();
    },
    methods: {
        tagsRouter(item,index) {
            if(item.path !== this.$route.path) {
                this.$router.push(item.path)
                this.$store.commit('changeTagsNavActiveClassIndex',index)
            }
        },
        closeTags(i) {
            var newNavInfo = this.navInfo.filter(item=>item !== i)
            this.navInfo = newNavInfo;
            window.localStorage.setItem('navInfo',JSON.stringify(newNavInfo))
        },
        getNavIndex() {
            this.$nextTick(()=>{
                var that = this;
                var arr = JSON.parse(JSON.stringify(this.navInfo));
                var index = arr.findIndex(function(item) {
                    return item.path === that.$route.path;
                });
                this.$store.commit('changeTagsNavActiveClassIndex',index)
            })
        }
    }
}
</script>
<style lang="less" scoped>
.tags-view-wrap {
    height: 34px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    /deep/.el-scrollbar__wrap {
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .tags-view-item {
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        margin-top: 4px;
        .el-icon-close {
            width: 16px;
            height: 16px;
            vertical-align: 2px;
            border-radius: 50%;
            text-align: center;
            -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
            &::before {
                -webkit-transform: scale(.6);
                transform: scale(.6);
                display: inline-block;
                vertical-align: -3px;
            }
            &:hover {
                background-color: #b4bccc;
                color: #fff;
            }
        }
    }
    .active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
        }
    }
}
</style>