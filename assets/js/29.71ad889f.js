(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{395:function(t,n,s){"use strict";s.r(n);var a=s(1),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("背景:")]),t._v(" "),n("ol",[n("li",[t._v("你有一个域名 (举例: www.luogesidoc.com)")]),t._v(" "),n("li",[t._v("你已经使用域名解析到自己的服务器 80 端口")]),t._v(" "),n("li",[t._v("现在你又有一个项目想部署到这个服务器上,同时也用这个域名的 80 端口 (blog.luogesidoc.com)")])]),t._v(" "),n("h1",{attrs:{id:"namesilo创建二级域名-修改nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namesilo创建二级域名-修改nginx配置"}},[t._v("#")]),t._v(" namesilo创建二级域名,修改nginx配置")]),t._v(" "),n("h2",{attrs:{id:"_1-namesilo-创建二级域名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-namesilo-创建二级域名"}},[t._v("#")]),t._v(" 1. namesilo 创建二级域名")]),t._v(" "),n("p",[n("img",{attrs:{src:"/img/namesilo/namesilo1.jpg",alt:"An image"}}),t._v(" "),n("img",{attrs:{src:"/img/namesilo/namesilo2.jpg",alt:"An image"}}),t._v(" "),n("img",{attrs:{src:"/img/namesilo/namesilo3.jpg",alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"_2-修改nginx配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改nginx配置"}},[t._v("#")]),t._v(" 2. 修改nginx配置")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name luogesidoc.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name blog.luogesidoc.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# blog.luogesidoc.com 在这里配置二级域名")]),t._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root blog"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# blog 在这里配置二级域名对应的项目文件夹")]),t._v("\n        index index.html index.htm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);