(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58458],{58458:n=>{n.exports='<tui-tabs-with-more\n    size="m"\n    [itemsLimit]="3"\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <ng-container *ngFor="let item of items">\n        <button\n            *tuiItem\n            tuiTab\n            (keydown.delete)="remove(item)"\n        >\n            {{ item }}\n            <tui-icon\n                icon="tuiIconX"\n                class="tui-space_left-2"\n                [style.font-size.rem]="1"\n                (click.stop)="remove(item)"\n            />\n        </button>\n    </ng-container>\n</tui-tabs-with-more>\n<p>{{ items[activeItemIndex] }}</p>\n<button\n    tuiButton\n    type="button"\n    (click)="add()"\n>\n    Add one more\n</button>\n<tui-input-number\n    decimal="never"\n    class="tui-space_top-4"\n    [max]="4"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n'}}]);