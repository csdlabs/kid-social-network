(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(39),c=n.n(i),r=(n(106),n(107),n(45)),o=n.n(r),l=n.p+"static/media/header-logo.ad29cc75.png",u=n(1),d=s.a.memo((function(e){var t=e.className,n=e.onClick,a=e.text;return Object(u.jsx)("button",{onClick:function(){n()},className:t,children:a})})),j=n(4),b=n(63),m=n.n(b),h=m.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"0c12297a-a516-42d3-9509-82bfb5d48238"},withCredentials:!0}),f=function(e,t){return h.get("/users?count=".concat(e,"&page=").concat(t),{}).then((function(e){return e.data}))},O=function(e){return h.post("/follow/".concat(e),{},{})},p=function(e){return h.delete("/follow/".concat(e),{})},_=function(e){return h.get("/profile/".concat(e))},g=function(e){return h.get("/profile/status/".concat(e)).then((function(e){return e.data}))},x=function(e){return h.put("/profile/status",{status:e})},N=function(){return m.a.get("https://animechan.vercel.app/api/random")},v=function(e,t){return m.a.get("https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=10&page=".concat(t,"&apiKey=c0b099f14fff4628ae16e5c63887ae09"))},w=function(){return h.get("/auth/me",{})},S=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return h.post("/auth/login",{email:e,password:t,rememberMe:n})},E=function(){return h.delete("/auth/login")},y={data:{id:"",login:"",email:""},isAuth:!1},P=function(e,t,n,a){return{type:"SET-AUTH-DATA",id:e,login:t,email:n,isAuth:a}},T=function(){return function(e){w().then((function(t){if(0===t.data.resultCode){var n=t.data.data,a=n.id,s=n.login,i=n.email;e(P(a,s,i,!0))}}))}},C=n(8),I=n(22),k=s.a.memo((function(){var e=Object(C.c)((function(e){return e.authPage})),t=Object(C.b)();Object(a.useEffect)((function(){t(T())}),[t]);return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:o.a.inner,children:[Object(u.jsxs)("div",{className:o.a.logoInner,children:[Object(u.jsx)(I.b,{to:"/profile",className:o.a.logo,children:Object(u.jsx)("img",{src:l,alt:"header-logo"})}),Object(u.jsx)("p",{children:"Lumos"})]}),e.isAuth?Object(u.jsxs)("div",{className:o.a.loginButtons,children:[Object(u.jsxs)("p",{className:o.a.userName,children:["Welcome ",e.data.login]}),Object(u.jsx)(d,{className:"commonBtn",onClick:function(){t((function(e){E().then((function(t){0===t.data.resultCode&&e(P(null,null,null,!1))}))}))},text:"Log out"})]}):Object(u.jsx)(d,{className:"commonBtn",onClick:function(){},text:"Login"})]})})})),F=n(7),A=n(26),L=n.n(A),U=n.p+"static/media/profile.9d4d5a29.svg",R=n.p+"static/media/messages.1bad7cf9.svg",D=n.p+"static/media/settings.627fc741.svg",W=n.p+"static/media/music.1bac8f02.svg",B=n.p+"static/media/users.e7baea37.svg",H=n.p+"static/media/news.04e09e6f.svg",M=s.a.memo((function(){return Object(u.jsx)("nav",{className:L.a.navbar,children:Object(u.jsxs)("ul",{className:L.a.menu,children:[Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/profile",className:L.a.link,children:[Object(u.jsx)("img",{src:U,alt:"profile"}),"Profile"]})}),Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/news",className:L.a.link,children:[Object(u.jsx)("img",{src:H,alt:"news"}),"News"]})}),Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/dialogs",className:L.a.link,children:[Object(u.jsx)("img",{src:R,alt:"messages"}),"Messages"]})}),Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/users",className:L.a.link,children:[Object(u.jsx)("img",{src:B,alt:"users"}),"Users"]})}),Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/daily-quote",className:L.a.link,children:[Object(u.jsx)("img",{src:D,alt:"daily-quote"}),"Daily Quote"]})}),Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)(I.b,{to:"/music",className:L.a.link,children:[Object(u.jsx)("img",{src:W,alt:"music"}),"Music"]})})]})})})),G=n(11),q=n.p+"static/media/profile-bg.c2555e70.png",Q=n(19),V=n.n(Q),J=n(13),K={posts:[{id:"1",message:"Hello, i am Julian!",likesCounter:22},{id:"2",message:"Hello, i am Lili!",likesCounter:42},{id:"3",message:"Hello, i am Juliana!",likesCounter:12}],profileInfo:{postsNumber:10,friendsNumber:22,commentsNumber:15,photos:{small:"",large:""},userName:"Julius Kenard",membership:"Pro Member",userStatus:""},userProfile:{photos:{small:"",large:""},fullName:"Julius Kenard"},newPostMessage:"He He suiii!",aboutUserInfo:{userDescription:"Hi! My name is Julius but some people may know me as GameHunter! I have a Twitch channel where I stream, play and review all the newest games.",joinTime:"September 23, 2020",userAddress:"Los Angeles, California"}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-POST-VALUE":return Object(j.a)(Object(j.a)({},e),{},{newPostMessage:t.newPostValue});case"ADD-NEW-POST":var n={id:"3",message:t.newValue,likesCounter:12};return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(J.a)(e.posts),[n]),newPostMessage:""});case"INCREASE-LIKES":return Object(j.a)(Object(j.a)({},e),{},{posts:e.posts.map((function(e){return t.postId===e.id?Object(j.a)(Object(j.a)({},e),{},{likesCounter:t.likesCounter+1}):e}))});case"SET-USER-PROFILE":return Object(j.a)(Object(j.a)({},e),{},{userProfile:t.userProfile});case"GET-USER-STATUS":case"SET-USER-STATUS":return Object(j.a)(Object(j.a)({},e),{},{profileInfo:Object(j.a)(Object(j.a)({},e.profileInfo),{},{userStatus:t.userStatus})})}return e},Z=n.p+"static/media/youtube.54534ab2.svg",z=n.p+"static/media/twitch.ead2a3ae.svg",Y=n.p+"static/media/tiktok.845f7c13.svg",$=n.p+"static/media/instagram.0b3e8a0c.svg",ee=n(64),te=n.n(ee),ne=[{icon:Z},{icon:z},{icon:Y},{icon:$}],ae=function(){var e=ne.map((function(e){return Object(u.jsx)("a",{href:"#",className:te.a.icon,children:Object(u.jsx)("img",{src:e.icon,alt:"icon",className:te.a.iconImg})})}));return Object(u.jsx)("div",{className:te.a.icons,children:e})},se=n(37),ie=n.n(se),ce=n.p+"static/media/crown.baa223b2.svg",re=n.p+"static/media/profile-avatar.e2b0c687.png",oe=function(){var e=Object(C.c)((function(e){return e.profilePage.posts})),t=Object(C.c)((function(e){return e.profilePage})),n=Object(C.b)(),a=e.map((function(e){return Object(u.jsxs)("div",{id:e.id,className:ie.a.post,children:[Object(u.jsxs)("div",{className:ie.a.info_line,children:[Object(u.jsx)("div",{className:ie.a.avatar,children:Object(u.jsx)("img",{src:null===t.userProfile.photos.small?re:t.userProfile.photos.small,alt:"avatar"})}),Object(u.jsx)("p",{className:ie.a.message,children:e.message})]}),Object(u.jsxs)("div",{className:ie.a.likesInner,children:[Object(u.jsx)("button",{className:ie.a.likesBtn,onClick:function(){return t=e.id,a=e.likesCounter,void n(function(e,t){return{type:"INCREASE-LIKES",postId:e,likesCounter:t}}(t,a));var t,a},children:Object(u.jsx)("img",{src:ce,alt:"crown",className:ie.a.crown})}),Object(u.jsx)("p",{className:ie.a.likesCount,children:e.likesCounter})]})]},e.id)}));return Object(u.jsx)("div",{children:a})},le=s.a.memo(oe),ue=n(54),de=n.n(ue),je=s.a.memo((function(e){var t=e.newValue,n=Object(C.b)(),s=Object(a.useCallback)((function(){t&&n(function(e){return{type:"ADD-NEW-POST",newValue:e}}(t))}),[n,t]),i=Object(a.useCallback)((function(e){n({type:"UPDATE-POST-VALUE",newPostValue:e.currentTarget.value})}),[n]);return Object(u.jsxs)("div",{className:de.a.posts,children:[Object(u.jsx)("h2",{className:de.a.title,children:"My Posts"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{value:t,onChange:i,className:de.a.textarea}),Object(u.jsx)(d,{className:"commonBtn ".concat(de.a.btn),onClick:s,text:"Add post"})]}),Object(u.jsx)(le,{})]})})),be=n(41),me=n.n(be),he=function(){var e=Object(C.c)((function(e){return e.profilePage.aboutUserInfo}));return Object(u.jsxs)("div",{className:me.a.inner,children:[Object(u.jsx)("h3",{className:me.a.title,children:"About Me"}),Object(u.jsx)("div",{className:me.a.line,children:Object(u.jsx)("p",{className:me.a.description,children:e.userDescription})}),Object(u.jsxs)("div",{className:me.a.line,children:[Object(u.jsx)("p",{children:"Joined"}),Object(u.jsx)("p",{children:e.joinTime})]}),Object(u.jsxs)("div",{className:me.a.line,children:[Object(u.jsx)("p",{children:"Location"}),Object(u.jsx)("p",{children:e.userAddress})]})]})},fe=function(){return Object(u.jsx)(he,{})},Oe=n(65),pe=n.n(Oe),_e=function(){return Object(u.jsxs)("div",{className:pe.a.inner,children:[Object(u.jsx)("h3",{className:pe.a.title,children:"Stream Box"}),Object(u.jsx)("div",{className:pe.a.frame_wrapper,children:Object(u.jsx)("iframe",{src:"https://www.twitch.tv/videos/411305682",frameBorder:"0",scrolling:"no",height:"100%",width:"100%",allowFullScreen:!0,title:"twitch"})})]})},ge=s.a.memo((function(){var e=Object(C.c)((function(e){return e.profilePage})),t=Object(C.c)((function(e){return e.authPage.isAuth})),n=Object(C.b)(),i=s.a.useState(!1),c=Object(G.a)(i,2),r=c[0],o=c[1],l=s.a.useState(e.profileInfo.userStatus),d=Object(G.a)(l,2),j=d[0],b=d[1],m=Object(F.h)().id;m||(m="20604"),Object(a.useEffect)((function(){var e;n((e=m,function(t){_(e).then((function(e){t({type:"SET-USER-PROFILE",userProfile:e.data})}))}))}),[m,n]),Object(a.useEffect)((function(){var e;n((e=m,function(t){g(e).then((function(e){t({type:"GET-USER-STATUS",userStatus:e})}))}))}),[m,n]);var h=Object(a.useCallback)((function(){var e;o(!1),n((e=j,function(t){x(e).then((function(e){t({type:"SET-USER-STATUS",userStatus:e.status})}))}))}),[n,j]);return console.log(typeof e.profileInfo.photos.large),t?Object(u.jsxs)("section",{className:V.a.inner,children:[Object(u.jsxs)("div",{className:V.a.header,children:[Object(u.jsx)("img",{src:q,alt:"profile-bg",className:V.a.bg}),Object(u.jsxs)("div",{className:V.a.header_info,children:[Object(u.jsxs)("div",{className:V.a.header_left,children:[Object(u.jsxs)("div",{className:V.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.postsNumber}),Object(u.jsx)("p",{children:"Posts"})]}),Object(u.jsxs)("div",{className:V.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.friendsNumber}),Object(u.jsx)("p",{children:"Friends"})]}),Object(u.jsxs)("div",{className:V.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.commentsNumber}),Object(u.jsx)("p",{children:"Comments"})]})]}),Object(u.jsxs)("div",{className:V.a.header_mid,children:[Object(u.jsxs)("div",{className:V.a.header_mid_box,children:[Object(u.jsx)("div",{className:V.a.avatar_box,children:Object(u.jsx)("img",{src:null===e.userProfile.photos.large?re:e.userProfile.photos.large,alt:"avatar",className:V.a.avatar})}),Object(u.jsx)("p",{className:V.a.userLevel,children:"4"})]}),Object(u.jsx)("p",{className:V.a.userName,children:e.userProfile.fullName}),Object(u.jsx)("p",{className:V.a.userMembership,children:e.profileInfo.membership}),Object(u.jsx)("div",{children:r?Object(u.jsx)("input",{value:j,onBlur:h,autoFocus:!0,onChange:function(e){b(e.currentTarget.value)}}):Object(u.jsx)("p",{onDoubleClick:function(){o(!0)},children:j||"Enter your status"})})]}),Object(u.jsx)("div",{className:V.a.socialLinks,children:Object(u.jsx)(ae,{})})]})]}),Object(u.jsxs)("div",{className:V.a.main_content,children:[Object(u.jsx)(fe,{}),Object(u.jsx)(je,{newValue:e.newPostMessage}),Object(u.jsx)(_e,{})]})]}):Object(u.jsx)(F.a,{replace:!0,to:"/login"})})),xe=n(29),Ne=n.n(xe),ve={users:[],pagesNumber:10,usersCount:10,currentPage:2,totalCount:10,isFetching:!0,isFollowed:[],s:!1},we=function(e){return{type:"SET-PRELOADER",isFetching:e}},Se=function(e,t){return{type:"SET-IS-FOLLOWED",s:e,userId:t}},Ee=function(e,t){return function(n){n(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(t)),n(we(!0)),f(e,t).then((function(e){n({type:"SET-USERS",users:e.items}),n(we(!1))}))}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-USER":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW-USER":return Object(j.a)(Object(j.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(j.a)(Object(j.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET-TOTAL-USERS-COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalCount:t.totalCount});case"SET-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SET-PRELOADER":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"SET-IS-FOLLOWED":return Object(j.a)(Object(j.a)({},e),{},{isFollowed:t.s?[].concat(Object(J.a)(e.isFollowed),[t.userId]):Object(J.a)(e.isFollowed.filter((function(e){return e!==t.userId})))});default:return e}},Pe=n.p+"static/media/preloader.4ccf66d6.gif",Te=n(66),Ce=n.n(Te),Ie=function(){return Object(u.jsx)("div",{className:Ce.a.inner,children:Object(u.jsx)("div",{className:Ce.a.block,children:Object(u.jsx)("img",{src:Pe,alt:"preloader",className:Ce.a.img})})})},ke=n(94),Fe=s.a.memo((function(e){var t=e.user,n=e.userIsFollowed,a=e.onClickFollowHandler,s=e.onClickUnfollowHandler;Object(ke.a)(e,["user","userIsFollowed","onClickFollowHandler","onClickUnfollowHandler"]);return console.log("user"),Object(u.jsxs)("div",{id:t.id,className:Ne.a.user,children:[Object(u.jsx)("div",{className:Ne.a.avatar,children:Object(u.jsx)("img",{src:null===t.photos.small?re:t.photos.small,alt:"avatar"})}),Object(u.jsx)(I.b,{to:"/profile/"+t.id,className:Ne.a.visitUser,children:Object(u.jsx)("h4",{className:Ne.a.userName,children:t.name})}),Object(u.jsx)("p",{children:t.message}),t.followed?Object(u.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return s(t.id)},className:Ne.a.userBtn,children:"Unfollow"}):Object(u.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},className:Ne.a.userBtn,children:"Follow"}),Object(u.jsx)(ae,{})]},t.id)})),Ae=n(156),Le=s.a.memo((function(){console.log("users");var e=Object(C.b)(),t=Object(C.c)((function(e){return e.usersPage})),n=Object(C.c)((function(e){return e.authPage.isAuth}));Object(a.useEffect)((function(){e(Ee(t.usersCount,t.currentPage))}),[e,t.usersCount,t.currentPage]);var s=Object(a.useCallback)((function(n,a){e(Ee(t.usersCount,a))}),[e,t.usersCount]),i=Object(a.useCallback)((function(t){e(function(e){return function(t){t(Se(!0,e)),p(e).then((function(n){0===n.data.resultCode&&(t(function(e){return{type:"UNFOLLOW-USER",userId:e}}(e)),t(Se(!1,e)))}))}}(t))}),[e]),c=Object(a.useCallback)((function(t){e(function(e){return function(t){t(Se(!0,e)),O(e).then((function(n){0===n.data.resultCode&&(t(function(e){return{type:"FOLLOW-USER",userId:e}}(e)),t(Se(!1,e)))}))}}(t))}),[e]),r=t.users.map((function(e){return Object(u.jsx)(Fe,{user:e,userIsFollowed:t.isFollowed,onClickUnfollowHandler:i,onClickFollowHandler:c})}));return n?Object(u.jsxs)("section",{className:Ne.a.users,children:[t.isFetching?Object(u.jsx)(Ie,{}):null,Object(u.jsxs)("div",{className:Ne.a.users_inner,children:[Object(u.jsx)("div",{className:Ne.a.pagination,children:Object(u.jsx)(Ae.a,{count:t.pagesNumber,color:"secondary",page:t.currentPage,onChange:s,size:"large"})}),Object(u.jsx)("div",{className:Ne.a.users_elements,children:r})]})]}):Object(u.jsx)(F.a,{replace:!0,to:"/login"})})),Ue=n(93),Re=n(20),De=n.n(Re),We={email:"",password:""},Be=function(e){console.log(e)},He=s.a.memo((function(){var e=Object(C.b)(),t=s.a.useState(!1),n=Object(G.a)(t,2),a=n[0],i=n[1];return Object(u.jsx)(Ue.a,{initialValues:We,validate:function(e){var t={email:void 0};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Invalid Email",i(!0)):(t.email="Email is required",i(!0)),e.password?e.password.length<4&&(t.password="Password too short",i(!0)):(t.password="Password is required",i(!0)),t},onSubmit:Be,children:function(t){var n=t.values,s=t.handleChange,i=t.handleSubmit,c=t.errors,r=t.touched,o=t.handleBlur;return Object(u.jsxs)("div",{className:De.a.container,children:[Object(u.jsx)("h1",{className:De.a.title,children:"Sign in to continue"}),Object(u.jsxs)("form",{onSubmit:i,className:De.a.form,children:[Object(u.jsxs)("div",{className:De.a.formRow,children:[Object(u.jsxs)("div",{className:De.a.formLine,children:[Object(u.jsx)("label",{htmlFor:"email",className:De.a.formLabel,children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",value:n.email,onChange:s,onBlur:o,className:c.email&&r.email?De.a.inputError:De.a.input}),c.email&&r.email&&Object(u.jsx)("span",{className:De.a.error,children:c.email})]}),Object(u.jsxs)("div",{className:De.a.formLine,children:[Object(u.jsx)("label",{htmlFor:"password",className:De.a.formLabel,children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",value:n.password,onChange:s,onBlur:o,className:c.password&&r.password?De.a.inputError:De.a.input}),c.password&&r.password&&Object(u.jsx)("span",{className:De.a.error,children:c.password})]})]}),Object(u.jsx)("button",{type:"submit",className:a?De.a.btn:"".concat(De.a.disabledBtn," + ").concat(De.a.btn),disabled:c?!a:a,onClick:function(){var t,a,s;e((t=n.email,a=n.password,s=!0,function(e){S(t,a,s).then((function(t){0===t.data.resultCode&&e(T())}))}))},children:"Sign In"})]})]})}})})),Me=n(90),Ge=n.n(Me),qe=function(){return Object(C.c)((function(e){return e.authPage.isAuth}))?Object(u.jsx)(F.a,{replace:!0,to:"/profile"}):Object(u.jsx)("div",{className:Ge.a.inner,children:Object(u.jsx)(He,{})})},Qe={quote:"",isFetching:!1},Ve=function(e){return{type:"SET-QUOTE-IS-FETCHING",isFetching:e}},Je=function(){return function(e){e(Ve(!0)),N().then((function(t){console.log(t.data.quote),e(Ve(!1)),e({type:"SET-QUOTE",quote:t.data.quote})}))}},Ke=n(46),Xe=n.n(Ke),Ze=n.p+"static/media/q.6adffa40.jpg",ze=s.a.memo((function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.dailyQuotePage.quote})),n=Object(C.c)((function(e){return e.dailyQuotePage.isFetching}));Object(a.useEffect)((function(){e(Je())}),[e]);var s=Object(a.useCallback)((function(){e(Je())}),[e]);return Object(u.jsxs)("section",{className:Xe.a.inner,children:[n?Object(u.jsx)(Ie,{}):null,Object(u.jsxs)("div",{className:Xe.a.quoteInner,children:[Object(u.jsxs)("div",{className:Xe.a.quote,children:[Object(u.jsx)("p",{className:Xe.a.quoteText,children:t}),Object(u.jsx)(d,{onClick:s,className:"commonBtn",text:"Get your daily quote"})]}),Object(u.jsx)("img",{src:Ze,alt:"background",className:Xe.a.bg})]})]})})),Ye={articles:[{author:"Kerrie Hughes",content:"2021-12-27T10:15:08.991Z\r\n(Image credit: Nintendo)\r\nMorning everyone! Do you wish it could be Christmas every day? Well it kind of is, with today being the official substitute day for Christmas Day i\u2026 [+11015 chars]",description:"The best deals on Nintendo Switch, games and accessories.",publishedAt:"2021-12-27T08:17:11Z",source:{id:"",name:"Creative Bloq"},title:"Nintendo Switch after Christmas sales live blog: the best Nintendo Switch deals live now - Creative Bloq",url:"https://www.creativebloq.com/news/live/nintendo-switch-boxing-day-deals",urlToImage:"https://cdn.mos.cms.futurecdn.net/daVy7d593wadBE4FPTuDTa-1200-80.jpg"},{author:"Liam Doolan",content:"Dragon Quest X Offline for Nintendo Switch was due to arrive in Japan on 26th February next year, but it's now the latest game to delayed.\r\nThe title will now launch in Summer 2022, and the DLC expan\u2026 [+589 chars]",description:"The team wants it to be the best experience possible",publishedAt:"2021-12-27T03:45:00Z",source:{id:"",name:"Nintendo Life"},title:"Dragon Quest X Offline Has Been Delayed Until Summer 2022 - Nintendo Life",url:"https://www.nintendolife.com/news/2021/12/dragon-quest-x-offline-has-been-delayed-until-summer-2022",urlToImage:"https://images.nintendolife.com/8556368c22c93/1280x720.jpg"},{author:"Adam Bankhurst",content:'Square Enix has confirmed that, due to the ongoing COVID-19 pandemic, Final Fantasy 16\'s development has been delayed by "almost a half year" and the next big reveal will not take place until Spring \u2026 [+3173 chars]',description:'Square Enix has confirmed that, due to the ongoing COVID-19 pandemic, Final Fantasy 16\'s development has been delayed by "almost a half year" and the next big reveal will not take place until Spring 2022.',publishedAt:"2021-12-27T05:48:45Z",source:{id:"ign",name:"IGN"},title:"Final Fantasy 16's Development Delayed by 'Almost a Half Year,' Big Reveal Will Take Place in Spring 2022 - IGN - IGN",url:"https://www.ign.com/articles/final-fantasy-16-development-delayed-by-almost-half-a-year-big-reveal-will-take-place-in-spring-2022",urlToImage:"https://assets-prd.ignimgs.com/2021/12/27/ff16-poster-1603968298410-1640583091711.jpg?width=1280"},{author:"Alan Friedman",content:"This is our new notification center.\r\n Inside, you will find updates on the most important things happening right now.\r\nGot it",description:"Google is asking Pixel 6 users to help it test a fix for a bug that causes the new handsets to lose connectivity with users' cellular providers.",publishedAt:"2021-12-26T22:44:01Z",source:{id:"",name:"PhoneArena"},title:"Google asks 5G Pixel 6 users to help it test a fix for the connectivity bug - PhoneArena",url:"https://www.phonearena.com/news/google-tests-fix-for-5g-pixel-6-connectivity-bug_id137417",urlToImage:"https://m-cdn.phonearena.com/images/article/137417-wide-two_1200/Google-asks-5G-Pixel-6-users-to-help-it-test-a-fix-for-the-connectivity-bug.jpg"}],totalResults:0,currentPage:1,articlesCount:10,isFetching:!1,isSuccess:null,warning:!0},$e=function(e){return{type:"NEWS/SET-NEWS-IS-FETCHING",isFetching:e}},et=function(e){return{type:"NEWS/SET-NEWS-RESPONSE-SUCCESS",isSuccess:e}},tt=function(e){return{type:"NEWS/SET-NEWS-WARNING",warning:e}},nt=function(e,t){return function(n){n(function(e){return{type:"NEWS/SET-NEWS-CURRENT-PAGE",currentPage:e}}(t)),n($e(!0)),v(e,t).then((function(e){200===e.status&&(console.log(e.data.articles),n(et(!0)),n({type:"NEWS/SET-NEWS-STATE",articles:e.data.articles}),n({type:"NEWS/SET-NEWS-TOTAL-ITEMS",itemsCount:e.data.totalResults}))})).catch((function(){n(et(!1))})).finally((function(){n($e(!1))}))}},at=n(47),st=n.n(at),it=n.p+"static/media/profile-bg.c2555e70.png",ct=s.a.memo((function(e){var t=e.article;return Object(u.jsxs)("a",{href:t.url,className:st.a.article,children:[Object(u.jsx)("h2",{className:st.a.title,children:t.title}),Object(u.jsx)("p",{className:st.a.sourceName,children:t.source.name}),Object(u.jsx)("div",{className:st.a.image,children:Object(u.jsx)("img",{src:t.urlToImage?t.urlToImage:it,alt:"article-img"})}),Object(u.jsx)("p",{className:st.a.description,children:t.description})]})})),rt=n(55),ot=n.n(rt),lt=n(155),ut=n(157),dt=s.a.memo((function(){var e=Object(C.c)((function(e){return e.newsPage.warning})),t=Object(C.c)((function(e){return e.newsPage})),n=Object(C.b)();Object(a.useEffect)((function(){!1===t.isSuccess&&n(tt(!0))}),[n,t.isSuccess]);var s=Object(a.useCallback)((function(e,t){"clickaway"!==t&&n(tt(!1))}),[n]);return Object(u.jsx)("div",{children:Object(u.jsx)(lt.a,{open:!0===e,autoHideDuration:6e4,onClose:s,children:Object(u.jsx)(ut.a,{onClose:s,severity:"warning",sx:{width:"100%"},children:"This page is available with pagination and normally working API only on localhost:3000, because using News API on other ports than localhost:3000 is costing 500$ per month, which is quite expensive for test project. Please download it on your local PC, if you want to check how this page normally works otherwise you can look only at some items from this page and how they are looking on project. Sorry for the inconvenience."})})})})),jt=s.a.memo((function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.newsPage}));Object(a.useEffect)((function(){e(nt(t.totalResults,t.currentPage))}),[e,t.totalResults,t.currentPage]);var n=Object(a.useCallback)((function(n,a){e(nt(t.totalResults,a))}),[e,t.totalResults]),s=t.articles.map((function(e){return Object(u.jsx)(ct,{article:e})}));return Object(u.jsxs)("section",{className:ot.a.inner,children:[t.isFetching?Object(u.jsx)(Ie,{}):null,Object(u.jsxs)("div",{className:ot.a.articlesInner,children:[Object(u.jsx)("div",{className:ot.a.pagination,children:Object(u.jsx)(Ae.a,{count:t.totalResults/10,color:"secondary",page:t.currentPage,onChange:n,size:"large"})}),Object(u.jsxs)("div",{className:ot.a.articles,children:[s,t.isSuccess?null:Object(u.jsx)(dt,{})]})]})]})})),bt=n(91),mt=n.n(bt),ht=s.a.memo((function(e){return Object(u.jsxs)("main",{className:mt.a.main,children:[Object(u.jsx)(M,{}),Object(u.jsxs)(F.d,{children:[Object(u.jsx)(F.b,{path:"/kid-social-network",element:Object(u.jsx)(F.a,{to:"/profile"})}),Object(u.jsx)(F.b,{path:"/profile",element:Object(u.jsx)(ge,{})}),Object(u.jsx)(F.b,{path:"/profile/:id",element:Object(u.jsx)(ge,{})}),Object(u.jsx)(F.b,{path:"/news",element:Object(u.jsx)(jt,{})}),Object(u.jsx)(F.b,{path:"/users",element:Object(u.jsx)(Le,{})}),Object(u.jsx)(F.b,{path:"/login",element:Object(u.jsx)(qe,{})}),Object(u.jsx)(F.b,{path:"/daily-quote",element:Object(u.jsx)(ze,{})})]})]})})),ft=function(){return Object(u.jsx)("footer",{})};var Ot=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(k,{}),Object(u.jsx)(ht,{}),Object(u.jsx)(ft,{})]})})},pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,160)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))},_t=n(68),gt=n(92),xt=Object(_t.b)({profilePage:X,usersPage:ye,authPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-DATA":return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),{},{id:t.id,login:t.login,email:t.email}),isAuth:t.isAuth});case"SET-IS-LOGIN":return Object(j.a)(Object(j.a)({},e),{},{data:Object(j.a)(Object(j.a)({},e.data),{},{id:t.id})});default:return e}},dailyQuotePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-QUOTE":return Object(j.a)(Object(j.a)({},e),{},{quote:t.quote});case"SET-QUOTE-IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});default:return e}},newsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS/SET-NEWS-STATE":return Object(j.a)(Object(j.a)({},e),{},{articles:t.articles});case"NEWS/SET-NEWS-TOTAL-ITEMS":return Object(j.a)(Object(j.a)({},e),{},{totalResults:t.itemsCount});case"NEWS/SET-NEWS-CURRENT-PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"NEWS/SET-NEWS-IS-FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"NEWS/SET-NEWS-RESPONSE-SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{isSuccess:t.isSuccess});case"NEWS/SET-NEWS-WARNING":return Object(j.a)(Object(j.a)({},e),{},{warning:t.warning});default:return e}}}),Nt=Object(_t.c)(xt,Object(_t.a)(gt.a));console.log(window.store=Nt),c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(I.a,{children:Object(u.jsx)(C.a,{store:Nt,children:Object(u.jsx)(Ot,{})})})}),document.getElementById("root")),pt()},19:function(e,t,n){e.exports={inner:"Profile_inner__1nBlQ",header:"Profile_header__y6y_p",header_info:"Profile_header_info__2Gcfx",bg:"Profile_bg__vxBlz",header_left:"Profile_header_left__3NdnI",header_left_box:"Profile_header_left_box__3NGcU",header_mid:"Profile_header_mid__3UG6t",avatar_box:"Profile_avatar_box__13SX-",avatar:"Profile_avatar__15YLN",header_mid_box:"Profile_header_mid_box__220L7",userName:"Profile_userName__ZGJI1",userMembership:"Profile_userMembership__1UXNa",userLevel:"Profile_userLevel__1dLj-",socialLinks:"Profile_socialLinks__FbCpO",main_content:"Profile_main_content__2PGwM"}},20:function(e,t,n){e.exports={container:"LoginForm_container__2qdIi",title:"LoginForm_title__2fhRQ",formLine:"LoginForm_formLine__2cdoI",form:"LoginForm_form__1wa08",formLabel:"LoginForm_formLabel__21WOD",btn:"LoginForm_btn__1b1Et",input:"LoginForm_input__1bLUW",inputError:"LoginForm_inputError__mfxHu",error:"LoginForm_error__2NE7K",disabledBtn:"LoginForm_disabledBtn__3b1hK"}},26:function(e,t,n){e.exports={navbar:"Navbar_navbar__1glNI",menu:"Navbar_menu__3aw_d",item:"Navbar_item__2I03I",link:"Navbar_link__16QFG"}},29:function(e,t,n){e.exports={users:"Users_users__14ed9",users_inner:"Users_users_inner__2V3vh",users_elements:"Users_users_elements__1AS6N",user:"Users_user__27-ZE",avatar:"Users_avatar__27oSH",userName:"Users_userName__3lIfx",userBtn:"Users_userBtn__1XLsV",pagination:"Users_pagination__3zU3m",activePaginationBtn:"Users_activePaginationBtn__1Yy5M",paginationBtn:"Users_paginationBtn__1-ZMW",visitUser:"Users_visitUser__25A1Z"}},37:function(e,t,n){e.exports={post:"MyPosts_post__2juG6",info_line:"MyPosts_info_line__V3dtd",avatar:"MyPosts_avatar__3TZKx",message:"MyPosts_message__brCJu",crown:"MyPosts_crown__3hLQf",likesInner:"MyPosts_likesInner__4vYBD",likesBtn:"MyPosts_likesBtn__TyhE5",likesCount:"MyPosts_likesCount__1gO03"}},41:function(e,t,n){e.exports={inner:"AboutMe_inner__1LuEF",title:"AboutMe_title__2hLYr",line:"AboutMe_line__Y-aIm",description:"AboutMe_description__2svGX"}},45:function(e,t,n){e.exports={inner:"Header_inner__3a4dO",logoInner:"Header_logoInner__25vgs",logo:"Header_logo__1yrPa",menu:"Header_menu__23e_l",loginButtons:"Header_loginButtons__RXaSm",userName:"Header_userName__2eUfQ"}},46:function(e,t,n){e.exports={inner:"DailyQuote_inner__3xz8O",quoteInner:"DailyQuote_quoteInner__1UzWo",bg:"DailyQuote_bg__3eYxK",quote:"DailyQuote_quote__3Vi8J",quoteText:"DailyQuote_quoteText__QsVo4"}},47:function(e,t,n){e.exports={article:"Article_article__2xjQn",title:"Article_title__FShgL",image:"Article_image__16g50",sourceName:"Article_sourceName__3F7nQ",description:"Article_description__gwCq2"}},54:function(e,t,n){e.exports={posts:"Posts_posts__DdtgF",btn:"Posts_btn__2NSKs",title:"Posts_title__2BCAy",textarea:"Posts_textarea__3eY95"}},55:function(e,t,n){e.exports={inner:"News_inner__2-Ha1",articlesInner:"News_articlesInner__LDVp4",articles:"News_articles__2OXU_",pagination:"News_pagination__1ms24"}},64:function(e,t,n){e.exports={icons:"SocialICons_icons__itnHH",icon:"SocialICons_icon__2eTRE",iconImg:"SocialICons_iconImg__1IVJD"}},65:function(e,t,n){e.exports={inner:"AdditionalInfo_inner__1ypFX",title:"AdditionalInfo_title__1U8-y",frame_wrapper:"AdditionalInfo_frame_wrapper__2FDiX"}},66:function(e,t,n){e.exports={inner:"Preloader_inner__24CEG",img:"Preloader_img__3VzK1"}},90:function(e,t,n){e.exports={inner:"Login_inner__3FzSA"}},91:function(e,t,n){e.exports={main:"Main_main__DNvtS"}}},[[133,1,2]]]);
//# sourceMappingURL=main.ad5ac0ce.chunk.js.map