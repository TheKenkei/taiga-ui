(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{LusI:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("Qq0t"),o=n("pVuH");class a extends o.a{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["Bell"],this.customContentSelected=null,this.inputMode=this.inputModeVariants[0],this.autocomplete=null,this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=i.DEFAULT_MIN_HEIGHT,this.dropdownMaxHeight=i.DEFAULT_MAX_HEIGHT}get customContent(){return null!==this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':null}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},n8gQ:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiInputInlineModule",(function(){return $}));var i=n("An66"),o=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),l=n("l4xa"),s=n("Qq0t"),u=n("dvRg"),c=n("LusI"),m=n("kZht"),p=n("OZlg"),d=n("e0eB"),g=n("iyc4"),h=n("o9ES"),f=n("zV1d");let b=(()=>{class e{constructor(){this.testForm=new o.FormGroup({testValue1:new o.FormControl("Hello 1"),testValue2:new o.FormControl("Hello 2"),testValue3:new o.FormControl("Hello 3"),testValue4:new o.FormControl("")})}get toggleContent(){return this.testForm.disabled?"enable (allow editing)":"disable"}get input4Empty(){return""===this.testForm.get("testValue4").value}onToggleClick(){this.testForm.disabled?this.testForm.enable():this.testForm.disable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-inline-example-1"]],decls:8,vars:4,consts:[[3,"formGroup"],["formControlName","testValue1",1,"input1"],["formControlName","testValue2",1,"input2"],["formControlName","testValue3",1,"input3"],["formControlName","testValue4",1,"input4"],["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275element"](1,"tui-input-inline",1),m["\u0275\u0275element"](2,"tui-input-inline",2),m["\u0275\u0275element"](3,"tui-input-inline",3),m["\u0275\u0275elementStart"](4,"tui-input-inline",4),m["\u0275\u0275text"](5," (Show placeholder if control is empty) "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",5),m["\u0275\u0275listener"]("click",(function(){return t.onToggleClick()})),m["\u0275\u0275text"](7),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](4),m["\u0275\u0275classProp"]("input4_empty",t.input4Empty),m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate1"](" ",t.toggleContent,"\n"))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,o.NgControlStatus,o.FormControlName,f.a],styles:[".input1,.input2,.input3{margin-right:.625rem}.input1{border:2px solid var(--tui-error-fill)}.input2{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3{font-family:monospace;font-weight:700;background:var(--tui-base-04)}.input4_empty{opacity:.3}"],encapsulation:3,changeDetection:0}),e})();var x=n("oW5P");function C(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-input-inline",3),m["\u0275\u0275listener"]("ngModelChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().heading=t}))("focusedChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onFocusedChange(t)}))("keydown.esc.prevent",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().toggle()}))("keydown.enter.prevent",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().toggle()})),m["\u0275\u0275text"](1," Type a heading "),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("ngModel",e.heading)}}function y(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"span"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().toggle()})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](e.heading)}}let v=(()=>{class e{constructor(e){this.notifications=e,this.heading="Page heading",this.editing=!1}toggle(){this.editing=!this.editing}onFocusedChange(e){e||(this.editing=!1,this.saveHeading(this.heading))}saveHeading(e){this.notifications.show(e,{label:"New heading"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](s.TuiNotificationsService))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-input-inline-example-2"]],decls:8,vars:4,consts:[[1,"header"],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent",4,"ngIf","ngIfElse"],["text",""],["tuiAutoFocus","",3,"ngModel","ngModelChange","focusedChange","keydown.esc.prevent","keydown.enter.prevent"],["tuiIconButton","","type","button","title","Edit heading","size","xs","appearance","icon","icon","tuiIconEditLarge",1,"tui-space_left-1",3,"click"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"h2",0),m["\u0275\u0275template"](1,C,2,1,"tui-input-inline",1),m["\u0275\u0275template"](2,y,3,1,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"p"),m["\u0275\u0275text"](5," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"p"),m["\u0275\u0275text"](7," Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275reference"](3);m["\u0275\u0275classProp"]("header_empty",!t.heading),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",t.editing)("ngIfElse",e)}},directives:[i.t,h.a,x.a,o.NgControlStatus,o.NgModel,f.a],styles:[".header{height:1.5rem}.header_empty{opacity:.3}"],encapsulation:3,changeDetection:0}),e})();var w,V=n("EPR0"),E=n("yHor"),I=n("zGJC"),S=n("u8jZ");w=$localize`:␟5da06d4e254872871f93db1252ddb86487e6b931␟7522149816559254132:Inline field`;const F=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],T=["heading",$localize`:␟5f23eeae13ddbd4994e42211e4e333c68c629b0c␟565621886775524341:In heading`];function M(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,w),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](3,F),m["\u0275\u0275element"](4,"tui-input-inline-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](6,T),m["\u0275\u0275element"](7,"tui-input-inline-example-2"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}function k(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-input-inline",7),m["\u0275\u0275text"](1," Placeholder "),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formControl",e.control)("maxLength",e.maxLength)}}var L,H,_,N;function A(e,t){1&e&&(m["\u0275\u0275i18nStart"](0,L),m["\u0275\u0275element"](1,"code"),m["\u0275\u0275i18nEnd"]())}function D(e,t){1&e&&m["\u0275\u0275i18n"](0,H)}function P(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo",4),m["\u0275\u0275template"](1,k,2,2,"ng-template"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,A,2,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabled=t})),m["\u0275\u0275template"](4,D,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().maxLength=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("control",e.control),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("documentationPropertyValue",e.disabled),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxLengthVariants)("documentationPropertyValue",e.maxLength)}}function z(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",8),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,_),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,N),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}L=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,H=$localize`:␟ceced99e65b9b5e60ca5a4e3c8f63b267c4b225d␟4970794608247875259: Maximum number of symbols `,_=$localize`:␟31d5e0d4a586ee251415e9a80ed121cc226bef9c␟356958347911905655: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputInlineModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,N=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let q=(()=>{class e extends c.a{constructor(){super(...arguments),this.exampleImportModule="import {TuiInputInlineModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiInputInlineModule\n    ],\n...\n",this.exampleInsertTemplate="<tui-input-inline></tui-input-inline>\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-inline-example-1',\n    templateUrl: './template.html',\n    styleUrls: ['./style.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl('Hello 1'),\n        testValue2: new FormControl('Hello 2'),\n        testValue3: new FormControl('Hello 3'),\n        testValue4: new FormControl(''),\n    });\n\n    get toggleContent(): string {\n        return this.testForm.disabled ? 'enable (allow editing)' : 'disable';\n    }\n\n    get input4Empty(): boolean {\n        return this.testForm.get('testValue4')!.value === '';\n    }\n\n    onToggleClick() {\n        if (this.testForm.disabled) {\n            this.testForm.enable();\n        } else {\n            this.testForm.disable();\n        }\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <tui-input-inline\n        formControlName="testValue1"\n        class="input1"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName="testValue2"\n        class="input2"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName="testValue3"\n        class="input3"\n    ></tui-input-inline>\n    <tui-input-inline\n        formControlName="testValue4"\n        class="input4"\n        [class.input4_empty]="input4Empty"\n    >\n        (Show placeholder if control is empty)\n    </tui-input-inline>\n</form>\n\n<button tuiButton type="button" size="m" (click)="onToggleClick()">\n    {{toggleContent}}\n</button>\n',LESS:"@import 'taiga-ui-local';\n\n.input1,\n.input2,\n.input3 {\n    margin-right: 0.625rem;\n}\n\n.input1 {\n    border: 2px solid var(--tui-error-fill);\n}\n\n.input2 {\n    background: var(--tui-base-09);\n    padding: 0.625rem;\n    color: var(--tui-base-01);\n    letter-spacing: 0.625rem;\n    font-size: 1.25rem;\n}\n\n.input3 {\n    font-family: monospace;\n    font-weight: bold;\n    background: var(--tui-base-04);\n}\n\n.input4 {\n    &_empty {\n        opacity: 0.3;\n    }\n}\n"},this.example2={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNotificationsService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-inline-example-2',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./style.less'],\n})\nexport class TuiInputInlineExample2 {\n    heading = 'Page heading';\n    editing = false;\n\n    constructor(\n        @Inject(TuiNotificationsService)\n        private readonly notifications: TuiNotificationsService,\n    ) {}\n\n    toggle() {\n        this.editing = !this.editing;\n    }\n\n    onFocusedChange(focused: boolean) {\n        if (!focused) {\n            this.editing = false;\n            this.saveHeading(this.heading);\n        }\n    }\n\n    private saveHeading(newHeading: string) {\n        this.notifications.show(newHeading, {label: 'New heading'}).subscribe();\n    }\n}\n",HTML:'<h2 class="header" [class.header_empty]="!heading">\n    <tui-input-inline\n        *ngIf="editing else text"\n        tuiAutoFocus\n        [(ngModel)]="heading"\n        (focusedChange)="onFocusedChange($event)"\n        (keydown.esc.prevent)="toggle()"\n        (keydown.enter.prevent)="toggle()"\n    >\n        Type a heading\n    </tui-input-inline>\n    <ng-template #text>\n        <span>{{heading}}</span>\n        <button\n            tuiIconButton\n            type="button"\n            title="Edit heading"\n            size="xs"\n            appearance="icon"\n            icon="tuiIconEditLarge"\n            class="tui-space_left-1"\n            (click)="toggle()"\n        ></button>\n    </ng-template>\n</h2>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa\n    exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae\n    repellat rerum? Accusantium fuga hic nam necessitatibus non officiis\n    perferendis repellendus tempore voluptates!\n</p>\n<p>\n    Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste\n    itaque iusto laborum nostrum officia quam quasi quos repellat temporibus\n    tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n</p>\n'},this.control=new o.FormControl("111",o.Validators.required),this.maxLengthVariants=[10],this.maxLength=null}}return e.\u0275fac=function(t){return G(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-input-inline"]],features:[m["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","InputInline","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","in-heading",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"input",3,"formControl","maxLength"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,M,8,2,"ng-template",1),m["\u0275\u0275template"](2,P,5,4,"ng-template",1),m["\u0275\u0275template"](3,z,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[p.a,d.a,g.a,b,v,V.a,E.a,I.a,h.a,o.NgControlStatus,o.FormControlDirective,S.a],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"]}),e})();const G=m["\u0275\u0275getInheritedFactory"](q);let $=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.c,o.FormsModule,o.ReactiveFormsModule,s.TuiButtonModule,u.TuiInputInlineModule,l.TuiAutoFocusModule,r.h,a.f.forChild(Object(r.o)(q))]]}),e})()},pVuH:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));class i{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}}}]);