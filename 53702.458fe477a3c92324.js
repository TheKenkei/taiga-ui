(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53702],{53702:e=>{e.exports='<label tuiInputFiles>\n    <input\n        #validator="tuiInputFilesValidator"\n        accept="image/*"\n        tuiInputFiles\n        [multiple]="true"\n        [ngModel]="files"\n        (ngModelChange)="onChange($event)"\n        (reject)="onReject($event)"\n    />\n</label>\n\n<tui-files class="tui-space_top-1">\n    <tui-file\n        *ngFor="let file of rejected"\n        state="error"\n        [file]="(file | tuiFileRejected: validator | async) || file"\n        (remove)="onRemove(file)"\n    ></tui-file>\n    <tui-file\n        *ngFor="let file of files"\n        state="normal"\n        [file]="file"\n        (remove)="onRemove(file)"\n    ></tui-file>\n</tui-files>\n'}}]);