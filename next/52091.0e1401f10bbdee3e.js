(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[52091,61386,87875,37419,11116,99503,50517,11820,61505,99781,30191,74905,55442,50023,11944,61702,15262,34543,88300,98323,74302,55928,34420,65596,37573,69409,8503,14688,1001,35402,12086],{10882:(t,i,e)=>{e.d(i,{Fb:()=>o,UR:()=>a,bM:()=>r});var n=e(25373);const a={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,n.tuiCreateToken)(a);function o(t){return(0,n.tuiProvideOptions)(r,t,a)}},61386:(t,i,e)=>{e.d(i,{E:()=>c});var n=e(20755),a=e(93517),r=e(25373),o=e(64064),s=e(92425),u=e(10882);let c=(()=>{var t;class i{constructor(){this.options=(0,n.f3M)(u.bM),this.format=(0,n.f3M)(o.TUI_NUMBER_FORMAT)}transform(t,i=this.options.currency,e=this.options.currencyAlign){return this.format.pipe((0,s.U)((n=>{const s=(0,a.$v)(t,this.options.sign),u=(0,a.BP)(i),c=(0,o.tuiFormatNumber)(Math.abs(t),{...n,precision:Number.isNaN(n.precision)?2:n.precision}),p=u?.length>1||"right"===e?r.CHAR_NO_BREAK_SPACE:"";return"right"===e?`${s}${c}${p}${u}`:`${s}${u}${p}${c}`})))}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵpipe=n.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),i})()},21186:(t,i,e)=>{e.d(i,{v:()=>p});var n=e(20755),a=e(25373),r=e(64064),o=e(32790),s=e(59311);const u=["tuiButton","","loading",""],c=["*"];let p=(()=>{var t;class i{constructor(){this.options=(0,n.f3M)(o.Gm),this.size=this.options.size,this.loading=!1}get loaderSize(){return(0,r.tuiSizeBigger)(this.size)?"m":"s"}get label(){return(0,a.tuiIsString)(this.loading)?this.loading:""}onClick(t){this.loading&&t.stopPropagation()}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["","tuiButton","","loading",""],["","tuiIconButton","","loading",""]],hostVars:3,hostBindings:function(t,i){1&t&&n.NdJ("click.capture",(function(t){return i.onClick(t)})),2&t&&(n.uIk("aria-disabled",i.loading),n.ekj("_loading",i.loading))},inputs:{size:"size",loading:"loading"},attrs:u,ngContentSelectors:c,decls:2,vars:4,consts:[["aria-live","polite","role","status",1,"t-loader",3,"inheritColor","showLoader","size","textContent"]],template:function(t,i){1&t&&(n.F$t(),n.Hsn(0),n._UZ(1,"tui-loader",0)),2&t&&(n.xp6(1),n.Q6J("inheritColor",!0)("showLoader",!!i.loading)("size",i.loaderSize)("textContent",i.label))},dependencies:[s.k],encapsulation:2,changeDetection:0}),i})()},87875:(t,i,e)=>{e.d(i,{m:()=>u});var n=e(20755),a=e(25373),r=e(64064),o=e(32790);let s=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-button-styles"],decls:0,vars:0,template:function(t,i){},styles:["[tuiButtonNew]{--t-gap: .125rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-width:100%;gap:calc(var(--t-gap) - 2 * var(--t-margin));height:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer}[tuiButtonNew]>img,[tuiButtonNew]>tui-svg,[tuiButtonNew]>tui-icon,[tuiButtonNew]>tui-avatar,[tuiButtonNew]>tui-badge,[tuiButtonNew]>[tuiBadge],[tuiButtonNew]>[tuiRadio],[tuiButtonNew]>[tuiSwitch],[tuiButtonNew]>[tuiCheckbox],[tuiButtonNew]._icon-left:before,[tuiButtonNew]._icon-right:after{margin:var(--t-margin)}[tuiButtonNew]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButtonNew]>.t-loader .t-text{position:absolute}[tuiButtonNew][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=xs] tui-svg,[tuiButtonNew][data-size=xs] tui-icon,[tuiButtonNew][data-size=xs]:before{font-size:1rem}[tuiButtonNew][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButtonNew][data-size=s] tui-svg,[tuiButtonNew][data-size=s] tui-icon,[tuiButtonNew][data-size=s]:not([tuiIconButton][data-appearance=icon]):before{font-size:1rem}[tuiButtonNew][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButtonNew][data-size=m]:after{margin-inline-end:-.125rem}[tuiButtonNew][data-size=l]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-padding: 0 1.25rem;--t-gap: .25rem;--t-margin: -.25rem;font:var(--tui-font-text-m);font-weight:700}[tuiButtonNew][data-size=l]:after{margin-inline-start:.25rem;margin-inline-end:-.25rem}[tuiButtonNew]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButtonNew]._loading>*,[tuiButtonNew]._loading:before,[tuiButtonNew]._loading:after{opacity:0}[tuiButtonNew]._loading>.t-loader{opacity:1}[tuiButtonNew][tuiIcons]:after{font-size:1rem}[tuiIconButton][tuiButtonNew]{--t-gap: 0;width:var(--t-size);font-size:0;padding:0}\n"],encapsulation:2,changeDetection:0}),i})(),u=(()=>{var t;class i{constructor(){this.options=(0,n.f3M)(o.Gm),this.size=this.options.size,this.nothing=(0,a.tuiWithStyles)(s),this.mode$=(0,n.f3M)(r.TUI_MODE)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=n.lG2({type:t,selectors:[["a","tuiButton",""],["button","tuiButton",""],["a","tuiIconButton",""],["button","tuiIconButton",""]],hostAttrs:["tuiButtonNew",""],hostVars:1,hostBindings:function(t,i){1&t&&n.NdJ("$.data-mode.attr",(function(){return i.mode$})),2&t&&n.uIk("data-size",i.size)},inputs:{size:"size"},features:[n._Bn([r.MODE_PROVIDER,(0,r.tuiAppearanceOptionsProvider)(o.Gm)]),n.zW0([{directive:r.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},{directive:r.TuiIconsDirective,inputs:["iconLeft","iconLeft","iconRight","iconRight"]}])]}),i})()},32790:(t,i,e)=>{e.d(i,{Gm:()=>r,O0:()=>o});var n=e(25373);const a={appearance:"primary",size:"l"},r=(0,n.tuiCreateToken)(a);function o(t){return(0,n.tuiProvideOptions)(r,t,a)}},72762:(t,i,e)=>{e.d(i,{fN:()=>o,O0:()=>s.O0}),e(21186),e(87875);var n=e(76733),a=e(64064),r=e(20755);let o=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵmod=r.oAB({type:t}),t.ɵinj=r.cJS({imports:[n.ez,a.TuiSvgModule,a.TuiLoaderModule]}),i})();var s=e(32790)},37419:(t,i,e)=>{e.d(i,{f:()=>p});var n=e(20755),a=e(72133),r=e(25373),o=e(64064),s=e(81749),u=e(17841);const c=["type","checkbox","tuiCheckbox",""];let p=(()=>{var t;class i{constructor(){this.appearance=(0,n.f3M)(o.TuiAppearanceDirective),this.options=(0,n.f3M)(u.Y2),this.resolver=(0,n.f3M)(o.TUI_ICON_RESOLVER),this.destroy$=(0,n.f3M)(r.TuiDestroyService,{self:!0}),this.el=(0,n.f3M)(n.SBq).nativeElement,this.size=this.options.size,this.control=(0,n.f3M)(a.a5,{optional:!0})}ngOnInit(){this.control?.valueChanges&&(0,r.tuiControlValue)(this.control).pipe((0,s.R)(this.destroy$)).subscribe((t=>{const i=this.control instanceof a.On?this.control.model:t;this.el.indeterminate=null===i}))}ngDoCheck(){this.appearance.tuiAppearance=this.options.appearance(this.el)}getIcon(t){const i=this.options.icons[t],e=(0,r.tuiIsString)(i)?i:i(this.size);return`url(${this.resolver(e)})`}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["input","type","checkbox","tuiCheckbox",""]],hostVars:8,hostBindings:function(t,i){2&t&&(n.Ikx("disabled",!i.control||i.control.disabled),n.uIk("data-size",i.size),n.Udp("--t-checked",i.getIcon("checked"))("--t-indeterminate",i.getIcon("indeterminate")),n.ekj("_readonly",!i.control))},inputs:{size:"size"},features:[n._Bn([r.TuiDestroyService]),n.zW0([{directive:o.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},r.TuiNativeValidatorDirective])],attrs:c,decls:0,vars:0,template:function(t,i){},styles:['[_nghost-%COMP%]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);width:var(--t-size);height:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background:currentColor;-webkit-mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[_nghost-%COMP%]:disabled._readonly{opacity:1}[_nghost-%COMP%]:checked:before, [_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-checked);mask-image:var(--t-checked);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate);mask-image:var(--t-indeterminate)}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}'],changeDetection:0}),i})()},17841:(t,i,e)=>{e.d(i,{Y2:()=>r,im:()=>o});var n=e(25373);const a={size:"m",appearance:t=>t.checked||t.indeterminate?"primary":"whiteblock",icons:{checked:t=>"m"===t?"tuiIconCheckLarge":"tuiIconCheck",indeterminate:t=>"m"===t?"tuiIconMinusLarge":"tuiIconMinus"}},r=(0,n.tuiCreateToken)(a);function o(t){return(0,n.tuiProvideOptions)(r,t,a)}},42770:(t,i,e)=>{e.d(i,{xl:()=>a,im:()=>r.im}),e(37419);var n=e(20755);let a=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵmod=n.oAB({type:t}),t.ɵinj=n.cJS({}),i})();var r=e(17841)},69409:(t,i,e)=>{e.d(i,{v:()=>d});var n=e(20755),a=e(25373),r=e(64064),o=e(72762),s=e(42770),u=e(58431);let c=(()=>{var t;class i{}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],hostAttrs:[1,"tui-chip"],decls:0,vars:0,template:function(t,i){},styles:["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-width:100%;gap:calc(var(--t-gap) - 2 * var(--t-margin));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);height:var(--t-size);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip._icon-left:before,[tuiChip]._icon-left:before,tui-chip._icon-right:after,[tuiChip]._icon-right:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: 0rem;--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: 1.25rem;border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=s],[tuiChip][data-size=s]{--t-padding: 0 .625rem;--t-size: var(--tui-height-s)}tui-chip[data-size=s]>[tuiIconButton],[tuiChip][data-size=s]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=s]>img,[tuiChip][data-size=s]>img,tui-chip[data-size=s] tui-avatar,[tuiChip][data-size=s] tui-avatar{margin-inline-start:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img{width:1.5rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;width:100%;height:100%;margin:0}\n"],encapsulation:2,changeDetection:0}),i})();var p=e(38826);let d=(()=>{var t;class i{constructor(){this.options=(0,n.f3M)(p.q4),this.size=this.options.size,this.nothing=(0,a.tuiWithStyles)(c)}}return(t=i).ɵfac=function(i){return new(i||t)},t.ɵdir=n.lG2({type:t,selectors:[["tui-chip"],["","tuiChip",""]],hostVars:1,hostBindings:function(t,i){2&t&&n.uIk("data-size",i.size)},inputs:{size:"size"},features:[n._Bn([(0,r.tuiAppearanceOptionsProvider)(p.q4),(0,u.tuiSwitchOptionsProvider)({size:"s"}),(0,s.im)({size:"s"}),(0,u.tuiAvatarOptionsProvider)({size:"xs"}),(0,o.O0)({size:"xs",appearance:"icon"})]),n.zW0([{directive:r.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},{directive:r.TuiIconsDirective,inputs:["iconLeft","iconLeft","iconRight","iconRight"]}])]}),i})()},38826:(t,i,e)=>{e.d(i,{q4:()=>n});const n=(0,e(25373).tuiCreateToken)({appearance:"neutral",size:"s"})}}]);