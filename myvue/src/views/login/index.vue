<template>
    <div class="login-container" :style ="note">
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <div class="title">
                <h2 style="margin:0 0 40px;font-size:26px;">{{$t('language.title')}}</h2>
                <div class="set-language">
                    <el-dropdown trigger="click" @command="changeLanguage">
                        <img src="@/assets/languages.svg">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh">{{$t('language.zh')}}</el-dropdown-item>
                            <el-dropdown-item command="en">{{$t('language.en')}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <el-form-item prop="name">
                <el-row>
                    <el-col :span="1">
                        <i class="el-icon-s-custom"></i>
                    </el-col>
                    <el-col :span="23">
                        <el-input v-model="ruleForm.name" placeholder="Username"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item prop="password">
                <el-row>
                    <el-col :span="1">
                        <i class="el-icon-lock"></i>
                    </el-col>
                    <el-col :span="23">
                        <el-input v-model="ruleForm.password" placeholder="Password" show-password @keyup.enter.native="login('ruleForm')"></el-input>
                    </el-col>
                    <!-- <el-col :span="1">
                        <img src="@/assets/open_eays.svg">
                    </el-col> -->
                </el-row>
            </el-form-item>
            <el-row style="margin-bottom:22px;">
                <el-col :span="24">
                    <el-button type="primary" @click="login('ruleForm')" class="loginButton">{{$t('language.button')}}</el-button>
                </el-col>
            </el-row>
            <el-row class="info">
                <el-col :span="16">
                    <el-row>
                        <el-col :span="10">
                            {{$t('language.name')}}: admin
                        </el-col>
                        <el-col :span="10">
                            {{$t('language.password')}}: {{$t('language.passwordText')}}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            {{$t('language.name')}}: editor
                        </el-col>
                        <el-col :span="10">
                            {{$t('language.password')}}: {{$t('language.passwordText')}}
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary">{{$t('language.otherLogn')}}</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    data() {
        var name = (rule, value, callback) => {
            if (value === 'admin' || value === 'editor') {
                callback();
            }else {
                callback(new Error('Please enter the correct user name'));
            }
        };
        var password = (rule, value, callback) => {
            if (value.length >= 6) {
                callback();
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('The password can not be less than 6 digits'));
            }
        };
        return {
            ruleForm: {
                name:'',
                password:''
            },
            note: {
                backgroundImage: "url(" + require("@/assets/background.jpg") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
            },
            rules:{
                name: [
                    {validator: name, trigger: 'blur'}
                ],
                password: [
                    {validator: password, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        login(ruleForm) {
            console.log(121212)
            this.$refs[ruleForm].validate(valid => {
                if(valid) {
                    var obj = {
                        name:this.ruleForm.name,
                        password:this.ruleForm.password
                    }
                    Cookies.set('user_token',obj);
                    this.$router.push('/dashboard');
                    this.$refs[ruleForm].resetFields();
                }
            })
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
.login-container {
    width: 100%;
    height: 100%;
    color:#fff;
    /deep/.el-form {
        position: relative;
        width: 450px;
        margin: 0 auto;
        padding: 160px 35px 0;
        overflow: hidden;
        .title {
            text-align: center;
            position: relative;
            .set-language {
                position: absolute;
                top: calc(50% - 10px);
                right: 0;
                font-size: 18px;
                background: #fff;
                border-radius: 3px;
                width: 20px;
                height: 22px;
                overflow: hidden;
                img {
                    cursor: pointer;
                    width: 1.5em;
                    height: 1.5em;
                }
            }
        }
        .el-form-item__content {
            .el-row {
                line-height: 47px;
                border: 1px solid hsla(0,0%,100%,.1);
                background: rgba(0,0,0,.1);
                border-radius: 5px;
                color: #454545;
                padding: 0 15px;
                .el-input__inner {
                    background: none;
                    border: none;
                    padding: 12px 0px 12px 15px;
                    color: #fff;
                    height: 47px;
                }
                img {
                    vertical-align: middle;
                    width: 1.5em;
                    height: 1.5em;
                }
                i {
                    font-size: 18px;
                    color: #889aa4;
                }
            }
        }
    }
    .el-button {
        width: 100%;
        color: #fff;
    }
    .info {
        font-size: 14px;
    }
}
</style>