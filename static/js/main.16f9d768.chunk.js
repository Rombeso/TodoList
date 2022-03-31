(this.webpackJsonptodo14v2=this.webpackJsonptodo14v2||[]).push([[0],{101:function(t,e,a){t.exports={disabled:"EditableSpan_disabled__2SJhk"}},126:function(t,e,a){},127:function(t,e,a){},153:function(t,e,a){"use strict";a.r(e);var n,i,s=a(0),c=a.n(s),o=a(32),d=a.n(o),r=(a(126),a(62),a(127),a(210)),l=a(211),u=a(209),j=a(208),f=a(213),b=a(24),h=a(96),O=a.n(h).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"d6f0e227-87d6-4128-94b7-d0624916d5da"}}),p=function(){return O.get("todo-lists")},g=function(t){return O.post("todo-lists",{title:t})},m=function(t){return O.delete("todo-lists/".concat(t))},x=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},k=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},C=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},y=function(t,e,a){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},T=function(t){return O.post("/auth/login",t)},I=function(){return O.get("/auth/me")},S=function(){return O.delete("/auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var A,w=function(t,e){t(M({error:e})),t(q({status:"failed"}))},F=function(t,e){t(q({status:"failed"})),e.messages.length?t(M({error:e.messages[0]})):t(M({error:"Some error occurred"}))},L=a(34),E=Object(L.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),P=E.actions.setIsLoggedInAC,D=E.reducer,N=Object(L.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),z=N.actions,q=z.setAppStatusAC,M=z.setAppErrorAC,R=z.setIsInitializedAC,_=N.reducer,U=Object(L.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(b.a)(Object(b.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks},changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id!==e.payload.taskId}));n>-1&&(a[n].entityStatus=e.payload.entityStatus)}},extraReducers:function(t){t.addCase(X,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(W,(function(t,e){delete t[e.payload.id]})),t.addCase(et,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),B=U.actions,H=B.removeTaskAC,J=B.addTaskAC,Z=B.updateTaskAC,G=B.setTasksAC,K=B.changeTaskEntityStatusAC,V=U.reducer;!function(t){t[t.success=0]="success",t[t.error=1]="error",t[t.captcha=10]="captcha"}(A||(A={}));var Y=function(t,e,a){return function(n,i){var s=i().tasks[a].find((function(e){return e.id===t}));if(s){var c=Object(b.a)({deadline:s.deadline,description:s.description,priority:s.priority,startDate:s.startDate,title:s.title,status:s.status},e);n(q({status:"loading"})),n(K({taskId:t,entityStatus:"loading",todolistId:a})),y(a,t,c).then((function(i){n(K({taskId:t,entityStatus:"succeeded",todolistId:a})),i.data.resultCode===A.success?(n(q({status:"succeeded"})),n(Z({taskId:t,model:e,todolistId:a}))):F(n,i.data)})).catch((function(t){w(n,t.message)}))}else console.warn("task not found in the state")}},$=Object(L.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(b.a)(Object(b.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.entityStatus},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(b.a)(Object(b.a)({},t),{},{filter:"all",entityStatus:"idle"})}))},clearTodosDataAC:function(t){return[]}}}),Q=$.actions,W=Q.removeTodolistAC,X=Q.addTodolistAC,tt=Q.changeTodolistTitleAC,et=Q.setTodolistsAC,at=Q.changeTodolistEntityStatusAC,nt=Q.clearTodosDataAC,it=Q.changeTodolistFilterAC,st=$.reducer,ct=function(){return function(t){t(q({status:"loading"})),p().then((function(e){return t(q({status:"succeeded"})),t(et({todolists:e.data})),e.data})).then((function(e){e.forEach((function(e){var a;t((a=e.id,function(t){t(q({status:"loading"})),k(a).then((function(e){if(null===e.data.error){t(q({status:"succeeded"}));var n=e.data.items;t(G({tasks:n,todolistId:a}))}else F(t,e.request)})).catch((function(e){w(t,e.message)}))}))}))})).catch((function(e){w(t,e.message)}))}},ot=a(19),dt=a(207),rt=a(13),lt=a(200),ut=a(215),jt=a(197),ft=a(1),bt=c.a.memo((function(t){console.log("AddItemForm called");var e=Object(s.useState)(""),a=Object(rt.a)(e,2),n=a[0],i=a[1],c=Object(s.useState)(null),o=Object(rt.a)(c,2),d=o[0],r=o[1],l=function(){""!==n.trim()?(t.addItem(n),i("")):r("Title is required")};return Object(ft.jsxs)("div",{children:[Object(ft.jsx)(lt.a,{variant:"outlined",error:!!d,value:n,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(t){null!==d&&r(null),13===t.charCode&&l()},label:"Title",helperText:d,disabled:t.disabled}),Object(ft.jsx)(ut.a,{color:"primary",onClick:l,children:Object(ft.jsx)(jt.a,{})})]})})),ht=a(214),Ot=a(101),pt=a.n(Ot),gt=c.a.memo((function(t){console.log("EditableSpan called");var e=Object(s.useState)(!1),a=Object(rt.a)(e,2),n=a[0],i=a[1],c=Object(s.useState)(t.value),o=Object(rt.a)(c,2),d=o[0],r=o[1];return n?Object(ft.jsx)(lt.a,{value:d,onChange:function(t){r(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(d)}}):t.disabled?Object(ft.jsx)("span",{className:pt.a.disabled,children:t.value}):Object(ft.jsx)("span",{onDoubleClick:function(){i(!0),r(t.value)},children:t.value})})),mt=a(198),xt=a(202),kt=c.a.memo((function(t){var e=Object(s.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(s.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(s.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(ft.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(ft.jsx)(xt.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),Object(ft.jsx)(gt,{value:t.task.title,onChange:i,disabled:"loading"===t.entityStatus}),Object(ft.jsx)(ut.a,{onClick:e,disabled:"loading"===t.entityStatus,children:Object(ft.jsx)(mt.a,{})})]},t.task.id)})),vt=c.a.memo((function(t){console.log("Todolist called");Object(ot.b)();var e=Object(s.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),a=Object(s.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),i=Object(s.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),c=Object(s.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),o=Object(s.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),d=t.tasks;return"active"===t.filter&&(d=t.tasks.filter((function(t){return t.status===n.New}))),"completed"===t.filter&&(d=t.tasks.filter((function(t){return t.status===n.Completed}))),Object(ft.jsxs)("div",{children:[Object(ft.jsxs)("h3",{children:[Object(ft.jsx)(gt,{value:t.title,onChange:a,disabled:"loading"===t.entityStatus}),Object(ft.jsx)(ut.a,{onClick:function(){t.removeTodolist(t.id)},disabled:"loading"===t.entityStatus,children:Object(ft.jsx)(mt.a,{})})]}),Object(ft.jsx)(bt,{addItem:e,disabled:"loading"===t.entityStatus}),Object(ft.jsx)("div",{children:d.map((function(e){return Object(ft.jsx)(kt,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,entityStatus:e.entityStatus},e.id)}))}),Object(ft.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(ft.jsx)(j.a,{variant:"all"===t.filter?"outlined":"text",onClick:i,color:"inherit",children:"All"}),Object(ft.jsx)(j.a,{variant:"active"===t.filter?"outlined":"text",onClick:c,color:"primary",children:"Active"}),Object(ft.jsx)(j.a,{variant:"completed"===t.filter?"outlined":"text",onClick:o,color:"secondary",children:"Completed"})]})]})})),Ct=a(14),yt=function(){Object(s.useEffect)((function(){j&&a(ct())}),[]);var t=Object(ot.c)((function(t){return t.todolists})),e=Object(ot.c)((function(t){return t.tasks})),a=Object(ot.b)(),n=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(q({status:"loading"})),a(K({taskId:e,entityStatus:"loading",todolistId:t})),v(t,e).then((function(n){n.data.resultCode===A.success?(a(q({status:"succeeded"})),a(H({taskId:e,todolistId:t}))):F(a,n.request)})).catch((function(t){w(a,t.message)}))}}(e,t);a(n)}),[]),i=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(q({status:"loading"})),C(e,t).then((function(t){t.data.resultCode===A.success?(a(q({status:"succeeded"})),a(J({task:t.data.data.item}))):F(a,t.data)})).catch((function(t){w(a,t.message)}))}}(t,e);a(n)}),[]),c=Object(s.useCallback)((function(t,e,n){var i=Y(t,{status:e},n);a(i)}),[]),o=Object(s.useCallback)((function(t,e,n){var i=Y(t,{title:e},n);a(i)}),[]),d=Object(s.useCallback)((function(t,e){var n=it({id:e,filter:t});a(n)}),[]),r=Object(s.useCallback)((function(t){var e,n=(e=t,function(t){t(q({status:"loading"})),t(at({id:e,entityStatus:"loading"})),m(e).then((function(a){0===a.data.resultCode?(t(q({status:"succeeded"})),t(W({id:e}))):F(t,a.request)})).catch((function(e){w(t,e.message)}))});a(n)}),[]),l=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(q({status:"loading"})),a(at({id:t,entityStatus:"loading"})),x(t,e).then((function(n){a(at({id:t,entityStatus:"succeeded"})),0===n.data.resultCode?(a(q({status:"succeeded"})),a(tt({id:t,title:e}))):F(a,n.request)})).catch((function(t){w(a,t.message)}))}}(t,e);a(n)}),[]),u=Object(s.useCallback)((function(t){var e=function(t){return function(e){e(q({status:"loading"})),g(t).then((function(t){0===t.data.resultCode?(e(q({status:"succeeded"})),e(X({todolist:t.data.data.item}))):F(e,t.data)})).catch((function(t){w(e,t.message)}))}}(t);a(e)}),[a]),j=Object(ot.c)((function(t){return t.auth.isLoggedIn}));return j?Object(ft.jsxs)(ft.Fragment,{children:[Object(ft.jsx)(dt.a,{container:!0,style:{padding:"20px"},children:Object(ft.jsx)(bt,{addItem:u})}),Object(ft.jsx)(dt.a,{container:!0,spacing:3,children:t.map((function(t){var a=e[t.id];return Object(ft.jsx)(dt.a,{item:!0,children:Object(ft.jsx)(ht.a,{style:{padding:"10px"},children:Object(ft.jsx)(vt,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:a,removeTask:n,changeFilter:d,addTask:i,changeTaskStatus:c,filter:t.filter,removeTodolist:r,changeTaskTitle:o,changeTodolistTitle:l})})},t.id)}))})]}):Object(ft.jsx)(Ct.a,{to:"/Login"})},Tt=a(212),It=a(102),St=a(58),At=Object(It.a)({tasks:V,todolists:st,app:_,auth:D}),wt=Object(L.a)({reducer:At,middleware:function(t){return t().prepend(St.a)}}),Ft=ot.c;window.store=wt;var Lt=a(204),Et=a(203),Pt=c.a.forwardRef((function(t,e){return Object(ft.jsx)(Et.a,Object(b.a)({elevation:6,ref:e,variant:"filled"},t))}));function Dt(){var t=Ft((function(t){return t.app.error})),e=Object(ot.b)(),a=function(t,a){"clickaway"!==a&&e(M({error:null}))};return Object(ft.jsx)(Lt.a,{open:null!==t,autoHideDuration:9e3,onClose:a,children:Object(ft.jsx)(Pt,{onClose:a,severity:"error",sx:{width:"100%"},children:t})})}var Nt=a(205),zt=a(217),qt=a(216),Mt=a(195),Rt=a(105),_t=function(){var t=Object(ot.b)(),e=Object(ot.c)((function(t){return t.auth.isLoggedIn})),a=Object(Rt.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or more"):e.password="Password is Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(q({status:"loading"})),T(n).then((function(e){0===e.data.resultCode?(t(q({status:"succeeded"})),t(P({value:!0}))):F(t,e.data)})).catch((function(e){w(t,e.message)}))})),a.resetForm()}});return e?Object(ft.jsx)(Ct.a,{to:"/"}):Object(ft.jsx)(dt.a,{container:!0,justifyContent:"center",children:Object(ft.jsx)(dt.a,{item:!0,justifyContent:"center",children:Object(ft.jsxs)(Nt.a,{children:[Object(ft.jsxs)(Mt.a,{children:[Object(ft.jsxs)("p",{children:["To log in get registered",Object(ft.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(ft.jsx)("p",{children:"or use common test account credentials:"}),Object(ft.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(ft.jsx)("p",{children:"Password: free"})]}),Object(ft.jsx)("form",{onSubmit:a.handleSubmit,children:Object(ft.jsxs)(qt.a,{children:[Object(ft.jsx)(lt.a,Object(b.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(ft.jsx)("div",{children:a.errors.email}):null,Object(ft.jsx)(lt.a,Object(b.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(ft.jsx)("div",{children:a.errors.password}):null,Object(ft.jsx)(zt.a,Object(b.a)({label:"Remember me",control:Object(ft.jsx)(xt.a,{})},a.getFieldProps("rememberMe"))),Object(ft.jsx)(j.a,{type:"submit",variant:"contained",color:"secondary",children:"Login"})]})})]})})})},Ut=a(106),Bt=a(218),Ht=a(46);Object(Ut.a)({palette:{primary:{main:Ht.a[500]},secondary:{main:"#11cb5f"}}});var Jt=function(){var t=Ft((function(t){return t.app.status})),e=Ft((function(t){return t.app.isInitialized})),a=Object(ot.c)((function(t){return t.auth.isLoggedIn})),n=Object(ot.b)();return Object(s.useEffect)((function(){n((function(t){I().then((function(e){0===e.data.resultCode&&t(P({value:!0}))})).finally((function(){t(R({isInitialized:!0}))}))}))}),[]),e?Object(ft.jsxs)("div",{className:"App",children:[Object(ft.jsx)(r.a,{position:"static",color:"secondary",children:Object(ft.jsxs)(l.a,{children:[Object(ft.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Organize it all with Todo List"}),a&&Object(ft.jsx)(j.a,{color:"inherit",variant:"outlined",onClick:function(){n((function(t){t(q({status:"loading"})),S().then((function(e){0===e.data.resultCode?(t(q({status:"succeeded"})),t(P({value:!1})),t(nt())):F(t,e.data)})).catch((function(e){w(t,e.message)}))}))},children:"Logout"})]})}),"loading"===t&&Object(ft.jsx)(Tt.a,{color:"secondary"}),Object(ft.jsx)(f.a,{fixed:!0,children:Object(ft.jsxs)(Ct.d,{children:[Object(ft.jsx)(Ct.b,{path:"/",element:Object(ft.jsx)(yt,{})}),Object(ft.jsx)(Ct.b,{path:"/Login",element:Object(ft.jsx)(_t,{})}),Object(ft.jsx)(Ct.b,{path:"/404",element:Object(ft.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(ft.jsx)(Ct.b,{path:"*",element:Object(ft.jsx)(Ct.a,{to:"/404"})})]})}),Object(ft.jsx)(Dt,{})]}):Object(ft.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(ft.jsx)(Bt.a,{})})},Zt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),i(t),s(t),c(t)}))},Gt=a(55);d.a.render(Object(ft.jsx)(c.a.StrictMode,{children:Object(ft.jsx)(Gt.a,{children:Object(ft.jsx)(ot.a,{store:wt,children:Object(ft.jsx)(Jt,{})})})}),document.getElementById("root")),Zt()}},[[153,1,2]]]);
//# sourceMappingURL=main.16f9d768.chunk.js.map