(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",(function(){return m}));var n=a(0),r=a.n(n),s=a(120),o=a.n(s),l=a(41),i=a(237);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map((function(e){return r.a.createElement("li",{key:e.node.fields.slug},r.a.createElement(l.a,{to:e.node.fields.slug},r.a.createElement("h2",{className:"is-size-2"},e.node.frontmatter.title)))})),t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.totalCount,s=n+" post"+(1===n?"":"s")+" tagged with “"+t+"”";return r.a.createElement(i.a,null,r.a.createElement("section",{className:"section"},r.a.createElement(o.a,{title:t+" | "+a}),r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:"6rem"}},r.a.createElement("h3",{className:"title is-size-4 is-bold-light"},s),r.a.createElement("ul",{className:"taglist"},e),r.a.createElement("p",null,r.a.createElement(l.a,{to:"/tags/"},"Browse all tags")))))))},n}(n.Component);t.default=c;var m="4202630850"}}]);
//# sourceMappingURL=component---src-templates-tags-js-e8277eb2444796b35e25.js.map