webpackJsonp([11],{NZsE:function(e,t){},hrOw:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("Xxa5"),l=i.n(o),r=i("exGp"),n=i.n(r),s={data:function(){return{Edit:this.$t("button.edit"),Delete:this.$t("button.delete"),dialogVisible:!1,dialogType:"new",editIndex:-1,editRow:{},role:{key:"",name:"",description:"",routes:[]},rolesList:[{roleName:"admin",describe:"Super Administrator. Have access to view all pages."},{roleName:"editor",describe:"Normal Editor. Can see all pages except permission page"},{roleName:"visitor",describe:"Just a visitor. Can only see the home page and the document page"}],rules:{name:[]}}},created:function(){},computed:{routesData:function(){return this.routes}},methods:{handleAddRole:function(){this.dialogVisible=!0,this.role.name="",this.role.description=""},handleEdit:function(e){var t=e.$index,i=e.row;this.dialogType="edit",this.dialogVisible=!0,this.editIndex=t,this.editRow=i,this.role.name=i.roleName,this.role.description=i.describe},handleDelete:function(e){var t=this,i=e.$index;e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(n()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.rolesList.splice(i,1),t.$message({type:"success",message:"Delete succed!"});case 2:case"end":return e.stop()}},e,t)}))).catch(function(e){console.error(e)})},confirmRole:function(){var e=this;this.$refs.roleForm.validate(function(t){if(t)if("edit"==e.dialogType)""!==e.role.description&&(e.rolesList[e.editIndex].describe=e.role.description),""!==e.role.name&&(e.rolesList[e.editIndex].roleName=e.role.name),e.dialogVisible=!1,e.$refs.roleForm.resetFields(),console.log(e.editRow),e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n                                <div>Role Key: "+e.editRow.roleName+"</div>\n                                <div>Role Nmae: "+e.editRow.roleName+"</div>\n                                <div>Description: "+e.editRow.describe+"</div>\n                            ",type:"success"});else{var i={roleName:e.role.name,describe:e.role.description};e.rolesList.push(i),e.dialogVisible=!1,e.$refs.roleForm.resetFields()}})},closeDialog:function(){this.$refs.roleForm.resetFields()}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content-wrap"},[i("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v(e._s(this.$t("button.newRole")))]),e._v(" "),i("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[i("el-table-column",{attrs:{align:"center",prop:"roleName",label:"Role Key",width:"220"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",prop:"roleName",label:"Role Name",width:"220"}}),e._v(" "),i("el-table-column",{attrs:{align:"header-center",prop:"describe",label:"Description"}}),e._v(" "),i("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){return e.handleEdit(t)}}},[e._v(e._s(e.Edit))]),e._v(" "),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){return e.handleDelete(t)}}},[e._v(e._s(e.Delete))])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.closeDialog}},[i("el-form",{ref:"roleForm",attrs:{model:e.role,"label-width":"80px",rules:e.rules,"label-position":"left"}},[i("el-form-item",{attrs:{label:"Name",prop:"name"}},[i("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"Desc",prop:"description"}},[i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1)],1),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1)],1)},staticRenderFns:[]};var c=i("VU/8")(s,a,!1,function(e){i("NZsE")},null,null);t.default=c.exports}});
//# sourceMappingURL=11.52e91b7d006c487a6026.js.map