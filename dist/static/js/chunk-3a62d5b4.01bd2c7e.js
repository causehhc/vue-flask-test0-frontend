(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a62d5b4"],{"015d":function(e,s,t){},"6f05":function(e,s,t){"use strict";t("015d")},"9ed6":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("el-container",[a("el-header",{staticClass:"Header_Wrapper"},[a("div",{staticClass:"NavBar_Wrapper"},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"Part1___Wrapper"},[a("el-col",{staticClass:"logoWrapper",attrs:{span:8}},[a("el-link",{attrs:{href:"/login",underline:!1}},[a("img",{staticClass:"image_logo",attrs:{src:t("cf05")}}),e._v(" Beta ")])],1),a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}})],1)]),a("el-col",{attrs:{span:12}})],1)]),a("el-main",{staticClass:"Main_Wrapper"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"login-container"},[a("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[a("div",{staticClass:"title-container"},[a("h3",{staticClass:"title"},[e._v("Login Form")])]),a("el-form-item",{attrs:{prop:"username"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"user"}})],1),a("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":"password"}})],1),a("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleLogin(s)}},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}}),a("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[a("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),a("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleLogin(s)}}},[e._v("Login")]),a("div",{staticClass:"tips"},[a("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: Your E-mail")]),a("span",[e._v(" password: More than 6 digits")])])],1)],1)])],1)],1)},r=[],n=t("61f7"),o={name:"temp",data:function(){var e=function(e,s,t){Object(n["b"])(s)?t():t(new Error("Please enter the correct user name"))},s=function(e,s,t){s.length<6?t(new Error("The password can not be less than 6 digits")):t()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:s}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},i=o,l=(t("6f05"),t("2877")),c=Object(l["a"])(i,a,r,!1,null,"17a72dba",null);s["default"]=c.exports}}]);