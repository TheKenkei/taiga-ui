(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90878],{90878:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a,i=t(84911),o=t(4594),s=t(35548),r=t(66094),l=t(41175),u=t(26443),c=t(42436),h=t(48369),g=t(51160),p=t(72265),m=t(13565);function y(e,n){if(1&e&&(s.TgZ(0,"tui-axes",2),s._UZ(1,"tui-line-days-chart",3),s.ALo(2,"async"),s.qZA()),2&e){const e=n.ngIf,t=s.oxw();s.Q6J("axisXLabels",e)("horizontalLines",4)("verticalLines",e.length),s.xp6(1),s.Q6J("height",200)("value",t.value)("xStringify",s.lcZ(2,7,t.xStringify$))("yStringify",t.yStringify)}}class f{constructor(){this.isE2E=(0,s.f3M)(u.TUI_IS_E2E),this.months$=(0,s.f3M)(c.TUI_MONTHS),this.range=new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({year:1})),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,g.U)((e=>({month:n,day:t})=>`${e[n]}, ${t}`))),this.yStringify=e=>`${(10*e).toLocaleString("en-US",{maximumFractionDigits:0})} $`}get value(){return this.computeValue(this.range)}computeLabels$({from:e,to:n}){return this.months$.pipe((0,g.U)((t=>Array.from({length:u.TuiMonth.lengthBetween(e,n)+1},((n,a)=>t[e.append({month:a}).month])))))}computeValue({from:e,to:n}){return new Array(u.TuiDay.lengthBetween(e,n)+1).fill(0).reduce(((n,t,a)=>[...n,[e.append({day:a}),this.isE2E?100:(a?n[a-1][1]:100)+10*Math.random()-5]]),[])}}(a=f).ɵfac=function(e){return new(e||a)},a.ɵcmp=s.Xpm({type:a,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent1",features:[s.jDz],decls:5,vars:5,consts:[[3,"maxLength","ngModel","ngModelChange"],["class","axes",3,"axisXLabels","horizontalLines","verticalLines",4,"ngIf"],[1,"axes",3,"axisXLabels","horizontalLines","verticalLines"],[1,"chart",3,"height","value","xStringify","yStringify"]],template:function(e,n){1&e&&(s.TgZ(0,"p")(1,"tui-input-date-range",0),s.NdJ("ngModelChange",(function(e){return n.range=e})),s._uU(2," Range "),s.qZA()(),s.YNc(3,y,3,9,"tui-axes",1),s.ALo(4,"async")),2&e&&(s.xp6(1),s.Q6J("maxLength",n.maxLength)("ngModel",n.range),s.xp6(2),s.Q6J("ngIf",s.lcZ(4,3,n.computeLabels$(n.range))))},dependencies:[h.sR_,p.H,m.d,l.TuiAxes,o.O5,o.Ov,l.TuiLineDaysChartComponent,r.u5,r.JJ,r.On],styles:["[_nghost-%COMP%]{display:block;width:50rem}.axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],changeDetection:0}),(0,i.gn)([u.tuiPure],f.prototype,"computeLabels$",null),(0,i.gn)([u.tuiPure],f.prototype,"computeValue",null);const d=f}}]);