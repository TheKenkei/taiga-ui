(window.webpackJsonp=window.webpackJsonp||[]).push([[1397],{ifHT:function(t,n,o){"use strict";o.r(n),n.default='<p i18n>Component with a static text...</p>\n<tui-tooltip\n    content="Please don\'t touch this"\n    direction="right"\n></tui-tooltip>\n<p i18n>\n    ...or any custom HTML or logic with\n    <code>PolymorpheusContent</code>\n    :\n</p>\n<tui-tooltip\n    direction="bottom-right"\n    [content]="tooltip"\n></tui-tooltip>\n\n<ng-template #tooltip>\n    <tui-loader\n        size="s"\n        class="tooltip"\n        [inheritColor]="true"\n        [showLoader]="loader"\n    >\n        {{ text }}\n    </tui-loader>\n</ng-template>\n'}}]);