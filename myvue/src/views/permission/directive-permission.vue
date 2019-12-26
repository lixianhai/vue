<template>
    <div class="content-wrap">
        <div style="margin-bottom:15px;">你的权限：{{ roles }}</div>
        切换权限：
        <el-radio-group v-model="switchRoles">
            <el-radio-button label="editor" />
            <el-radio-button label="admin" />
        </el-radio-group>

        <div style="margin-top:30px;">
            <div>
                <span class="permission-alert">
                    Only
                    <el-tag class="permission-tag" size="small">{{ userName }}</el-tag> can see this
                </span>
            </div>

            <div>
                <span class="permission-alert">
                Both
                <el-tag class="permission-tag" size="small">admin</el-tag> and
                    <el-tag class="permission-tag" size="small">editor</el-tag> can see this
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { getToken } from '@/utils/auth'

export default {
    data() {
        return {
            userName: getToken().split('-')[0]
        }
    },
    created() {
        console.log(this.userName)
    },
    computed: {
        roles() {
            return this.$store.state.user.roles
        },
        switchRoles: {
            get() {
                return this.roles[0]
            },
            set(val) {
                this.userName = val;
                this.$store.dispatch('changeRoles', val)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  /deep/ .permission-sourceCode {
    margin-left: 15px;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
}
.permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
}
</style>