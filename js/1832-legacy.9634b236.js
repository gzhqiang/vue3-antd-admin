"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[1832,9437],{9437:function(e,r,n){n.r(r),n.d(r,{schemas:function(){return a}});var o,t=n(48534),a=(n(35666),n(41539),n(26699),n(32023),[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o=(0,t.Z)(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",Promise.reject("值不能为空"));case 2:if("1"!==n){e.next=4;break}return e.abrupt("return",Promise.reject("值不能为1"));case 4:return e.abrupt("return",Promise.resolve());case 5:case"end":return e.stop()}}),e)}))),function(e,r){return o.apply(this,arguments)}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"请选择你的爱好"}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(e,n){setTimeout((function(){r.includes("admin")?n("该字段不能包含admin关键字"):e()}),100)}))}}]}])},11832:function(e,r,n){n.r(r),n.d(r,{default:function(){return d}});n(58293);var o=n(45542),t=(n(94310),n(38e3)),a=n(95082),l=n(66252),u=n(2262),i=n(67835),s=n(9437),c=(0,l.Uk)(" 确定 "),p=(0,l.aZ)((0,a.Z)((0,a.Z)({},{name:"DemosFormBasicForm"}),{},{setup:function(e){var r=(0,u.iH)(),n={schemas:s.schemas,labelWidth:120};function a(){var e;null===(e=r.value)||void 0===e||e.validate().then((function(){return t.Z.success("验证通过！")}))}return function(e,t){var s=(0,l.up)("a-button"),p=(0,l.up)("a-card");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)((0,u.SU)(o.Z),{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),(0,l.Wm)(p,null,{default:(0,l.w5)((function(){return[(0,l.Wm)((0,u.SU)(i.SchemaForm),{ref_key:"dynamicForm",ref:r,"form-schema":n},{"operate-button":(0,l.w5)((function(){return[(0,l.Wm)(s,{type:"primary",onClick:a},{default:(0,l.w5)((function(){return[c]})),_:1})]})),_:1},512)]})),_:1})])}}}));var d=(0,n(83744).Z)(p,[["__scopeId","data-v-2c04fc72"]])}}]);