webpackJsonp([13],{"1cjw":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:{value:{type:String,default:""}},computed:{filename:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("label",{staticClass:"radio-label",staticStyle:{"padding-left":"0"}},[t._v("Filename: ")]),t._v(" "),i("el-input",{staticStyle:{width:"345px"},attrs:{placeholder:"Please enter the file name (default excel-list)","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}})],1)},staticRenderFns:[]},l=i("VU/8")(a,n,!1,null,null,null).exports,o={props:{value:{type:Boolean,default:!0}},computed:{autoWidth:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("label",{staticClass:"radio-label"},[t._v("Cell Auto-Width: ")]),t._v(" "),i("el-radio-group",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}},[i("el-radio",{attrs:{label:!0,border:""}},[t._v("\n      True\n    ")]),t._v(" "),i("el-radio",{attrs:{label:!1,border:""}},[t._v("\n      False\n    ")])],1)],1)},staticRenderFns:[]},s=i("VU/8")(o,r,!1,null,null,null).exports,u={props:{value:{type:String,default:"xlsx"}},data:function(){return{options:["xlsx","csv","txt"]}},computed:{bookType:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"inline-block"}},[i("label",{staticClass:"radio-label"},[t._v("Book Type: ")]),t._v(" "),i("el-select",{staticStyle:{width:"120px"},model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}},t._l(t.options,function(t){return i("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1)},staticRenderFns:[]},c={name:"ExportExcel",components:{FilenameOption:l,AutoWidthOption:s,BookTypeOption:i("VU/8")(u,p,!1,null,null,null).exports},data:function(){return{list:[{id:1,title:"Inqmgrigib Xxpc Wpxaen Tvvifnykv Lwfjlgbxe Krqkdw Jfcsfgl Trcmuwpxk Vgmflhw",author:"Linda",pageviews:"2828",timestamp:"1986-06-05 17:21"},{id:2,title:"Slclv Ytakiictiw Kubtn Iemx Oqfb Dba",author:"Sharon",pageviews:"1126",timestamp:"1983-03-07 10:56"},{id:3,title:"Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe",author:"Joseph",pageviews:"938",timestamp:"1999-07-10 09:54"},{id:4,title:"Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp",author:"Donna",pageviews:"943",timestamp:"1971-11-26 12:33"},{id:5,title:"Wvjacn Ouruxmvfb Bbwtttv Ludeppqx Lnsgqd Ojfp",author:"Patricia",pageviews:"3052",timestamp:"2017-03-09 02:43"},{id:6,title:"Xmtdurufy Ouyjfvgn Juutjttsf Gxxbqcg Obcxmgnp Kopv Jjndo Lwso Wocxufrc",author:"Susan",pageviews:"1553",timestamp:"985-12-31 07:20"},{id:7,title:"Hyajbxhu Rhivpy Qhr Hwsmxutbu Ccjyfci Gircnnb Xrmgoeypu Occwbehd Xidutqmiv",author:"Brenda",pageviews:"1297",timestamp:"2006-10-24 13:43"},{id:8,title:"Uiurtmrkv Gftr Zbxivct Qjaohlok Vlcz Selxuxjhq Jkbfrpyt Rpobayi Gcqxwwh",author:"Elizabeth",pageviews:"4006",timestamp:"1993-09-08 06:11"},{id:9,title:"Koc Hemnjyc Tnckpjssz Txigwe Ojn Empudeci",author:"Kimberly",pageviews:"4363",timestamp:"1988-08-29 12:54"},{id:10,title:"Inqmgrigib Xxpc Wpxaen Tvvifnykv Lwfjlgbxe Krqkdw Jfcsfgl Trcmuwpxk Vgmflhw",author:"Linda",pageviews:"2828",timestamp:"1986-06-05 17:21"},{id:11,title:"Slclv Ytakiictiw Kubtn Iemx Oqfb Dba",author:"Sharon",pageviews:"1126",timestamp:"1983-03-07 10:56"},{id:12,title:"Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe",author:"Joseph",pageviews:"938",timestamp:"1999-07-10 09:54"},{id:13,title:"Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp",author:"Donna",pageviews:"943",timestamp:"1971-11-26 12:33"},{id:14,title:"Wvjacn Ouruxmvfb Bbwtttv Ludeppqx Lnsgqd Ojfp",author:"Patricia",pageviews:"3052",timestamp:"2017-03-09 02:43"},{id:15,title:"Xmtdurufy Ouyjfvgn Juutjttsf Gxxbqcg Obcxmgnp Kopv Jjndo Lwso Wocxufrc",author:"Susan",pageviews:"1553",timestamp:"985-12-31 07:20"},{id:16,title:"Hyajbxhu Rhivpy Qhr Hwsmxutbu Ccjyfci Gircnnb Xrmgoeypu Occwbehd Xidutqmiv",author:"Brenda",pageviews:"1297",timestamp:"2006-10-24 13:43"},{id:17,title:"Uiurtmrkv Gftr Zbxivct Qjaohlok Vlcz Selxuxjhq Jkbfrpyt Rpobayi Gcqxwwh",author:"Elizabeth",pageviews:"4006",timestamp:"1993-09-08 06:11"},{id:18,title:"Koc Hemnjyc Tnckpjssz Txigwe Ojn Empudeci",author:"Kimberly",pageviews:"4363",timestamp:"1988-08-29 12:54"},{id:19,title:"Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe",author:"Joseph",pageviews:"938",timestamp:"1999-07-10 09:54"},{id:20,title:"Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp",author:"Donna",pageviews:"943",timestamp:"1971-11-26 12:33"}],listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx"}},created:function(){},methods:{handleDownload:function(){var t=this;this.downloadLoading=!0,i.e(47).then(i.bind(null,"zWO4")).then(function(e){var i=t.list,a=t.formatJson(["id","title","author","pageviews","display_time"],i);e.export_json_to_excel({header:["Id","Title","Author","Readings","Date"],data:a,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?parseTime(e[t]):e[t]})})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container content-wrap"},[i("div",[i("FilenameOption",{model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t._v(" "),i("AutoWidthOption",{model:{value:t.autoWidth,callback:function(e){t.autoWidth=e},expression:"autoWidth"}}),t._v(" "),i("BookTypeOption",{model:{value:t.bookType,callback:function(e){t.bookType=e},expression:"bookType"}}),t._v(" "),i("el-button",{staticStyle:{margin:"0 0 20px 20px"},attrs:{loading:t.downloadLoading,type:"primary",icon:"document"},on:{click:t.handleDownload}},[t._v("\n      Export Excel\n    ")]),t._v(" "),i("a",{staticStyle:{"margin-left":"15px"},attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html",target:"_blank"}},[i("el-tag",{attrs:{type:"info"}},[t._v("Documentation")])],1)],1),t._v(" "),i("el-table",{attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"Id",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"Author",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"Readings",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"Date",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-time"}),t._v(" "),i("span",[t._v(t._s(e.row.timestamp))])]}}])})],1)],1)},staticRenderFns:[]};var m=i("VU/8")(c,d,!1,function(t){i("Y07b")},null,null);e.default=m.exports},Y07b:function(t,e){}});
//# sourceMappingURL=13.00474b3271e61fe43a85.js.map