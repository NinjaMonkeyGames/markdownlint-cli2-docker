/*eslint no-multi-assign: "error"*/

let a = b = c = 5;

const foo = bar = "baz";

let d =
    e =
    f;

class Foo {
    a = b = 10;
}

a = b = "quux";