(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"I+0u":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCalendarRangeModule",(function(){return Q}));var a=n("An66"),o=n("1VvW"),r=n("SVIu"),i=n("dvRg"),u=n("l4xa"),l=n("Qq0t"),m=n("kZht"),c=n("OZlg"),d=n("e0eB"),p=n("iyc4"),s=n("aN/s");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-1"]],decls:1,vars:0,template:function(e,t){1&e&&m["\u0275\u0275element"](0,"tui-calendar-range")},directives:[s.a],encapsulation:3,changeDetection:0}),e})();var g=n("ROBh");const h=Object(g.a)(new u.TuiDayRange(new u.TuiDay(2019,2,11),new u.TuiDay(2019,2,14)));let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-2"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:i.TUI_CALENDAR_DATA_STREAM,useValue:h}])],decls:1,vars:0,template:function(e,t){1&e&&m["\u0275\u0275element"](0,"tui-calendar-range")},directives:[s.a],encapsulation:3,changeDetection:0}),e})(),V=(()=>{class e{constructor(){this.items=Object(i.tuiCreateDefaultDayRangePeriods)()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-3"]],decls:1,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&m["\u0275\u0275element"](0,"tui-calendar-range",0),2&e&&m["\u0275\u0275property"]("items",t.items)},directives:[s.a],encapsulation:3,changeDetection:0}),e})();var P,T=n("EPR0"),x=n("yHor"),C=n("zGJC"),D=n("u8jZ");P=$localize`:␟b48c5893d5adbcf3c4ac85c5b908de4d514cb60e␟842862008044170165:Component for choosing date range in calendar`;const w=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],b=["heading",$localize`:␟e3eea3bf6a2e13ad5a46e302dca1a26c30d11a80␟4518567138108504452:with value`],M=["heading",$localize`:␟fa41f8dfd47a9a9b9671f2e2c5867ac089540670␟8390180780322976594:with ranges`];function A(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,P),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,w),m["\u0275\u0275element"](4,"tui-range-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,b),m["\u0275\u0275element"](7,"tui-range-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](9,M),m["\u0275\u0275element"](10,"tui-range-example-3"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3)}}var R,L,v,E,S,_,H,I,k,$;function N(e,t){1&e&&m["\u0275\u0275i18n"](0,R)}function z(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,L),m["\u0275\u0275element"](1,"div"),m["\u0275\u0275element"](2,"strong"),m["\u0275\u0275i18nEnd"]())}function O(e,t){1&e&&m["\u0275\u0275i18n"](0,v)}function U(e,t){1&e&&m["\u0275\u0275i18n"](0,E)}function G(e,t){1&e&&m["\u0275\u0275i18n"](0,S)}function j(e,t){1&e&&m["\u0275\u0275i18n"](0,_)}function F(e,t){1&e&&m["\u0275\u0275i18n"](0,H)}function B(e,t){1&e&&m["\u0275\u0275i18n"](0,I)}function J(e,t){1&e&&m["\u0275\u0275i18n"](0,k)}function Y(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-calendar-range",5),m["\u0275\u0275listener"]("rangeChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275reference"](12).emitEvent(t)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,N,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().defaultViewedMonth=t})),m["\u0275\u0275template"](4,z,3,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabledItemHandler=t})),m["\u0275\u0275template"](5,O,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().items=t})),m["\u0275\u0275template"](6,U,1,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().markerHandler=t})),m["\u0275\u0275template"](7,G,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=t})),m["\u0275\u0275template"](8,j,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=t})),m["\u0275\u0275template"](9,F,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().minLength=t})),m["\u0275\u0275template"](10,B,1,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().maxLength=t})),m["\u0275\u0275template"](11,J,1,0,"ng-template",14,15,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("defaultViewedMonth",e.defaultViewedMonth)("disabledItemHandler",e.disabledItemHandler)("items",e.items)("markerHandler",e.markerHandler)("min",e.min)("max",e.max)("minLength",e.minLength)("maxLength",e.maxLength),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.defaultViewedMonthVariants)("documentationPropertyValue",e.defaultViewedMonth),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minLengthVariants)("documentationPropertyValue",e.minLength),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function Z(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",16),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,$),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",17),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule)}}R=$localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `,L=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,v=$localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `,E=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,S=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,_=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,H=$localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `,I=$localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `,k=$localize`:␟461a4fddac18488926c8f2f71d423c0c79f6eb4a␟157320158054980427: Selected date range `,$=$localize`:␟656daa25b58e47eb47175cd1e017550bfec5eae2␟5891685687892601785: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarRangeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `;const K=["primary","secondary"],W=["success"];let q=(()=>{class e{constructor(){this.exampleImportModule="import {TuiCalendarRangeModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCalendarRangeModule\n    ],\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-range-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample1 {}\n",HTML:"<tui-calendar-range></tui-calendar-range>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange} from '@taiga-ui/cdk';\nimport {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';\nimport {of} from 'rxjs';\n\nexport const calendarStream$ = of(\n    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),\n);\n\n@Component({\n    selector: 'tui-range-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_CALENDAR_DATA_STREAM,\n            useValue: calendarStream$,\n        },\n    ],\n})\nexport class TuiRangeExample2 {}\n",HTML:"<tui-calendar-range></tui-calendar-range>\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-range-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRangeExample3 {\n    items = tuiCreateDefaultDayRangePeriods();\n}\n",HTML:'<tui-calendar-range [items]="items"></tui-calendar-range>\n'},this.minVariants=[u.TUI_FIRST_DAY,new u.TuiDay(2017,2,5),new u.TuiDay(1900,0,1)],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiDay(2018,9,30),new u.TuiDay(2020,2,5),new u.TuiDay(2300,0,1)],this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.defaultViewedMonthVariants=[u.TuiMonth.currentLocal(),u.TuiMonth.currentLocal().append({month:1}),new u.TuiMonth(2007,5)],this.itemsVariants=[[],Object(i.tuiCreateDefaultDayRangePeriods)()],this.minLengthVariants=[{day:3},{day:15}],this.maxLengthVariants=[{day:5},{month:1},{year:1}],this.markerHandlerVariants=[l.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?K:W],this.markerHandler=this.markerHandlerVariants[0],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.cleaner=!1,this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.items=this.itemsVariants[0],this.defaultViewedMonth=this.defaultViewedMonthVariants[0],this.minLength=null,this.maxLength=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-calendar-range"]],decls:4,vars:0,consts:[["header","CalendarRange","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","with-value",3,"content",6,"heading"],["id","periods",3,"content",6,"heading"],[3,"defaultViewedMonth","disabledItemHandler","items","markerHandler","min","max","minLength","maxLength","rangeChange"],["documentationPropertyName","defaultViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","TuiDayRangePeriod[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","TuiDayLike | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rangeChange","documentationPropertyMode","output","documentationPropertyType","TuiDayRange"],["documentationPropertyRangeChange","documentationProperty"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,A,11,3,"ng-template",1),m["\u0275\u0275template"](2,Y,13,24,"ng-template",1),m["\u0275\u0275template"](3,Z,6,1,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[c.a,d.a,p.a,y,f,V,T.a,s.a,x.a,C.a,D.a],encapsulation:2,changeDetection:0}),e})(),Q=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.TuiCalendarRangeModule,a.c,r.h,o.f.forChild(Object(r.o)(q))]]}),e})()}}]);