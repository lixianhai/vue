webpackJsonp([17],{TYsJ:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("TIfe"),i={data:function(){return{userName:Object(a.a)().split("-")[0]}},created:function(){console.log(this.userName)},computed:{roles:function(){return this.$store.state.user.roles},switchRoles:{get:function(){return this.roles[0]},set:function(t){this.userName=t,this.$store.dispatch("changeRoles",t)}}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content-wrap"},[e("div",{staticStyle:{"margin-bottom":"15px"}},[t._v("你的权限："+t._s(t.roles))]),t._v("\n    切换权限：\n    "),e("el-radio-group",{model:{value:t.switchRoles,callback:function(s){t.switchRoles=s},expression:"switchRoles"}},[e("el-radio-button",{attrs:{label:"editor"}}),t._v(" "),e("el-radio-button",{attrs:{label:"admin"}})],1),t._v(" "),e("div",{staticStyle:{"margin-top":"30px"}},[e("div",[e("span",{staticClass:"permission-alert"},[t._v("\n                Only\n                "),e("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[t._v(t._s(t.userName))]),t._v(" can see this\n            ")],1)]),t._v(" "),e("div",[e("span",{staticClass:"permission-alert"},[t._v("\n            Both\n            "),e("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[t._v("admin")]),t._v(" and\n                "),e("el-tag",{staticClass:"permission-tag",attrs:{size:"small"}},[t._v("editor")]),t._v(" can see this\n            ")],1)])])],1)},staticRenderFns:[]};var r=e("VU/8")(i,n,!1,function(t){e("wNb2")},"data-v-02ddabf8",null);s.default=r.exports},wNb2:function(t,s){}});
//# sourceMappingURL=17.576fd4c101b8e703ba92.js.map