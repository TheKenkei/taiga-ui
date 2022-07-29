(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{zOBq:function(e,n,i){"use strict";i.r(n),n.default='<tui-notification>\n    In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it\n    for more details\n</tui-notification>\n\n<div class="wrapper">\n    <tui-ring-chart\n        size="s"\n        class="chart"\n        [value]="value"\n    ></tui-ring-chart>\n\n    <div class="legend">\n        <tui-legend-item\n            *ngFor="let label of labels; let index = index"\n            #item\n            class="item"\n            [color]="getColor(index)"\n            [text]="label"\n            [disabled]="!isEnabled(index)"\n            (click)="onClick(index)"\n            (keydown.delete)="toggle(index)"\n        >\n            <tui-primitive-checkbox [value]="!item.disabled"></tui-primitive-checkbox>\n            <tui-money\n                [singleColor]="true"\n                [value]="data[index]"\n            ></tui-money>\n            <tui-svg\n                src="tuiIconCloseLarge"\n                class="disable"\n                [class.disable_rotated]="item.disabled"\n                (click.stop)="toggle(index)"\n            ></tui-svg>\n        </tui-legend-item>\n    </div>\n</div>\n'}}]);