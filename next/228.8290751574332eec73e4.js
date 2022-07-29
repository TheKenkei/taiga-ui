(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{Wptc:function(n,t,e){"use strict";e.r(t),t.default=".tui-list {\n    font: var(--tui-font-text-m);\n    list-style-type: none;\n    color: var(--tui-text-01);\n\n    &_large {\n        font: var(--tui-font-text-l);\n    }\n\n    &_small,\n    &_extra-small {\n        font: var(--tui-font-text-s);\n    }\n\n    &_nested {\n        margin: 0.75rem 0 0.75rem 1.25rem;\n        color: var(--tui-text-02);\n\n        .tui-list_large & {\n            margin-left: 0.75rem;\n        }\n\n        .tui-list_small & {\n            margin-top: 0.5rem;\n            margin-bottom: 0.5rem;\n        }\n    }\n\n    &_ordered {\n        counter-reset: counter;\n    }\n\n    &__item {\n        position: relative;\n        padding-left: @space * 6;\n        word-wrap: break-word;\n        margin-top: @space * 3;\n\n        &:first-child {\n            margin-top: 0;\n        }\n\n        &:before {\n            content: '';\n            position: absolute;\n            left: 0;\n            top: 0.5rem;\n            width: 0.5rem;\n            height: 0.5rem;\n            border-radius: 100%;\n            background-color: var(--tui-primary);\n\n            .tui-list_large > & {\n                top: 0.5rem;\n            }\n\n            .tui-list_small > & {\n                top: 0.3125rem;\n            }\n        }\n\n        .tui-list_extra-small > & {\n            margin-top: @space * 2;\n        }\n\n        .tui-list_linear & {\n            padding-left: @space * 7;\n\n            &:before {\n                content: '\\2014';\n                left: 0;\n                top: auto;\n                width: auto;\n                height: auto;\n                background-color: transparent;\n            }\n        }\n\n        .tui-list_ordered & {\n            padding-left: @space * 5;\n\n            &:before {\n                content: counter(counter) '.';\n                left: 0;\n                top: auto;\n                counter-increment: counter;\n                width: auto;\n                height: auto;\n                color: var(--tui-text-03);\n                background-color: transparent;\n            }\n        }\n\n        .tui-list_triangle > & {\n            padding-left: @space * 7;\n\n            &:before {\n                content: '\\25E4'; // represent symbol '\u25e4'\n                left: 0;\n                top: 1px;\n                width: auto;\n                height: auto;\n                background-color: transparent;\n                color: var(--tui-base-06);\n                font-size: 0.75rem;\n            }\n        }\n    }\n\n    &__item-title {\n        font: var(--tui-font-heading-5);\n        margin: 0;\n\n        .tui-list_small & {\n            line-height: 1.25rem;\n            font-weight: bold;\n        }\n    }\n\n    &__description {\n        margin: @space * 2 0 0;\n        color: var(--tui-text-02);\n\n        .tui-list_small & {\n            margin-top: @space;\n        }\n\n        .tui-list_large & {\n            line-height: 1.75rem;\n            margin-top: @space * 3;\n        }\n    }\n}\n"}}]);