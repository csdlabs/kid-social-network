(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){e.exports={container:"LoginForm_container__2qdIi",title:"LoginForm_title__2fhRQ",formLine:"LoginForm_formLine__2cdoI",form:"LoginForm_form__1wa08",formLabel:"LoginForm_formLabel__21WOD",btn:"LoginForm_btn__1b1Et",input:"LoginForm_input__1bLUW",inputError:"LoginForm_inputError__mfxHu",error:"LoginForm_error__2NE7K",disabledBtn:"LoginForm_disabledBtn__3b1hK"}},15:function(e,t,s){e.exports={navbar:"Navbar_navbar__1glNI",menu:"Navbar_menu__3aw_d",item:"Navbar_item__2I03I",link:"Navbar_link__16QFG"}},16:function(e,t,s){e.exports={users:"Users_users__14ed9",users_inner:"Users_users_inner__2V3vh",users_elements:"Users_users_elements__1AS6N",user:"Users_user__27-ZE",avatar:"Users_avatar__27oSH",userName:"Users_userName__3lIfx",userBtn:"Users_userBtn__1XLsV",pagination:"Users_pagination__3zU3m",activePaginationBtn:"Users_activePaginationBtn__1Yy5M",paginationBtn:"Users_paginationBtn__1-ZMW"}},21:function(e,t,s){e.exports={post:"MyPosts_post__2juG6",info_line:"MyPosts_info_line__V3dtd",avatar:"MyPosts_avatar__3TZKx",message:"MyPosts_message__brCJu",crown:"MyPosts_crown__3hLQf",likesInner:"MyPosts_likesInner__4vYBD",likesBtn:"MyPosts_likesBtn__TyhE5",likesCount:"MyPosts_likesCount__1gO03"}},23:function(e,t,s){e.exports={inner:"AboutMe_inner__1LuEF",title:"AboutMe_title__2hLYr",line:"AboutMe_line__Y-aIm",description:"AboutMe_description__2svGX"}},26:function(e,t,s){e.exports={inner:"Header_inner__3a4dO",logoInner:"Header_logoInner__25vgs",logo:"Header_logo__1yrPa",menu:"Header_menu__23e_l",loginButtons:"Header_loginButtons__RXaSm",userName:"Header_userName__2eUfQ"}},27:function(e,t,s){e.exports={inner:"DailyQuote_inner__3xz8O",quoteInner:"DailyQuote_quoteInner__1UzWo",bg:"DailyQuote_bg__3eYxK",quote:"DailyQuote_quote__3Vi8J",quoteText:"DailyQuote_quoteText__QsVo4"}},29:function(e,t,s){e.exports={posts:"Posts_posts__DdtgF",btn:"Posts_btn__2NSKs",title:"Posts_title__2BCAy",textarea:"Posts_textarea__3eY95"}},35:function(e,t,s){e.exports={icons:"SocialICons_icons__itnHH",icon:"SocialICons_icon__2eTRE",iconImg:"SocialICons_iconImg__1IVJD"}},36:function(e,t,s){e.exports={inner:"AdditionalInfo_inner__1ypFX",title:"AdditionalInfo_title__1U8-y",frame_wrapper:"AdditionalInfo_frame_wrapper__2FDiX"}},37:function(e,t,s){e.exports={inner:"Preloader_inner__24CEG",img:"Preloader_img__3VzK1"}},55:function(e,t,s){e.exports={main:"Main_main__DNvtS"}},59:function(e,t,s){e.exports={inner:"Login_inner__3FzSA"}},68:function(e,t,s){},69:function(e,t,s){},9:function(e,t,s){e.exports={inner:"Profile_inner__1nBlQ",header:"Profile_header__y6y_p",header_info:"Profile_header_info__2Gcfx",bg:"Profile_bg__vxBlz",header_left:"Profile_header_left__3NdnI",header_left_box:"Profile_header_left_box__3NGcU",header_mid:"Profile_header_mid__3UG6t",avatar_box:"Profile_avatar_box__13SX-",avatar:"Profile_avatar__15YLN",header_mid_box:"Profile_header_mid_box__220L7",userName:"Profile_userName__ZGJI1",userMembership:"Profile_userMembership__1UXNa",userLevel:"Profile_userLevel__1dLj-",socialLinks:"Profile_socialLinks__FbCpO",main_content:"Profile_main_content__2PGwM"}},95:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),i=s(32),c=s.n(i),r=(s(68),s(69),s(26)),o=s.n(r),l=s.p+"static/media/header-logo.ad29cc75.png",u=s(1),j=a.a.memo((function(e){var t=e.className,s=e.onClick,n=e.text;return Object(u.jsx)("button",{onClick:function(){s()},className:t,children:n})})),d=s(2),b=s(42),m=s.n(b),f=m.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"0c12297a-a516-42d3-9509-82bfb5d48238"},withCredentials:!0}),_=function(e,t){return f.get("/users?count=".concat(e,"&page=").concat(t),{}).then((function(e){return e.data}))},O=function(e){return f.post("/follow/".concat(e),{},{})},h=function(e){return f.delete("/follow/".concat(e),{})},p=function(e){return f.get("/profile/".concat(e))},x=function(e){return f.get("/profile/status/".concat(e)).then((function(e){return e.data}))},g=function(e){return f.put("/profile/status",{status:e})},v=function(){return m.a.get("https://animechan.vercel.app/api/random")},N=function(){return f.get("/auth/me",{})},w=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f.post("/auth/login",{email:e,password:t,rememberMe:s})},P=function(){return f.delete("/auth/login")},E={data:{id:"",login:"",email:""},isAuth:!1},S=function(e,t,s,n){return{type:"SET-AUTH-DATA",id:e,login:t,email:s,isAuth:n}},I=function(){return function(e){N().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.login,i=s.email;e(S(n,a,i,!0))}}))}},C=s(5),L=a.a.memo((function(){var e=Object(C.c)((function(e){return e.authPage})),t=Object(C.b)();Object(n.useEffect)((function(){t(I())}),[]);return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{className:o.a.inner,children:[Object(u.jsxs)("div",{className:o.a.logoInner,children:[Object(u.jsx)("a",{href:"#",className:o.a.logo,children:Object(u.jsx)("img",{src:l,alt:"header-logo"})}),Object(u.jsx)("p",{children:"Lumos"})]}),e.isAuth?Object(u.jsxs)("div",{className:o.a.loginButtons,children:[Object(u.jsxs)("p",{className:o.a.userName,children:["Welcome ",e.data.login]}),Object(u.jsx)(j,{className:"commonBtn",onClick:function(){t((function(e){P().then((function(t){if(0!==t.data.resultCode)throw"Incorrect password";e(S(null,null,null,!1))}))}))},text:"Log out"})]}):Object(u.jsx)(j,{className:"commonBtn",onClick:function(){},text:"Login"})]})})})),T=s(3),y=s(15),F=s.n(y),U=s(12),k=s.p+"static/media/profile.9d4d5a29.svg",A=s.p+"static/media/messages.1bad7cf9.svg",B=s.p+"static/media/settings.627fc741.svg",M=s.p+"static/media/music.1bac8f02.svg",R=s.p+"static/media/users.e7baea37.svg",D=a.a.memo((function(){return Object(u.jsx)("nav",{className:F.a.navbar,children:Object(u.jsxs)("ul",{className:F.a.menu,children:[Object(u.jsx)("li",{className:F.a.item,children:Object(u.jsxs)(U.b,{to:"/profile",className:F.a.link,children:[Object(u.jsx)("img",{src:k,alt:"profile"}),"Profile"]})}),Object(u.jsx)("li",{className:F.a.item,children:Object(u.jsxs)(U.b,{to:"/dialogs",className:F.a.link,children:[Object(u.jsx)("img",{src:A,alt:"messages"}),"Messages"]})}),Object(u.jsx)("li",{className:F.a.item,children:Object(u.jsxs)(U.b,{to:"/daily-quote",className:F.a.link,children:[Object(u.jsx)("img",{src:B,alt:"daily-quote"}),"Daily Quote"]})}),Object(u.jsx)("li",{className:F.a.item,children:Object(u.jsxs)(U.b,{to:"/music",className:F.a.link,children:[Object(u.jsx)("img",{src:M,alt:"music"}),"Music"]})}),Object(u.jsx)("li",{className:F.a.item,children:Object(u.jsxs)(U.b,{to:"/users",className:F.a.link,children:[Object(u.jsx)("img",{src:R,alt:"users"}),"Users"]})})]})})})),H=s(55),q=s.n(H),Q=s(7),G=s.p+"static/media/profile-bg.c2555e70.png",V=s(9),W=s.n(V),J=s(6),K={posts:[{id:"1",message:"Hello, i am Julian!",likesCounter:22},{id:"2",message:"Hello, i am Lili!",likesCounter:42},{id:"3",message:"Hello, i am Juliana!",likesCounter:12}],profileInfo:{postsNumber:10,friendsNumber:22,commentsNumber:15,photos:{small:"",large:""},userName:"Julius Kenard",membership:"Pro Member",userStatus:""},userProfile:{photos:{small:"",large:""},fullName:"Julius Kenard"},newPostMessage:"He He suiii!",aboutUserInfo:{userDescription:"Hi! My name is Julius but some people may know me as GameHunter! I have a Twitch channel where I stream, play and review all the newest games.",joinTime:"September 23, 2020",userAddress:"Los Angeles, California"}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE-POST-VALUE":return Object(d.a)(Object(d.a)({},e),{},{newPostMessage:t.newPostValue});case"ADD-NEW-POST":var s={id:"3",message:t.newValue,likesCounter:12};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(J.a)(e.posts),[s]),newPostMessage:""});case"INCREASE-LIKES":return Object(d.a)(Object(d.a)({},e),{},{posts:e.posts.map((function(e){return t.postId===e.id?Object(d.a)(Object(d.a)({},e),{},{likesCounter:t.likesCounter+1}):e}))});case"SET-USER-PROFILE":return Object(d.a)(Object(d.a)({},e),{},{userProfile:t.userProfile});case"GET-USER-STATUS":case"SET-USER-STATUS":return Object(d.a)(Object(d.a)({},e),{},{profileInfo:Object(d.a)(Object(d.a)({},e.profileInfo),{},{userStatus:t.userStatus})})}return e},X=s.p+"static/media/youtube.54534ab2.svg",z=s.p+"static/media/twitch.ead2a3ae.svg",Z=s.p+"static/media/tiktok.845f7c13.svg",$=s.p+"static/media/instagram.0b3e8a0c.svg",ee=s(35),te=s.n(ee),se=[{icon:X},{icon:z},{icon:Z},{icon:$}],ne=function(){var e=se.map((function(e){return Object(u.jsx)("a",{href:"#",className:te.a.icon,children:Object(u.jsx)("img",{src:e.icon,alt:"icon",className:te.a.iconImg})})}));return Object(u.jsx)("div",{className:te.a.icons,children:e})},ae=s(21),ie=s.n(ae),ce=s.p+"static/media/crown.baa223b2.svg",re=function(){var e=Object(C.c)((function(e){return e.profilePage.posts})),t=Object(C.b)(),s=e.map((function(e){return Object(u.jsxs)("div",{id:e.id,className:ie.a.post,children:[Object(u.jsxs)("div",{className:ie.a.info_line,children:[Object(u.jsx)("div",{className:ie.a.avatar}),Object(u.jsx)("p",{className:ie.a.message,children:e.message})]}),Object(u.jsxs)("div",{className:ie.a.likesInner,children:[Object(u.jsx)("button",{className:ie.a.likesBtn,onClick:function(){return s=e.id,n=e.likesCounter,void t(function(e,t){return{type:"INCREASE-LIKES",postId:e,likesCounter:t}}(s,n));var s,n},children:Object(u.jsx)("img",{src:ce,alt:"crown",className:ie.a.crown})}),Object(u.jsx)("p",{className:ie.a.likesCount,children:e.likesCounter})]})]},e.id)}));return Object(u.jsx)("div",{children:s})},oe=a.a.memo(re),le=s(29),ue=s.n(le),je=function(e){var t=e.newValue,s=Object(C.b)();return Object(u.jsxs)("div",{className:ue.a.posts,children:[Object(u.jsx)("h2",{className:ue.a.title,children:"My Posts"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("textarea",{value:t,onChange:function(e){s({type:"UPDATE-POST-VALUE",newPostValue:e.currentTarget.value})},className:ue.a.textarea}),Object(u.jsx)(j,{className:"commonBtn ".concat(ue.a.btn),onClick:function(){t&&s(function(e){return{type:"ADD-NEW-POST",newValue:e}}(t))},text:"Add post"})]}),Object(u.jsx)(oe,{})]})},de=s(23),be=s.n(de),me=function(){var e=Object(C.c)((function(e){return e.profilePage.aboutUserInfo}));return Object(u.jsxs)("div",{className:be.a.inner,children:[Object(u.jsx)("h3",{className:be.a.title,children:"About Me"}),Object(u.jsx)("div",{className:be.a.line,children:Object(u.jsx)("p",{className:be.a.description,children:e.userDescription})}),Object(u.jsxs)("div",{className:be.a.line,children:[Object(u.jsx)("p",{children:"Joined"}),Object(u.jsx)("p",{children:e.joinTime})]}),Object(u.jsxs)("div",{className:be.a.line,children:[Object(u.jsx)("p",{children:"Location"}),Object(u.jsx)("p",{children:e.userAddress})]})]})},fe=function(){return Object(u.jsx)(me,{})},_e=s(36),Oe=s.n(_e),he=function(){return Object(u.jsxs)("div",{className:Oe.a.inner,children:[Object(u.jsx)("h3",{className:Oe.a.title,children:"Stream Box"}),Object(u.jsx)("div",{className:Oe.a.frame_wrapper,children:Object(u.jsx)("iframe",{src:"https://www.twitch.tv/videos/411305682",frameBorder:"0",scrolling:"no",height:"100%",width:"100%",allowFullScreen:!0})})]})},pe=a.a.memo((function(){var e=Object(C.c)((function(e){return e.profilePage})),t=Object(C.c)((function(e){return e.authPage.isAuth})),s=Object(C.b)(),i=a.a.useState(!1),c=Object(Q.a)(i,2),r=c[0],o=c[1],l=a.a.useState(e.profileInfo.userStatus),j=Object(Q.a)(l,2),d=j[0],b=j[1],m=Object(T.h)().id;m||(m="20604"),Object(n.useEffect)((function(){var e;s((e=m,function(t){p(e).then((function(e){t({type:"SET-USER-PROFILE",userProfile:e.data})}))}))}),[m]),Object(n.useEffect)((function(){var e;s((e=m,function(t){x(e).then((function(e){t({type:"GET-USER-STATUS",userStatus:e})}))}))}),[m]);return t?Object(u.jsxs)("section",{className:W.a.inner,children:[Object(u.jsxs)("div",{className:W.a.header,children:[Object(u.jsx)("img",{src:G,alt:"profile-bg",className:W.a.bg}),Object(u.jsxs)("div",{className:W.a.header_info,children:[Object(u.jsxs)("div",{className:W.a.header_left,children:[Object(u.jsxs)("div",{className:W.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.postsNumber}),Object(u.jsx)("p",{children:"Posts"})]}),Object(u.jsxs)("div",{className:W.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.friendsNumber}),Object(u.jsx)("p",{children:"Friends"})]}),Object(u.jsxs)("div",{className:W.a.header_left_box,children:[Object(u.jsx)("p",{children:e.profileInfo.commentsNumber}),Object(u.jsx)("p",{children:"Comments"})]})]}),Object(u.jsxs)("div",{className:W.a.header_mid,children:[Object(u.jsxs)("div",{className:W.a.header_mid_box,children:[Object(u.jsx)("div",{className:W.a.avatar_box,children:Object(u.jsx)("img",{src:e.userProfile.photos.large,alt:"avatar",className:W.a.avatar})}),Object(u.jsx)("p",{className:W.a.userLevel,children:"4"})]}),Object(u.jsx)("p",{className:W.a.userName,children:e.userProfile.fullName}),Object(u.jsx)("p",{className:W.a.userMembership,children:e.profileInfo.membership}),Object(u.jsx)("div",{children:r?Object(u.jsx)("input",{value:d,onBlur:function(){var e;o(!1),s((e=d,function(t){g(e).then((function(e){t({type:"SET-USER-STATUS",userStatus:e.status})}))}))},autoFocus:!0,onChange:function(e){b(e.currentTarget.value)}}):Object(u.jsx)("p",{onDoubleClick:function(){o(!0)},children:d||"Enter your status"})})]}),Object(u.jsx)("div",{className:W.a.socialLinks,children:Object(u.jsx)(ne,{})})]})]}),Object(u.jsxs)("div",{className:W.a.main_content,children:[Object(u.jsx)(fe,{}),Object(u.jsx)(je,{newValue:e.newPostMessage}),Object(u.jsx)(he,{})]})]}):Object(u.jsx)(T.a,{replace:!0,to:"/login"})})),xe=s(16),ge=s.n(xe),ve={users:[],pagesNumber:10,usersCount:10,currentPage:2,totalCount:10,isFetching:!0,isFollowed:[],s:!1},Ne=function(e){return{type:"SET-PRELOADER",isFetching:e}},we=function(e,t){return{type:"SET-IS-FOLLOWED",s:e,userId:t}},Pe=function(e,t){return function(s){s(function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}}(t)),s(Ne(!0)),_(e,t).then((function(e){s({type:"SET-USERS",users:e.items}),s(Ne(!1))}))}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-USER":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW-USER":return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case"SET-TOTAL-USERS-COUNT":return Object(d.a)(Object(d.a)({},e),{},{totalCount:t.totalCount});case"SET-CURRENT-PAGE":return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case"SET-PRELOADER":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case"SET-IS-FOLLOWED":return Object(d.a)(Object(d.a)({},e),{},{isFollowed:t.s?[].concat(Object(J.a)(e.isFollowed),[t.userId]):Object(J.a)(e.isFollowed.filter((function(e){return e!==t.userId})))});default:return e}},Se=s.p+"static/media/preloader.4ccf66d6.gif",Ie=s(37),Ce=s.n(Ie),Le=function(){return Object(u.jsx)("div",{className:Ce.a.inner,children:Object(u.jsx)("div",{className:Ce.a.block,children:Object(u.jsx)("img",{src:Se,alt:"preloader",className:Ce.a.img})})})},Te=s(62),ye=a.a.memo((function(e){var t=e.user,s=e.userIsFollowed,n=e.onClickFollowHandler,a=e.onClickUnfollowHandler;Object(Te.a)(e,["user","userIsFollowed","onClickFollowHandler","onClickUnfollowHandler"]);return console.log("user"),Object(u.jsxs)("div",{id:t.id,className:ge.a.user,children:[Object(u.jsx)("div",{className:ge.a.avatar,children:Object(u.jsx)("img",{src:t.photos.small,alt:"avatar"})}),Object(u.jsx)(U.b,{to:"/profile/"+t.id,children:Object(u.jsx)("h4",{className:ge.a.userName,children:t.name})}),Object(u.jsx)("p",{children:t.message}),t.followed?Object(u.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},className:ge.a.userBtn,children:"Unfollow"}):Object(u.jsx)("button",{disabled:s.some((function(e){return e===t.id})),onClick:function(){return n(t.id)},className:ge.a.userBtn,children:"Follow"}),Object(u.jsx)(ne,{})]},t.id)})),Fe=s(108),Ue=a.a.memo((function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.usersPage})),s=Object(C.c)((function(e){return e.authPage.isAuth}));Object(n.useEffect)((function(){e(Pe(t.usersCount,t.currentPage))}),[e,t.usersCount,t.currentPage]);for(var a=Object(n.useCallback)((function(t){e(function(e){return function(t){t(we(!0,e)),h(e).then((function(s){0===s.data.resultCode&&(t(function(e){return{type:"UNFOLLOW-USER",userId:e}}(e)),t(we(!1,e)))}))}}(t))}),[e]),i=Object(n.useCallback)((function(t){e(function(e){return function(t){t(we(!0,e)),O(e).then((function(s){0===s.data.resultCode&&(t(function(e){return{type:"FOLLOW-USER",userId:e}}(e)),t(we(!1,e)))}))}}(t))}),[e]),c=[],r=1;r<10;r++)c.push(r);var o=t.users.map((function(e){return Object(u.jsx)(ye,{user:e,userIsFollowed:t.isFollowed,onClickUnfollowHandler:a,onClickFollowHandler:i})}));return s?Object(u.jsxs)("section",{className:ge.a.users,children:[t.isFetching?Object(u.jsx)(Le,{}):null,Object(u.jsxs)("div",{className:ge.a.users_inner,children:[Object(u.jsx)("div",{className:ge.a.pagination,children:Object(u.jsx)(Fe.a,{count:t.pagesNumber,color:"secondary",page:t.currentPage,onChange:function(s,n){e(Pe(t.usersCount,n))}})}),Object(u.jsx)("div",{className:ge.a.users_elements,children:o})]})]}):Object(u.jsx)(T.a,{replace:!0,to:"/login"})})),ke=s(61),Ae=s(10),Be=s.n(Ae),Me={email:"",password:""},Re=function(e){console.log(e)},De=function(){var e=Object(C.b)(),t=a.a.useState(!1),s=Object(Q.a)(t,2),n=s[0],i=s[1];return Object(u.jsx)(ke.a,{initialValues:Me,validate:function(e){var t={email:void 0};return e.email?/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(e.email)||(t.email="Invalid Email",i(!0)):(t.email="Email is required",i(!0)),e.password?e.password.length<4&&(t.password="Password too short",i(!0)):(t.password="Password is required",i(!0)),t},onSubmit:Re,children:function(t){var s=t.values,a=t.handleChange,i=t.handleSubmit,c=t.errors,r=t.touched,o=t.handleBlur;return Object(u.jsxs)("div",{className:Be.a.container,children:[Object(u.jsx)("h1",{className:Be.a.title,children:"Sign in to continue"}),Object(u.jsxs)("form",{onSubmit:i,className:Be.a.form,children:[Object(u.jsxs)("div",{className:Be.a.formRow,children:[Object(u.jsxs)("div",{className:Be.a.formLine,children:[Object(u.jsx)("label",{htmlFor:"email",className:Be.a.formLabel,children:"Email"}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",value:s.email,onChange:a,onBlur:o,className:c.email&&r.email?Be.a.inputError:Be.a.input}),c.email&&r.email&&Object(u.jsx)("span",{className:Be.a.error,children:c.email})]}),Object(u.jsxs)("div",{className:Be.a.formLine,children:[Object(u.jsx)("label",{htmlFor:"password",className:Be.a.formLabel,children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",value:s.password,onChange:a,onBlur:o,className:c.password&&r.password?Be.a.inputError:Be.a.input}),c.password&&r.password&&Object(u.jsx)("span",{className:Be.a.error,children:c.password})]})]}),Object(u.jsx)("button",{type:"submit",className:n?Be.a.btn:"".concat(Be.a.disabledBtn," + ").concat(Be.a.btn),disabled:c?!n:n,onClick:function(){var t,n,a;e((t=s.email,n=s.password,a=!0,function(e){w(t,n,a).then((function(t){if(0!==t.data.resultCode)throw"Incorrect password";e(I())}))}))},children:"Sign In"})]})]})}})},He=s(59),qe=s.n(He),Qe=function(){return Object(C.c)((function(e){return e.authPage.isAuth}))?Object(u.jsx)(T.a,{replace:!0,to:"/profile"}):Object(u.jsx)("div",{className:qe.a.inner,children:Object(u.jsx)(De,{})})},Ge={quote:"",isFetching:!1},Ve=function(e){return{type:"SET-QUOTE-IS-FETCHING",isFetching:e}},We=function(){return function(e){e(Ve(!0)),v().then((function(t){console.log(t.data.quote),e(Ve(!1)),e({type:"SET-QUOTE",quote:t.data.quote})}))}},Je=s(27),Ke=s.n(Je),Ye=s.p+"static/media/q.6adffa40.jpg",Xe=a.a.memo((function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.dailyQuotePage.quote})),s=Object(C.c)((function(e){return e.dailyQuotePage.isFetching}));Object(n.useEffect)((function(){e(We())}),[]);return Object(u.jsxs)("section",{className:Ke.a.inner,children:[s?Object(u.jsx)(Le,{}):null,Object(u.jsxs)("div",{className:Ke.a.quoteInner,children:[Object(u.jsxs)("div",{className:Ke.a.quote,children:[Object(u.jsx)("p",{className:Ke.a.quoteText,children:t}),Object(u.jsx)(j,{onClick:function(){e(We())},className:"commonBtn",text:"Get your daily quote"})]}),Object(u.jsx)("img",{src:Ye,alt:"background",className:Ke.a.bg})]})]})})),ze=a.a.memo((function(e){return Object(u.jsxs)("main",{className:q.a.main,children:[Object(u.jsx)(D,{}),Object(u.jsxs)(T.d,{children:[Object(u.jsx)(T.b,{path:"/kid-social-network",element:Object(u.jsx)(T.a,{to:"/profile"})}),Object(u.jsx)(T.b,{path:"/profile",element:Object(u.jsx)(pe,{})}),Object(u.jsx)(T.b,{path:"/profile/:id",element:Object(u.jsx)(pe,{})}),Object(u.jsx)(T.b,{path:"/users",element:Object(u.jsx)(Ue,{})}),Object(u.jsx)(T.b,{path:"/login",element:Object(u.jsx)(Qe,{})}),Object(u.jsx)(T.b,{path:"/daily-quote",element:Object(u.jsx)(Xe,{})})]})]})})),Ze=function(){return Object(u.jsx)("footer",{})};var $e=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(L,{}),Object(u.jsx)(ze,{}),Object(u.jsx)(Ze,{})]})})},et=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,109)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))},tt=s(38),st=s(60),nt=Object(tt.b)({profilePage:Y,usersPage:Ee,authPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-DATA":return Object(d.a)(Object(d.a)({},e),{},{data:Object(d.a)(Object(d.a)({},e.data),{},{id:t.id,login:t.login,email:t.email}),isAuth:t.isAuth});case"SET-IS-LOGIN":return Object(d.a)(Object(d.a)({},e),{},{data:Object(d.a)(Object(d.a)({},e.data),{},{id:t.id})});default:return e}},dailyQuotePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-QUOTE":return Object(d.a)(Object(d.a)({},e),{},{quote:t.quote});case"SET-QUOTE-IS-FETCHING":return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});default:return e}}}),at=Object(tt.c)(nt,Object(tt.a)(st.a));console.log(window.store=at),c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(U.a,{children:Object(u.jsx)(C.a,{store:at,children:Object(u.jsx)($e,{})})})}),document.getElementById("root")),et()}},[[95,1,2]]]);
//# sourceMappingURL=main.adae6434.chunk.js.map