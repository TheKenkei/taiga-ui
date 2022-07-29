(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{cmtp:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(`@tiptap/starter-kit`).then(({default: module}) => module),\n                import(`@taiga-ui/addon-editor/extensions/group`).then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({\n                            draggable: false,\n\n                            // @note: you can override css styles with your own classes\n                            groupNodeClass: `group`,\n                            groupPointerNodeClass: ``, // anyway element doesn't exists if `draggable` is false\n                        }),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample6 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(`\n            <p>This is a boring paragraph.</p>\n\n            <div data-type=\"group\">\n              <p>And another paragraph.</p>\n              <div data-type=\"group\">\n                <p>And a nested paragraph.</p>\n                <div data-type=\"group\">\n                  <p>But can we go deeper?</p>\n                </div>\n              </div>\n            </div>\n\n            <p>Let\u2019s finish with a boring paragraph.</p>\n        `);\n    }\n}\n"}}]);