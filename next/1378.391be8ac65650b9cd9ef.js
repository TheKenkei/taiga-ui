(window.webpackJsonp=window.webpackJsonp||[]).push([[1378],{O2Yy:function(e,n,o){"use strict";o.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-toggle-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiToggleExample1 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(true),\n        testValue2: new FormControl(false),\n        testValue3: new FormControl(true),\n        testValue4: new FormControl(false),\n        testValue5: new FormControl(true),\n        testValue6: new FormControl(false),\n        testValue7: new FormControl(true),\n        testValue8: new FormControl(false),\n    });\n}\n"}}]);