(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[94944],{94944:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiTabBarModule:()=>N});var i=n(12057),o=n(23738),a=n(33982),c=n(52404),r=n(54349),u=n(4797),s=n(64862),l=n(26485),p=n(74788),d=n(43560),g=n(93525),m=n(33772),b=n(81894),x=n(22313),T=n(79121),Z=n(53712),f=n(37772),h=n(81998);let I=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-2"]],decls:11,vars:0,consts:[["tuiTabBar",""],["icon","tuiIconMoreHorizontalLarge","routerLink","/navigation/breadcrumbs","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconCodeLarge","routerLink","/navigation/pagination","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconTerminalLarge","routerLink","/navigation/stepper","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconHrLarge","routerLink","/navigation/tab-bar","routerLinkActive","","tuiTabBarItem",""],["icon","tuiIconMenuLarge","routerLink","/navigation/tabs","routerLinkActive","","tuiTabBarItem",""]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.TgZ(1,"a",1),p._uU(2," Breadcrumbs "),p.qZA(),p.TgZ(3,"a",2),p._uU(4," Pagination "),p.qZA(),p.TgZ(5,"a",3),p._uU(6," Stepper "),p.qZA(),p.TgZ(7,"a",4),p._uU(8," TabBar "),p.qZA(),p.TgZ(9,"a",5),p._uU(10," Tabs "),p.qZA(),p.qZA())},directives:[Z.M,a.yS,f.F,a.Od,h.Y],encapsulation:2,changeDetection:0}),t})();function v(t,e){if(1&t&&(p.TgZ(0,"button",2),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("icon",t.icon),p.xp6(1),p.hij(" ",t.text," ")}}let A=(()=>{class t{constructor(){this.items=[{text:"Home",icon:"tuiIconHomeLarge"},{text:"Photos",icon:"tuiIconImageLarge"},{text:"Navigation",icon:"tuiIconMapPinLarge"}]}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-3"]],decls:2,vars:1,consts:[["tuiTabBar","",1,"tabs"],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.YNc(1,v,2,2,"button",1),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngForOf",e.items))},directives:[Z.M,i.sg,f.F],styles:[".tabs[_ngcontent-%COMP%]{color:var(--tui-link);--tui-active-color: var(--tui-accent)}"],changeDetection:0}),t})();var _=n(79765),L=n(46797),q=n(39761),U=n(43190),k=n(88002),M=n(76189);function B(t,e){if(1&t&&(p.TgZ(0,"button",3),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("icon",t.icon),p.xp6(1),p.hij(" ",t.text," ")}}let C=(()=>{class t{constructor(){this.load$=new _.xQ,this.items$=this.load$.pipe((0,q.O)(null),(0,U.w)((()=>(0,L.H)(3e3).pipe((0,k.U)((()=>[{text:"Favorites",icon:"tuiIconHeartLarge"},{text:"Calls",icon:"tuiIconPhoneLarge"},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge"}])),(0,q.O)([])))))}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-4"]],decls:6,vars:3,consts:[["size","m","tuiButton","",3,"click"],["tuiTabBar",""],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(t,e){1&t&&(p.TgZ(0,"p"),p.TgZ(1,"button",0),p.NdJ("click",(function(){return e.load$.next()})),p._uU(2," Reload "),p.qZA(),p.qZA(),p.TgZ(3,"nav",1),p.YNc(4,B,2,2,"button",2),p.ALo(5,"async"),p.qZA()),2&t&&(p.xp6(4),p.Q6J("ngForOf",p.lcZ(5,1,e.items$)))},directives:[M.v,Z.M,i.sg,f.F],pipes:[i.Ov],encapsulation:2,changeDetection:0}),t})();function y(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"button",2),p.NdJ("click",(function(){const e=p.CHM(t).$implicit;return p.oxw().onClick(e)})),p._uU(1),p.qZA()}if(2&t){const t=e.$implicit;p.Q6J("badge",t.badge)("icon",t.icon),p.xp6(1),p.hij(" ",t.text," ")}}let J=(()=>{class t{constructor(t){this.alerts=t,this.activeItemIndex=1,this.items=[{text:"Favorites",icon:"tuiIconHeartLarge",badge:3},{text:"Calls",icon:"tuiIconPhoneLarge",badge:1234},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge",badge:100},{text:"More",icon:"tuiIconMoreHorizontalLarge"}]}onClick(t){t.badge=0,this.alerts.open(this.activeItemIndex,{label:t.text}).subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-1"]],decls:2,vars:2,consts:[["tuiTabBar","",1,"tabs",3,"activeItemIndex","activeItemIndexChange"],["tuiTabBarItem","",3,"badge","icon","click",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"badge","icon","click"]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.NdJ("activeItemIndexChange",(function(t){return e.activeItemIndex=t})),p.YNc(1,y,2,3,"button",1),p.qZA()),2&t&&(p.Q6J("activeItemIndex",e.activeItemIndex),p.xp6(1),p.Q6J("ngForOf",e.items))},directives:[Z.M,i.sg,f.F],styles:[".tabs[_ngcontent-%COMP%]{padding-bottom:env(safe-area-inset-bottom)}"],changeDetection:0}),t})();var w=n(83074);function F(t,e){1&t&&p._UZ(0,"tui-tab-bar-example-1",9)}function O(t,e){1&t&&p._UZ(0,"tui-tab-bar-example-1",12)}function S(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"p"),p._uU(1,"Component for creating mobile navigation."),p.qZA(),p.TgZ(2,"tui-doc-example",3),p.TgZ(3,"tui-checkbox-labeled",4),p.NdJ("ngModelChange",(function(e){return p.CHM(t),p.oxw().fixed=e})),p._uU(4," Fixed "),p.qZA(),p.YNc(5,F,1,0,"tui-tab-bar-example-1",5),p.YNc(6,O,1,0,"ng-template",6),p.qZA(),p.TgZ(7,"tui-doc-example",7),p.TgZ(8,"tui-notification",8),p._uU(9," If you use "),p.TgZ(10,"code"),p._uU(11,"routerLink"),p.qZA(),p._uU(12," you must also add "),p.TgZ(13,"code"),p._uU(14,"routerLinkActive"),p.qZA(),p._uU(15," directive. "),p.qZA(),p._UZ(16,"tui-tab-bar-example-2",9),p.qZA(),p.TgZ(17,"tui-doc-example",10),p._UZ(18,"tui-tab-bar-example-3",9),p.qZA(),p.TgZ(19,"tui-doc-example",11),p.TgZ(20,"tui-notification",8),p._uU(21," When there are no "),p.TgZ(22,"code"),p._uU(23,"TabBarItem"),p.qZA(),p._uU(24," children, the component shows skeleton for 4 items "),p.qZA(),p._UZ(25,"tui-tab-bar-example-4",9),p.qZA()}if(2&t){const t=p.oxw();p.xp6(2),p.Q6J("content",t.example1),p.xp6(1),p.Q6J("ngModel",t.fixed),p.xp6(2),p.Q6J("ngIf",!t.fixed),p.xp6(1),p.Q6J("tuiPortal",t.fixed),p.xp6(1),p.Q6J("content",t.example2),p.xp6(10),p.Q6J("content",t.example3),p.xp6(2),p.Q6J("content",t.example4)}}function Q(t,e){if(1&t&&(p.TgZ(0,"ol",13),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiTabBarModule"),p.qZA(),p._uU(6," into your main module "),p.qZA(),p._UZ(7,"tui-doc-code",14),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10," Add to the template inside "),p.TgZ(11,"code"),p._uU(12,"Root"),p.qZA(),p._uU(13," component at the required layer and position with CSS: "),p.qZA(),p._UZ(14,"tui-doc-code",15),p.qZA(),p.qZA()),2&t){const t=p.oxw();p.xp6(7),p.Q6J("code",t.exampleModule),p.xp6(7),p.Q6J("code",t.exampleHtml)}}let H=(()=>{class t{constructor(){this.fixed=!1,this.exampleModule=n.e(44170).then(n.t.bind(n,44170,17)),this.exampleHtml=n.e(41133).then(n.t.bind(n,41133,17)),this.example1={TypeScript:n.e(57469).then(n.t.bind(n,57469,17)),HTML:n.e(44819).then(n.t.bind(n,44819,17))},this.example2={TypeScript:n.e(63717).then(n.t.bind(n,63717,17)),HTML:n.e(42944).then(n.t.bind(n,42944,17))},this.example3={TypeScript:n.e(54099).then(n.t.bind(n,54099,17)),HTML:n.e(37887).then(n.t.bind(n,37887,17)),LESS:n.e(81949).then(n.t.bind(n,81949,17))},this.example4={TypeScript:n.e(92925).then(n.t.bind(n,92925,17)),HTML:n.e(2973).then(n.t.bind(n,2973,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["example-tui-tab-bar"]],decls:3,vars:0,consts:[["header","TabBar","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","buttons","heading","Buttons",3,"content"],["size","l",1,"tui-space_bottom-4",3,"ngModel","ngModelChange"],["class","bar",4,"ngIf"],[3,"tuiPortal"],["id","links","heading","Links",3,"content"],[1,"bar","tui-space_bottom-4"],[1,"bar"],["id","customization","heading","Customization",3,"content"],["id","skeleton","heading","Skeleton",3,"content"],[1,"fixed"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,S,26,7,"ng-template",1),p.YNc(2,Q,15,2,"ng-template",2),p.qZA())},directives:[d.q,g.n,m.f,b.p,o.JJ,o.On,i.O5,x.s,T.L,I,A,C,J,w.c],styles:[".bar[_ngcontent-%COMP%]{display:block;width:25rem}.fixed[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}"],changeDetection:0}),t})(),N=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[i.ez,o.u5,s.TuiButtonModule,s.TuiNotificationModule,l.TuiCheckboxLabeledModule,r.TuiTabBarModule,u.TuiPortalModule,c.fV,a.Bz.forChild((0,c.Ve)(H))]]}),t})()}}]);