(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77742],{77742:e=>{e.exports="import {JsonPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiReorder} from '@taiga-ui/addon-table';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiReorder, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected items = inject<readonly string[]>('Pythons' as any);\n    protected enabled = this.items;\n}\n"}}]);