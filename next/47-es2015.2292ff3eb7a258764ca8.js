(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{GNRe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiColorPickerModule",(function(){return O}));var o=n("An66"),r=n("3kIJ"),l=n("1VvW"),c=n("SVIu"),i=n("vgRF"),a=n("l4xa"),u=n("Qq0t"),d=n("kZht"),p=n("OZlg"),m=n("e0eB"),s=n("iyc4"),f=n("kT+k"),g=n("2wTY");let b=(()=>{class e{constructor(){this.color="#ffdd2d",this.palette=i.k}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"b-form",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"b-form","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"b-form",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-color",0),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](1," Background color\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-input-color",1),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](3," Background color\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-input-color",2),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),d["\u0275\u0275text"](5," Background color\n"),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[f.a,r.NgControlStatus,r.NgModel,g.b],encapsulation:3,changeDetection:0}),e})();var h=n("ENSU"),k=n("q7Lq"),S=n("SUM+"),x=n("zV1d"),y=n("RZBz"),C=n("4hRd");function M(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-color-selector",3),d["\u0275\u0275listener"]("colorChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().color=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e)("color",n.color)}}let w=(()=>{class e{constructor(e){this.sanitizer=e,this.color="#ffdd2d"}get background(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](h.DomSanitizer))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-2"]],decls:5,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance",""],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),d["\u0275\u0275elementStart"](1,"button",1),d["\u0275\u0275text"](2," Color me Kubrick "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](3,M,1,2,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",e)("tuiDropdownMaxHeight",999),d["\u0275\u0275advance"](1),d["\u0275\u0275styleProp"]("background",t.background,d["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[k.a,S.a,x.a,y.a,C.a],styles:[":host ::ng-deep tui-wrapper{-webkit-filter:invert(1);filter:invert(1)}"],encapsulation:3,changeDetection:0}),e})();var v,T=n("EPR0"),E=n("yHor"),z=n("zGJC"),D=n("u8jZ");v=$localize`:␟67c85c212962109b4b2d7a72c9ed553cd211284c␟5926592895853516779: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker `;const P=["heading",$localize`:␟076f197d00bec1e1eadd0578f26163a0094bb3c6␟1095933938236110379:InputColor`],A=["heading",$localize`:␟c58615eb54ebf60ebca6fd2305cf40aaae4abb01␟4818970173940003343:ColorSelector in dropdown`];function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,v),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,P),d["\u0275\u0275element"](4,"tui-color-picker-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,A),d["\u0275\u0275element"](7,"tui-color-picker-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var B,Z,$;function N(e,t){1&e&&d["\u0275\u0275i18n"](0,B)}function R(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"tui-color-picker"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,N,1,0,"ng-template",4),d["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",5),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Z),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,$),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",7),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleImportModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}B=$localize`:␟a4186ff325aca7ae0746ccba7533a67b83b1a7cf␟2059122116780340968: RGBA color tuple `,Z=$localize`:␟709fb65f50c77159dca5239e1a3405f04b9b28f0␟5208450876663294588: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiColorPickerModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let H=(()=>{class e{constructor(){this.exampleImportModule="import {TuiColorPickerModule} from '@taiga-ui/addon-editor';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiColorPickerModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-color-picker [(color)]="color"></tui-color-picker>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {defaultEditorColors} from '@taiga-ui/addon-editor';\n\n@Component({\n    selector: 'tui-color-picker-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample1 {\n    color = '#ffdd2d';\n\n    readonly palette = defaultEditorColors;\n}\n",HTML:'<tui-input-color class="b-form" [colors]="palette" [(ngModel)]="color">\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize="m"\n    class="b-form tui-space_vertical-2"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n<tui-input-color\n    tuiTextfieldSize="s"\n    class="b-form"\n    [colors]="palette"\n    [(ngModel)]="color"\n>\n    Background color\n</tui-input-color>\n'},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {DomSanitizer, SafeStyle} from '@angular/platform-browser';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-color-picker-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiColorPickerExample2 {\n    color = '#ffdd2d';\n\n    constructor(@Inject(DomSanitizer) private readonly sanitizer: DomSanitizer) {}\n\n    get background(): SafeStyle {\n        return this.sanitizer.bypassSecurityTrustStyle(this.color);\n    }\n}\n",HTML:'<tui-hosted-dropdown\n    tuiDropdownAlign="left"\n    [content]="picker"\n    [tuiDropdownMaxHeight]="999"\n>\n    <button\n        tuiButton\n        type="button"\n        appearance=""\n        [style.background]="background"\n        [style.color]="background"\n    >\n        Color me Kubrick\n    </button>\n</tui-hosted-dropdown>\n<ng-template #picker let-activeZone>\n    <tui-color-selector\n        [tuiActiveZoneParent]="activeZone"\n        [(color)]="color"\n    ></tui-color-selector>\n</ng-template>\n',LESS:":host {\n    /* stylelint-disable */\n    ::ng-deep tui-wrapper {\n        filter: invert(1);\n    }\n    /* stylelint-enable */\n}\n"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor","type","components"],["pageTab",""],["id","input",3,"content",6,"heading"],["id","dropdown",3,"content",6,"heading"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,I,8,2,"ng-template",1),d["\u0275\u0275template"](2,R,4,0,"ng-template",1),d["\u0275\u0275template"](3,j,10,2,"ng-template"),d["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,s.a,b,w,T.a,E.a,z.a,D.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,u.TuiButtonModule,u.TuiHostedDropdownModule,i.c,a.TuiActiveZoneModule,u.TuiDropdownControllerModule,i.h,u.TuiTextfieldControllerModule,c.h,l.f.forChild(Object(c.o)(H)),r.FormsModule]]}),e})()}}]);