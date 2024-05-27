import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly service = import('./examples/import/inject-service.md?raw');
}
