(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{"3G/7":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiReorderModule",(function(){return E}));var a=n("An66"),o=n("1VvW"),r=n("SVIu"),l=n("m/Iy"),i=n("kZht"),m=n("OZlg"),d=n("e0eB"),c=n("iyc4"),s=n("u/Vf");let p=(()=>{class e{constructor(){this.items=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"],this.enabled=this.items}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-reorder-example-1"]],decls:1,vars:2,consts:[[1,"list",3,"items","enabled","itemsChange","enabledChange"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tui-reorder",0),i["\u0275\u0275listener"]("itemsChange",(function(e){return t.items=e}))("enabledChange",(function(e){return t.enabled=e})),i["\u0275\u0275elementEnd"]()),2&e&&i["\u0275\u0275property"]("items",t.items)("enabled",t.enabled)},directives:[s.a],styles:[".list{width:12.5rem}"],encapsulation:3,changeDetection:0}),e})();var u=n("u8jZ");const f=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var h;h=$localize`:␟a2f4cf6efd7f3c55087058b16fa01f2dce618b72␟7330041947239599779:Component to change order of elements in an array`;const b=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275i18n"](1,h),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"tui-doc-example",3),i["\u0275\u0275i18nAttributes"](3,b),i["\u0275\u0275element"](4,"tui-reorder-example-1"),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("content",e.example1)}}var y,C;function T(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ol",4),i["\u0275\u0275elementStart"](1,"li"),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275i18nStart"](3,y),i["\u0275\u0275element"](4,"code"),i["\u0275\u0275i18nEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](5,"tui-doc-code",5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"li"),i["\u0275\u0275elementStart"](7,"p"),i["\u0275\u0275i18n"](8,C),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](9,"tui-doc-code",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("code",e.exampleImportModule),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}y=$localize`:␟9138f40a7bd5053d1559c3adad6fd18fed773035␟6124922560776348148: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiReorderModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,C=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let x=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-reorder-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiReorderExample1 {\n    items = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n        'Graham Chapman',\n    ];\n\n    enabled = this.items;\n}\n",HTML:'<tui-reorder class="list" [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'},this.exampleImportModule="import {TuiReorderModule} from '@taiga-ui/addon-table/components/reorder';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiReorderModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-reorder [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-reorder"]],decls:4,vars:0,consts:[["header","Reorder","package","ADDON-TABLE","type","components"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tui-doc-page",0),i["\u0275\u0275template"](1,g,5,1,"ng-template",1),i["\u0275\u0275template"](2,T,10,2,"ng-template",2),i["\u0275\u0275i18nAttributes"](3,f),i["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,c.a,p,u.a],encapsulation:2,changeDetection:0}),e})(),E=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,l.a,r.h,o.f.forChild(Object(r.o)(x))]]}),e})()}}]);