<template>
    <div class="content-wrap">
        <div class="box-shadow content-wrap">
            <h2>{{this.$t('page.components.collapse.basics')}}</h2>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item :title="this.$t('page.components.collapse.consistency')" name="1">
                    <div>{{this.$t('page.components.collapse.consistency_1')}}</div>
                    <div>{{this.$t('page.components.collapse.consistency_2')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.feedback')" name="2">
                    <div>{{this.$t('page.components.collapse.feedback_1')}}</div>
                    <div>{{this.$t('page.components.collapse.feedback_2')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.efficiency')" name="3">
                    <div>{{this.$t('page.components.collapse.efficiency_1')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_2')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_3')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.controllability')" name="4">
                    <div>{{this.$t('page.components.collapse.controllability_1')}}</div>
                    <div>{{this.$t('page.components.collapse.controllability_2')}}</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="box-shadow content-wrap">
            <h2>{{this.$t('page.components.collapse.collapse')}}</h2>
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                    {{this.$t('page.components.collapse.baijuyi')}}<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>{{this.$t('page.components.collapse.baijuyi_1')}}</div>
                    <div>{{this.$t('page.components.collapse.baijuyi_2')}}</div>
                    <div>{{this.$t('page.components.collapse.baijuyi_3')}}</div>
                    <div>{{this.$t('page.components.collapse.baijuyi_4')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.feedback')" name="2">
                    <div>{{this.$t('page.components.collapse.feedback_1')}}</div>
                    <div>{{this.$t('page.components.collapse.feedback_2')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.efficiency')" name="3">
                    <div>{{this.$t('page.components.collapse.efficiency_1')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_2')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_3')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.controllability')" name="4">
                    <div>{{this.$t('page.components.collapse.controllability_1')}}</div>
                    <div>{{this.$t('page.components.collapse.controllability_2')}}</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="box-shadow content-wrap">
            <h2>{{this.$t('page.components.collapse.DIY')}}</h2>
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                    {{this.$t('page.components.collapse.consistency')}}<i class="header-icon el-icon-info"></i>
                    </template>
                    <div>{{this.$t('page.components.collapse.consistency_1')}}</div>
                    <div>{{this.$t('page.components.collapse.consistency_2')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.feedback')" name="2">
                    <div>{{this.$t('page.components.collapse.feedback_1')}}</div>
                    <div>{{this.$t('page.components.collapse.feedback_2')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.efficiency')" name="3">
                    <div>{{this.$t('page.components.collapse.efficiency_1')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_2')}}</div>
                    <div>{{this.$t('page.components.collapse.efficiency_3')}}</div>
                </el-collapse-item>
                <el-collapse-item :title="this.$t('page.components.collapse.controllability')" name="4">
                    <div>{{this.$t('page.components.collapse.controllability_1')}}</div>
                    <div>{{this.$t('page.components.collapse.controllability_2')}}</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style lang="less" scope>
h2 {
    text-align: center;
    margin-top: 0;
}
.box-shadow {
    margin-bottom: 20px;
}
</style>