/*eslint no-unused-expressions: "error"*/

doSomething();
"use strict"; // this isn't in a directive prologue, because there is a non-directive statement before it

function foo() {
    "bar" + 1;
}

class Foo {
    static {
        "use strict"; // class static blocks do not have directive prologues
    }
}