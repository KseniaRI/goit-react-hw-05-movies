"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{7047:function(e,n,t){t.d(n,{e:function(){return m}});var r,o,c,u=t(6871),a=t(168),i=t(3504),s=t(6031),l=s.ZP.ul(r||(r=(0,a.Z)(["\nlist-style: none;\ntext-align: center;\n"]))),f=s.ZP.li(o||(o=(0,a.Z)(["\n&:not(:last-child){\n    margin-bottom: ","px;\n}\n"])),(function(e){return e.theme.space[3]})),p=(0,s.ZP)(i.rU)(c||(c=(0,a.Z)(["\ntext-decoration: none;\nfont-size: ",";\ncolor:",";\nfont-weight: ",";\n\n&:hover,\n&:focus{\n    color:",";\n}\n"])),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.colors.accent})),h=t(184),m=function(e){var n=e.movies,t=(0,u.TH)();return(0,h.jsx)(l,{children:n.map((function(e){var n=e.id,r=e.title;return(0,h.jsx)(f,{children:(0,h.jsx)(p,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})}},6748:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,o,c,u,a=t(5861),i=t(885),s=t(7757),l=t.n(s),f=t(3504),p=t(5705),h=t(7047),m=t(4386),d=t(2791),v=t(9818),g=t(4299),x=t(168),b=t(6031),w=(0,b.ZP)(p.l0)(r||(r=(0,x.Z)(["\ntext-align: center;\nmargin-bottom: ","px;\n"])),(function(e){return e.theme.space[5]})),y=(0,b.ZP)(p.gN)(o||(o=(0,x.Z)(["\nwidth: 300px;\nheight: 40px;\npadding: ","px;\nborder: ",";\nborder-color: ",";\nborder-radius: ",";\nfont-size: ",";\noutline: none;\n"])),(function(e){return e.theme.space[2]}),(function(e){return e.theme.borders.normal}),(function(e){return e.theme.colors.accent}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.fontSizes.m})),Z=b.ZP.button(c||(c=(0,x.Z)(["\n    height: 50px;\n    width: 70px;\n    cursor: pointer;\n    background-color: ",";\n    border: none;\n    border-radius: ",";\n    font-size: ",";\n    padding: ","px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.fontSizes.m}),(function(e){return e.theme.space[2]})),k=b.ZP.p(u||(u=(0,x.Z)(["\ncolor: red;\ntext-align: center;\nfont-size: ",";\n"])),(function(e){return e.theme.fontSizes.m})),j=t(184),S=function(){var e,n=(0,f.lr)(),t=(0,i.Z)(n,2),r=t[0],o=t[1],c=(0,d.useState)({}),u=(0,i.Z)(c,2),s=u[0],x=u[1],b=(0,d.useState)(!1),S=(0,i.Z)(b,2),q=S[0],z=S[1],P=null!==(e=r.get("query"))&&void 0!==e?e:"";return(0,d.useEffect)((function(){var e=function(){var e=(0,a.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,e.next=4,(0,v.Md)(n);case 4:t=e.sent,x(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,z(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();""!==P&&e(P)}),[P]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.J9,{initialValues:{query:""},validationSchema:m.Ry({query:m.Z_()}),onSubmit:function(e,n){var t=e.query,r=n.resetForm;o({query:t}),r()},children:(0,j.jsxs)(w,{children:[(0,j.jsx)(y,{name:"query",type:"text",placeholder:"Enter movie's title"}),(0,j.jsx)(Z,{type:"submit",children:"Search"}),(0,j.jsx)(p.Bc,{name:"query",color:"red",children:"Something went wrong"})]})}),q&&(0,j.jsx)(g.a,{}),Object.keys(s).length>0&&(0,j.jsx)(h.e,{movies:s}),0===Object.keys(s).length&&P&&(0,j.jsxs)(k,{children:["There is no movie with key word $",P]})]})}},9818:function(e,n,t){t.d(n,{IV:function(){return f},Mc:function(){return l},Md:function(){return s},lw:function(){return p},wr:function(){return i}});var r=t(5861),o=t(7757),c=t.n(o),u=t(4569),a=t.n(u);a().defaults.baseURL="https://api.themoviedb.org/3",a().defaults.params={api_key:"dad2725b968ab7e952dfbc80999b3d08"};var i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/trending/movie/day");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/search/movie?query=".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n,"/credits"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("/movie/".concat(n,"/reviews"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=748.df4959ef.chunk.js.map