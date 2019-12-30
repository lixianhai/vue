<template>
    <div class="content-wrap">
        <div class="box-shadow content-wrap">
            <h2>{{this.$t('page.components.form.alginType')}}</h2>
            <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="left">{{this.$t('page.components.form.leftAlgin')}}</el-radio-button>
                <el-radio-button label="right">{{this.$t('page.components.form.rightAlgin')}}</el-radio-button>
                <el-radio-button label="top">{{this.$t('page.components.form.topAlgin')}}</el-radio-button>
            </el-radio-group>
            <div style="margin: 20px;"></div>
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item :label="this.$t('page.components.form.name')">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityRegion')">
                    <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityForm')">
                    <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="box-shadow content-wrap">
            <h2>{{this.$t('page.components.form.formValidation')}}</h2>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item :label="this.$t('page.components.form.activityName')" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityRegion')" prop="region">
                    <el-select v-model="ruleForm.region" :placeholder="this.$t('page.components.form.defaultSelectActivityRegion')">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityTime')" required>
                    <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" :placeholder="this.$t('page.components.form.defaultSelectDate')" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker :placeholder="this.$t('page.components.form.defaultSelectTime')" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.instantDelivery')" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityNature')" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                    <el-checkbox :label="this.$t('page.components.form.errorFood')" name="type"></el-checkbox>
                    <el-checkbox :label="this.$t('page.components.form.errorGroundPush')" name="type"></el-checkbox>
                    <el-checkbox :label="this.$t('page.components.form.errorTheme')" name="type"></el-checkbox>
                    <el-checkbox :label="this.$t('page.components.form.errorSimple')" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.specialresources')" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                    <el-radio :label="this.$t('page.components.form.errorSponsor')"></el-radio>
                    <el-radio :label="this.$t('page.components.form.errorPlaceOfOrigin')"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="this.$t('page.components.form.activityForm')" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">{{this.$t('button.createButton')}}</el-button>
                    <el-button @click="resetForm('ruleForm')">{{this.$t('button.reset')}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template> 

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        rules: {
          name: [
            { required: true, message: this.$t('page.components.form.errorActivityName'), trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: this.$t('page.components.form.erroractivityRegion'), trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: this.$t('page.components.form.errorSelectDate'), trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: this.$t('page.components.form.errorSelectTime'), trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: this.$t('page.components.form.length1'), trigger: 'change' }
          ],
          resource: [
            { required: true, message: this.$t('page.components.form.errorSelectTime'), trigger: 'change' }
          ],
          desc: [
            { required: true, message: this.$t('page.components.form.errorSelectTime'), trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="less" scope>
.box-shadow {
    margin-bottom: 20px;
}
h2 {
    text-align: center;
    margin-top: 0;
}
</style>