import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {DropdownDocumentation} from '../../components/abstract/dropdown-documentation';

@Component({
    standalone: true,
    imports: [DropdownDocumentation, TuiButton, TuiDemo, TuiDropdown],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => PageComponent),
        },
    ],
})
export default class PageComponent extends AbstractExampleTuiDropdown {
    protected showDelay = 200;

    protected hideDelay = 500;
}
