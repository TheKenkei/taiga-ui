(window.webpackJsonp=window.webpackJsonp||[]).push([[1750],{"3+23":function(n,o,t){"use strict";t.r(o),o.default="```ts\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\nimport {TuiNotificationContentContext} from '@taiga-ui/core';\n\n//...\n\nexport class NotificationExampleComponent {\n  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiNotificationContentContext<boolean>) {}\n\n  ok() {\n    this.context.emitAndCloseHook(true);\n  }\n\n  cancel() {\n    this.context.emitAndCloseHook(false);\n  }\n}\n```\n"}}]);