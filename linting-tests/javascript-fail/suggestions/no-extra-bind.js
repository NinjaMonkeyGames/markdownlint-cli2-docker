/*eslint no-extra-bind: "error"*/

const x = function () {
    foo();
}.bind(bar);

const y = (() => {
    foo();
}).bind(bar);

const z = (() => {
    this.foo();
}).bind(bar);

const a = function () {
    (function () {
      this.foo();
    }());
}.bind(bar);

const b = function () {
    function foo() {
      this.bar();
    }
}.bind(baz);