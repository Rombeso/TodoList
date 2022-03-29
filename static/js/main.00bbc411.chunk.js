(this.webpackJsonptodo14v2=this.webpackJsonptodo14v2||[]).push([[0],{101:function(t,e,a){t.exports={disabled:"EditableSpan_disabled__2SJhk"}},124:function(t,e,a){},125:function(t,e,a){},151:function(t,e,a){"use strict";a.r(e);var n,i,s=a(0),c=a.n(s),o=a(32),d=a.n(o),r=(a(124),a(62),a(125),a(209)),l=a(210),u=a(206),j=a(208),f=a(207),b=a(212),h=a(197),O=a(24),p=a(96),g=a.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"d6f0e227-87d6-4128-94b7-d0624916d5da"}}),m=function(){return g.get("todo-lists")},x=function(t){return g.post("todo-lists",{title:t})},k=function(t){return g.delete("todo-lists/".concat(t))},C=function(t,e){return g.put("todo-lists/".concat(t),{title:e})},v=function(t){return g.get("todo-lists/".concat(t,"/tasks"))},y=function(t,e){return g.delete("todo-lists/".concat(t,"/tasks/").concat(e))},T=function(t,e){return g.post("todo-lists/".concat(t,"/tasks"),{title:e})},I=function(t,e,a){return g.put("todo-lists/".concat(t,"/tasks/").concat(e),a)},S=function(t){return g.post("/auth/login",t)},A=function(){return g.get("/auth/me")},w=function(){return g.delete("/auth/login")};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var F,L=function(t,e){t(_({error:e})),t(R({status:"failed"}))},E=function(t,e){t(R({status:"failed"})),e.messages.length?t(_({error:e.messages[0]})):t(_({error:"Some error occurred"}))},P=a(34),D=Object(P.b)({name:"auth",initialState:{isLoggedIn:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value}}}),N=D.actions.setIsLoggedInAC,q=D.reducer,z=Object(P.b)({name:"app",initialState:{status:"idle",error:null,isInitialized:!1},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.isInitialized}}}),M=z.actions,R=M.setAppStatusAC,_=M.setAppErrorAC,U=M.setIsInitializedAC,B=z.reducer,H=Object(P.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.task.todoListId].unshift(e.payload.task)},updateTaskAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(O.a)(Object(O.a)({},a[n]),e.payload.model))},setTasksAC:function(t,e){t[e.payload.todolistId]=e.payload.tasks},changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todolistId],n=a.findIndex((function(t){return t.id!==e.payload.taskId}));n>-1&&(a[n].entityStatus=e.payload.entityStatus)}},extraReducers:function(t){t.addCase(et,(function(t,e){t[e.payload.todolist.id]=[]})),t.addCase(tt,(function(t,e){delete t[e.payload.id]})),t.addCase(nt,(function(t,e){e.payload.todolists.forEach((function(e){t[e.id]=[]}))}))}}),J=H.actions,Z=J.removeTaskAC,K=J.addTaskAC,G=J.updateTaskAC,V=J.setTasksAC,Y=J.changeTaskEntityStatusAC,$=H.reducer;!function(t){t[t.success=0]="success",t[t.error=1]="error",t[t.captcha=10]="captcha"}(F||(F={}));var Q=function(t,e,a){return function(n,i){var s=i().tasks[a].find((function(e){return e.id===t}));if(s){var c=Object(O.a)({deadline:s.deadline,description:s.description,priority:s.priority,startDate:s.startDate,title:s.title,status:s.status},e);n(R({status:"loading"})),n(Y({taskId:t,entityStatus:"loading",todolistId:a})),I(a,t,c).then((function(i){n(Y({taskId:t,entityStatus:"succeeded",todolistId:a})),i.data.resultCode===F.success?(n(R({status:"succeeded"})),n(G({taskId:t,model:e,todolistId:a}))):E(n,i.data)})).catch((function(t){L(n,t.message)}))}else console.warn("task not found in the state")}},W=Object(P.b)({name:"todolists",initialState:[],reducers:{removeTodolistAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));a>-1&&t.splice(a,1)},addTodolistAC:function(t,e){t.unshift(Object(O.a)(Object(O.a)({},e.payload.todolist),{},{filter:"all",entityStatus:"idle"}))},changeTodolistTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].title=e.payload.title},changeTodolistFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.id}));t[a].entityStatus=e.payload.entityStatus},setTodolistsAC:function(t,e){return e.payload.todolists.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{filter:"all",entityStatus:"idle"})}))},clearTodosDataAC:function(t){return[]}}}),X=W.actions,tt=X.removeTodolistAC,et=X.addTodolistAC,at=X.changeTodolistTitleAC,nt=X.setTodolistsAC,it=X.changeTodolistEntityStatusAC,st=X.clearTodosDataAC,ct=X.changeTodolistFilterAC,ot=W.reducer,dt=function(){return function(t){t(R({status:"loading"})),m().then((function(e){return t(R({status:"succeeded"})),t(nt({todolists:e.data})),e.data})).then((function(e){e.forEach((function(e){var a;t((a=e.id,function(t){t(R({status:"loading"})),v(a).then((function(e){if(null===e.data.error){t(R({status:"succeeded"}));var n=e.data.items;t(V({tasks:n,todolistId:a}))}else E(t,e.request)})).catch((function(e){L(t,e.message)}))}))}))})).catch((function(e){L(t,e.message)}))}},rt=a(19),lt=a(205),ut=a(13),jt=a(198),ft=a(194),bt=a(1),ht=c.a.memo((function(t){console.log("AddItemForm called");var e=Object(s.useState)(""),a=Object(ut.a)(e,2),n=a[0],i=a[1],c=Object(s.useState)(null),o=Object(ut.a)(c,2),d=o[0],r=o[1],l=function(){""!==n.trim()?(t.addItem(n),i("")):r("Title is required")};return Object(bt.jsxs)("div",{children:[Object(bt.jsx)(jt.a,{variant:"outlined",error:!!d,value:n,onChange:function(t){i(t.currentTarget.value)},onKeyPress:function(t){null!==d&&r(null),13===t.charCode&&l()},label:"Title",helperText:d,disabled:t.disabled}),Object(bt.jsx)(u.a,{color:"primary",onClick:l,children:Object(bt.jsx)(ft.a,{})})]})})),Ot=a(213),pt=a(101),gt=a.n(pt),mt=c.a.memo((function(t){console.log("EditableSpan called");var e=Object(s.useState)(!1),a=Object(ut.a)(e,2),n=a[0],i=a[1],c=Object(s.useState)(t.value),o=Object(ut.a)(c,2),d=o[0],r=o[1];return n?Object(bt.jsx)(jt.a,{value:d,onChange:function(t){r(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.onChange(d)}}):t.disabled?Object(bt.jsx)("span",{className:gt.a.disabled,children:t.value}):Object(bt.jsx)("span",{onDoubleClick:function(){i(!0),r(t.value)},children:t.value})})),xt=a(195),kt=a(200),Ct=c.a.memo((function(t){var e=Object(s.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(s.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?n.Completed:n.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(s.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(bt.jsxs)("div",{className:t.task.status===n.Completed?"is-done":"",children:[Object(bt.jsx)(kt.a,{checked:t.task.status===n.Completed,color:"primary",onChange:a}),Object(bt.jsx)(mt,{value:t.task.title,onChange:i,disabled:"loading"===t.entityStatus}),Object(bt.jsx)(u.a,{onClick:e,disabled:"loading"===t.entityStatus,children:Object(bt.jsx)(xt.a,{})})]},t.task.id)})),vt=c.a.memo((function(t){console.log("Todolist called");Object(rt.b)();var e=Object(s.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),a=Object(s.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),i=Object(s.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),c=Object(s.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),o=Object(s.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),d=t.tasks;return"active"===t.filter&&(d=t.tasks.filter((function(t){return t.status===n.New}))),"completed"===t.filter&&(d=t.tasks.filter((function(t){return t.status===n.Completed}))),Object(bt.jsxs)("div",{children:[Object(bt.jsxs)("h3",{children:[Object(bt.jsx)(mt,{value:t.title,onChange:a,disabled:"loading"===t.entityStatus}),Object(bt.jsx)(u.a,{onClick:function(){t.removeTodolist(t.id)},disabled:"loading"===t.entityStatus,children:Object(bt.jsx)(xt.a,{})})]}),Object(bt.jsx)(ht,{addItem:e,disabled:"loading"===t.entityStatus}),Object(bt.jsx)("div",{children:d.map((function(e){return Object(bt.jsx)(Ct,{task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus,entityStatus:e.entityStatus},e.id)}))}),Object(bt.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(bt.jsx)(f.a,{variant:"all"===t.filter?"outlined":"text",onClick:i,color:"inherit",children:"All"}),Object(bt.jsx)(f.a,{variant:"active"===t.filter?"outlined":"text",onClick:c,color:"primary",children:"Active"}),Object(bt.jsx)(f.a,{variant:"completed"===t.filter?"outlined":"text",onClick:o,color:"secondary",children:"Completed"})]})]})})),yt=a(14),Tt=function(){Object(s.useEffect)((function(){j&&a(dt())}),[]);var t=Object(rt.c)((function(t){return t.todolists})),e=Object(rt.c)((function(t){return t.tasks})),a=Object(rt.b)(),n=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(R({status:"loading"})),a(Y({taskId:e,entityStatus:"loading",todolistId:t})),y(t,e).then((function(n){n.data.resultCode===F.success?(a(R({status:"succeeded"})),a(Z({taskId:e,todolistId:t}))):E(a,n.request)})).catch((function(t){L(a,t.message)}))}}(e,t);a(n)}),[]),i=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(R({status:"loading"})),T(e,t).then((function(t){t.data.resultCode===F.success?(a(R({status:"succeeded"})),a(K({task:t.data.data.item}))):E(a,t.data)})).catch((function(t){L(a,t.message)}))}}(t,e);a(n)}),[]),c=Object(s.useCallback)((function(t,e,n){var i=Q(t,{status:e},n);a(i)}),[]),o=Object(s.useCallback)((function(t,e,n){var i=Q(t,{title:e},n);a(i)}),[]),d=Object(s.useCallback)((function(t,e){var n=ct({id:e,filter:t});a(n)}),[]),r=Object(s.useCallback)((function(t){var e,n=(e=t,function(t){t(R({status:"loading"})),t(it({id:e,entityStatus:"loading"})),k(e).then((function(a){0===a.data.resultCode?(t(R({status:"succeeded"})),t(tt({id:e}))):E(t,a.request)})).catch((function(e){L(t,e.message)}))});a(n)}),[]),l=Object(s.useCallback)((function(t,e){var n=function(t,e){return function(a){a(R({status:"loading"})),a(it({id:t,entityStatus:"loading"})),C(t,e).then((function(n){a(it({id:t,entityStatus:"succeeded"})),0===n.data.resultCode?(a(R({status:"succeeded"})),a(at({id:t,title:e}))):E(a,n.request)})).catch((function(t){L(a,t.message)}))}}(t,e);a(n)}),[]),u=Object(s.useCallback)((function(t){var e=function(t){return function(e){e(R({status:"loading"})),x(t).then((function(t){0===t.data.resultCode?(e(R({status:"succeeded"})),e(et({todolist:t.data.data.item}))):E(e,t.data)})).catch((function(t){L(e,t.message)}))}}(t);a(e)}),[a]),j=Object(rt.c)((function(t){return t.auth.isLoggedIn}));return j?Object(bt.jsxs)(bt.Fragment,{children:[Object(bt.jsx)(lt.a,{container:!0,style:{padding:"20px"},children:Object(bt.jsx)(ht,{addItem:u})}),Object(bt.jsx)(lt.a,{container:!0,spacing:3,children:t.map((function(t){var a=e[t.id];return Object(bt.jsx)(lt.a,{item:!0,children:Object(bt.jsx)(Ot.a,{style:{padding:"10px"},children:Object(bt.jsx)(vt,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:a,removeTask:n,changeFilter:d,addTask:i,changeTaskStatus:c,filter:t.filter,removeTodolist:r,changeTaskTitle:o,changeTodolistTitle:l})})},t.id)}))})]}):Object(bt.jsx)(yt.a,{to:"/Login"})},It=a(211),St=a(102),At=a(57),wt=Object(St.a)({tasks:$,todolists:ot,app:B,auth:q}),Ft=Object(P.a)({reducer:wt,middleware:function(t){return t().prepend(At.a)}}),Lt=rt.c;window.store=Ft;var Et=a(202),Pt=a(201),Dt=c.a.forwardRef((function(t,e){return Object(bt.jsx)(Pt.a,Object(O.a)({elevation:6,ref:e,variant:"filled"},t))}));function Nt(){var t=Lt((function(t){return t.app.error})),e=Object(rt.b)(),a=function(t,a){"clickaway"!==a&&e(_({error:null}))};return Object(bt.jsx)(Et.a,{open:null!==t,autoHideDuration:9e3,onClose:a,children:Object(bt.jsx)(Dt,{onClose:a,severity:"error",sx:{width:"100%"},children:t})})}var qt=a(203),zt=a(215),Mt=a(214),Rt=a(192),_t=a(105),Ut=function(){var t=Object(rt.b)(),e=Object(rt.c)((function(t){return t.auth.isLoggedIn})),a=Object(_t.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="Must be 3 characters or more"):e.password="Password is Required",e},onSubmit:function(e){var n;t((n=e,function(t){t(R({status:"loading"})),S(n).then((function(e){0===e.data.resultCode?(t(R({status:"succeeded"})),t(N({value:!0}))):E(t,e.data)})).catch((function(e){L(t,e.message)}))})),a.resetForm()}});return e?Object(bt.jsx)(yt.a,{to:"/"}):Object(bt.jsx)(lt.a,{container:!0,justifyContent:"center",children:Object(bt.jsx)(lt.a,{item:!0,justifyContent:"center",children:Object(bt.jsxs)(qt.a,{children:[Object(bt.jsxs)(Rt.a,{children:[Object(bt.jsxs)("p",{children:["To log in get registered",Object(bt.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(bt.jsx)("p",{children:"or use common test account credentials:"}),Object(bt.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(bt.jsx)("p",{children:"Password: free"})]}),Object(bt.jsx)("form",{onSubmit:a.handleSubmit,children:Object(bt.jsxs)(Mt.a,{children:[Object(bt.jsx)(jt.a,Object(O.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email?Object(bt.jsx)("div",{children:a.errors.email}):null,Object(bt.jsx)(jt.a,Object(O.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password?Object(bt.jsx)("div",{children:a.errors.password}):null,Object(bt.jsx)(zt.a,Object(O.a)({label:"Remember me",control:Object(bt.jsx)(kt.a,{})},a.getFieldProps("rememberMe"))),Object(bt.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})})]})})})},Bt=a(216);var Ht=function(){var t=Lt((function(t){return t.app.status})),e=Lt((function(t){return t.app.isInitialized})),a=(Object(rt.c)((function(t){return t.auth.isLoggedIn})),Object(rt.b)());return Object(s.useEffect)((function(){a((function(t){A().then((function(e){0===e.data.resultCode&&t(N({value:!0}))})).finally((function(){t(U({isInitialized:!0}))}))}))}),[]),e?Object(bt.jsxs)("div",{className:"App",children:[Object(bt.jsx)(r.a,{position:"static",children:Object(bt.jsxs)(l.a,{children:[Object(bt.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(bt.jsx)(h.a,{})}),Object(bt.jsx)(j.a,{variant:"h6",children:"News"}),e&&Object(bt.jsx)(f.a,{color:"inherit",onClick:function(){a((function(t){t(R({status:"loading"})),w().then((function(e){0===e.data.resultCode?(t(R({status:"succeeded"})),t(N({value:!1})),t(st())):E(t,e.data)})).catch((function(e){L(t,e.message)}))}))},children:"Logout"})]})}),"loading"===t&&Object(bt.jsx)(It.a,{color:"secondary"}),Object(bt.jsx)(b.a,{fixed:!0,children:Object(bt.jsxs)(yt.d,{children:[Object(bt.jsx)(yt.b,{path:"/",element:Object(bt.jsx)(Tt,{})}),Object(bt.jsx)(yt.b,{path:"/Login",element:Object(bt.jsx)(Ut,{})}),Object(bt.jsx)(yt.b,{path:"/404",element:Object(bt.jsx)("h1",{children:"404: PAGE NOT FOUND"})}),Object(bt.jsx)(yt.b,{path:"*",element:Object(bt.jsx)(yt.a,{to:"/404"})})]})}),Object(bt.jsx)(Nt,{})]}):Object(bt.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(bt.jsx)(Bt.a,{})})},Jt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),n(t),i(t),s(t),c(t)}))},Zt=a(54);d.a.render(Object(bt.jsx)(c.a.StrictMode,{children:Object(bt.jsx)(Zt.a,{children:Object(bt.jsx)(rt.a,{store:Ft,children:Object(bt.jsx)(Ht,{})})})}),document.getElementById("root")),Jt()}},[[151,1,2]]]);
//# sourceMappingURL=main.00bbc411.chunk.js.map