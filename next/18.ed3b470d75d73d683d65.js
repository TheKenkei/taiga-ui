(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3tXr":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.q,a.yb]]}),e})()},"K/iL":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=new(n("kZht").InjectionToken)("Component extends AbstractExample class")},KDbD:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.q,a.yb]]}),e})()},LusI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("Qq0t"),i=n("pVuH");class r extends i.a{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["Some content"],this.hintDirectionVariants=["left","right","bottom-left","bottom-right","bottom-middle","top-left","top-right","top-middle"],this.hintModeVariants=["error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.autocompleteVariants=["","off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],this.inputModeVariants=["text","numeric"],this.customContentVariants=["Bell","tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=null,this.inputMode=this.inputModeVariants[0],this.autocomplete="",this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.hintContent=null,this.hintDirection=this.hintDirectionVariants[2],this.hintMode=null,this.dropdownAlignVariants=["left","right"],this.dropdownAlign=this.dropdownAlignVariants[0],this.dropdownLimitWidthVariants=["fixed","min"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.dropdownDirection=null,this.dropdownSided=!1,this.dropdownMinHeight=o.c,this.dropdownMaxHeight=o.b}get customContent(){return"Bell"===this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},Piem:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("An66"),i=n("SVIu"),r=n("KDbD"),a=n("jjvb"),l=n("3tXr"),s=n("kZht");let c=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.q,r.a,a.a,l.a]]}),e})()},jjvb:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("An66"),i=n("1VvW"),r=n("SVIu"),a=n("Qq0t"),l=n("kZht");let s=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.f,r.q,a.yb]]}),e})()},luzD:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiEditorNewModule",(function(){return we}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),l=n("vgRF"),s=n("Qq0t"),c=n("Piem"),d=n("kZht"),u=n("LusI"),m=n("K/iL"),p=n("OZlg"),h=n("e0eB"),f=n("yZWP"),g=n("aPft"),b=n("iyc4"),T=n("zV1d"),v=n("McAJ"),y=n("PVE+");let S=(()=>{class e{constructor(){this.control=new i.FormControl('<p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular<sup> forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p>ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: #FFDD2C" colspan="1" rowspan="1"><p>+</p></td><td style="background: #39b54a" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>',i.Validators.required)}example1(){this.control.setValue('<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated</span></h1>')}example2(){this.control.setValue("\n                <ul>\n                    <li>1</li>\n                    <li>2</li>\n                </ul>\n\n                <ol>\n                    <li>A</li>\n                    <li>B</li>\n                </ol>\n            ")}example3(){this.control.setValue("\n                <ul>\n                  <li>\n                    1\n                    <ul>\n                      <li>\n                        2\n                        <ul>\n                          <li>3</li>\n                          <li>4</li>\n                        </ul>\n                      </li>\n                    </ul>\n                  </li>\n                  <li>5</li>\n                </ul>\n\n                <ol>\n                  <li>\n                    1\n                    <ol>\n                      <li>\n                        2\n                        <ol>\n                          <li>3</li>\n                          <li>4</li>\n                        </ol>\n                      </li>\n                    </ol>\n                  </li>\n                  <li>5</li>\n                </ol>\n            ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-1"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:l.a,useValue:l.o},{provide:l.b,useValue:l.q}])],decls:16,vars:3,consts:[["tuiButton","","type","button",1,"tui-space_right-3","tui-space_bottom-3",3,"click"],["new","","exampleText","exampleText",1,"editor",3,"formControl"],[3,"content"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275elementStart"](1,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.example1()})),d["\u0275\u0275text"](2," Ex. #1 "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.example2()})),d["\u0275\u0275text"](4," Ex. #2 "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"button",0),d["\u0275\u0275listener"]("click",(function(){return t.example3()})),d["\u0275\u0275text"](6," Ex. #3 "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"tui-editor",1),d["\u0275\u0275text"](8," Placeholder\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"h4"),d["\u0275\u0275text"](10,"HTML:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](11,"tui-editor-socket",2),d["\u0275\u0275elementStart"](12,"h4"),d["\u0275\u0275text"](13,"Text:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"p"),d["\u0275\u0275text"](15),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("formControl",t.control),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("content",t.control.value),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate"](t.control.value))},directives:[T.a,v.a,i.NgControlStatus,i.FormControlDirective,y.a],styles:[".editor[_ngcontent-%COMP%]{max-height:18.75rem}"],changeDetection:0}),e})();var E=n("D57K"),x=n("q7Lq"),C=n("SUM+"),w=n("4hRd");function _(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",6),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](2).insertSmile(n)})),d["\u0275\u0275elementEnd"]()}2&e&&d["\u0275\u0275property"]("innerHTML",t.$implicit,d["\u0275\u0275sanitizeHtml"])}function A(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",4),d["\u0275\u0275template"](1,_,1,1,"button",5),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("tuiActiveZoneParent",e),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",n.smiles)}}let I=(()=>{class e{constructor(e){this.editor=e,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(e){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${e}</p>`).insertContent(" ").run()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.l))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoPressed","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],[1,"smile",3,"innerHTML","click"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),d["\u0275\u0275element"](2,"button",2),d["\u0275\u0275template"](3,A,2,2,"ng-template",null,3,d["\u0275\u0275templateRefExtractor"]),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275reference"](1),t=d["\u0275\u0275reference"](4);d["\u0275\u0275property"]("content",t),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("pseudoPressed",e.open)("focusable",e.open)}},directives:[x.a,C.a,T.a,w.a,o.s],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration,.3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"]}),e})();var O=n("7iy/"),V=n("ONKv");function D(){return Object(E.a)(this,void 0,void 0,(function*(){return(yield n.e(8).then(n.bind(null,"kT51"))).default}))}function L(){return Object(E.a)(this,void 0,void 0,(function*(){return(yield n.e(56).then(n.bind(null,"AN8j"))).EmojiExtension}))}let P=(()=>{class e{constructor(){this.builtInTools=[l.j.Undo],this.control=new i.FormControl("",i.Validators.required)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-2"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:l.a,useValue:[D(),L()]}])],decls:7,vars:2,consts:[["new","",1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiToolbarTool",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-editor",0),d["\u0275\u0275text"](1," Smiles are custom tool. Try it. "),d["\u0275\u0275elementContainerStart"](2,1),d["\u0275\u0275element"](3,"smiles-tool",2),d["\u0275\u0275elementStart"](4,"span",3),d["\u0275\u0275element"](5,"tui-svg",4),d["\u0275\u0275text"](6," click it "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("formControl",t.control)("tools",t.builtInTools)},directives:[v.a,i.NgControlStatus,i.FormControlDirective,I,O.a,V.a],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),e})();var $=n("6uGs"),j=n("l4xa"),k=n("TLy2"),M=n("kuMc");let R=(()=>{class e{constructor(e,t,n){this.imageLoader=e,this.http=t,this.builtInTools=[l.j.Undo,l.j.Img],this.base64Image$=this.http.get("assets/images/lumberjack.png",{responseType:"blob"}).pipe(Object(k.a)(e=>this.imageLoader(e))),this.control=new i.FormControl(""),this.base64Image$.pipe(Object(M.a)(n)).subscribe(e=>{this.control.patchValue(`\n                <img data-type="image-editor" src="${e}" width="300">\n                <p>Try to drag right border of image!</p>\n\n                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>\n            `)})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.c),d["\u0275\u0275directiveInject"]($.a),d["\u0275\u0275directiveInject"](j.jb))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-3"]],features:[d["\u0275\u0275ProvidersFeature"]([j.jb,{provide:l.a,deps:[d.Injector],useFactory:e=>[n.e(8).then(n.bind(null,"kT51")).then(e=>e.default),Promise.resolve().then(n.bind(null,"Do+X")).then(t=>t.createImageEditorExtension(e))]},{provide:l.b,useValue:l.q}])],decls:4,vars:3,consts:[["new","",1,"editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(d["\u0275\u0275element"](0,"tui-editor",0),d["\u0275\u0275elementStart"](1,"h4"),d["\u0275\u0275text"](2,"HTML:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](3,"tui-editor-socket",1)),2&e&&(d["\u0275\u0275property"]("formControl",t.control)("tools",t.builtInTools),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",t.control.value))},directives:[v.a,i.NgControlStatus,i.FormControlDirective,y.a],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}"],changeDetection:0}),e})();var G=n("gcYA"),z=n("935X"),H=n("AUps"),N=n("j0HG");const F=["previewImages"];function q(e,t){if(1&e&&d["\u0275\u0275element"](0,"img",4),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275property"]("src",e.image.src,d["\u0275\u0275sanitizeUrl"])}}function W(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-preview",1),d["\u0275\u0275template"](1,q,1,1,"img",2),d["\u0275\u0275elementStart"](2,"button",3),d["\u0275\u0275listener"]("click",(function(){return t.$implicit.complete()})),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("rotatable",!0),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",e.image)}}let B=(()=>{class e{constructor(e){this.dialogService=e}showImage(e){this.image=e,this.dialogService.open(this.template||"").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](z.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["image-preview-example"]],viewQuery:function(e,t){var n;1&e&&d["\u0275\u0275viewQuery"](F,!0),2&e&&d["\u0275\u0275queryRefresh"](n=d["\u0275\u0275loadQuery"]())&&(t.template=n.first)},decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["loading","lazy","alt","","class","t-image-preview",3,"src",4,"ngIf"],["tuiIconButton","","tuiPreviewAction","","icon","tuiIconCloseLarge","title","Close",3,"click"],["loading","lazy","alt","",1,"t-image-preview",3,"src"]],template:function(e,t){1&e&&d["\u0275\u0275template"](0,W,3,2,"ng-template",null,0,d["\u0275\u0275templateRefExtractor"])},directives:[H.a,o.t,T.a,N.a],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})(),K=(()=>{class e{constructor(){this.builtInTools=[l.j.Undo,l.j.Img],this.control=new i.FormControl(""),this.control.patchValue('\n                <p>Small image</p>\n                <img data-type="image-editor" src="assets/images/lumberjack.png" width="300">\n\n                <p>Big image</p>\n                <img data-type="image-editor" src="assets/images/big-wallpaper.jpg" width="500">\n            ')}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-editor-example-4"]],features:[d["\u0275\u0275ProvidersFeature"]([j.jb,{provide:l.a,deps:[d.Injector],useFactory:e=>[n.e(8).then(n.bind(null,"kT51")).then(e=>e.default),Promise.resolve().then(n.bind(null,"Do+X")).then(t=>t.createImageEditorExtension(e))]},{provide:l.b,useValue:l.q}])],decls:6,vars:3,consts:[["new","",1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275element"](0,"tui-editor",0),d["\u0275\u0275elementStart"](1,"h4"),d["\u0275\u0275text"](2,"HTML:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-editor-socket",1),d["\u0275\u0275listener"]("imagePreview",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275reference"](5).showImage(t)})),d["\u0275\u0275element"](4,"image-preview-example",null,2),d["\u0275\u0275elementEnd"]()}2&e&&(d["\u0275\u0275property"]("formControl",t.control)("tools",t.builtInTools),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",t.control.value))},directives:[v.a,i.NgControlStatus,i.FormControlDirective,y.a,G.a,B],styles:[".editor[_ngcontent-%COMP%]{min-height:30rem}"],changeDetection:0}),e})();var U,Z,Q=n("EPR0"),X=n("yHor"),J=n("zGJC"),Y=n("u8jZ");U=$localize`:␟7384ac6e9673eac2ca0755fd1c7a8f4cd617d393␟6878290531283347707: Rich Text Editor based on ${"\ufffd#2\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#3\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: with this component. `,U=d["\u0275\u0275i18nPostprocess"](U),Z=$localize`:␟afe4d6e2ec039466b1c6bbd77c7ed59d2bbf5032␟3861813736526108182: This component is experimental. Use it with caution. Expect breaking changes `;const ee=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],te=["heading",$localize`:␟8a5e7d40e307be087206f463dc06bbcff5e0c48e␟6700333422041027148:With custom tool`];var ne;ne=$localize`:␟80d0aad7cf71915f6aae574bd227ebd7389fef84␟7771894138659657979:${"[\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\ufffd#15\ufffd"}:START_LINK: original TipTap editor API ${"\ufffd/#15\ufffd"}:CLOSE_LINK: via ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:TuiTiptapEditorService${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#14\ufffd|\ufffd#18\ufffd]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:ngProjectAs="tools"${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: ) to ${"[\ufffd#16\ufffd|\ufffd#17\ufffd|\ufffd#19\ufffd|\ufffd#20\ufffd]"}:START_TAG_CODE:<tui-editor>${"[\ufffd/#16\ufffd|\ufffd/#17\ufffd|\ufffd/#19\ufffd|\ufffd/#20\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd/#14\ufffd|\ufffd/#18\ufffd]"}:CLOSE_LIST_ITEM:`,ne=d["\u0275\u0275i18nPostprocess"](ne);const oe=["heading",$localize`:␟ecf77038d883166945bdbfd71a0a2953aebf29bb␟7856608464907240497:With resizable image`],ie=["heading",$localize`:␟bd23da996b8172d2a5b13c7c00e5d0d8b72bdf2b␟3095289649103149825:Show preview for images`];function re(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18nStart"](1,U),d["\u0275\u0275element"](2,"a",3),d["\u0275\u0275element"](3,"a",4),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"tui-notification",5),d["\u0275\u0275i18n"](5,Z),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"tui-doc-example",6),d["\u0275\u0275i18nAttributes"](7,ee),d["\u0275\u0275element"](8,"tui-editor-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](9,"tui-doc-example",7),d["\u0275\u0275i18nAttributes"](10,te),d["\u0275\u0275text"](11," You can create your own tool: "),d["\u0275\u0275elementStart"](12,"ul",8),d["\u0275\u0275i18nStart"](13,ne),d["\u0275\u0275elementStart"](14,"li",9),d["\u0275\u0275element"](15,"a",10),d["\u0275\u0275element"](16,"code"),d["\u0275\u0275element"](17,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"li",9),d["\u0275\u0275element"](19,"code"),d["\u0275\u0275element"](20,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](21,"tui-editor-example-2"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"tui-doc-example",11),d["\u0275\u0275i18nAttributes"](23,oe),d["\u0275\u0275element"](24,"tui-editor-example-3"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"tui-doc-example",12),d["\u0275\u0275i18nAttributes"](26,ie),d["\u0275\u0275element"](27,"tui-editor-example-4"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2),d["\u0275\u0275advance"](13),d["\u0275\u0275property"]("content",e.example3),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example4)}}var ae,le,se,ce,de,ue,me,pe;function he(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,ae),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function fe(e,t){1&e&&d["\u0275\u0275i18n"](0,le)}function ge(e,t){1&e&&d["\u0275\u0275i18n"](0,se)}function be(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275elementStart"](1,"tui-editor",13),d["\u0275\u0275text"](2," Start typing "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"tui-doc-documentation"),d["\u0275\u0275template"](4,he,2,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().disabled=t})),d["\u0275\u0275template"](5,fe,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().exampleText=t})),d["\u0275\u0275template"](6,ge,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().tools=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formControl",e.control)("focusable",e.focusable)("exampleText",e.exampleText)("readOnly",e.readOnly)("tools",e.tools)("pseudoInvalid",e.pseudoInvalid)("pseudoFocused",e.pseudoFocused)("pseudoHovered",e.pseudoHovered),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("documentationPropertyValue",e.disabled),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.exampleText),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.toolsVariants)("documentationPropertyValue",e.tools)}}function Te(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",17),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,ce),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",18),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,de),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](10,"li"),d["\u0275\u0275elementStart"](11,"p"),d["\u0275\u0275i18n"](12,ue),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](13,"tui-doc-code",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.provideExtensions)}}function ve(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"h2"),d["\u0275\u0275i18n"](1,me),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](2," You can configure some editor's params via DI-token "),d["\u0275\u0275elementStart"](3,"code"),d["\u0275\u0275text"](4,"TUI_EDITOR_OPTIONS"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5," . "),d["\u0275\u0275elementStart"](6,"p"),d["\u0275\u0275elementStart"](7,"strong"),d["\u0275\u0275text"](8,"Usage:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",21),d["\u0275\u0275elementStart"](10,"p"),d["\u0275\u0275elementStart"](11,"strong"),d["\u0275\u0275text"](12,"Description of the available configurations:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"dl"),d["\u0275\u0275i18nStart"](14,pe),d["\u0275\u0275elementStart"](15,"dt"),d["\u0275\u0275element"](16,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"dd",22),d["\u0275\u0275elementStart"](18,"p"),d["\u0275\u0275element"](19,"code"),d["\u0275\u0275element"](20,"strong"),d["\u0275\u0275element"](21,"strong"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"dt"),d["\u0275\u0275element"](23,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](24,"dd",22),d["\u0275\u0275elementStart"](25,"p"),d["\u0275\u0275element"](26,"code"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("code",e.exampleEditorOptionsToken)}}ae=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,le=$localize`:␟4451dd975ad87c22f3e58059c2d38ee4dce01d18␟8752995704195016078: Example text shown on empty focused input `,se=$localize`:␟0cea9742234b055b1bce51470d8f030dd089acde␟2877889858952730048: Allowed edit tools `,ce=$localize`:␟03a323cd3ce898d115bcdb8364920447fb35afb8␟1340683940823692236: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiEditorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,de=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,ue=$localize`:␟97c5c1e54acb7f33324912552bd6d76d1e201310␟5735999802171173508:Provide the required extensions or use the default ones:`,me=$localize`:␟efaa49ce895f1db3267f161305f62fa8bd4c8e7b␟8578885722748078515:TUI_EDITOR_OPTIONS`,pe=$localize`:␟5371228197c6562593d60fad333c3a5184d01859␟4694114107272609448:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:colors${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: map of colors in toolbar's dropdowns with color-selection. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: It accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:ReadonlyMap<string, string>${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: : the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:key${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: is the name of the color (used only for hint and accessibility), the ${"[\ufffd#20\ufffd|\ufffd#21\ufffd]"}:START_TAG_STRONG:value${"[\ufffd/#20\ufffd|\ufffd/#21\ufffd]"}:CLOSE_TAG_STRONG: – HTML color code. ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#15\ufffd|\ufffd#22\ufffd]"}:START_TAG_DT:${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:blankColor${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#15\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_DT:${"[\ufffd#17\ufffd|\ufffd#24\ufffd]"}:START_TAG_DD: Null color. It is used in situations when there is no color selected. ${"[\ufffd#18\ufffd|\ufffd#25\ufffd]"}:START_PARAGRAPH: it accepts ${"[\ufffd#16\ufffd|\ufffd#19\ufffd|\ufffd#23\ufffd|\ufffd#26\ufffd]"}:START_TAG_CODE:string${"[\ufffd/#16\ufffd|\ufffd/#19\ufffd|\ufffd/#23\ufffd|\ufffd/#26\ufffd]"}:CLOSE_TAG_CODE: (HTML color code). ${"[\ufffd/#18\ufffd|\ufffd/#25\ufffd]"}:CLOSE_PARAGRAPH:${"[\ufffd/#17\ufffd|\ufffd/#24\ufffd]"}:CLOSE_TAG_DD:`,pe=d["\u0275\u0275i18nPostprocess"](pe);let ye=(()=>{class e extends u.a{constructor(){super(...arguments),this.exampleModule=n.e(623).then(n.bind(null,"EG5p")),this.exampleHtml=n.e(624).then(n.bind(null,"pN2s")),this.provideExtensions=n.e(625).then(n.bind(null,"o2d2")),this.exampleEditorOptionsToken=n.e(622).then(n.bind(null,"8x7P")),this.example1={TypeScript:n.e(603).then(n.bind(null,"jt43")),HTML:n.e(601).then(n.bind(null,"+0UB")),LESS:n.e(602).then(n.bind(null,"opyr"))},this.example2={HTML:n.e(604).then(n.bind(null,"sHyi")),TypeScript:n.e(606).then(n.bind(null,"+Oiy")),LESS:n.e(605).then(n.bind(null,"R5Wk")),"smiles-tool/emoji.extension.ts":n.e(607).then(n.bind(null,"/Ec6")),"smiles-tool/smiles-tool.component.ts":n.e(608).then(n.bind(null,"izOg")),"smiles-tool/smiles-tool.template.html":n.e(611).then(n.bind(null,"BuWd")),"smiles-tool/smiles-tool.styles.less":n.e(610).then(n.bind(null,"mrEE")),"smiles-tool/smiles-tool.module.ts":n.e(609).then(n.bind(null,"pTti"))},this.example3={TypeScript:n.e(614).then(n.bind(null,"0QPO")),HTML:n.e(612).then(n.bind(null,"f3jr")),LESS:n.e(613).then(n.bind(null,"8oWt"))},this.example4={TypeScript:n.e(621).then(n.bind(null,"gm2Q")),HTML:n.e(619).then(n.bind(null,"aA/c")),LESS:n.e(620).then(n.bind(null,"ICym")),"image-preview/image-preview.component.ts":n.e(615).then(n.bind(null,"sXWw")),"image-preview/image-preview.module.ts":n.e(616).then(n.bind(null,"piBk")),"image-preview/image-preview.style.less":n.e(617).then(n.bind(null,"JzD9")),"image-preview.template.html":n.e(618).then(n.bind(null,"HeAX"))},this.control=new i.FormControl,this.toolsVariants=[l.p,[l.j.Bold,l.j.Italic,l.j.Strikethrough,l.j.HR]],this.tools=this.toolsVariants[0]}}return e.\u0275fac=function(t){return Se(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-editor-new"]],features:[d["\u0275\u0275ProvidersFeature"]([{provide:m.a,useExisting:Object(d.forwardRef)(()=>e)},{provide:l.a,useValue:l.o}]),d["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:0,consts:[["header","Editor[new]","package","ADDON-EDITOR","type","components"],["pageTab",""],["pageTab","DI tokens"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["status","warning",1,"tui-space_top-4"],["id","basic",3,"content",6,"heading"],["id","custom-tool",3,"content",6,"heading"],[1,"tui-list","tui-space_bottom-6"],[1,"tui-list__item"],["tuiLink","","target","_blank","href","https://tiptap.dev/api/introduction"],["id","resizable-image",3,"content",6,"heading"],["id","preview-image",3,"content",6,"heading"],["new","",3,"formControl","focusable","exampleText","readOnly","tools","pseudoInvalid","pseudoFocused","pseudoHovered"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","exampleText","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tools","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiEditorTool>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],[3,"code"],[1,"tui-space_bottom-5"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275template"](1,re,28,4,"ng-template",1),d["\u0275\u0275template"](2,be,7,12,"ng-template",1),d["\u0275\u0275template"](3,Te,14,3,"ng-template",1),d["\u0275\u0275template"](4,ve,27,1,"ng-template",2),d["\u0275\u0275elementEnd"]())},directives:[p.a,h.a,f.a,r.e,g.a,b.a,S,P,R,K,Q.a,v.a,i.NgControlStatus,i.FormControlDirective,X.a,J.a,Y.a],encapsulation:2,changeDetection:0}),e})();const Se=d["\u0275\u0275getInheritedFactory"](ye);let Ee=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,s.ab,s.wb,j.ab,s.lb]]}),e})();var xe=n("cWK9");let Ce=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,z.b,s.ab,xe.c,l.f],l.f,l.f]}),e})(),we=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,i.ReactiveFormsModule,l.h,l.i,s.Gb,s.ab,c.a,a.m,s.yb,s.Vb,Ee,Ce,r.f.forChild(Object(a.t)(ye))]]}),e})()},pVuH:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{constructor(){this.pseudoVariants=[!1,!0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}}}]);