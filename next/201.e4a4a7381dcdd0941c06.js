(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{G3iW:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMiscellaneousModule",(function(){return z}));var a=n("An66"),r=n("3kIJ"),o=n("1VvW"),l=n("SVIu"),i=n("Qq0t"),s=n("dvRg"),m=n("kZht"),c=n("OZlg"),p=n("e0eB"),u=n("iyc4"),d=n("l4xa");let f=(()=>{class e{get assertResult(){const e=5===(new Date).getDay();return d.jd.assert(e,"Today is not a friday"),e?"Nothing in console":"There is a console assert: 'Today is not a friday'"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-1"]],decls:2,vars:1,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate"](t.assertResult))},encapsulation:2,changeDetection:0}),e})(),b=(()=>{class e{get flatted(){return Object(d.pc)([[1,2],[3,4],[5,6]])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275textInterpolate1"]("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),e})();var h=n("T8fS"),y=n("TjIJ"),g=n("jTus"),x=n("fP8s"),v=n("OWJi");function S(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("items",e.items)}}let C=(()=>{class e{constructor(){this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new r.FormGroup({cardNumber:new r.FormControl("")})}get paymentSystem(){const{cardNumber:e}=this.parametersForm.value;return Object(h.i)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(m["\u0275\u0275text"](0),m["\u0275\u0275elementStart"](1,"form",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"tui-select",2),m["\u0275\u0275text"](4," Choose card number "),m["\u0275\u0275template"](5,S,1,1,"tui-data-list-wrapper",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275textInterpolate1"]("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,y.a,g.a,r.NgControlStatus,r.FormControlName,x.a,v.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();function w(e,t){if(1&e&&m["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("items",e.items)}}let E=(()=>{class e{constructor(){this.items=["String","null","undefined"],this.parametersForm=new r.FormGroup({value:new r.FormControl(null)})}get isPresent(){const{value:e}=this.parametersForm.value,t=this.objectifyValue(e);return Object(d.Pc)(t)}objectifyValue(e){return"null"===e?null:"undefined"!==e?e:void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(m["\u0275\u0275text"](0),m["\u0275\u0275elementStart"](1,"form",0),m["\u0275\u0275elementStart"](2,"div",1),m["\u0275\u0275elementStart"](3,"tui-select",2),m["\u0275\u0275text"](4," value "),m["\u0275\u0275template"](5,w,1,1,"tui-data-list-wrapper",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275textInterpolate1"]("",t.isPresent," = isPresent(value); "),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.FormGroupDirective,y.a,g.a,r.NgControlStatus,r.FormControlName,x.a,v.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var F=n("u8jZ");const T=["header",$localize`:␟f398ef0b34074b4560e84ef5317ea054e78a752a␟788967566322079082:Miscellaneous`];var L;L=$localize`:␟c676d43c710fec8019330348fa0df2c00362f699␟5150738835928000159:Some utils to simplify the development process`;const N=["description",$localize`:␟f10d1538fd526ebffa07d75e2380b111f5438a1c␟6294798745949256000:Logs assert into console in dev mode`],P=["description",$localize`:␟2f599a78aea67c3b476d1c718f2e8c3b464a9257␟5469082953515383630:Calculates a length of elements of two dimensional array`],j=["description",$localize`:␟5105c7dbe368aca66ee4710b6940836ace147001␟7224030121581173286:Card number to its payment system`],D=["description",$localize`:␟f6929faea8489787de4425621b6b893ee9a50c10␟2199641579905414520:Checks value not to be null or undefined`];function M(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,L),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](3,N),m["\u0275\u0275element"](4,"tui-miscellaneous-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](6,P),m["\u0275\u0275element"](7,"tui-miscellaneous-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](9,j),m["\u0275\u0275element"](10,"tui-miscellaneous-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](12,D),m["\u0275\u0275element"](13,"tui-miscellaneous-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}var _;function G(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",7),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18n"](3,_),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-doc-code",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.importComponentExample)}}_=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let I=(()=>{class e{constructor(){this.importComponentExample=n.e(1854).then(n.bind(null,"gemz")),this.example1={TypeScript:n.e(1845).then(n.bind(null,"8WI2")),HTML:n.e(1844).then(n.bind(null,"dznP"))},this.example2={TypeScript:n.e(1847).then(n.bind(null,"HvmU")),HTML:n.e(1846).then(n.bind(null,"ALLX"))},this.example4={TypeScript:n.e(1850).then(n.bind(null,"3dwl")),HTML:n.e(1848).then(n.bind(null,"513U")),LESS:n.e(1849).then(n.bind(null,"fdH8"))},this.example5={TypeScript:n.e(1853).then(n.bind(null,"LbXo")),HTML:n.e(1851).then(n.bind(null,"79Hp")),LESS:n.e(1852).then(n.bind(null,"hIQf"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:4,vars:0,consts:[["package","CDK","type","utils",6,"header"],["pageTab",""],["pageTab","Setup"],["id","assert","heading","assert",3,"content",6,"description"],["id","flatLength","heading","flatLength",3,"content",6,"description"],["id","getPaymentSystem","heading","getPaymentSystem",3,"content",6,"description"],["id","isPresent","heading","isPresent",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,T),m["\u0275\u0275template"](2,M,14,4,"ng-template",1),m["\u0275\u0275template"](3,G,5,1,"ng-template",2),m["\u0275\u0275elementEnd"]())},directives:[c.a,p.a,u.a,f,b,C,E,F.a],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.FormsModule,r.ReactiveFormsModule,s.Eb,i.fb,s.K,l.m,o.f.forChild(Object(l.t)(I))]]}),e})()}}]);