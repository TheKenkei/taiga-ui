(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[57031],{57031:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPullToRefreshModule:()=>b});var o=i(12057),n=i(33982),u=i(52404),l=i(54349),a=i(64862),r=i(74788),s=i(43560),c=i(93525),d=i(79121),p=i(33772),m=i(3881),_=i(4797),T=i(79765),h=i(14471),g=i(76189);let f=(()=>{class e{constructor(e,t){this.alerts=e,this.loaded$=t}onPull(){this.alerts.open("Loading...").subscribe()}finishLoading(){this.loaded$.next()}}return e.ɵfac=function(t){return new(t||e)(r.Y36(a.TuiAlertService),r.Y36(l.TUI_PULL_TO_REFRESH_LOADED))},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-pull-to-refresh-example-1"]],features:[r._Bn([{provide:_.TUI_IS_IOS,useValue:!1},{provide:_.TUI_IS_ANDROID,useValue:!0},{provide:l.TUI_PULL_TO_REFRESH_COMPONENT,useValue:l.TUI_ANDROID_LOADER},{provide:l.TUI_PULL_TO_REFRESH_LOADED,useClass:T.xQ}])],decls:7,vars:0,consts:[[3,"pulled"],["tuiButton","",3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-pull-to-refresh",0),r.NdJ("pulled",(function(){return t.onPull()})),r.TgZ(1,"button",1),r.NdJ("click",(function(){return t.finishLoading()})),r._uU(2," Finish loading "),r.qZA(),r.TgZ(3,"p"),r._uU(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.qZA(),r.TgZ(5,"p"),r._uU(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.qZA(),r.qZA())},directives:[h.z,g.v],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{constructor(e,t){this.alerts=e,this.loaded$=t}onPull(){this.alerts.open("Loading...").subscribe()}finishLoading(){this.loaded$.next()}}return e.ɵfac=function(t){return new(t||e)(r.Y36(a.TuiAlertService),r.Y36(l.TUI_PULL_TO_REFRESH_LOADED))},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-pull-to-refresh-example-2"]],features:[r._Bn([{provide:_.TUI_IS_IOS,useValue:!0},{provide:_.TUI_IS_ANDROID,useValue:!1},{provide:l.TUI_PULL_TO_REFRESH_COMPONENT,useValue:l.TUI_IOS_LOADER},{provide:l.TUI_PULL_TO_REFRESH_LOADED,useClass:T.xQ}])],decls:7,vars:0,consts:[[3,"pulled"],["tuiButton","",3,"click"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-pull-to-refresh",0),r.NdJ("pulled",(function(){return t.onPull()})),r.TgZ(1,"button",1),r.NdJ("click",(function(){return t.finishLoading()})),r._uU(2," Finish loading "),r.qZA(),r.TgZ(3,"p"),r._uU(4," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.qZA(),r.TgZ(5,"p"),r._uU(6," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.qZA(),r.qZA())},directives:[h.z,g.v],encapsulation:2,changeDetection:0}),e})();var U=i(83074);function q(e,t){if(1&e&&(r.TgZ(0,"p"),r._uU(1,"Component to refresh content after pull top. It emulates appearance of native iOS and Android components"),r.qZA(),r.TgZ(2,"p"),r._uU(3," It emits "),r.TgZ(4,"code"),r._uU(5,"(pulled)"),r.qZA(),r._uU(6," event when the pull threshold is reached. "),r.qZA(),r.TgZ(7,"p"),r._uU(8," You can set that threshold in pixels by "),r.TgZ(9,"code"),r._uU(10,"TUI_PULL_TO_REFRESH_THRESHOLD"),r.qZA(),r._uU(11," DI token. "),r.qZA(),r.TgZ(12,"p"),r._uU(13," You can finish loading with "),r.TgZ(14,"code"),r._uU(15,"TUI_PULL_TO_REFRESH_LOADED"),r.qZA(),r._uU(16," stream token that can be provided in DI. "),r.qZA(),r.TgZ(17,"tui-notification"),r._uU(18," Use "),r.TgZ(19,"code"),r._uU(20,"overscroll-behavior: none;"),r.qZA(),r._uU(21," CSS on your scrolling container to stop elastic scrolling on iOS "),r.qZA(),r.TgZ(22,"tui-doc-example",3),r.TgZ(23,"tui-scrollbar",4),r._UZ(24,"tui-pull-to-refresh-example-1"),r.qZA(),r.qZA(),r.TgZ(25,"tui-doc-example",5),r.TgZ(26,"tui-scrollbar",4),r._UZ(27,"tui-pull-to-refresh-example-2"),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(22),r.Q6J("content",e.example1),r.xp6(3),r.Q6J("content",e.example2)}}function A(e,t){if(1&e&&(r.TgZ(0,"ol",6),r.TgZ(1,"li"),r.TgZ(2,"p"),r._uU(3," Import "),r.TgZ(4,"code"),r._uU(5,"TuiPullToRefreshModule"),r.qZA(),r._uU(6," into a module where you want to use our component "),r.qZA(),r._UZ(7,"tui-doc-code",7),r.qZA(),r.TgZ(8,"li"),r.TgZ(9,"p"),r._uU(10,"Add to the template:"),r.qZA(),r._UZ(11,"tui-doc-code",8),r.qZA(),r.qZA()),2&e){const e=r.oxw();r.xp6(7),r.Q6J("code",e.exampleModule),r.xp6(4),r.Q6J("code",e.exampleHtml)}}let x=(()=>{class e{constructor(){this.example1={TypeScript:i.e(75002).then(i.t.bind(i,75002,17)),HTML:i.e(63708).then(i.t.bind(i,63708,17))},this.example2={TypeScript:i.e(39551).then(i.t.bind(i,39551,17)),HTML:i.e(96966).then(i.t.bind(i,96966,17))},this.exampleModule=i.e(65590).then(i.t.bind(i,65590,17)),this.exampleHtml=i.e(59525).then(i.t.bind(i,59525,17))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-mobile-pull-to-refresh-page"]],decls:3,vars:0,consts:[["header","PullToRefresh","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","android","heading","Android",3,"content"],[1,"scrollbar"],["id","ios","heading","iOS",3,"content"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,q,28,2,"ng-template",1),r.YNc(2,A,12,2,"ng-template",2),r.qZA())},directives:[s.q,c.n,d.L,p.f,m.I,f,Z,U.c],styles:[".scrollbar[_ngcontent-%COMP%]{max-height:20rem;overscroll-behavior:none}"],changeDetection:0}),e})(),b=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[[o.ez,l.TuiPullToRefreshModule,a.TuiButtonModule,a.TuiNotificationModule,a.TuiScrollbarModule,u.fV,n.Bz.forChild((0,u.Ve)(x))]]}),e})()}}]);