webpackJsonp([6],{"1qfe":function(t,e){},AS41:function(t,e,i){t.exports=i.p+"static/img/background.ae9555d.jpg"},Qe9z:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTc2MDI4MjM0MDk2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0NTIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU4My42OCA3MTYuOGw4MS45Mi0xNzkuMiA4MS45MiAxNzkuMmgtMTYzLjg0eiBtMzMyLjggMTMzLjEybC0yMDQuOC00NjAuOGMtNS4xMi0yMC40OC0yNS42LTMwLjcyLTQ2LjA4LTMwLjcycy00MC45NiAxMC4yNC00Ni4wOCAzMC43MmwtMTAyLjQgMjI1LjI4SDUxMmMtNjYuNTYgMC0xMTIuNjQtMTUuMzYtMTUzLjYtMzUuODRDNDI0Ljk2IDUwMS43NiA0NTAuNTYgMzk0LjI0IDQ2MC44IDMwNy4yaDUxLjJjMzAuNzIgMCA1MS4yLTIwLjQ4IDUxLjItNTEuMnMtMjAuNDgtNTEuMi01MS4yLTUxLjJoLTQ2LjA4QzQ2MC44IDE3NC4wOCA0NjAuOCAxNDguNDggNDYwLjggMTQ4LjQ4Yy01LjEyLTMwLjcyLTI1LjYtNDYuMDgtNTYuMzItNDYuMDgtMzAuNzIgNS4xMi01MS4yIDMwLjcyLTQ2LjA4IDU2LjMyVjIwNC44SDE1My42Yy0zMC43MiAwLTUxLjIgMjAuNDgtNTEuMiA1MS4yczIwLjQ4IDUxLjIgNTEuMiA1MS4yaDIwNC44Yy0xMC4yNCA3MS42OC0yNS42IDE0OC40OC03MS42OCAxOTkuNjgtMjUuNi0zMC43Mi0zMC43Mi01Ni4zMi0zMC43Mi02MS40NC0xMC4yNC0yNS42LTM1Ljg0LTQwLjk2LTYxLjQ0LTM1Ljg0LTMwLjcyIDEwLjI0LTQ2LjA4IDM1Ljg0LTQwLjk2IDYxLjQ0IDUuMTIgMjUuNiAyMC40OCA1Ni4zMiA0MC45NiA4Ny4wNC0xMC4yNCA1LjEyLTI1LjYgNS4xMi00MC45NiA1LjEyLTMwLjcyIDAtNTEuMiAyMC40OC01MS4yIDUxLjJzMjAuNDggNTEuMiA1MS4yIDUxLjJjNDYuMDggMCA4MS45Mi0xMC4yNCAxMTcuNzYtMjUuNiA1MS4yIDM1Ljg0IDExNy43NiA2Ni41NiAxOTkuNjggNzEuNjhMNDA5LjYgODQ0LjhjLTEwLjI0IDI1LjYgMCA1Ni4zMiAyNS42IDY2LjU2IDI1LjYgMTAuMjQgNTYuMzIgMCA2Ni41Ni0yNS42bDMwLjcyLTcxLjY4aDI1MC44OGwzMC43MiA3MS42OGMxMC4yNCAyMC40OCAyNS42IDMwLjcyIDQ2LjA4IDMwLjcyIDUuMTIgMCAxNS4zNiAwIDIwLjQ4LTUuMTIgMzUuODQtNS4xMiA0Ni4wOC0zNS44NCAzNS44NC02MS40NHoiIGZpbGw9IiM1MTUxNTEiIHAtaWQ9IjM0NTMiPjwvcGF0aD48L3N2Zz4="},"T+/8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("lbHh");var a={data:function(){var t=this;return{ruleForm:{name:"",password:""},note:{backgroundImage:"url("+i("AS41")+")",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"},rules:{name:[{validator:function(t,e,i){"admin"===e||"editor"===e?i():i(new Error("Please enter the correct user name"))},trigger:"blur"}],password:[{validator:function(e,i,a){i.length>=6?a():i!==t.ruleForm.pass&&a(new Error("The password can not be less than 6 digits"))},trigger:"blur"}]},selectList:[{label:this.$t("login.zh"),value:this.$t("login.zh"),command:"zh"},{label:this.$t("login.en"),value:this.$t("login.en"),command:"en"},{label:this.$t("login.ja"),value:this.$t("login.ja"),command:"ja"},{label:this.$t("login.ko"),value:this.$t("login.ko"),command:"ko"}]}},mounted:function(){console.log(this.selectList)},computed:{command:function(){return this.$store.state.seletCommand}},methods:{login:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var i={name:e.ruleForm.name+"-token",password:e.ruleForm.password+"-token"};e.$store.dispatch("login",i).then(function(){e.$router.push("/dashboard"),localStorage.removeItem("navInfo")})}})},changeLanguage:function(t){this.$store.dispatch("addSelectCommand",t),this.$i18n.locale=t,this.$message({message:"Switch Language Success",type:"success"})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-container",style:t.note},[a("vue-particles",{attrs:{color:"#fff",particleOpacity:.5,particlesNumber:40,shapeType:"edge",particleSize:4,linesColor:"#fff",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:2,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}}),t._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules}},[a("div",{staticClass:"title"},[a("h2",{staticStyle:{margin:"0 0 40px","font-size":"26px"}},[t._v(t._s(t.$t("login.title")))]),t._v(" "),a("div",{staticClass:"set-language"},[a("el-dropdown",{attrs:{trigger:"click"},on:{command:t.changeLanguage}},[a("img",{attrs:{src:i("Qe9z")}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.selectList,function(e){return a("el-dropdown-item",{key:e.value,attrs:{disabled:t.command==e.command,command:e.command}},[t._v(t._s(e.value))])}),1)],1)],1)]),t._v(" "),a("el-form-item",{attrs:{prop:"name"}},[a("el-row",[a("el-col",{attrs:{span:1}},[a("i",{staticClass:"el-icon-s-custom"})]),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-input",{attrs:{placeholder:"Username"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("el-row",[a("el-col",{attrs:{span:1}},[a("i",{staticClass:"el-icon-lock"})]),t._v(" "),a("el-col",{attrs:{span:23}},[a("el-input",{attrs:{placeholder:"Password","show-password":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login("ruleForm")}},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"22px"}},[a("el-col",{attrs:{span:24}},[a("el-button",{staticClass:"loginButton",attrs:{type:"primary"},on:{click:function(e){return t.login("ruleForm")}}},[t._v(t._s(t.$t("login.button")))])],1)],1),t._v(" "),a("el-row",{staticClass:"info"},[a("el-col",{attrs:{span:16}},[a("el-row",[a("el-col",{attrs:{span:10}},[t._v("\n                        "+t._s(t.$t("login.name"))+": admin\n                    ")]),t._v(" "),a("el-col",{attrs:{span:14}},[t._v("\n                        "+t._s(t.$t("login.password"))+": "+t._s(t.$t("login.passwordText"))+"\n                    ")])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[t._v("\n                        "+t._s(t.$t("login.name"))+": editor\n                    ")]),t._v(" "),a("el-col",{attrs:{span:14}},[t._v("\n                        "+t._s(t.$t("login.password"))+": "+t._s(t.$t("login.passwordText"))+"\n                    ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("login.otherLogn")))])],1)],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(a,o,!1,function(t){i("1qfe")},"data-v-dad3a32e",null);e.default=n.exports}});
//# sourceMappingURL=6.d05ae839e62281d096dd.js.map