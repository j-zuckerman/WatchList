(this.webpackJsonpmovie_site=this.webpackJsonpmovie_site||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports={sideMenu:"SideMenu_sideMenu__36QJS",sideMenu__item:"SideMenu_sideMenu__item__3Xna8",active:"SideMenu_active__tTRs1"}},,function(e,t,a){e.exports={rating:"Rating_rating___TNHG",red:"Rating_red__2IY7K",yellow:"Rating_yellow__3sY92",green:"Rating_green__18y2E"}},function(e,t,a){e.exports={details:"Details_details__3cbCA",poster:"Details_poster__2h2VP",container:"Details_container__2s5Qb",description:"Details_description__1pn7o",wrapper:"Details_wrapper__wKA61"}},,,function(e,t,a){e.exports={card:"Card_card__2Xxqv",card__img:"Card_card__img__21rQP",card__title:"Card_card__title__2kBSe",button:"Card_button__2nDlV"}},,,function(e,t,a){e.exports={container:"Home_container__2rEBO",wrapper:"Home_wrapper__3hF03",home:"Home_home__qhT4i"}},function(e,t,a){e.exports={navbar:"Navbar_navbar__3Thuu",navlinks:"Navbar_navlinks__rJlVb",button:"Navbar_button__1YjT6"}},function(e,t,a){e.exports={container:"Searchbar_container__3fAmx",searchbar:"Searchbar_searchbar__2MyHb",submit_btn:"Searchbar_submit_btn__1bjwv"}},function(e,t,a){e.exports={container:"Cast_container__XmHc1",cast_img:"Cast_cast_img__1wWRi",cast_member:"Cast_cast_member__263hy"}},,,,,,,function(e,t,a){e.exports={container:"Layout_container__18liy",main:"Layout_main__7GxEm"}},function(e,t,a){e.exports={container:"LogIn_container__2YB-4",title:"LogIn_title__3zcY0"}},function(e,t,a){e.exports={container:"Register_container__35xNQ",title:"Register_title__3Obtj"}},,,,,,,,,function(e,t,a){e.exports={container:"Signin_container__2kG0s"}},function(e,t,a){e.exports={container:"Signup_container__3BS82",center:"Signup_center__2bOTW"}},,,function(e,t,a){e.exports=a(61)},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),s=a.n(c),i=a(1),o=a.n(i),l=a(2),u=a(3),m="9f39dd9c4f8c9231614049d653d261d6",p="https://api.themoviedb.org/3/",f=Object(n.createContext)(),d=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],i=c[1],d=Object(n.useState)([]),_=Object(u.a)(d,2),h=_[0],b=_[1],v=Object(n.useState)([]),E=Object(u.a)(v,2),g=E[0],w=E[1],j=Object(n.useState)([]),x=Object(u.a)(j,2),O=x[0],y=x[1],N=Object(n.useState)([]),k=Object(u.a)(N,2),S=(k[0],k[1],Object(n.useState)([])),C=Object(u.a)(S,2),P=(C[0],C[1],Object(n.useState)([])),D=Object(u.a)(P,2),M=D[0],T=D[1],R=Object(n.useState)([]),A=Object(u.a)(R,2),I=A[0],F=A[1],L=Object(n.useState)([]),U=Object(u.a)(L,2),H=U[0],B=U[1],G=Object(n.useState)([]),K=Object(u.a)(G,2),Y=(K[0],K[1]),W=Object(n.useState)([]),J=Object(u.a)(W,2),Q=(J[0],J[1],Object(n.useState)([])),q=Object(u.a)(Q,2),z=(q[0],q[1],Object(n.useState)(!1)),V=Object(u.a)(z,2);V[0],V[1];function X(){return Z.apply(this,arguments)}function Z(){return(Z=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/now_playing?api_key=".concat(m,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a),y(a.results),i(a.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return ee.apply(this,arguments)}function ee(){return(ee=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/popular?api_key=".concat(m,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(){return ae.apply(this,arguments)}function ae(){return(ae=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/top_rated?api_key=".concat(m,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,b(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:return e.next=4,te();case 4:return e.next=6,$();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/".concat(t,"?api_key=").concat(m,"&language=en-US&page=1"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),T(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/".concat(t,"/credits?api_key=").concat(m));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),F(n.cast);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/".concat(t,"/similar?api_key=").concat(m,"&language=en-US&page=1"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),B(n.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){return me.apply(this,arguments)}function me(){return(me=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p+"movie/".concat(t,"/videos?api_key=").concat(m,"&language=en-US"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,Y(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe(t),re(t),se(t),ue(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){return(fe=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>1)){e.next=9;break}return e.next=3,fetch(p+"search/movie?api_key=".concat(m,"&query=").concat(t,"&page=1"));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,console.log(n),i(n.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){ne.apply(this,arguments)}()}),[]),r.a.createElement(f.Provider,{value:{setDataToDisplay:i,dataToDisplay:s,switchToMostPopular:function(){i(g)},switchToNowPlaying:function(){i(O)},switchToTopRated:function(){i(h)},movieDetails:M,movieCast:I,similarMovies:H,fetchDetailsPageData:function(e){return pe.apply(this,arguments)},fetchSearchResults:function(e){return fe.apply(this,arguments)}}},t)},_=a(6),h=a(4),b=a(37),v=a(38),E=a(43),g=a(42),w=a(23),j=a(15),x=a.n(j);a(50),a(52);x.a.initializeApp({apiKey:"AIzaSyCuFruxAKNBhAKNZRHs-RNeH9dbK8F70KE",authDomain:"watch-list-9a6dc.firebaseapp.com",databaseURL:"https://watch-list-9a6dc.firebaseio.com",projectId:"watch-list-9a6dc",storageBucket:"watch-list-9a6dc.appspot.com",messagingSenderId:"297596551701",appId:"1:297596551701:web:6c433c8399e3d4863c441c",measurementId:"G-7SN4ZPESMT"});var O=x.a.auth(),y=x.a.firestore(),N=new x.a.auth.GoogleAuthProvider,k=function(){O.signInWithPopup(N)},S=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=y.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.email,c=t.displayName,s=[],e.prev=9,e.next=12,n.set(Object(w.a)({displayName:c,email:r,watchlist:s},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.error("Error creating user document",e.t0);case 17:return e.abrupt("return",C(t.uid));case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,y.doc("users/".concat(t)).get();case 5:return a=e.sent,e.abrupt("return",Object(w.a)({uid:t},a.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,n=y.doc("users/".concat(t)),e.next=6,n.get();case 6:return r=e.sent,e.next=9,r.data().watchlist;case 9:c=e.sent,console.log(c),c.some((function(e){return e.id===a.id}))||(c.push(a),n.set({watchlist:c},{merge:!0})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,a){return e.apply(this,arguments)}}(),D=Object(n.createContext)({user:null}),M=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e.componentDidMount=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O.onAuthStateChanged(function(){var t=Object(l.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,S(a);case 3:n=t.sent,e.setState({user:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(D.Provider,{value:this.state.user},this.props.children)}}]),a}(n.Component),T=a(16),R=a.n(T),A=a(12),I=a.n(A),F=function(e){var t=e.score;return t<=5.5?r.a.createElement("p",{className:"".concat(I.a.rating," ").concat(I.a.red)},t):t<=7.5?r.a.createElement("p",{className:"".concat(I.a.rating," ").concat(I.a.yellow)},t):r.a.createElement("p",{className:"".concat(I.a.rating," ").concat(I.a.green)},t)},L=function(e){var t=e.data,a=Object(n.useContext)(D),c=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.uid,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(m,"&language=en-US&page=1"));case 3:return r=e.sent,e.next=6,r.json();case 6:c=e.sent,P(n,c),console.log(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:R.a.card},r.a.createElement(_.b,{className:"link",to:"/movie/".concat(t.id)},r.a.createElement("img",{className:R.a.card__img,key:t.id,src:"".concat("https://image.tmdb.org/t/p/w342/").concat(t.poster_path)})),r.a.createElement("div",null,r.a.createElement("p",{className:R.a.card__title},t.title),r.a.createElement(F,{score:t.vote_average}),a&&r.a.createElement("button",{className:R.a.button,onClick:function(){return c(t.id)}},"Add to watch list")))},U=a(19),H=a.n(U),B=function(){var e=Object(n.useContext)(f).dataToDisplay;return e.length>0?r.a.createElement("section",{className:H.a.home},r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.wrapper},e.map((function(e){return r.a.createElement(L,{data:e})}))))):null},G=a(20),K=a.n(G),Y=a(21),W=a.n(Y),J=function(){var e=Object(n.useContext)(f).fetchSearchResults,t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1];return r.a.createElement("form",{className:W.a.container,onSubmit:function(t){t.preventDefault(),e(c)}},r.a.createElement("input",{className:W.a.searchbar,type:"text",value:c,placeholder:"Search for movie",onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{className:W.a.submit_btn,type:"submit"},r.a.createElement("i",{className:"fas fa-search"})))},Q=function(){var e=Object(n.useContext)(D);return r.a.createElement("nav",null,r.a.createElement("ul",{className:K.a.navbar},r.a.createElement(J,null),r.a.createElement("div",{className:K.a.navlinks},e?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("p",null,e.email)),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){O.signOut()},className:K.a.button},"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(_.b,{className:"link",to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(_.b,{className:"link",to:"/register"},"Register"))))))},q=a(10),z=a.n(q),V=function(){var e=Object(n.useContext)(D),t=Object(n.useContext)(f),a=t.switchToMostPopular,c=t.switchToNowPlaying,s=t.switchToTopRated,i=t.setDataToDisplay,o=Object(n.useState)("now_playing"),l=Object(u.a)(o,2),m=l[0],p=l[1];return r.a.createElement("nav",null,r.a.createElement("ul",{className:z.a.sideMenu},r.a.createElement("li",{className:"".concat(z.a.sideMenu__item," ").concat("now_playing"===m?z.a.active:""),onClick:function(){c(),p("now_playing")}},r.a.createElement(_.b,{className:"link",to:"/"},"Now Playing")),r.a.createElement("li",{className:"".concat(z.a.sideMenu__item," ").concat("top_rated"===m?z.a.active:""),onClick:function(){s(),p("top_rated")}},r.a.createElement(_.b,{className:"link",to:"/"},"Top Rated")),r.a.createElement("li",{className:"".concat(z.a.sideMenu__item," ").concat("most_popular"===m?z.a.active:""),onClick:function(){a(),p("most_popular")}},r.a.createElement(_.b,{className:"link",to:"/"},"Most Popular")),e&&r.a.createElement("li",{className:"".concat(z.a.sideMenu__item," ").concat("watch_list"===m?z.a.active:""),onClick:function(){var t=e.watchlist;i(t),p("watch_list")}},r.a.createElement(_.b,{className:"link",to:"/"},"Watch List"))))},X=a(29),Z=a.n(X),$=function(e){var t=e.children;return r.a.createElement("main",null,r.a.createElement(Q,null),r.a.createElement("div",{className:Z.a.container},r.a.createElement(V,null),r.a.createElement("div",{className:Z.a.main},t)))},ee=a(13),te=a.n(ee),ae=a(22),ne=a.n(ae),re=function(e){var t=e.data;return r.a.createElement("div",{className:ne.a.container},t.map((function(e){return r.a.createElement("div",{key:t.cast_id,className:ne.a.cast_member},r.a.createElement("img",{className:ne.a.cast_img,src:"".concat("https://image.tmdb.org/t/p/w45/").concat(e.profile_path)}),r.a.createElement("p",null,e.character))})))},ce=function(){var e=Object(n.useContext)(f),t=e.fetchDetailsPageData,a=e.movieDetails,c=e.movieCast,s=e.similarMovies,i=Object(h.f)();return Object(n.useEffect)((function(){t(i.id)}),[i.id]),r.a.createElement("section",{className:te.a.details},r.a.createElement("div",{className:te.a.container},r.a.createElement("img",{className:te.a.poster,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(a.poster_path)}),r.a.createElement("div",{className:te.a.description},r.a.createElement("h3",null,a.title),r.a.createElement("p",null,a.tagline),r.a.createElement("p",null,a.vote_average),r.a.createElement("p",null,a.runtime," minutes \xa0/ \xa0"),r.a.createElement("p",null,a.release_date," "),r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,a.overview," "),r.a.createElement("h3",null,"Cast"),r.a.createElement(re,{data:c})),r.a.createElement("h3",null,"Similar Movies"),r.a.createElement("div",{className:te.a.wrapper},s.map((function(e){return r.a.createElement(L,{data:e})})))))},se=a(40),ie=a.n(se),oe=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),o=i[0],l=i[1],m=function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?c(n):"userPassword"===a&&l(n)};return r.a.createElement("div",{className:ie.a.container},r.a.createElement("form",{className:"form"},r.a.createElement("label",{htmlFor:"userEmail"},"Email:"),r.a.createElement("input",{type:"email",className:"",name:"userEmail",value:a,placeholder:"Enter email",id:"userEmail",onChange:function(e){return m(e)}}),r.a.createElement("label",{htmlFor:"userPassword"},"Password:"),r.a.createElement("input",{type:"password",className:"",name:"userPassword",value:o,placeholder:"Your Password",id:"userPassword",onChange:function(e){return m(e)}}),r.a.createElement("button",{className:"btn",onClick:function(e){!function(e,t,a){e.preventDefault(),O.signInWithEmailAndPassword(t,a).catch((function(e){console.log(e)}))}(e,a,o)}},"Login")),r.a.createElement("p",null,"OR"),r.a.createElement("button",{className:"btn_google",onClick:function(){k()}},"Sign in with Google"))},le=a(30),ue=a.n(le),me=function(){return r.a.createElement("div",{className:ue.a.container},r.a.createElement("h3",{className:ue.a.title},"Login to your account"),r.a.createElement(oe,null))},pe=a(41),fe=a.n(pe),de=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),h=d[0],b=d[1],v=function(){var e=Object(l.a)(o.a.mark((function e(t,a,n){var r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O.createUserWithEmailAndPassword(a,n);case 4:r=e.sent,s=r.user,S(s,{displayName:h}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:c(""),p(""),b("");case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),E=function(e){var t=e.currentTarget,a=t.name,n=t.value;"userEmail"===a?c(n):"userPassword"===a?p(n):"displayName"===a&&b(n)};return r.a.createElement("div",{className:fe.a.container},r.a.createElement("form",{className:"form"},r.a.createElement("label",{htmlFor:"displayName"},"Display Name:"),r.a.createElement("input",{type:"text",className:" ",name:"displayName",value:h,placeholder:"Enter name",id:"displayName",onChange:function(e){return E(e)}}),r.a.createElement("label",{htmlFor:"userEmail"},"Email:"),r.a.createElement("input",{type:"email",className:"",name:"userEmail",value:a,placeholder:"Enter email",id:"userEmail",onChange:function(e){return E(e)}}),r.a.createElement("label",{htmlFor:"userPassword"},"Password:"),r.a.createElement("input",{type:"password",className:"",name:"userPassword",value:m,placeholder:"Your Password",id:"userPassword",onChange:function(e){return E(e)}}),r.a.createElement("button",{className:"btn",onClick:function(e){v(e,a,m)}},"Sign up")),r.a.createElement("p",null,"OR"),r.a.createElement("button",{className:"btn_google",onClick:function(){k()}},"Sign In with Google"),r.a.createElement("p",{className:""},"Already have an account?",r.a.createElement(_.b,{to:"/login"},"Sign in here")))},_e=a(31),he=a.n(_e),be=function(){return r.a.createElement("div",{className:he.a.container},r.a.createElement("h3",{className:he.a.title},"Register an account"),r.a.createElement(de,null))};var ve=function(){return r.a.createElement(d,null,r.a.createElement(_.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/"},r.a.createElement($,null,r.a.createElement(B,null))),r.a.createElement(h.a,{exact:!0,path:"/movie/:id"},r.a.createElement($,null,r.a.createElement(ce,null))),r.a.createElement(h.a,{exact:!0,path:"/login"},r.a.createElement($,null,r.a.createElement(me,null))),r.a.createElement(h.a,{exact:!0,path:"/register"},r.a.createElement($,null,r.a.createElement(be,null))))))};a(60);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null,r.a.createElement(ve,null))),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.2b0eb37c.chunk.js.map