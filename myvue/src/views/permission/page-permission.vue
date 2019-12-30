<template>
    <div class="content-wrap">
        <div style="margin-bottom:15px;">{{this.$t('page.permission.pagePer.yourRole')}}{{ roles }}</div>
        {{this.$t('page.permission.pagePer.changeRole')}}
        <el-radio-group v-model="switchRoles">
            <el-radio-button label="editor" />
            <el-radio-button label="admin" />
        </el-radio-group>
    </div>
</template>
<script>

export default {
    computed: {
        roles() {
            return this.$store.state.user.roles
        },
        switchRoles: {
            get() {
                return this.roles[0]
            },
            set(val) {
                console.log(val)
                this.$store.dispatch('changeRoles', val)
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>