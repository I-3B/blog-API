(this["webpackJsonpblog-client"]=this["webpackJsonpblog-client"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,function(e,t,n){},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"BASE_URL",(function(){return A}));var c=n(12),a=n.n(c),s=n(7),r=n(2),o=(n(17),n(0));var i=function(){return Object(o.jsx)("section",{className:"about",children:Object(o.jsxs)("p",{children:["Created by ",Object(o.jsx)("a",{href:"https://github.com/i-3b",children:"Islam Naasani"})," ","using Express.js and React"]})})},j=n(4),l=n.n(j),u=n(6),d=n(3),b=n(1),m=n.n(b);n(8),n(20);var h=function(){return Object(o.jsxs)("div",{className:"sk-chase",children:[Object(o.jsx)("div",{className:"sk-chase-dot"}),Object(o.jsx)("div",{className:"sk-chase-dot"}),Object(o.jsx)("div",{className:"sk-chase-dot"}),Object(o.jsx)("div",{className:"sk-chase-dot"}),Object(o.jsx)("div",{className:"sk-chase-dot"}),Object(o.jsx)("div",{className:"sk-chase-dot"})]})};var p=function(){var e=Object(b.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(),s=Object(d.a)(a,2),i=s[0],j=s[1],m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(Object(o.jsx)(h,{})),n=new FormData(t.currentTarget).get("password"),e.next=5,fetch("".concat(A,"/auth/admin"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(String(localStorage.getItem("token")))},method:"POST",body:JSON.stringify({password:n})}).then((function(e){return e.json()})).catch((function(){return{passed:!1,msg:"user is not logged in"}}));case 5:a=e.sent,s=a.passed,r=a.msg,s?j(!0):c(Object(o.jsx)("p",{className:"error",children:r}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i?Object(o.jsx)(r.a,{to:"/admin"}):Object(o.jsxs)("form",{className:"form",action:"",onSubmit:m,children:[Object(o.jsx)("header",{children:"Become an admin"}),Object(o.jsx)("label",{htmlFor:"password",children:"Admin password:"}),Object(o.jsx)("input",{type:"password",id:"password",name:"password",required:!0}),n,Object(o.jsx)("input",{type:"submit",value:"become an admin"})]})};n(21);var O=function(e){return Object(o.jsxs)("a",{href:"/posts/".concat(e._id),className:"post-card",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("div",{className:"fade-container",children:[Object(o.jsxs)("p",{className:"fade",children:[e.content.substring(0,500),"..."]}),Object(o.jsx)("p",{className:"continue",children:"Continue reading"})]}),Object(o.jsx)("span",{className:"date",children:new Date(e.publishedAt).toISOString().replace(/T/," ").replace(/\..+/,"")})]})};n(11),n(22);var x=function(e){return Object(o.jsx)("div",{className:"error-message",children:e.message})};var f=function(){var e=Object(b.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(!1),s=Object(d.a)(a,2),r=s[0],i=s[1],j=Object(b.useState)([]),l=Object(d.a)(j,2),u=l[0],m=l[1];return Object(b.useEffect)((function(){fetch(A+"/posts",{mode:"cors"}).then((function(e){return e.json()})).then((function(e){i(!0),m(e)}),(function(e){i(!0),c(e)}))}),[]),n?Object(o.jsx)(x,{message:n.message}):r?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"posts-container",children:u.reverse().map((function(e){return Object(o.jsx)("li",{id:e._id,children:O(e)},e._id)}))})}):Object(o.jsx)(h,{})};n(23);var g=function(e){var t=Object(b.useState)(!1),n=Object(d.a)(t,2),c=n[0],a=n[1],s=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.parentNode.id,c=String(localStorage.getItem("token")),e.next=4,fetch("".concat(A,"/admin/posts/").concat(n,"/"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(c)},method:"DELETE"}).then((function(e){return e.json()})).catch((function(){return{error:"Unauthorized"}}));case 4:(s=e.sent).error?alert(s.error):a(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("div",{className:"post-card-admin",id:e.post._id,children:[Object(o.jsx)("h3",{children:e.post.title}),e.post.published&&Object(o.jsx)("a",{className:"view",href:"/posts/".concat(e.post._id),children:"User view"}),Object(o.jsx)("a",{className:"edit",href:"/admin/posts/".concat(e.post._id,"/edit"),children:"Edit post"}),Object(o.jsx)("button",{className:"delete",onClick:s,children:"Delete post"}),Object(o.jsx)("span",{className:"date",children:new Date(e.post.publishedAt).toISOString().replace(/T/," ").replace(/\..+/,"")})]})};var v=function(){var e=Object(b.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(!1),s=Object(d.a)(a,2),r=s[0],i=s[1],j=Object(b.useState)([]),l=Object(d.a)(j,2),u=l[0],m=l[1];return Object(b.useEffect)((function(){var e=String(localStorage.getItem("token"));fetch(A+"/admin/posts",{mode:"cors",headers:{authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){i(!0),m(e)}),(function(e){i(!0),c(e)}))}),[r,n]),n?Object(o.jsx)(x,{message:n.message}):r?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("ul",{className:"posts-container",children:[Object(o.jsx)("li",{className:"new-post",children:Object(o.jsx)("a",{href:"/admin/new",children:"New Post+"})}),u.reverse().map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)(g,{post:e})},e._id)}))]})}):Object(o.jsx)(h,{})};function S(){var e=Object(r.i)().postId,t=Object(b.useState)(),n=Object(d.a)(t,2),c=n[0],a=n[1],s=Object(b.useState)(),i=Object(d.a)(s,2),j=i[0],m=i[1],p=Object(b.useState)(!1),O=Object(d.a)(p,2),x=O[0],f=O[1],g=function(){var t=Object(u.a)(l.a.mark((function t(n){var c,a,s,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),m(Object(o.jsx)(h,{})),c=new FormData(n.currentTarget),a={title:c.get("title"),content:c.get("content"),published:"true"===c.get("published")},s=String(localStorage.getItem("token")),t.next=7,fetch("".concat(A,"/admin/posts/").concat(e,"/"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(s)},method:"PUT",body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(){return{errors:[{msg:"Unauthorized"}]}}));case 7:(i=t.sent).errors?m(Object(o.jsx)("ul",{children:i.errors.map((function(e){return Object(o.jsx)("li",{className:"error",children:e.msg},e.msg)}))})):a.published?f(Object(o.jsx)(r.a,{to:"/posts/".concat(i.post._id)})):f(Object(o.jsx)(r.a,{to:"/admin/"}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.useEffect)((function(){var t=String(localStorage.getItem("token"));fetch("".concat(A,"/admin/posts/").concat(e),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(){return{errors:[{msg:"Unauthorized"}]}})).then((function(e){a(e)}))}),[]),x||(c?Object(o.jsxs)("form",{className:"form",onSubmit:g,children:[Object(o.jsx)("header",{children:"Edit post"}),Object(o.jsx)("label",{htmlFor:"title",children:"Post title:"}),Object(o.jsx)("input",{type:"text",id:"title",name:"title",defaultValue:c.title,required:!0}),Object(o.jsx)("label",{htmlFor:"content",children:"Post content:"}),Object(o.jsx)("textarea",{id:"content",name:"content",cols:30,rows:30,defaultValue:c.content,required:!0}),Object(o.jsxs)("label",{htmlFor:"published",className:"checkbox-container",children:["Publish post",Object(o.jsx)("input",{type:"checkbox",id:"published",name:"published",value:"true",className:"checkbox",defaultChecked:c.published}),Object(o.jsx)("span",{className:"checkmark"})]}),j,Object(o.jsx)("input",{type:"submit",value:"Create post"})]}):Object(o.jsx)(h,{}))}var w=m.a.createContext(null);function N(e){var t=e.children,n=function(){var e=!1,t=localStorage.getItem("token-date"),n=parseInt(t||"0");if((Date.now()-n)/864e5>29)localStorage.setItem("token",""),localStorage.setItem("token-date",""),localStorage.setItem("username","");else{var c=localStorage.getItem("token");0!==(null===c||void 0===c?void 0:c.length)&&(e=!0)}var a=Object(b.useState)(e),s=Object(d.a)(a,2),r=s[0],o=s[1];return{authed:r,login:function(e){return new Promise((function(t){fetch("".concat(A,"/auth/login"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.token?(localStorage.setItem("token",e.token),localStorage.setItem("token-date",JSON.stringify(Date.now())),localStorage.setItem("username",e.username),localStorage.setItem("admin",e.admin),o(!0),t("")):(o(!1),t(e.msg))}),(function(e){o(!1),t(e.message)}))}))},logout:function(){localStorage.clear(),o(!1)}}}();return m.a.Children.count(t)?Object(o.jsx)(w.Provider,{value:n,children:m.a.Children.map(t,(function(e){return Object(o.jsxs)(o.Fragment,{children:[" ",e]})}))}):Object(o.jsx)(w.Provider,{value:n})}function k(){return m.a.useContext(w)}n(24);var y=function(){var e=k().authed,t="true"===localStorage.getItem("admin");return Object(o.jsx)("header",{className:"page-header",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"li-logo",children:Object(o.jsx)(s.b,{to:"/",className:"logo"})}),!e&&Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/signup",children:"Sign up"})}),!e&&Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/login",children:"Login"})}),e&&Object(o.jsxs)("li",{children:[Object(o.jsx)(s.b,{to:"/logout",children:"Logout"}),Object(o.jsxs)("span",{children:["(",localStorage.getItem("username"),") "]})]}),e&&t&&Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/admin",children:"admin"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/about",children:"About"})})]})})})};var I=function(){var e=Object(b.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(!1),s=Object(d.a)(a,2),i=s[0],j=s[1],l=k().login;return i?Object(o.jsx)(r.a,{to:"/"}):Object(o.jsxs)("form",{className:"form",onSubmit:function(e){c(Object(o.jsx)(h,{})),e.preventDefault();var t=new FormData(e.currentTarget),n={email:t.get("email"),password:t.get("password")};l(n).then((function(e){e?c(Object(o.jsx)("p",{className:"error",children:e})):j(!0)}))},action:"",method:"GET",children:[Object(o.jsx)("header",{children:"Login"}),Object(o.jsx)("label",{htmlFor:"email",children:"Your email:"}),Object(o.jsx)("input",{id:"email",type:"email",placeholder:"example@mail.com",name:"email",required:!0}),Object(o.jsx)("label",{htmlFor:"password",children:"Your password:"}),Object(o.jsx)("input",{id:"password",type:"password",name:"password",required:!0}),n,Object(o.jsx)("input",{type:"submit",value:"login"})]})};var F=function(){return(0,k().logout)(),Object(o.jsx)(r.a,{to:"/"})};function T(){var e=Object(b.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(!1),s=Object(d.a)(a,2),i=s[0],j=s[1],m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(Object(o.jsx)(h,{})),n=new FormData(t.currentTarget),a={title:n.get("title"),content:n.get("content"),published:"true"===n.get("published")},s=String(localStorage.getItem("token")),e.next=7,fetch("".concat(A,"/admin/posts"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(s)},method:"POST",body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(){return{errors:[{msg:"Unauthorized"}]}}));case 7:(i=e.sent).errors?c(Object(o.jsx)("ul",{children:i.errors.map((function(e){return Object(o.jsx)("li",{className:"error",children:e.msg},e.msg)}))})):a.published?j(Object(o.jsx)(r.a,{to:"/posts/".concat(i.post._id)})):j(Object(o.jsx)(r.a,{to:"/admin/"}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i||Object(o.jsxs)("form",{className:"form",onSubmit:m,children:[Object(o.jsx)("header",{children:"New post"}),Object(o.jsx)("label",{htmlFor:"title",children:"Post title:"}),Object(o.jsx)("input",{type:"text",id:"title",name:"title",required:!0}),Object(o.jsx)("label",{htmlFor:"content",children:"Post content:"}),Object(o.jsx)("textarea",{id:"content",name:"content",cols:30,rows:30,required:!0}),Object(o.jsxs)("label",{htmlFor:"published",className:"checkbox-container",children:["Publish post",Object(o.jsx)("input",{type:"checkbox",id:"published",name:"published",value:"true",className:"checkbox",defaultChecked:!0}),Object(o.jsx)("span",{className:"checkmark"})]}),n,Object(o.jsx)("input",{type:"submit",value:"Create post"})]})}n(25);var C=function(){var e=k(),t=e.authed,n=e.logout,c=Object(r.i)().postId,a=Object(b.useState)(null),s=Object(d.a)(a,2),i=s[0],j=s[1],m=Object(b.useState)(!1),p=Object(d.a)(m,2),O=p[0],f=p[1],g=Object(b.useState)(),v=Object(d.a)(g,2),S=v[0],w=v[1],N=Object(b.useState)(Object(o.jsx)(h,{})),y=Object(d.a)(N,2),I=y[0],F=y[1],T=Object(b.useState)(),C=Object(d.a)(T,2),D=C[0],P=C[1],E=Object(b.useState)(Object(o.jsx)(o.Fragment,{})),_=Object(d.a)(E,2),z=_[0],B=_[1],q=Object(b.useState)(""),J=Object(d.a)(q,2),L=J[0],U=J[1],Y=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,s,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.currentTarget),s=String(localStorage.getItem("token")),e.next=5,fetch("".concat(A,"/user"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(s)}}).then((function(e){return e.json()})).catch((function(){return null}));case 5:if(!e.sent){e.next=14;break}return r={content:String(a.get("comment"))},e.next=10,fetch("".concat(A,"/posts/").concat(c,"/comments"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(s)},method:"POST",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){return e}));case 10:(i=e.sent).comment?(P((function(e){return!e})),U("")):i.errors&&B(Object(o.jsx)("ul",{children:i.errors.map((function(e){return Object(o.jsx)("li",{className:"error",children:e.msg},e.msg)}))})),e.next=16;break;case 14:n(),alert("user data is invalid login again");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){fetch("".concat(A,"/posts/").concat(c),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){if(e.msg)throw new Error("Error: 404 Page not Found");f(!0),w(e)}),(function(e){f(!1),j(e)})).catch((function(e){j(e)}))}),[]),Object(b.useEffect)((function(){fetch("".concat(A,"/posts/").concat(c,"/comments"),{mode:"cors"}).then((function(e){return e.json()})).then((function(e){if(e.message)throw new Error("Error: 404 Page not Found");F((function(){return Object(o.jsx)(o.Fragment,{children:e.reverse().map((function(e){return Object(o.jsxs)("li",{id:e._id,className:"comment",children:[Object(o.jsx)("h3",{children:e.author}),Object(o.jsx)("p",{children:e.content}),Object(o.jsx)("span",{children:new Date(e.publishedAt).toISOString().replace(/T/," ").replace(/\..+/,"")})]},e._id)}))})}))}),(function(e){j(e)})).catch((function(e){j(e)}))}),[D]),i?Object(o.jsx)(x,{message:i.message}):O?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)("h1",{children:null===S||void 0===S?void 0:S.title}),Object(o.jsx)("p",{children:null===S||void 0===S?void 0:S.content}),Object(o.jsx)("span",{children:(null===S||void 0===S?void 0:S.publishedAt)?new Date(S.publishedAt).toISOString().replace(/T/," ").replace(/\..+/,""):""})]}),Object(o.jsxs)("ul",{className:"comment-container",children:[Object(o.jsx)("header",{children:"Comments"}),t&&Object(o.jsxs)("form",{className:"form comment-form",onSubmit:Y,action:"",method:"GET",children:[Object(o.jsxs)("label",{htmlFor:"comment",children:["comment as"," ",Object(o.jsx)("span",{children:localStorage.getItem("username")})]}),Object(o.jsx)("textarea",{name:"comment",id:"comment",cols:20,rows:10,value:L,onChange:function(e){U(e.target.value)}}),Object(o.jsx)("input",{type:"submit",value:"comment"}),z]}),I]})]}):Object(o.jsx)(h,{})};var D=function(){return"true"===localStorage.getItem("admin")?Object(o.jsx)(r.b,{}):Object(o.jsx)(r.a,{to:"/login"})};var P=function(){var e=Object(b.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],a=k().login,s=Object(b.useState)(!1),i=Object(d.a)(s,2),j=i[0],m=i[1],p=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(Object(o.jsx)(h,{})),n=new FormData(t.currentTarget),s={username:n.get("username"),email:n.get("email"),password:n.get("password")},e.next=6,fetch("".concat(A,"/auth/signup"),{mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(s)}).then((function(e){return e.json()}));case 6:(i=e.sent).errors?c(Object(o.jsx)("ul",{children:i.errors.map((function(e){return Object(o.jsx)("li",{className:"error",children:e.msg},e.msg)}))})):a({email:s.email,password:s.password}).then((function(e){if(e)return Object(o.jsx)(r.a,{to:"/login"});m(!0)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j?Object(o.jsx)(r.a,{to:"/"}):Object(o.jsxs)("form",{className:"form",onSubmit:p,action:"",method:"GET",children:[Object(o.jsx)("header",{children:"Sign up"}),Object(o.jsx)("label",{htmlFor:"username",children:"Your username:"}),Object(o.jsx)("input",{id:"username",type:"text",placeholder:"john_smith",name:"username",required:!0}),Object(o.jsx)("label",{htmlFor:"email",children:"Your email:"}),Object(o.jsx)("input",{id:"email",type:"email",placeholder:"example@mail.com",name:"email",required:!0}),Object(o.jsx)("label",{htmlFor:"password",children:"Your password:"}),Object(o.jsx)("input",{id:"password",type:"password",name:"password",required:!0}),n,Object(o.jsx)("input",{type:"submit",value:"Signup"})]})},E=(n(26),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))}),A="https://blog-i3b.herokuapp.com";a.a.render(Object(o.jsx)(s.a,{children:Object(o.jsxs)(N,{children:[Object(o.jsx)(y,{}),Object(o.jsxs)(r.e,{children:[Object(o.jsx)(r.c,{path:"/",element:Object(o.jsx)(f,{})}),Object(o.jsx)(r.c,{path:"/posts/:postId",element:Object(o.jsx)(C,{})}),Object(o.jsx)(r.c,{path:"/login",element:Object(o.jsx)(I,{})}),Object(o.jsx)(r.c,{path:"/signup",element:Object(o.jsx)(P,{})}),Object(o.jsx)(r.c,{path:"/logout",element:Object(o.jsx)(F,{})}),Object(o.jsx)(r.c,{path:"/becomeadmin",element:Object(o.jsx)(p,{})}),Object(o.jsx)(r.c,{path:"/about",element:Object(o.jsx)(i,{})}),Object(o.jsxs)(r.c,{path:"/admin",element:Object(o.jsx)(D,{}),children:[Object(o.jsx)(r.c,{path:"/admin/",element:Object(o.jsx)(v,{})}),Object(o.jsx)(r.c,{path:"/admin/new",element:Object(o.jsx)(T,{})}),Object(o.jsx)(r.c,{path:"/admin/posts/:postId/edit",element:Object(o.jsx)(S,{})})]}),Object(o.jsx)(r.c,{path:"/*",element:Object(o.jsx)(x,{message:"404 Page not found"})})]})]})}),document.getElementById("root")),E()}],[[27,1,2]]]);
//# sourceMappingURL=main.10b56698.chunk.js.map