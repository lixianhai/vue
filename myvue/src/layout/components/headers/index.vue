<template>
    <div class="header-view-right">
        <div class="view-right-item">
            <i class="el-icon-search"></i>
        </div>
        <div class="view-right-item" @click="zoom">
            <svg-icon :icon-class="zoomIcon?'fullscreen':'exit-fullscreen'" />
        </div>
        <div class="view-right-item">
            <svg-icon icon-class="size" />
        </div>
        <div class="view-right-item">
            <span class="languages">
                <el-dropdown trigger="click" @command="changeLanguage">
                    <div class="img-wrap">
                        <img src="@/assets/languages_white.svg">
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="item in selectList" :key="item.value" :disabled="command == item.command" :command="item.command">{{item.value}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
        </div>
        <div class="view-right-item user_img" style="margin-right: 30px;">
            <div class="user-img-wrap">
                <el-dropdown trigger="click" @command="changeUserSelect">
                    <img src="@/assets/user_img.gif">
                    <i class="el-icon-caret-bottom"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="/profile/index">{{$t('headerSelect.profile')}}</el-dropdown-item>
                        <el-dropdown-item command="/dashboard">{{$t('headerSelect.dashboard')}}</el-dropdown-item>
                        <el-dropdown-item command="项目地址">{{$t('headerSelect.github')}}</el-dropdown-item>
                        <el-dropdown-item command="Docs">Docs</el-dropdown-item>
                        <el-dropdown-item @click.native="logout" command="/login" divided>{{$t('headerSelect.logout')}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
    data() {
        return {
            zoomIcon:true,
            selectList: [
                { label: this.$t('login.zh'), value: this.$t('login.zh'), command:'zh' },
                { label: this.$t('login.en'), value: this.$t('login.en'), command:'en' },
                { label: this.$t('login.ja'), value: this.$t('login.ja'), command:'ja' },
                { label: this.$t('login.ko'), value: this.$t('login.ko'), command:'ko' }
            ],
        }
    },
    computed: {
        command() {
            return this.$store.state.seletCommand
        }
    },
    created() {
        console.log(this.command)
    },
    methods: {
        changeUserSelect(command) {
            if(command == 'Docs') {
                window.open('https://panjiachen.github.io/vue-element-admin-site/#/')
            }else if(command == '项目地址') {
                window.open('https://github.com/lixianhai/vue/tree/master/myvue')
            }else if(command == '/login'){
                
            }else {
                this.$router.push(command)
            }
        },
        changeLanguage(val) {
            this.$store.dispatch('addSelectCommand',val)
            this.$i18n.locale = val;
            this.$message({
                message: 'Switch Language Success',
                type: 'success'
            });
            Cookies.set('Languages',val)
        },
        zoom() {
            var html = document.querySelector('html');
            if(this.zoomIcon) {
                if (html.requestFullscreen) {
                    html.requestFullscreen();
                } else if (html.mozRequestFullScreen) {
                    html.mozRequestFullScreen();
                } else if (html.webkitRequestFullscreen) {
                    html.webkitRequestFullscreen();
                } else if (html.msRequestFullscreen) {
                    html.msRequestFullscreen();
                }
            }else {
                if(document.exitFullScreen) {
                    document.exitFullScreen();
                } else if(document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if(document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if(document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            this.zoomIcon = !this.zoomIcon;
        },
        async logout() {
            await this.$store.dispatch('logout')
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="less" scoped>
.header-view-right {
    overflow: hidden;
    height: 100%;
    line-height: 50px;
    .view-right-item {
        float:left;
        height: 100%;
        padding: 0 8px;
        font-size: 20px;
        color: #5a5e66;
        cursor: pointer;
        -webkit-transition: background .3s;
        transition: background .3s;
        &:hover {
            background: rgba(0,0,0,.025);
        }
        i {
            font-weight: 700;
        }
        .languages {
            margin-top: 15px;
            width: 1em;
            height: 100%;
            display: inline-block;
            .el-dropdown {
                float: left;
                width: 100%;
                height: 100%;
                position: relative;
                padding: 0;
                .img-wrap {
                    width: 20px;
                    height: 20px;
                    background: #5a5e66;
                    border-radius: 5px;
                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 20px;
                    }
                }
            }
        }
    }
    .user_img {
        .user-img-wrap {
            width: 40px;
            height: 100%;
            border-radius: 10px;
            margin-top: 5px;
            position: relative;
            .el-dropdown {
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
                i {
                    cursor: pointer;
                    position: absolute;
                    right: -18px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>