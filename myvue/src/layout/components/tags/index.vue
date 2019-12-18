<template>
    <div class="tags-view-wrap">
        <el-scrollbar style="width:100%;height:100%">
            <span 
                @click.stop="tagsRouter(item,index)"
                v-for="(item,index) in navInfo" 
                :key="item.path" 
                class="tags-view-item" 
                :class="tagsNavActiveClassIndex == index ? 'active':''"
                @contextmenu.prevent="openMenu(item,$event)"
            >
                {{item.title}}
                <span v-if="item.title!=='首页'" @click.stop="closeTags(item)" class="el-icon-close"></span>
            </span>
        </el-scrollbar>
        <ul class="contextmenu" v-show="visible" :style="{top:top+'px',left:left+'px'}">
            <li @click="refreshSelectedTag(selectedTag)">刷新</li>
            <li @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOthersTags(selectedTag)">关闭其他</li>
            <li @click="closeAllTags(selectedTag)">关闭所有</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navInfo: [],
            visible: false,
            selectedTag: {},
            top: 0,
            left: 0
        }
    },
    watch: {
        $route:function(to) {
            var that = this;
            var obj = {
                title:to.meta.title,
                path:to.path
            }
            if(JSON.stringify(this.navInfo).indexOf(JSON.stringify(obj)) == -1 && obj.title !== '首页') {
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
            this.$nextTick(()=>{
                var newNavInfo = this.navInfo.filter(item=>item !== i)
                var index = this.navInfo.length-1;
                this.navInfo = newNavInfo;
                window.localStorage.setItem('navInfo',JSON.stringify(newNavInfo))
                this.prveTagsClass(i)
            })
        },
        prveTagsClass(newPath) {
            if(newPath.path == this.$route.path) {
                var path = this.navInfo[this.navInfo.length-1].path;
                this.$router.push(path)
            }else {
                this.$store.commit('removeTagsNavActiveClassIndex');
            }
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
        },
        openMenu(item, e) {
            this.left = e.clientX + 15;
            this.top = e.clientY;
            this.visible = true;
            this.selectedTag = item;
        },
        refreshSelectedTag(view) {
            if(view.path !== this.$route.path) {
                this.$router.push(view.path);
            }
            this.visible = false;
        },
        closeSelectedTag(view) {
            let newNavInfo = this.navInfo.filter(item=>item.title !== view.title)
            this.navInfo = newNavInfo;
            window.localStorage.setItem('navInfo',JSON.stringify(newNavInfo))
            this.visible = false;
            this.prveTagsClass(view)
        },
        closeOthersTags(view) {
            var newNavInfo = null;
            
            if(view.title == '首页') {
                newNavInfo = [view]
            }else {
                newNavInfo = [{path:'/dashboard',title:'首页'},view]
            }
            this.navInfo = newNavInfo;
            window.localStorage.setItem('navInfo',JSON.stringify(newNavInfo));
            this.$store.commit('changeTagsNavActiveClassIndex',1)
            if(view.path !== this.$route.path) {
                this.$router.push(view.path)
            }
            this.visible = false;
        },
        closeAllTags(view) {
            this.$nextTick(()=>{
                this.navInfo = [{path:'/dashboard',title:'首页'}];
                window.localStorage.setItem('navInfo',JSON.stringify(this.navInfo));
                this.$store.commit('changeTagsNavActiveClassIndex',0)
                if(this.$route.path !== '/dashboard') {
                    this.$router.push('/dashboard')
                }
                this.visible = false;
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
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    -webkit-box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);
    box-shadow: 2px 2px 3px 0 rgba(0,0,0,.3);
    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
            background: #eee;
        }
    }
}
</style>