(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72788],{72788:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(4594),c=n(66094),o=n(42436),m=n(81774),s=n(35548),a=n(38012),d=n(96092),u=n(59756),r=n(74922);function p(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",5),s.NdJ("keydown.delete",(function(){s.CHM(e);const t=s.oxw().$implicit,n=s.oxw();return s.KtG(n.remove(t))})),s._uU(1),s.TgZ(2,"tui-icon",6),s.NdJ("click.stop",(function(){s.CHM(e);const t=s.oxw().$implicit,n=s.oxw();return s.KtG(n.remove(t))})),s.qZA()()}if(2&e){const e=s.oxw().$implicit;s.xp6(1),s.hij(" ",e," "),s.xp6(1),s.Udp("font-size",1,"rem")}}function x(e,t){1&e&&(s.ynx(0),s.YNc(1,p,3,3,"button",4),s.BQk())}const I=(()=>{var e;class t{constructor(){this.open=!1,this.activeItemIndex=0,this.items=Array.from({length:5},((e,t)=>`Item #${t}`))}add(){this.items=this.items.concat(`Item #${Date.now()}`)}remove(e){const t=this.items.indexOf(e);this.items=this.items.filter((t=>t!==e)),t<=this.activeItemIndex&&(this.activeItemIndex=Math.max(this.activeItemIndex-1,0))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example5",features:[s.jDz],decls:8,vars:8,consts:[["size","m",3,"itemsLimit","activeItemIndex","activeItemIndexChange"],[4,"ngFor","ngForOf"],["tuiButton","","type","button",3,"click"],["decimal","never",1,"tui-space_top-4",3,"max","min","step","ngModel","ngModelChange"],["tuiTab","",3,"keydown.delete",4,"tuiItem"],["tuiTab","",3,"keydown.delete"],["icon","@tui.x",1,"tui-space_left-2",3,"click.stop"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-tabs-with-more",0),s.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),s.YNc(1,x,2,0,"ng-container",1),s.qZA(),s.TgZ(2,"p"),s._uU(3),s.qZA(),s.TgZ(4,"button",2),s.NdJ("click",(function(){return t.add()})),s._uU(5," Add one more\n"),s.qZA(),s.TgZ(6,"tui-input-number",3),s.NdJ("ngModelChange",(function(e){return t.activeItemIndex=e})),s._uU(7," activeItemIndex\n"),s.qZA()),2&e&&(s.Q6J("itemsLimit",3)("activeItemIndex",t.activeItemIndex),s.xp6(1),s.Q6J("ngForOf",t.items),s.xp6(2),s.Oqu(t.items[t.activeItemIndex]),s.xp6(3),s.Q6J("max",4)("min",0)("step",1)("ngModel",t.activeItemIndex))},dependencies:[a.W,d.Yh0,d.PkZ,i.sg,o.RJr,o.xGO,m._Hh,u.q,r.g,c.u5,c.JJ,c.On],encapsulation:2,changeDetection:0}),t})()}}]);