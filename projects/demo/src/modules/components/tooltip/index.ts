import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_HINT_DIRECTIONS, TuiTooltipModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiTooltipModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly appearanceVariants = ['', 'error'];

    protected appearance = this.appearanceVariants[0];

    protected directionVariants = TUI_HINT_DIRECTIONS;

    protected direction = this.directionVariants[0];

    protected describeId = '';

    protected showDelay = 500;

    protected hideDelay = 200;
}
