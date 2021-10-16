(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var r,o=t(0),c=t.n(o),a=t(22),i=t.n(a),s=t(4),d=t(5),l=Object(s.b)(r||(r=Object(d.a)(["\n\n    html {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        background-color: ",';\n        font-family: "Lato", sans-serif;\n    }\n    \n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n'])),(function(n){return n.theme.colors.backgroundColor})),u=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},b=t(10),j=t(21),x=t(34),h=t(16),f=t.n(h),p=t(15),O="tasks",m=function(n){return localStorage.setItem(O,JSON.stringify(n))},g=Object(j.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(O))||[],hideDone:!1,status:"ready"},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t},setStateAsLoading:function(n){n.status="loading"},setStateAsReady:function(n){n.status="ready"}}}),k=function(n){return n.tasks},y=g.actions,v=y.addTask,w=y.toggleHideDone,z=y.toggleTaskDone,C=y.removeTask,S=y.setAllDone,T=y.fetchExampleTasks,D=y.setTasks,P=y.setStateAsLoading,B=y.setStateAsReady,L=function(n){return k(n).tasks},N=function(n){return k(n).hideDone},U=function(n){return k(n).status},A=g.reducer,F=t(32),I=function(){var n=Object(F.a)(f.a.mark((function n(){var e;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),E=f.a.mark(H),R=f.a.mark(K),J=f.a.mark(M);function H(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.c)(1e3);case 3:return e.next=5,Object(p.b)(I);case 5:return n=e.sent,e.next=8,Object(p.a)([Object(p.d)(D(n)),Object(p.d)(B())]);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(p.b)(alert,"Co\u015b nie zadzia\u0142a\u0142o");case 14:case"end":return e.stop()}}),E,null,[[0,10]])}function K(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)(L);case 2:return n=e.sent,e.next=5,Object(p.b)(m,n);case 5:case"end":return e.stop()}}),R)}function M(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.g)(T.type,H);case 2:return n.next=4,Object(p.f)("*",K);case 4:case"end":return n.stop()}}),J)}var W=Object(x.a)(),Z=Object(j.a)({reducer:{tasks:A},middleware:[W]});W.run(M);var q,G,Q,V,X,Y,$,_,nn,en,tn,rn,on,cn,an,sn,dn,ln,un,bn,jn,xn,hn,fn,pn,On,mn=Z,gn=t(17),kn=t(8),yn=s.d.ul(q||(q=Object(d.a)(["\n    margin: 0px;\n    background-color: ",";\n    list-style: none;\n    display: flex;\n    justify-content: center;\n"])),(function(n){return n.theme.colors.primaryColor})),vn=s.d.li(G||(G=Object(d.a)(["\n    padding: 20px;\n"]))),wn=Object(s.d)(gn.c).attrs((function(){return{activeClassName:"active"}}))(Q||(Q=Object(d.a)(["\n    text-decoration: none;\n    color: hsl(0, 0%, 100%);\n    \n    &.active{\n        font-weight: bold;\n    }\n"]))),zn=t(2),Cn=function(){return Object(zn.jsx)("nav",{children:Object(zn.jsxs)(yn,{children:[Object(zn.jsx)(vn,{children:Object(zn.jsx)(wn,{to:"/zadania",children:"Zadania"})}),Object(zn.jsx)(vn,{children:Object(zn.jsx)(wn,{to:"/autor",children:"O autorze"})})]})})},Sn=s.d.main(V||(V=Object(d.a)(["\n    max-width: 800px;\n    margin: 10px auto;\n    padding: 8px;\n"]))),Tn=s.d.section(X||(X=Object(d.a)(["\n    background-color: hsl(0, 0%, 100%);\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n\n    @media (max-width: ","px) {\n        justify-content: center;\n    }\n"])),(function(n){return n.theme.breakPoints.mobile})),Dn=s.d.header(Y||(Y=Object(d.a)(["\n    padding-left: 20px;\n    border-bottom: 2px solid ",";\n    display: flex;\n    justify-content: space-between;\n\n    @media (max-width: ","px) {\n            flex-wrap: wrap;\n            justify-content: center;\n    }\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.breakPoints.mobile})),Pn=s.d.h2($||($=Object(d.a)(["\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n    }\n"])),(function(n){return n.theme.breakPoints.mobile})),Bn=function(n){var e=n.title,t=n.body,r=n.extraContent;return Object(zn.jsxs)(Tn,{children:[Object(zn.jsxs)(Dn,{children:[Object(zn.jsx)(Pn,{children:e}),r]}),t]})},Ln=s.d.h1(_||(_=Object(d.a)(["\n    padding: 10px;\n    font-weight: 900;\n"]))),Nn=function(n){var e=n.title;return Object(zn.jsx)("header",{children:Object(zn.jsx)(Ln,{children:e})})},Un=s.d.div(nn||(nn=Object(d.a)(["\n    background-color: hsl(0, 0%, 100%);\n    padding: 20px;\n"]))),An=function(){return Object(zn.jsxs)(Un,{children:[Object(zn.jsxs)("p",{children:["Nazywam si\u0119 Kamil, mam 32 lata i prowdz\u0119 dzia\u0142alno\u015b\u0107 gospodarcz\u0105 w bran\u017cy e-commerce, ale zawsze chcia\u0142em by\u0107 ",Object(zn.jsx)("strong",{children:"programist\u0105."})," \ud83d\ude0e"]}),Object(zn.jsx)("p",{children:"Moj\u0105 wielk\u0105 \u017cyciow\u0105 pasj\u0105 s\u0105 podr\xf3\u017ce i to zar\xf3wno te ma\u0142e jak i du\u017ce. W ramach corocznych wakacji uda\u0142o mi si\u0119 ju\u017c odwiedzi\u0107 wi\u0119kszo\u015b\u0107 kraj\xf3w na naszym kontynencie. Znacznie cz\u0119\u015bciej zda\u017ca mi si\u0119 wygospodarowa\u0107 wolny weekend i wyjecha\u0107 w g\xf3ry. Najbardziej lubi\u0119 polskie Tatry i Bieszczady."})]})},Fn=function(){return Object(zn.jsxs)(Sn,{children:[Object(zn.jsx)(Nn,{title:"O autorze"}),Object(zn.jsx)(Bn,{title:"Kamil Stawik",body:Object(zn.jsx)(An,{})})]})},In=s.d.div(en||(en=Object(d.a)(["\n    padding: 20px;\n"]))),En=function(){var n=Object(kn.i)().id,e=Object(b.c)((function(e){return function(n,e){return L(n).find((function(n){return n.id===e}))}(e,n)}));return Object(zn.jsxs)(Sn,{children:[Object(zn.jsx)(Nn,{title:"Szczeg\xf3\u0142y zadania"}),Object(zn.jsx)(Bn,{title:e?e.content:"Niestety nie znaleziono zadania \ud83d\ude22",body:Object(zn.jsxs)(In,{children:[e?Object(zn.jsx)("strong",{children:"Uko\u0144czono: "}):"",e?"".concat(!0===e.done?"Tak":"Nie"):""]})})]})},Rn=t(33),Jn=s.d.form(tn||(tn=Object(d.a)(["\n    background-color: hsl(0, 0%, 100%);\n    margin-top: 2px;\n    margin-bottom: 10px;\n    padding: 20px 10px;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n            flex-wrap: wrap;\n    }\n"])),(function(n){return n.theme.breakPoints.mobile})),Hn=s.d.input(rn||(rn=Object(d.a)(["\n    max-width: 100%;\n    padding: 8px;\n    margin: 10px;\n    flex-grow: 1;\n"]))),Kn=s.d.button(on||(on=Object(d.a)(["\n    border: none;\n    padding: 10px 20px;\n    background-color: ",";\n    color: hsl(0, 0%, 100%);\n    margin: 10px;\n    cursor: pointer;\n    justify-self: flex-end;\n    transition: 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n        transform: scale(1.1);\n    }\n    \n    &:active {\n        filter: brightness(120%);\n        transform: scale(1.1);\n    }\n\n    @media(max-width: ","px) {\n        width: 100%;\n    }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.breakPoints.mobile})),Mn=function(){var n=Object(o.useState)(""),e=Object(Rn.a)(n,2),t=e[0],r=e[1],c=Object(o.useRef)(null),a=t.trim(),i=Object(b.b)();return Object(zn.jsxs)(Jn,{onSubmit:function(n){n.preventDefault(),""!==a&&(i(v({content:a,done:!1,id:Object(j.c)()})),r(""),c.current.focus())},children:[Object(zn.jsx)(Hn,{value:t,ref:c,onChange:function(n){var e=n.target;return r(e.value)},autoFocus:!0,required:!0,placeholder:"Co jest do zrobienia?"}),Object(zn.jsx)(Kn,{children:"Dodaj zadanie!"})]})},Wn=function(n){var e=Object(kn.h)();return new URLSearchParams(e.search).get(n)},Zn=s.d.div(cn||(cn=Object(d.a)(["\n    padding: 20px 10px;\n    display: flex;\n    align-items: center; \n"]))),qn=s.d.input(an||(an=Object(d.a)(["\n    padding: 8px;\n    margin: 10px;\n    flex-grow: 1;\n"]))),Gn="szukaj",Qn=function(){var n=Wn(Gn),e=function(){var n=Object(kn.h)(),e=Object(kn.g)(),t=new URLSearchParams(n.search);return function(r){var o=r.key,c=r.value;void 0===c?t.delete(o):t.set(o,c),e.push("".concat(n.pathname,"?").concat(t.toString()))}}();return Object(zn.jsx)(Zn,{children:Object(zn.jsx)(qn,{placeholder:"Filtruj zadania",value:n||"",onChange:function(n){var t=n.target;e({key:Gn,value:""!==t.value.trim()?t.value:void 0})}})})},Vn=s.d.ul(sn||(sn=Object(d.a)(["\n    background-color: hsl(0, 0%, 100%);\n    list-style: none;\n    padding: 20px 10px;\n    margin-top: 2px;\n"]))),Xn=s.d.li(dn||(dn=Object(d.a)(["\n    border-bottom: 1px solid ",";\n    margin-top: 15px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n\n    ","\n"])),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.hidden&&Object(s.c)(ln||(ln=Object(d.a)(["\n        display: none;\n    "])))})),Yn=s.d.span(un||(un=Object(d.a)(["\n    word-break: break-word;\n    padding: 0px 10px;\n    flex-grow: 1;\n\n    ","\n"])),(function(n){return n.done&&Object(s.c)(bn||(bn=Object(d.a)(["\n        text-decoration: line-through;\n    "])))})),$n=s.d.button(jn||(jn=Object(d.a)(["\n    border: none;\n    width: 30px;\n    height: 30px;\n    background-color: ",";\n    color: hsl(0, 0%, 100%);\n    font-weight: bold;\n    flex-shrink: 0;\n    transition: 0.5s;\n    cursor: pointer;\n\n    ","\n\n    "," \n"])),(function(n){return n.theme.colors.greenButtonColor}),(function(n){return n.toggleDone&&Object(s.c)(xn||(xn=Object(d.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(110%)\n        }\n    "])),(function(n){return n.theme.colors.greenButtonColor}))}),(function(n){return n.remove&&Object(s.c)(hn||(hn=Object(d.a)(["\n        background-color: ",";\n\n        &:hover {\n            filter: brightness(110%)\n        }\n    "])),(function(n){return n.theme.colors.redButtonColor}))})),_n=Object(s.d)(gn.b)(fn||(fn=Object(d.a)(["\n    text-decoration: none;\n    color: ",";\n    \n    &:hover {\n            filter: brightness(110%)\n        }\n"])),(function(n){return n.theme.colors.primaryColor})),ne=function(){var n=Wn(Gn),e=Object(b.c)((function(e){return function(n,e){var t=L(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(e,n)})),t=Object(b.c)(N),r=Object(b.b)();return Object(zn.jsx)(Vn,{children:e.map((function(n){return Object(zn.jsxs)(Xn,{hidden:n.done&&t,children:[Object(zn.jsx)($n,{onClick:function(){return r(z(n.id))},toggleDone:!0,children:n.done?"\u2713":""}),Object(zn.jsx)(Yn,{done:n.done,children:Object(zn.jsx)(_n,{to:"/zadania/".concat(n.id),children:n.content})}),Object(zn.jsx)($n,{onClick:function(){return r(C(n.id))},remove:!0,children:"\ud83d\uddd1"})]},n.id)}))})},ee=s.d.div(pn||(pn=Object(d.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media (max-width: ","px) {\n        flex-direction: column;\n    }\n"])),(function(n){return n.theme.breakPoints.mobile})),te=s.d.button(On||(On=Object(d.a)(["\n    border: none;\n    background-color: hsl(0, 0%, 100%);\n    color: ",";\n    margin: 10px 20px 10px 0px;\n    transition: 0.5s;\n    cursor: pointer;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n    &&:disabled {\n        color: ",";\n        filter: brightness(100%);\n        cursor: auto;\n    }\n"])),(function(n){return n.theme.colors.primaryColor}),(function(n){return n.theme.colors.disabledColor})),re=function(n){var e=n.exampleTasksButton,t=Object(b.c)(L),r=Object(b.c)(U),o=Object(b.c)(N),c=Object(b.b)();return!0===e?Object(zn.jsx)(ee,{children:Object(zn.jsx)(te,{disabled:"loading"===r,onClick:function(){c(T()),c(P())},children:"ready"===r?"Pobierz przyk\u0142adowe zadania":"\u0141adowanie"})}):t.length>0&&Object(zn.jsxs)(ee,{children:[Object(zn.jsx)(te,{onClick:function(){return c(w())},children:!1===o?"Ukryj uko\u0144czone":"Poka\u017c uko\u0144czone"}),Object(zn.jsx)(te,{onClick:function(){return c(S())},disabled:t.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})},oe=function(){return Object(zn.jsxs)(Sn,{children:[Object(zn.jsx)(Nn,{title:"Lista zada\u0144"}),Object(zn.jsx)(Bn,{title:"Dodaj nowe zadanie",body:Object(zn.jsx)(Mn,{}),extraContent:Object(zn.jsx)(re,{exampleTasksButton:!0})}),Object(zn.jsx)(Bn,{title:"Wyszukiwarka",body:Object(zn.jsx)(Qn,{})}),Object(zn.jsx)(Bn,{title:"Lista zada\u0144",body:Object(zn.jsx)(ne,{}),extraContent:Object(zn.jsx)(re,{})})]})},ce=function(){return Object(zn.jsxs)(gn.a,{children:[Object(zn.jsx)(Cn,{}),Object(zn.jsxs)(kn.d,{children:[Object(zn.jsx)(kn.b,{exact:!0,path:"/zadania/:id",children:Object(zn.jsx)(En,{})}),Object(zn.jsx)(kn.b,{path:"/zadania",children:Object(zn.jsx)(oe,{})}),Object(zn.jsx)(kn.b,{path:"/autor",children:Object(zn.jsx)(Fn,{})}),Object(zn.jsx)(kn.b,{path:"/",children:Object(zn.jsx)(kn.a,{to:"zadania"})})]})]})};i.a.render(Object(zn.jsx)(c.a.StrictMode,{children:Object(zn.jsxs)(s.a,{theme:{colors:{primaryColor:"hsl(180, 100%, 25%)",backgroundColor:"hsl(0, 0%, 93%)",disabledColor:"hsl(0, 0%, 80%)",greenButtonColor:"hsl(120, 100%, 25%)",redButtonColor:"hsl(0, 100%, 50%)"},breakPoints:{mobile:767}},children:[Object(zn.jsx)(l,{}),Object(zn.jsx)(b.a,{store:mn,children:Object(zn.jsx)(ce,{})})]})}),document.getElementById("root")),u()}},[[47,1,2]]]);
//# sourceMappingURL=main.c45b0106.chunk.js.map