"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[5758],{83529:function(e,n,t){t.d(n,{Xt:function(){return o},JV:function(){return l},$s:function(){return a},fA:function(){return p},ul:function(){return d},Rd:function(){return s}});var r=t(30803),u=t(2874);function o(e){return(0,r.W)({url:u.default.info,method:"get",params:e})}function l(e){return(0,r.W)({url:u.default.list,method:"get",data:e})}function a(e){return(0,r.W)({url:u.default.page,method:"get",params:e})}function p(e){return(0,r.W)({url:u.default.add,method:"post",data:e},{successMsg:"创建角色成功"})}function d(e){return(0,r.W)({url:u.default.update,method:"post",data:e},{successMsg:"更新角色成功"})}function s(e){return(0,r.W)({url:u.default.delete,method:"post",data:e},{successMsg:"删除角色成功"})}},15758:function(e,n,t){t.r(n),t.d(n,{deptSchemas:function(){return u},userSchemas:function(){return o},updatePswSchemas:function(){return l},transferUserSchemas:function(){return a}});var r=t(83529);const u=[{field:"name",component:"Input",label:"部门名称",rules:[{required:!0,type:"string"}]},{field:"parentId",component:"TreeSelect",label:"上级部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"orderNum",component:"InputNumber",label:"排序号",defaultValue:255,componentProps:{style:{width:"100%"}}}],o=[{field:"departmentId",component:"TreeSelect",label:"所属部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"roles",component:"Select",label:"所属角色",rules:[{required:!0,type:"array"}],componentProps:{mode:"multiple",request:async()=>(await(0,r.JV)()).map((e=>({label:e.name,value:e.id})))}},{field:"username",component:"Input",label:"用户名",rules:[{required:!0}]},{field:"name",component:"Input",label:"姓名",colProps:{span:12},rules:[{required:!0}]},{field:"nickName",component:"Input",label:"呢称",colProps:{span:12}},{field:"email",component:"Input",label:"邮箱",colProps:{span:12}},{field:"phone",component:"Input",label:"手机",colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",label:"状态",defaultValue:1,componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}}],l=[{field:"password",component:"Input",label:"新密码",rules:[{required:!0,type:"string"}]}],a=[{field:"departmentId",component:"TreeSelect",label:"转移至",rules:[{required:!0,type:"number"}]}]}}]);