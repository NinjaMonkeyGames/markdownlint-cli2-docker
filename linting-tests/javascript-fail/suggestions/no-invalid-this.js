/*eslint no-invalid-this: "error"*/

"use strict";

(function() {
    this.a = 0;
    baz(() => this);
})();

function foo() {
    this.a = 0;
    baz(() => this);
}

const bar = function() {
    this.a = 0;
    baz(() => this);
};

foo(function() {
    this.a = 0;
    baz(() => this);
});

const obj = {
    aaa: function() {
        return function foo() {
            // There is in a method `aaa`, but `foo` is not a method.
            this.a = 0;
            baz(() => this);
        };
    }
};

foo.forEach(function() {
    this.a = 0;
    baz(() => this);
});