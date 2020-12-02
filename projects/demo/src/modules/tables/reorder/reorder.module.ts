import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiReorderModule} from '@taiga-ui/addon-table/components/reorder';
import {TuiReorderExample1} from './examples/1';
import {ExampleTuiReorderComponent} from './reorder.component';

@NgModule({
    imports: [
        CommonModule,
        TuiReorderModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiReorderComponent)),
    ],
    declarations: [ExampleTuiReorderComponent, TuiReorderExample1],
    exports: [ExampleTuiReorderComponent],
})
export class ExampleTuiReorderModule {}
