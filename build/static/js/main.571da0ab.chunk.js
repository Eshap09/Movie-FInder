(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),s=a.n(c),r=a(13),i=a.n(r),o=a(224),l=a(69),d=a(15),u=(a(107),a(108),function(){return Object(n.jsx)("span",{onClick:function(){window.scroll(0,0)},className:"header",children:"\ud83c\udfac Entertainment Hub \ud83c\udfa5"})}),j=a(9),b=a(213),p=a(216),f=a(218),O=a(92),h=a.n(O),m=a(91),v=a.n(m),g=a(65),x=a.n(g),_=a(90),y=a.n(_),w=Object(b.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function S(){var e=w(),t=s.a.useState(0),a=Object(j.a)(t,2),r=a[0],i=a[1],o=Object(d.f)();return Object(c.useEffect)((function(){0===r?o.push("/"):1===r?o.push("/movies"):2===r?o.push("/series"):3===r&&o.push("/search")}),[r,o]),Object(n.jsxs)(p.a,{value:r,onChange:function(e,t){i(t)},showLabels:!0,className:e.root,children:[Object(n.jsx)(f.a,{style:{color:"white"},label:"Trending",icon:Object(n.jsx)(y.a,{})}),Object(n.jsx)(f.a,{style:{color:"white"},label:"Movies",icon:Object(n.jsx)(v.a,{})}),Object(n.jsx)(f.a,{style:{color:"white"},label:"TV Series",icon:Object(n.jsx)(h.a,{})}),Object(n.jsx)(f.a,{style:{color:"white"},label:"Search",icon:Object(n.jsx)(x.a,{})})]})}var N=a(14),k=a.n(N),C=a(20),M=a(21),E=a.n(M),G=(a(138),a(95)),I=a(219),T=a(227),B=(a(139),Object(G.a)({palette:{type:"dark"}})),U=function(e){var t=e.setpage,a=e.numofpages,c=void 0===a?10:a;return Object(n.jsx)("div",{className:"pagination",children:Object(n.jsx)(I.a,{theme:B,children:Object(n.jsx)(T.a,{count:c,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},color:"primary"})})})},z=a(72),D=a(229),P=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,s=e.genres,r=e.setGenres,i=e.type,o=e.setpage,l=function(){var e=Object(C.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/genre/".concat(i,"/list?api_key=bb88776a53ef123f749a726387d137f3&language=en-US"));case 2:t=e.sent,a=t.data,r(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return l(),function(){r({})}}),[]),Object(n.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(n.jsx)(D.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),r([].concat(Object(z.a)(s),[e])),o(1)}(e)}},e.id)})),s.map((function(e){return Object(n.jsx)(D.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(z.a)(t),[e])),r(s.filter((function(t){return t.id!==e.id}))),o(1)}(e)}},e.id)}))]})},V=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},F=(a(140),"https://image.tmdb.org/t/p/w300"),J="https://image.tmdb.org/t/p/w500",L="https://www.movienewz.com/img/films/poster-holder.jpg",q=a(222),A=a(228),H=a(220),R=a(180),W=a(221),K=a(94),Q=a.n(K),X=(a(141),a(93)),Y=a.n(X),Z=(a(175),a(176),function(e){return e.preventDefault()}),$=function(e){var t=e.id,a=e.media_type,s=Object(c.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=i.map((function(e){return Object(n.jsxs)("div",{className:"carouselItem",children:[Object(n.jsx)("img",{src:e.profile_path?"".concat(F,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:Z,className:"carouselItem__img"}),Object(n.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(C.a)(k.a.mark((function e(){var n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=bb88776a53ef123f749a726387d137f3&language=en-US"));case 2:n=e.sent,c=n.data,o(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(n.jsx)(Y.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:l,autoPlay:!0})},ee=Object(b.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function te(e){var t=e.children,a=e.media_type,s=e.id,r=ee(),i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],d=o[1],u=Object(c.useState)(),b=Object(j.a)(u,2),p=b[0],f=b[1],O=Object(c.useState)(),h=Object(j.a)(O,2),m=h[0],v=h[1],g=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(s,"?api_key=bb88776a53ef123f749a726387d137f3&language=en-US"));case 2:t=e.sent,n=t.data,f(n),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(s,"/videos?api_key=bb88776a53ef123f749a726387d137f3&language=en-US"));case 2:n=e.sent,c=n.data,v(null===(t=c.results[0])||void 0===t?void 0:t.key),console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g(),x()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{type:"button",className:"media",onClick:function(){d(!0)},children:t}),Object(n.jsx)(A.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:l,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(n.jsx)(R.a,{in:l,children:p&&Object(n.jsx)("div",{className:r.paper,children:Object(n.jsxs)("div",{className:"ContentModal",children:[Object(n.jsx)("img",{className:"ContentModal__portrait",src:p.poster_path?"".concat(J,"/").concat(p.poster_path):L,alt:p.name||p.title}),Object(n.jsx)("img",{className:"ContentModal__landscape",src:p.poster_path?"".concat(J,"/").concat(p.backdrop_path):L,alt:p.name||p.title}),Object(n.jsxs)("div",{className:"ContentModal__about",children:[Object(n.jsxs)("span",{className:"ContentModal__title",children:[p.title||p.name,"(",(p.first_air_date||p.release_date||"----").substring(0,4),")"]}),p.tagline&&Object(n.jsx)("i",{className:"tagline",children:p.tagline}),Object(n.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(n.jsx)("div",{className:"ContentModal_carosel",children:Object(n.jsx)($,{media_type:a,id:s})}),Object(n.jsx)(W.a,{variant:"contained",startIcon:Object(n.jsx)(Q.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(m),className:"button",children:"Watch the trailer"})]})]})})})})]})}var ae=function(e){var t=e.id,a=e.poster,c=e.title,s=e.date,r=e.media_type,i=e.vote_average;return Object(n.jsxs)(te,{media_type:r,id:t,children:[Object(n.jsx)(q.a,{className:"badge",badgeContent:i,color:i>6?"primary":"secondary"}),Object(n.jsx)("img",{className:"poster",src:a?"".concat(F,"/").concat(a):L,alt:c}),Object(n.jsx)("p",{className:"title",children:c}),Object(n.jsxs)("span",{className:"subtitle",children:["tv"===r?"TV Series":"Movie",Object(n.jsx)("span",{className:"subtitle",children:s})]})]})},ne=function(){var e=Object(c.useState)(1),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(),u=Object(j.a)(d,2),b=u[0],p=u[1],f=Object(c.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(c.useState)([]),g=Object(j.a)(v,2),x=g[0],_=g[1],y=V(h),w=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/discover/movie?api_key=bb88776a53ef123f749a726387d137f3&language=hindi&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,l(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[a,y]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pagetitle",children:"Movies"}),Object(n.jsx)(P,{type:"movie",setGenres:_,genres:x,setSelectedGenres:m,selectedGenres:h,setpage:s}),Object(n.jsx)("div",{className:"trending",children:o.length?o.map((function(e){return Object(n.jsx)(ae,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)})):Object(n.jsx)("p",{className:"no",children:"No Movie found"})}),b>1&&Object(n.jsx)(U,{setpage:s,numofpages:b})]})},ce=a(225),se=a(226),re=a(223),ie=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(1),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(""),u=Object(j.a)(d,2),b=u[0],p=u[1],f=Object(c.useState)(),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(c.useState)(),g=Object(j.a)(v,2),_=g[0],y=g[1],w=Object(G.a)({palette:{type:"dark",primary:{main:"#fff",color:"blue"}}}),S=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=bb88776a53ef123f749a726387d137f3&language=en-US&query=").concat(b,"&page=").concat(o,"&include_adult=false"));case 2:t=e.sent,n=t.data,console.log(n),m(n.results),y(n.total_pages);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),S()}),[a,o]),Object(n.jsxs)("div",{children:[Object(n.jsxs)(I.a,{theme:w,children:[Object(n.jsxs)("div",{style:{display:"flex",margin:"5px 0"},children:[Object(n.jsx)(ce.a,{style:{flex:1},className:"searchbox",label:"Search",variant:"filled",onChange:function(e){return p(e.target.value)}}),Object(n.jsx)(W.a,{variant:"contained",style:{marginLeft:10},onClick:S,children:Object(n.jsx)(x.a,{})})]}),Object(n.jsxs)(se.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){s(t),l(1)},style:{paddingBottom:5},children:[Object(n.jsx)(re.a,{style:{width:"50%"},label:"Search Movies"}),Object(n.jsx)(re.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(n.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(n.jsx)(ae,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),b&&!h&&(a?Object(n.jsx)("h2",{children:"No Series Found"}):Object(n.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(n.jsx)(U,{setpage:l,numofpages:_})]})},oe=function(){var e=Object(c.useState)(1),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)([]),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(c.useState)(),u=Object(j.a)(d,2),b=u[0],p=u[1],f=Object(c.useState)([]),O=Object(j.a)(f,2),h=O[0],m=O[1],v=Object(c.useState)([]),g=Object(j.a)(v,2),x=g[0],_=g[1],y=V(h),w=function(){var e=Object(C.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/discover/tv?api_key=bb88776a53ef123f749a726387d137f3&language=hindi&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(a,"&with_genres=").concat(y));case 2:t=e.sent,n=t.data,l(n.results),p(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w()}),[a,y]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pagetitle",children:"series"}),Object(n.jsx)(P,{type:"tv",setGenres:_,genres:x,setSelectedGenres:m,selectedGenres:h,setpage:s}),Object(n.jsx)("div",{className:"trending",children:o.length?o.map((function(e){return Object(n.jsx)(ae,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)})):Object(n.jsx)("p",{className:"no",children:"No Movie found"})}),b>1&&Object(n.jsx)(U,{setpage:s,numofpages:b})]})},le=(a(177),function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(1),i=Object(j.a)(r,2),o=i[0],l=i[1],d=function(){var e=Object(C.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=bb88776a53ef123f749a726387d137f3&page=".concat(o));case 2:t=e.sent,a=t.data,s(a.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[o]),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"pagetitle",children:"Trending"}),Object(n.jsx)("div",{className:"trending",children:a&&a.map((function(e){return Object(n.jsx)(ae,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(n.jsx)(U,{setpage:l})]})});var de=function(){return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(u,{}),Object(n.jsx)("div",{className:"app",children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",component:le,exact:!0}),Object(n.jsx)(d.a,{path:"/movies",component:ne}),Object(n.jsx)(d.a,{path:"/series",component:oe}),Object(n.jsx)(d.a,{path:"/search",component:ie})]})})}),Object(n.jsx)(S,{})]})};a(178);i.a.render(Object(n.jsx)(de,{}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.571da0ab.chunk.js.map