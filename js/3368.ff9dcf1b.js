"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[3368],{3368:function(e,t,n){n.r(t),n.d(t,{baseColumns:function(){return c}});n(6788);var a=n(97139),d=(n(93300),n(96461)),l=(n(44830),n(27782)),r=n(66252);function i(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,r.lA)(e)}const c=[{title:"头像",width:80,dataIndex:"headImg",hideInSearch:!0,bodyCell:({record:e})=>(0,r.Wm)(l.ZP,{src:e.headImg},null)},{title:"姓名",width:120,dataIndex:"name",align:"center"},{title:"用户名",width:120,align:"center",dataIndex:"username"},{title:"所在部门",dataIndex:"departmentName",hideInSearch:!0,align:"center",width:180},{title:"所属角色",dataIndex:"roleNames",align:"center",hideInSearch:!0,width:220,bodyCell:({record:e})=>{let t;return(0,r.Wm)(a.Z,null,i(t=e.roleNames.map((e=>(0,r.Wm)(d.Z,{color:"success",key:e},i(e)?e:{default:()=>[e]}))))?t:{default:()=>[t]})}},{title:"呢称",width:120,align:"center",dataIndex:"nickName"},{title:"邮箱",width:120,align:"center",dataIndex:"email"},{title:"手机",width:120,align:"center",dataIndex:"phone"},{title:"备注",width:120,align:"center",dataIndex:"remark"},{title:"状态",dataIndex:"status",width:100,formItemProps:{component:"Select",componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},bodyCell:({record:e})=>{const t=1===e.status;return(0,r.Wm)(d.Z,{color:t?"success":"red"},{default:()=>[t?"启用":"禁用"]})}}]}}]);