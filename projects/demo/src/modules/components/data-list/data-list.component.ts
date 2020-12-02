import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as example4Component from '!!raw-loader!./examples/4/custom-list/custom-list.component.ts';
import * as example4Template from '!!raw-loader!./examples/4/custom-list/custom-list.template.html';
import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-data-list',
    templateUrl: './data-list.template.html',
    changeDetection,
})
export class ExampleTuiDataListComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4 = {
        TypeScript: example4Ts,
        HTML: example4Html,
        Component: example4Component,
        Template: example4Template,
    };
}
