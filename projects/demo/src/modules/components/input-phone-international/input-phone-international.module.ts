import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiDropdownControllerModule,
    TuiHintControllerModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputPhoneInternationalModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputPhoneExample1} from './examples/1';
import {TuiInputPhoneExample2} from './examples/2';
import {ExampleTuiInputPhoneInternationalComponent} from './input-phone-international.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputPhoneInternationalModule,
        InheritedDocumentationModule,
        TuiTextfieldControllerModule,
        TuiDropdownControllerModule,
        TuiHintControllerModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiInputPhoneInternationalComponent)),
    ],
    declarations: [
        ExampleTuiInputPhoneInternationalComponent,
        TuiInputPhoneExample1,
        TuiInputPhoneExample2,
    ],
    exports: [ExampleTuiInputPhoneInternationalComponent],
})
export class ExampleTuiInputPhoneInternationalModule {}
