(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fourthDetail"],{"0c22":function(t,i,n){"use strict";var e=n("9deb0"),r=n.n(e);r.a},3182:function(t,i,n){var e=n("24fb"),r=n("1de5"),a=n("0bf2");i=e(!1);var s=r(a);i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-padding-wrap[data-v-58488890]{width:100vw;height:100vh;background-image:url('+s+");background-size:100% 100%;position:relative}.left-btn[data-v-58488890]{border-radius:20%;position:absolute;left:%?50?%;top:%?50?%;z-index:999}.left-btn[data-v-58488890]:hover{cursor:pointer}.right-btn[data-v-58488890]{border-radius:20%;position:absolute;right:%?50?%;top:%?50?%;z-index:999}.right-btn[data-v-58488890]:hover{cursor:pointer}.slide-image[data-v-58488890]{position:absolute;height:%?1400?%;width:100%;border-radius:%?15?%;z-index:5;top:15%;margin:0 %?120?%}uni-swiper[data-v-58488890]{height:%?1850?%}",""]),t.exports=i},"41cb":function(t,i,n){"use strict";n("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{currentIndex:0}},methods:{swierChange:function(t){this.currentIndex=t.detail.current},backTo:function(){console.log("uuuuuuuuuu"),uni.navigateBack({delta:1})},toHome:function(){uni.redirectTo({url:"./index/index"})}}};i.default=e},9738:function(t,i,n){"use strict";n.r(i);var e=n("41cb"),r=n.n(e);for(var a in e)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(a);i["default"]=r.a},"9deb0":function(t,i,n){var e=n("3182");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=n("4f06").default;r("a2c51718",e,!0,{sourceMap:!1,shadowMode:!1})},ba33:function(t,i,n){"use strict";n.r(i);var e=n("c00b"),r=n("9738");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(i,t,(function(){return r[t]}))}(a);n("0c22");var s=n("f0c5"),u=Object(s["a"])(r["default"],e["b"],e["c"],!1,null,"58488890",null,!1,e["a"],void 0);i["default"]=u.exports},c00b:function(t,i,n){"use strict";n.d(i,"b",(function(){return r})),n.d(i,"c",(function(){return a})),n.d(i,"a",(function(){return e}));var e={uniIcons:n("9deb").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("uni-icons",{staticClass:"left-btn",staticStyle:{color:"rgba(255,255,255,0.8)"},attrs:{type:"undo-filled",size:"60"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.backTo.apply(void 0,arguments)}}}),e("uni-icons",{staticClass:"right-btn",staticStyle:{color:"rgba(255,255,255,0.8)"},attrs:{type:"home-filled",size:"60"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toHome.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"page-section swiper"},[e("v-uni-view",{staticClass:"page-section-spacing"},[e("v-uni-swiper",{attrs:{autoplay:!1,"indicator-dots":!0,current:t.currentIndex,circular:!0,"previous-margin":"140rpx","next-margin":"240rpx",interval:3e3,duration:100},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swierChange.apply(void 0,arguments)}}},[e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("d1b7")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("ee28")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("cdbb")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("d1b7")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("ee28")}})],1),e("v-uni-swiper-item",[e("v-uni-image",{staticClass:"slide-image",attrs:{src:n("cdbb")}})],1)],1)],1)],1)],1)],1)},a=[]},cdbb:function(t,i,n){t.exports=n.p+"static/img/lunbo03.b6b633eb.png"},d1b7:function(t,i,n){t.exports=n.p+"static/img/lunbo01.b8ed0333.png"},ee28:function(t,i,n){t.exports=n.p+"static/img/lunbo02.d9ccc573.png"}}]);