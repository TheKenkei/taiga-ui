import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertComponent from '!!raw-loader!./examples/import/insert-component.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-mobile-dialog',
    templateUrl: './mobile-dialog.template.html',
    changeDetection,
})
export class ExampleTuiMobileDialogComponent {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertComponent = exampleInsertComponent;
}
