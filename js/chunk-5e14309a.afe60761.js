(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e14309a"],{"11e9":function(t,e,i){var n=i("52a7"),s=i("4630"),a=i("6821"),r=i("6a99"),o=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=a(t),e=r(e,!0),c)try{return l(t,e)}catch(i){}if(o(t,e))return s(!n.f.call(t,e),t[e])}},"12f1":function(t,e,i){},"224a":function(t,e,i){"use strict";i("12f1")},"2a15":function(t,e,i){},"456d":function(t,e,i){var n=i("4bf8"),s=i("0d58");i("5eda")("keys",(function(){return function(t){return s(n(t))}}))},"5eda":function(t,e,i){var n=i("5ca1"),s=i("8378"),a=i("79e5");t.exports=function(t,e){var i=(s.Object||{})[t]||Object[t],r={};r[t]=e(i),n(n.S+n.F*a((function(){i(1)})),"Object",r)}},"8e6e":function(t,e,i){var n=i("5ca1"),s=i("990b"),a=i("6821"),r=i("11e9"),o=i("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,i,n=a(t),c=r.f,l=s(n),u={},p=0;while(l.length>p)i=c(n,e=l[p++]),void 0!==i&&o(u,e,i);return u}})},"8f23":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bountyDetail?i("div",{staticClass:"TaskDetails"},[i("div",{staticClass:"banner"}),i("div",{staticClass:"content_bg"},[i("div",{staticClass:"content"},[i("div",{staticClass:"titleDate"},[i("div",{staticClass:"title"},[t._v("\n          "+t._s("en"===t.$t("index.switch")?t.bountyDetail.titleEn:t.bountyDetail.title)+"\n        ")]),i("div",{staticClass:"date"},[t._v("\n          "+t._s(t.$t("task.Completion"))+" ："),i("span",[t._v(t._s(t.bountyDetail.reward))]),t._v("UENC\n        ")])]),i("div",{staticClass:"text"},[t._v("\n        "+t._s("en"===t.$t("index.switch")?t.bountyDetail.descriptionEn:t.bountyDetail.description)+"\n      ")]),i("div",{staticClass:"num"},[i("i",{staticClass:"el-icon-circle-check"}),t._v(t._s(t.$t("task.Number"))+" ："+t._s(t.bountyDetail.applyCount)+"\n      ")]),i("div",{staticClass:"githup"},[i("i",{staticClass:"el-icon-circle-check"}),t._v("Github："),i("a",{attrs:{target:"_blank",href:t.bountyDetail.github}},[t._v(t._s(t.bountyDetail.github))]),t._v(t._s(t.$t("task.Click"))+"\n      ")]),i("div",{staticClass:"timeSubmit"},[i("div",{staticClass:"time"},[i("i",{staticClass:"el-icon-circle-check"}),t._v(t._s(t.$t("task.Deadline"))+" ："),i("span",[t._v(t._s(t.bountyDetail.endTime))])]),i("div",{staticClass:"submit"},["2"===t.bountyDetail.isApply?i("el-button",{attrs:{type:"info",size:"small",disabled:""}},[t._v("\n            "+t._s("cn"===t.$t("index.switch")?"已报名":"Have to sign up")+"\n          ")]):"3"===t.bountyDetail.isApply?i("el-button",{attrs:{type:"info",size:"small",disabled:""}},[t._v("\n            "+t._s("cn"===t.$t("index.switch")?"任务已结束":"Mission over")+"\n          ")]):i("el-button",{staticStyle:{background:"#5432F4"},attrs:{type:"primary",size:"small"},on:{click:t.apply}},[t._v(t._s(t.$t("task.task")))])],1)])])]),i("el-dialog",{attrs:{title:t.$t("task.apply"),visible:t.dialogVisible,width:"600px","before-close":t.handleClose,"show-close":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",{staticClass:"prompt"},[t._v(t._s(t.$t("task.info")))]),i("el-form",{staticClass:"demo-form-inline",attrs:{model:t.applyForm}},[i("el-form-item",{attrs:{label:t.$t("dialog.id")}},[i("el-input",{model:{value:t.applyForm.facebook,callback:function(e){t.$set(t.applyForm,"facebook",e)},expression:"applyForm.facebook"}})],1),i("el-form-item",{attrs:{label:t.$t("dialog.github")}},[i("el-input",{model:{value:t.applyForm.github,callback:function(e){t.$set(t.applyForm,"github",e)},expression:"applyForm.github"}})],1)],1),i("div",{staticClass:"btn1"},[i("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.$t("dialog.confirm")))])],1),i("div",{staticClass:"btn2"},[i("el-button",{attrs:{type:"text"},on:{click:t.handleClose}},[t._v(t._s(t.$t("dialog.cancel")))])],1)],1)],1):t._e()},s=[],a=(i("8e6e"),i("456d"),i("ac6a"),i("ade3")),r=(i("96cf"),i("1da1")),o=i("d4ec"),c=i("6cd7");function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var p=function t(){Object(o["a"])(this,t),this.facebook="",this.github=""},f={data:function(){return{dialogVisible:!1,bountyDetail:null,applyForm:new p,loginName:null,id:""}},created:function(){this.getBountyDetail()},methods:{getBountyDetail:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=this.$route.query.id,this.loginName=localStorage.getItem("username")||null,t.next=4,Object(c["j"])(this.id+"/"+this.loginName);case 4:e=t.sent,0===e.code?this.bountyDetail=e.data:this.$message.error("cn"===this.$t("index.switch")?"接口错误！":"Interface error!");case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleClose:function(){this.dialogVisible=!1,this.applyForm=new p},apply:function(){this.getBountyDetail(),this.loginName?(this.dialogVisible=!0,this.applyForm.bountyTaskId=this.bountyDetail.taskId):this.$message.error("cn"===this.$t("index.switch")?"请先登录再报名":"Please sign in first")},submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("username"),e){t.next=3;break}return t.abrupt("return",this.$message.error("cn"===this.$t("index.switch")?"请先去登录或注册":"Please go to login or register first"));case 3:this.applyForm.loginName=e,t.t0=regeneratorRuntime.keys(this.applyForm);case 5:if((t.t1=t.t0()).done){t.next=13;break}if(i=t.t1.value,n=this.applyForm[i],console.log(n),""!==n&&n){t.next=11;break}return t.abrupt("return",this.$message.error("cn"===this.$t("index.switch")?"不能为空":"Can it be empty"));case 11:t.next=5;break;case 13:return t.next=15,Object(c["i"])(u({},this.applyForm));case 15:s=t.sent,0===s.code?(this.$message.success("cn"===this.$t("index.switch")?"报名成功！":"success"),this.handleClose(),this.getBountyDetail()):this.$message.error(s.msg);case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},b=f,d=(i("af11"),i("224a"),i("2877")),h=Object(d["a"])(b,n,s,!1,null,"531c8eca",null);e["default"]=h.exports},9093:function(t,e,i){var n=i("ce10"),s=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,s)}},"990b":function(t,e,i){var n=i("9093"),s=i("2621"),a=i("cb7c"),r=i("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=n.f(a(t)),i=s.f;return i?e.concat(i(t)):e}},ac6a:function(t,e,i){for(var n=i("cadf"),s=i("0d58"),a=i("2aba"),r=i("7726"),o=i("32e9"),c=i("84f2"),l=i("2b4c"),u=l("iterator"),p=l("toStringTag"),f=c.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=s(b),h=0;h<d.length;h++){var m,y=d[h],g=b[y],v=r[y],k=v&&v.prototype;if(k&&(k[u]||o(k,u,f),k[p]||o(k,p,y),c[y]=f,g))for(m in n)k[m]||a(k,m,n[m],!0)}},af11:function(t,e,i){"use strict";i("2a15")},d4ec:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return n}))},f1ae:function(t,e,i){"use strict";var n=i("86cc"),s=i("4630");t.exports=function(t,e,i){e in t?n.f(t,e,s(0,i)):t[e]=i}}}]);
//# sourceMappingURL=chunk-5e14309a.afe60761.js.map