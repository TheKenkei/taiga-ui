(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98378],{98378:(t,e,i)=>{i.r(e),i.d(e,{default:()=>v});var n=i(35548),o=i(37399),c=i(20764),r=i(75331),s=i(68018),u=i(82174),l=i(45962),p=i(96799),a=i(7443);const h=["preview"],d=["contentSample"];function m(t,e){if(1&t&&n._UZ(0,"img",10),2&t){const t=e.polymorpheusOutlet;n.Q6J("src",t,n.LSH)}}function w(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"tui-preview",4),n.NdJ("tuiSwipe",(function(e){n.CHM(t);const i=n.oxw();return n.KtG(i.onSwipe(e))})),n.TgZ(1,"tui-preview-title"),n._uU(2),n.qZA(),n.TgZ(3,"tui-preview-pagination",5),n.NdJ("indexChange",(function(e){n.CHM(t);const i=n.oxw();return n.KtG(i.index=e)})),n.qZA(),n.TgZ(4,"button",6),n.NdJ("click",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.delete())})),n._uU(5," Delete "),n.qZA(),n.TgZ(6,"button",7),n.NdJ("click",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.download())})),n._uU(7," Download "),n.qZA(),n.TgZ(8,"button",8),n.NdJ("click",(function(){const e=n.CHM(t).$implicit;return n.KtG(e.complete())})),n._uU(9," Close "),n.qZA(),n.YNc(10,m,1,1,"img",9),n.qZA()}if(2&t){const t=n.oxw();n.Q6J("rotatable",!0),n.xp6(2),n.Oqu(t.titles[t.index]),n.xp6(1),n.Q6J("length",t.length)("index",t.index),n.xp6(7),n.Q6J("polymorpheusOutlet",t.previewContent)}}function g(t,e){1&t&&(n.TgZ(0,"div",11)(1,"h1"),n._uU(2,"Important document"),n.qZA(),n.TgZ(3,"p"),n._uU(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),n.qZA(),n.TgZ(5,"p"),n._uU(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),n.qZA(),n._UZ(7,"img",12),n.qZA())}const v=(()=>{var t;class e{constructor(){this.previewService=(0,n.f3M)(r.TuiPreviewDialogService),this.alerts=(0,n.f3M)(c.TuiAlertService),this.index=0,this.length=2,this.titles=["Transaction cert.jpg","My face.jpg"]}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(t){"left"===t.direction&&(this.index=(0,o.tuiClamp)(this.index+1,0,this.length-1)),"right"===t.direction&&(this.index=(0,o.tuiClamp)(this.index-1,0,this.length-1))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(n.Gf(h,5),n.Gf(d,5)),2&t){let t;n.iGM(t=n.CRH())&&(e.preview=t.first),n.iGM(t=n.CRH())&&(e.contentSample=t.first)}},standalone:!0,exportAs:"ExampleComponent1",features:[n.jDz],decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["iconLeft","tuiIconTrash","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconLeft","tuiIconDownload","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconLeft","tuiIconX","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(t,e){1&t&&(n.TgZ(0,"div",0),n._uU(1,"With all features"),n.qZA(),n.TgZ(2,"button",1),n.NdJ("click",(function(){return e.show()})),n._uU(3," Show preview\n"),n.qZA(),n.YNc(4,w,11,5,"ng-template",null,2,n.W1O),n.YNc(6,g,8,0,"ng-template",null,3,n.W1O))},dependencies:[c.TuiButtonDirective,r.TuiPreview,u.m,l.v,p.S,a.i,o.TuiSwipeDirective,s.s$],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),e})()}}]);