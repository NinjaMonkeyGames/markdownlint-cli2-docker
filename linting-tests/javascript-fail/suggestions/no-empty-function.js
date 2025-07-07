/*eslint no-empty-function: "error"*/

function foo() {}

const bar = function() {};

const bar1 = () => {};

function* baz() {}

const bar2 = function*() {};

const obj = {
    foo: function() {},

    foo: function*() {},

    foo() {},

    *foo() {},

    get foo() {},

    set foo(value) {}
};

class A {
    constructor() {}

    foo() {}

    *foo() {}

    get foo() {}

    set foo(value) {}

    static foo() {}

    static *foo() {}

    static get foo() {}

    static set foo(value) {}
}