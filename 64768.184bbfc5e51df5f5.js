(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64768],{64768:n=>{n.exports="import {NgFor, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiContext} from '@taiga-ui/cdk';\nimport {TuiLabelModule} from '@taiga-ui/core';\nimport {TuiRatingComponent} from '@taiga-ui/kit';\nimport type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    standalone: true,\n    imports: [TuiRatingComponent, TuiLabelModule, FormsModule, NgFor, NgIf],\n    templateUrl: 'index.html',\n    styleUrls: ['index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = 0;\n\n    protected readonly icon: PolymorpheusContent<TuiContext<number>> = ({$implicit}) => {\n        switch ($implicit) {\n            case 1:\n                return 'tuiIconFrownLarge';\n            case 2:\n                return 'tuiIconMehLarge';\n            default:\n                return 'tuiIconSmileLarge';\n        }\n    };\n}\n"}}]);