<template>
    <div class="item">
        <div>
            <i class="el-icon-search"></i>
        </div>
        <div>
            <svg-icon icon-class="zoom" />
        </div>
        <div>
            <svg-icon icon-class="textSize" />
        </div>
        <div>
            <span class="languages">
                <el-dropdown trigger="click" @command="changeLanguage">
                        <img src="@/assets/languages_white.svg">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh">{{$t('language.zh')}}</el-dropdown-item>
                            <el-dropdown-item command="en">{{$t('language.en')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
            </span>
        </div>
        <div class="user_img">
            <el-dropdown trigger="click" @command="changeUserSelect">
                <img src="@/assets/user_img.gif">
                <i class="el-icon-caret-bottom"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="12">12</el-dropdown-item>
                    <el-dropdown-item command="12">12</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        changeUserSelect() {

        },
        changeLanguage(val) {
            this.$i18n.locale = val;
            this.$message({
                message: 'Switch Language Success',
                type: 'success'
            });
        }
    }
}
</script>

<style lang="less" scoped>
.item {
    overflow: hidden;
    height: 100%;
    line-height: 50px;
    div {
        float:left;
        height: 100%;
        padding: 0 8px;
        font-size: 20px;
        color: #5a5e66;
        i {
            font-weight: 700;
        }
        .languages {
            margin-top: 15px;
            width: 1em;
            height: 1em;
            display: inline-block;
            background: #5a5e66;
            border-radius: 5px;
            .el-dropdown {
                width: 100%;
                height: 100%;
                cursor: pointer;
                position: relative;
                padding: 0;
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            
        }
    }
    .user_img {
        .el-dropdown {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 5px;
            margin-right: 30px;
            padding-right: 15px;
            position: relative;
            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
            i {
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 25px;
                font-size: 12px;
            }
        }
    }
}
</style>