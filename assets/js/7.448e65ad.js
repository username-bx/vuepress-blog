(window.webpackJsonp=window.webpackJsonp||[]).push([[7,18],{373:function(t,s,e){},374:function(t,s,e){"use strict";e(373)},376:function(t,s,e){"use strict";e.r(s);var n={name:"PostMeta",computed:{thisIndex(){return this.$posts.indexOf(this.$page)},prevPost(){const t=this.thisIndex+1;return t>this.$posts.length-1?null:this.$posts[t]},nextPost(){const t=this.thisIndex-1;return t<0?null:this.$posts[t]}}},a=(e(374),e(0)),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"post-meta main-div"},[s("section",{staticClass:"post-date clearfix"},[t.$page.createdAt?s("span",{staticClass:"create-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.createdAt} : ${t.$page.createdAt}`)+"\n    ")]):t._e(),t._v(" "),t.$page.updatedAt?s("span",{staticClass:"update-date"},[t._v("\n      "+t._s(`${t.$themeConfig.lang.updatedAt} : ${t.$page.updatedAt}`)+"\n    ")]):t._e()]),t._v(" "),s("section",{staticClass:"post-links"},[t.prevPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.prevPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.prevPost} : ${t.prevPost.title}`)+"\n    ")]):t._e(),t._v(" "),t.nextPost?s("RouterLink",{staticClass:"post-link",attrs:{to:t.nextPost.path}},[t._v("\n      "+t._s(`${t.$themeConfig.lang.nextPost} : ${t.nextPost.title}`)+"\n    ")]):t._e()],1)])}),[],!1,null,"4e23451f",null);s.default=i.exports},385:function(t,s,e){"use strict";e.r(s);var n={name:"Post",components:{PostMeta:e(376).default},computed:{meta(){return!1!==this.$frontmatter.meta},vssue(){return!1!==this.$themeConfig.comments&&!1!==this.$frontmatter.vssue&&(this.vssueTitle||this.vssueId)},vssueTitle(){return this.$frontmatter["vssue-title"]||this.$frontmatter.title||void 0},vssueId(){return this.$frontmatter["vssue-id"]||void 0}}},a=e(0),i=Object(a.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"post"},[t.meta?s("PostMeta"):t._e(),t._v(" "),s("article",{staticClass:"main-div"},[s("Content",{key:t.$page.path,staticClass:"post-content content"})],1),t._v(" "),t.meta?s("PostMeta"):t._e(),t._v(" "),t.vssue?s("div",{staticClass:"main-div",attrs:{id:"post-comments"}},[s("Vssue",{attrs:{title:t.vssueTitle,"issue-id":t.vssueId}})],1):t._e()],1)}),[],!1,null,null,null);s.default=i.exports}}]);