(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6765],{6765:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';\nimport {TuiButton, TuiDataList, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';\nimport {TuiBadge, TuiBlock, TuiItemsWithMore} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        TuiGroup,\n        TuiItemsWithMore,\n        TuiItem,\n        TuiBlock,\n        NgForOf,\n        FormsModule,\n        TuiDropdown,\n        TuiButton,\n        TuiBadge,\n        TuiDataList,\n        NgIf,\n        TuiIcon,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Page {\n    protected readonly items = inject<readonly string[]>('Pythons' as any);\n\n    protected value = this.items.map(TUI_FALSE_HANDLER) as boolean[];\n}\n"}}]);