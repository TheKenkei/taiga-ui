import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {ExampleTuiActiveZoneComponent} from './active-zone.component';
import {TuiActiveZoneExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiInputModule,
        TuiButtonModule,
        TuiActiveZoneModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiActiveZoneComponent)),
    ],
    declarations: [ExampleTuiActiveZoneComponent, TuiActiveZoneExample1],
    exports: [ExampleTuiActiveZoneComponent],
})
export class ExampleTuiActiveZoneModule {}
