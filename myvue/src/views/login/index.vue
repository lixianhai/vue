<template>
    <div class="login-container" :style ="note">
        <vue-particles
            color="#fff"
            :particleOpacity="0.5"
            :particlesNumber="40"
            shapeType="edge"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
            <div class="title">
                <h2 style="margin:0 0 40px;font-size:26px;">{{$t('login.title')}}</h2>
                <div class="set-language">
                    <el-dropdown trigger="click" @command="changeLanguage">
                        <img src="@/assets/languages.svg">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="item in selectList" :key="item.value" :disabled="command == item.command" :command="item.command">{{item.value}}</el-dropdown-item>
                            <!-- <el-dropdown-item command="zh">{{$t('login.zh')}}</el-dropdown-item> -->
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
                        <el-input v-model="ruleForm.name" placeholder="Username" ref="username"></el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item prop="password">
                <el-row>
                    <el-col :span="1">
                        <i class="el-icon-lock"></i>
                    </el-col>
                    <el-col :span="23">
                        <el-input v-model="ruleForm.password" placeholder="Password" show-password @keyup.enter.native="login('ruleForm')" ref="password"></el-input>
                    </el-col>
                    <!-- <el-col :span="1">
                        <img src="@/assets/open_eays.svg">
                    </el-col> -->
                </el-row>
            </el-form-item>
            <el-row style="margin-bottom:22px;">
                <el-col :span="24">
                    <el-button type="primary" @click="login('ruleForm')" class="loginButton">{{$t('login.button')}}</el-button>
                </el-col>
            </el-row>
            <el-row class="info">
                <el-col :span="16">
                    <el-row>
                        <el-col :span="10">
                            {{$t('login.name')}}: admin
                        </el-col>
                        <el-col :span="14">
                            {{$t('login.password')}}: {{$t('login.passwordText')}}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            {{$t('login.name')}}: editor
                        </el-col>
                        <el-col :span="14">
                            {{$t('login.password')}}: {{$t('login.passwordText')}}
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary">{{$t('login.otherLogn')}}</el-button>
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
            },
            selectList: [
                { label: this.$t('login.zh'), value: this.$t('login.zh'), command:'zh' },
                { label: this.$t('login.en'), value: this.$t('login.en'), command:'en' },
                { label: this.$t('login.ja'), value: this.$t('login.ja'), command:'ja' },
                { label: this.$t('login.ko'), value: this.$t('login.ko'), command:'ko' }
            ],
        }
    },
    mounted() {
        if (this.ruleForm.name === '') {
            this.$refs.username.focus()
        } else if (this.ruleForm.password === '') {
            this.$refs.password.focus()
        }
    },
    computed: {
        command() {
            return this.$store.state.seletCommand
        }
    },
    methods: {
        login(ruleForm) {
            this.$refs[ruleForm].validate(valid => {
                if(valid) {
                    var obj = {
                        name:this.ruleForm.name + '-token',
                        password:this.ruleForm.password + '-token'
                    }
                    this.$store.dispatch('login',obj).then(() => {
                        this.$router.push('/dashboard');
                        
                        localStorage.removeItem("navInfo");
                    })
                }
            })
        },
        changeLanguage(val) {
            this.$store.dispatch('addSelectCommand',val)
            this.$i18n.locale = val;
            this.$message({
                message: 'Switch Language Success',
                type: 'success'
            });
            Cookies.set('Languages',val)
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
#particles-js {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}
</style>