import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiScrollbarModule} from '@taiga-ui/core';
import {ExampleTuiElasticStickyComponent} from './elastic-sticky.component';
import {TuiElasticStickyExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiMoneyModule,
        TuiScrollbarModule,
        TuiElasticStickyModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiElasticStickyComponent)),
    ],
    declarations: [ExampleTuiElasticStickyComponent, TuiElasticStickyExample1],
    exports: [ExampleTuiElasticStickyComponent],
})
export class ExampleTuiElasticStickyModule {}
