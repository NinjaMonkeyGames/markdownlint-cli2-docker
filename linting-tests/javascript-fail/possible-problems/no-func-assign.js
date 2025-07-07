/*eslint no-func-assign: "error"*/

function foo() {}
foo = bar;

function baz() {
    baz = bar;
}

let a = function hello() {
  hello = 123;
};